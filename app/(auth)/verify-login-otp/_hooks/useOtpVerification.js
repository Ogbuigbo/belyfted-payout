import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import { setUser } from '../../../lib/userSlice';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

export function useOtpVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  // Get token from URL params
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    // Start countdown for resend button
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [token, router]);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await request.post(ENDPOINTS.VERIFY_2FA_OTP, {
        otp,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data?.success && response.data?.data?.token) {
        const authToken = response.data.data.token;
        const user = response.data.data.user;

        // Set cookies
        Cookies.set("authToken", authToken, {
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

        if (user) {
          dispatch(setUser(user));
        }

        toast.success("Login successful!");
        
        // For 2FA login, always redirect to dashboard
        router.push("/dashboard");
      } else {
        setError(response.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Verification failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (countdown > 0) return;

    setResendLoading(true);
    try {
      const response = await request.post(ENDPOINTS.RESEND_OTP, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data?.success) {
        toast.success("OTP resent successfully!");
        setCountdown(60);
        
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        toast.error(response.data?.message || "Failed to resend OTP");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to resend OTP. Please try again.";
      toast.error(errorMessage);
    } finally {
      setResendLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return {
    otp,
    loading,
    error,
    resendLoading,
    countdown,
    token,
    handleOtpChange,
    handleSubmit,
    handleResendOTP,
    handleBackToLogin
  };
}