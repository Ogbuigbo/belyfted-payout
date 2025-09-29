import { useState, useEffect } from 'react';
import { request } from './request';
import { ENDPOINTS, BASE_URL, API_V1 } from './endpoints';
import toast from 'react-hot-toast';

export function useTopNav() {
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [error, setError] = useState(null);

  // Get current API environment status
  const getApiEnvironment = async () => {
    try {
      setCheckingStatus(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_API_ENVIRONMENT, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        const data = response.data?.data || response.data;
        
        // Check all possible environment field names
        const environment = data.environment || data.api_environment || data.current_environment;
        const isLiveEnvironment = environment === 'live' || data.is_live === true || data.isLive === true;
        
        setIsLive(isLiveEnvironment);
      } else {
        // Default to test environment if no data
        setIsLive(false);
      }
    } catch (err) {
      // Don't show error for 404 (environment not set yet)
      if (err.response?.status !== 404) {
        const errorMessage = err.response?.data?.message || err.message || 'Failed to get API environment status';
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } finally {
      setCheckingStatus(false);
    }
  };

  // Switch API environment
  const switchApiEnvironment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Determine the target environment (opposite of current)
      const targetEnvironment = isLive ? 'test' : 'live';

      const requestBody = {
        environment: targetEnvironment
      };

      const response = await request.post(ENDPOINTS.SWITCH_API_ENVIRONMENT, requestBody, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        const data = response.data?.data || response.data;
        // The API returns the new environment in the response
        const newEnvironment = data.api_environment || data.environment || data.new_environment;
        const isLiveEnvironment = newEnvironment === 'live';
        
        // Since backend handles environment switching automatically,
        // just update the UI state based on what was requested
        const requestedIsLive = targetEnvironment === 'live';
        setIsLive(requestedIsLive);
        
        const environmentText = requestedIsLive ? 'Live' : 'Test';
        toast.success(`Switched to ${environmentText} environment successfully!`);
        
        return { success: true, environment: targetEnvironment };
      } else {
        throw new Error(response.data?.message || 'Failed to switch API environment');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to switch API environment';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Load environment status on component mount
  useEffect(() => {
    getApiEnvironment();
  }, []);

  return {
    isLive,
    loading,
    checkingStatus,
    error,
    getApiEnvironment,
    switchApiEnvironment,
  };
}

export default useTopNav;