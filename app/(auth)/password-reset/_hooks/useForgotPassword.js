import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { ENDPOINTS } from "../../../_hooks/endpoints";
import { toast } from "react-hot-toast";

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export function useForgotPassword() {
  const [formData, setFormData] = useState({ email: "" });
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
      await forgotPasswordSchema.validate(formData, { abortEarly: false });
      const response = await axios.post(
        ENDPOINTS.FORGOTPASSWORD,
        { email: formData.email },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        },
      );
      setLoading(false);
      const successMessage = response.data?.message || "If your email is registered, a reset link has been sent.";
      setSuccess(successMessage);
      toast.success(successMessage);
    } catch (err) {
      setLoading(false);
      if (err.name === "ValidationError") {
        const validationError = err.errors.join(", ");
        setError(validationError);
        toast.error(validationError);
      } else if (err.response?.data) {
        const { code, message, response_code } = err.response.data;
        
        // Handle specific error codes
        if (code === 422 && response_code === "EMAIL_NOT_EXIST") {
          const errorMessage = "The provided email does not exist. Please check your email address and try again.";
          setError(errorMessage);
          toast.error(errorMessage, {
            duration: 5000,
            style: {
              background: '#FEE2E2',
              color: '#DC2626',
              border: '1px solid #FCA5A5',
            },
          });
        } else {
          const errorMessage = message || "An error occurred. Please try again.";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      } else {
        const errorMessage = "An error occurred. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    }
  };

  return { formData, handleInputChange, handleSubmit, loading, error, success };
}
