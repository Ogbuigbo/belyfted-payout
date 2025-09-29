import { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { request } from "../../../_hooks/request";
import { ENDPOINTS } from "../../../_hooks/endpoints";
import { useDispatch } from "react-redux";
import { setUser } from "../../../lib/userSlice";
import { getFingerPrint } from "../../../lib/fingerprint";
import { toBase64 } from "../../../lib/utils";
// import { toast } from "react-hot-toast";

// Yup validation schema
export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function useLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  // Function to scroll to top when error occurs
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Validate data
      await loginSchema.validate(formData, { abortEarly: false });
      // API call
      const response = await request.post(ENDPOINTS.LOGIN, formData);
      setLoading(false);
      
      // Check if 2FA is required
      if (response.data?.success && response.data?.response_code === "2FA_REQUIRED") {
        const token = response.data.data.token;
        // Redirect to OTP verification page with token
        router.push(`/verify-login-otp?token=${token}`);
        return true;
      }
      
      // Normal login flow
      if (response.data?.success && response.data?.data?.token) {
        const token = response.data.data.token;
        const user = response.data.data.user;
        Cookies.set("authToken", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });
        if (user) {
          dispatch(setUser(user));
        }


        // Check KYB status
        if (
          user &&
          user.config?.kyb_status &&
          user.config.kyb_status.toUpperCase() === "REVIEW"
        ) {
          router.push("/dashboard");
        } else {
          router.push("/onboarding/kyb");
        }

        return true;
      } else {
        setError("Invalid response from server");
        scrollToTop(); // Scroll to top when server error occurs
        return false;
      }
    } catch (err) {
      setLoading(false);
      if (err.name === "ValidationError") {
        setError(err.errors);
        scrollToTop(); // Scroll to top when validation error occurs
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
        scrollToTop(); // Scroll to top when API error occurs
      } else {
        setError("An error occurred during login");
        scrollToTop(); // Scroll to top when general error occurs
      }
      return false;
    }
  };

  return { formData, handleInputChange, handleSubmit, loading, error };
}

// New hook for login_id based authentication
export function useLoginWithId() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading", "success", "error"
  const [message, setMessage] = useState("Logging in...");
  const router = useRouter();
  const dispatch = useDispatch();

  // Function to scroll to top when error occurs
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const loginWithId = async (loginId, depositId = null) => {
    try {
      setLoading(true);
      setStatus("loading");
      setMessage("Logging in...");
      setError(null);

      // Clear any existing auth data
      Cookies.remove("authToken");
      Cookies.remove("is_logged_in");
      Cookies.remove("user_data");
      dispatch(setUser(null));

      // Get fingerprint
      let fingerprint = await getFingerPrint();

      // API call with login_id
      const response = await request.post(`${ENDPOINTS.LOGIN}/${loginId}`, {
        fingerprint,
        is_web: 1,
      });

      setLoading(false);

      if (
        response.data?.status === "error" ||
        response.data?.success === false
      ) {
        // toast.error(response.data?.message || "Login failed");
        setStatus("error");
        setMessage("Login failed. Please check your credentials.");
        setError(response.data?.message || "Login failed");
        scrollToTop();
        return false;
      }

      // Check if 2FA is required
      if (response.data?.success && response.data?.response_code === "2FA_REQUIRED") {
        const token = response.data.data.token;
        setStatus("success");
        setMessage("Redirecting to verification...");
        // Redirect to OTP verification page with token
        setTimeout(() => router.push(`/verify-login-otp?token=${token}`), 1000);
        return true;
      }

      // Check for successful response with token (not access_token)
      if (response.data?.success && response.data?.data?.token) {
        const token = response.data.data.token;
        const user = response.data.data.user;

        // Set cookies
        Cookies.set("authToken", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });
        Cookies.set("is_logged_in", "true", {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });
        Cookies.set("user_data", JSON.stringify(user), {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });

        if (user) {
          dispatch(setUser(user));
        }

        // Debug: Log user data from login with ID
        console.log("=== LOGIN WITH ID USER DATA ===");
        console.log("Full user object:", user);
        console.log("User config:", user?.config);
        console.log("User KYB status:", user?.config?.kyb_status);
        console.log("===============================");

        setStatus("success");
        setMessage("Redirecting to Dashboard...");

        if (depositId) {
          return handleDepositFlow(depositId);
        } else {
          if (
            user &&
            user.config?.kyb_status &&
            user.config.kyb_status.toUpperCase() === "REVIEW"
          ) {
            setTimeout(() => router.push("/dashboard"), 2000);
          } else {
            setTimeout(() => router.push("/onboarding/kyb"), 2000);
          }
          return true;
        }
      } else {
        setStatus("error");
        setMessage("Invalid response from server");
        setError("Invalid response from server");
        scrollToTop();
        return false;
      }
    } catch (err) {
      setLoading(false);
      setStatus("error");
      setMessage("Login failed. Please try again.");
      setError(err.response?.data?.message || "An error occurred during login");
      scrollToTop();
      return false;
    }
  };

  const handleDepositFlow = async (depositId) => {
    try {
      const response = await request.get(
        `${ENDPOINTS.APP_DEPOSIT_DATA}/${depositId}`,
      );

      if (response.data?.remark === "deposit_not_found") {
        setTimeout(() => router.push("/dashboard"), 2000);
        return;
      }

      const data = response.data?.data;
      const deposit = data?.deposit;
      const gatewayData = data?.deposit?.gateway_data ?? {};

      // Store deposit data in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("deposit", toBase64(JSON.stringify(deposit)));
        localStorage.setItem(
          "gatewayData",
          toBase64(JSON.stringify(gatewayData)),
        );
      }

      setTimeout(() => router.push("/user/deposit/confirmation"), 2000);
    } catch (error) {
      setTimeout(() => router.push("/dashboard"), 2000);
    }
  };

  return { loginWithId, loading, error, status, message };
}
