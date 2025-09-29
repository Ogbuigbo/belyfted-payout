"use client";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { ENDPOINTS } from "../../../../_hooks/endpoints";
import { toast } from "react-hot-toast";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export function useResetPassword(token, signature) {
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await resetPasswordSchema.validate(formData, { abortEarly: false });
      const payload = {
        ...formData,
        token,
        signature,
      };
      const response = await axios.post(ENDPOINTS.RESETPASSWORD, payload, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      });
      setLoading(false);
      setSuccess(
        response.data?.message || "Your password has been reset successfully.",
      );
    } catch (err) {
      setLoading(false);
      let errorMsg = "An error occurred. Please try again.";
      if (err.name === "ValidationError") {
        errorMsg = err.errors.join(", ");
      } else if (err.response?.data?.message) {
        errorMsg = Array.isArray(err.response.data.message)
          ? err.response.data.message.join(", ")
          : err.response.data.message;
      }
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  return { formData, handleInputChange, handleSubmit, loading, error, success };
}
