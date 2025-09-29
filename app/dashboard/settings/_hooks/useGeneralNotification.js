import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useGeneralNotification() {
  const [notifications, setNotifications] = useState({
    login_alert: false,
    promotional_emails: false,
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch notification settings from API
  const fetchNotificationSettings = async () => {
    try {
      setFetching(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_NOTIFICATION_SETTINGS, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success) {
        const data = response.data?.data;
        
        // Only extract the fields we need from the API response
        setNotifications({
          login_alert: data?.login_alert || false,
          promotional_emails: data?.promotional_emails || false,
        });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch notification settings';
      setError(errorMessage);
      // Don't show toast for fetch errors, just log them
      console.error('Fetch notification settings error:', err);
    } finally {
      setFetching(false);
    }
  };

  // Update notification settings
  const updateNotificationSettings = async (settings) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await request.put(ENDPOINTS.UPDATE_NOTIFICATION_SETTINGS, settings, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        setSuccess(true);
        toast.success('Notification settings updated successfully');
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to update notification settings');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update notification settings';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Load notification settings on component mount
  useEffect(() => {
    fetchNotificationSettings();
  }, []);

  return {
    notifications,
    loading,
    fetching,
    error,
    success,
    setNotifications,
    updateNotificationSettings,
    fetchNotificationSettings,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(false)
  };
}

export default useGeneralNotification;