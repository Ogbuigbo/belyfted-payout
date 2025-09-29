import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

export function useWebhook() {
  const [webhooks, setWebhooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch webhooks from API
  const fetchWebhooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_WEBHOOKS, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        setWebhooks(Array.isArray(data) ? data : []);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch webhooks');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch webhooks';
      setError(errorMessage);
      console.error('Fetch webhooks error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new webhook
  const addWebhook = async (webhookData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.ADD_WEBHOOK, webhookData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Webhook added successfully');
        // Refresh the webhooks list
        await fetchWebhooks();
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to add webhook');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to add webhook';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update existing webhook
  const updateWebhook = async (webhookId, webhookData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.put(`${ENDPOINTS.UPDATE_WEBHOOK}/${webhookId}`, webhookData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Webhook updated successfully');
        // Refresh the webhooks list
        await fetchWebhooks();
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to update webhook');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update webhook';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Delete webhook
  const deleteWebhook = async (webhookId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.delete(`${ENDPOINTS.DELETE_WEBHOOK}/${webhookId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Webhook deleted successfully');
        // Refresh the webhooks list
        await fetchWebhooks();
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to delete webhook');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete webhook';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Load webhooks on component mount
  useEffect(() => {
    fetchWebhooks();
  }, []);

  return {
    webhooks,
    loading,
    error,
    fetchWebhooks,
    addWebhook,
    updateWebhook,
    deleteWebhook,
    refetch: fetchWebhooks
  };
}