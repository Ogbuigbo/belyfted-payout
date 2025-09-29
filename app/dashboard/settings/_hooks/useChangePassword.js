import { useState } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useChangePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const changePassword = async (passwordData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await request.post(ENDPOINTS.CHANGE_PASSWORD, passwordData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        setSuccess(true);
        toast.success('Password changed successfully');
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to change password');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to change password';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    changePassword,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(false)
  };
}

export default useChangePassword;