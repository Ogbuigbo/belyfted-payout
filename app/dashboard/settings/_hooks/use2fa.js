import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

export function use2FA() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  // Check 2FA status
  const check2FAStatus = async () => {
    try {
      setCheckingStatus(true);
      setError(null);

      const response = await request.get(ENDPOINTS.CHECK_2FA_STATUS, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        const data = response.data?.data || response.data;
        setIsEnabled(data.is_enabled || data.isEnabled || false);
        setUserEmail(data.email || data.user_email || '');
      } else {
        // If no 2FA status found, assume it's disabled
        setIsEnabled(false);
      }
    } catch (err) {
      console.error('Check 2FA status error:', err);
      
      // Don't show error for 404 (2FA not set up yet)
      if (err.response?.status !== 404) {
        const errorMessage = err.response?.data?.message || err.message || 'Failed to check 2FA status';
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } finally {
      setCheckingStatus(false);
    }
  };

  // Enable 2FA (sends initial OTP)
  const enable2FA = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.ENABLE_2FA, {}, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        toast.success('2FA setup initiated. Please check your email for OTP.');
        return { success: true, data: response.data?.data || response.data };
      } else {
        throw new Error(response.data?.message || 'Failed to enable 2FA');
      }
    } catch (err) {
      console.error('Enable 2FA error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to enable 2FA';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Disable 2FA (sends OTP for verification)
  const disable2FA = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.DISABLE_2FA, {}, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        toast.success('OTP sent to your email for 2FA disable verification.');
        return { success: true, data: response.data?.data || response.data };
      } else {
        throw new Error(response.data?.message || 'Failed to initiate 2FA disable');
      }
    } catch (err) {
      console.error('Disable 2FA error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to initiate 2FA disable';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and Disable 2FA
  const verifyDisableOTP = async (otpCode) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.VERIFY_AND_DISABLE_2FA, {
        otp: otpCode,
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        setIsEnabled(false);
        toast.success('2FA has been disabled successfully!');
        return { success: true };
      } else {
        throw new Error(response.data?.message || 'Invalid OTP code');
      }
    } catch (err) {
      console.error('Verify Disable OTP error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Invalid OTP code';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and Enable 2FA
  const verifyOTP = async (otpCode) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.VERIFY_AND_ENABLE_2FA, {
        otp: otpCode,
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        setIsEnabled(true);
        toast.success('2FA has been enabled successfully!');
        return { success: true };
      } else {
        throw new Error(response.data?.message || 'Invalid OTP code');
      }
    } catch (err) {
      console.error('Verify OTP error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Invalid OTP code';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };


  // Resend OTP (works after Enable 2FA has been called)
  const resendOTP = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.RESEND_OTP, {}, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        toast.success('OTP resent to your email successfully!');
        return { success: true };
      } else {
        throw new Error(response.data?.message || 'Failed to resend OTP');
      }
    } catch (err) {
      console.error('Resend OTP error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to resend OTP';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Load 2FA status on component mount
  useEffect(() => {
    check2FAStatus();
  }, []);

  return {
    isEnabled,
    loading,
    checkingStatus,
    error,
    userEmail,
    check2FAStatus,
    enable2FA,
    disable2FA,
    verifyOTP,
    verifyDisableOTP,
    resendOTP,
  };
}

export default use2FA;