import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';

export function useApiKey() {
  const [apiKeys, setApiKeys] = useState({
    clientId: "",
    clientSecret: "",
    encryptionKey: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  


  const fetchApiCredentials = async () => {
    try {
      setFetching(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_API_CREDENTIALS, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        const data = response.data?.data || response.data;
        
       
        let credentials = null;
        
        if (data?.credentials) {
          credentials = data.credentials;
        } else if (data?.sandbox || data?.live) {
          credentials = data.live || data.sandbox;
        } else {
          credentials = data;
        }
        
        setApiKeys({
          clientId: credentials?.client_id || credentials?.clientId || "",
          clientSecret: credentials?.client_secret || credentials?.clientSecret || "",
          encryptionKey: credentials?.encryption_key || credentials?.encryptionKey || "",
        });
      }
    } catch (err) {
      console.error('Fetch API credentials error:', err);
      
      // Don't show error for 404 (no credentials exist yet)
      if (err.response?.status !== 404) {
        const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch API credentials';
        setError(errorMessage);
        setTimeout(() => setError(null), 5000);
      }
    } finally {
      setFetching(false);
    }
  };

  // Load credentials on component mount
  useEffect(() => {
    fetchApiCredentials();
  }, []);

  const generateApiCredentials = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await request.post(ENDPOINTS.GENERATE_API_CREDENTIALS, {}, {
        headers: {
          'accept': 'application/json',
        }
      });

      if (response.data?.status === 'success' || response.data?.success === true) {
        const data = response.data?.data || response.data;
        const credentials = data?.credentials || data;
        
        setApiKeys({
          clientId: credentials.client_id || credentials.clientId || "",
          clientSecret: credentials.client_secret || credentials.clientSecret || "",
          encryptionKey: credentials.encryption_key || credentials.encryptionKey || "",
        });
        
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000); 
      } else {
        throw new Error(response.data?.message || 'Failed to generate API credentials');
      }
    } catch (err) {
      console.error('API credentials generation error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to generate API credentials';
      setError(errorMessage);
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (field) => {
    try {
      await navigator.clipboard.writeText(apiKeys[field]);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  return {
    apiKeys,
    loading,
    fetching,
    error,
    success,
    generateApiCredentials,
    fetchApiCredentials,
    copyToClipboard,
  };
}

export default useApiKey;