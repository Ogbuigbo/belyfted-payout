import { useState, useEffect } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { request } from "../../../_hooks/request";
import { ENDPOINTS } from "../../../_hooks/endpoints";
import crypto from "crypto";

// Function to check if password has been leaked
async function checkPasswordLeak(password) {
  try {
    // Create SHA-1 hash of the password
    const sha1 = crypto
      .createHash("sha1")
      .update(password)
      .digest("hex")
      .toUpperCase();
    const prefix = sha1.slice(0, 5);
    const suffix = sha1.slice(5);

    // Query the haveibeenpwned API
    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`,
    );
    const data = await response.text();

    // Check if the password suffix exists in the response
    return data.split("\n").some((line) => {
      const [hashSuffix] = line.split(":");
      return hashSuffix === suffix;
    });
  } catch (error) {
    console.error("Error checking password:", error);
    return false;
  }
}

// Yup validation schema
export const registerSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  middlename: yup.string().required("Middle name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Phone number is required"),
  terms_accepted: yup.boolean().oneOf([true], "You must accept the terms"),
  channel: yup.string().required("How did you hear about us?"),
  business_name: yup.string().required("Business name is required"),
  business_type: yup.string().required("Business type is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  country: yup.string().required("Country is required"),
});

export function useRegister() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    businessName: "",
    country: "NG",
    phone: "",
    email: "",
    businessType: "",
    referral: "",
    password: "",
    password_confirmation: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countriesError, setCountriesError] = useState(null);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [loadingBusinessTypes, setLoadingBusinessTypes] = useState(true);
  const [businessTypesError, setBusinessTypesError] = useState(null);
  const [isCheckingPassword, setIsCheckingPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchCountries() {
      setLoadingCountries(true);
      setCountriesError(null);
      try {
        const res = await request.get(ENDPOINTS.COUNTRIES);
        setCountries(res.data?.data || []);
      } catch (err) {
        setCountriesError("Failed to load countries");
      } finally {
        setLoadingCountries(false);
      }
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    async function fetchBusinessTypes() {
      setLoadingBusinessTypes(true);
      setBusinessTypesError(null);
      try {
        const res = await request.get(ENDPOINTS.BUSSINESSTYPES);
        setBusinessTypes(res.data?.data || []);
      } catch (err) {
        setBusinessTypesError("Failed to load business types");
      } finally {
        setLoadingBusinessTypes(false);
      }
    }
    fetchBusinessTypes();
  }, []);

  // Add password check on password field change (debounced)
  useEffect(() => {
    if (formData.password && formData.password.length >= 6) {
      setIsCheckingPassword(true);
      const handler = setTimeout(async () => {
        const isLeaked = await checkPasswordLeak(formData.password);
        if (isLeaked) {
          setError(
            "The password you entered has appeared in a data leak. Please choose a different password.",
          );
        }
        setIsCheckingPassword(false);
      }, 1000);

      return () => clearTimeout(handler);
    }
  }, [formData.password]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "password") {
      setError(null); // Clear any existing password errors
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);

    try {
      // Check for leaked password first
      if (await checkPasswordLeak(formData.password)) {
        setError(
          "The password you entered has appeared in a data leak. Please choose a different password.",
        );
        setLoading(false);
        return;
      }

      // Map form data to API payload
      const apiPayload = {
        firstname: formData.firstname,
        middlename: formData.middlename,
        lastname: formData.lastname,
        email: formData.email,
        mobile: formData.phone,
        terms_accepted: formData.consent,
        channel: formData.referral,
        business_name: formData.businessName,
        business_type: formData.businessType,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        country: formData.country,
      };

      // Validate data
      await registerSchema.validate(apiPayload, { abortEarly: false });

      // API call
      const response = await request.post(ENDPOINTS.REGISTER, apiPayload);
      setLoading(false);
      setSuccess("Registration successful!");
      // Store email in sessionStorage for verify-email page
      sessionStorage.setItem("pendingVerificationEmail", formData.email);
      // Redirect to verify-email page
      router.push("/verify-email");
      return response.data;
    } catch (err) {
      setLoading(false);
      if (err.name === "ValidationError") {
        setError(err.errors);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data) {
        setError(
          typeof err.response.data === "string"
            ? err.response.data
            : JSON.stringify(err.response.data),
        );
      } else {
        setError("An error occurred");
      }
      return null;
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    countries,
    loadingCountries,
    countriesError,
    businessTypes,
    loadingBusinessTypes,
    businessTypesError,
    isCheckingPassword,
  };
}
