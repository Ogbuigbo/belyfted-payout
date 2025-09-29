import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useFunding() {
  const [fundingLogs, setFundingLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch funding logs from API
  const fetchFundingLogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_FUNDING_LOGS, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        setFundingLogs(Array.isArray(data) ? data : []);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch funding logs');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch funding logs';
      setError(errorMessage);
      console.error('Fetch funding logs error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Generate statement
  const generateStatement = async (statementData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GENERATE_STATEMENT, {
        params: {
          start_date: statementData.start_date,
          end_date: statementData.end_date,
          currency: statementData.currency
        },
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Statement generated successfully');
        // Handle the response - you might want to download the file or show it
        console.log('Statement data:', response.data);
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to generate statement');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to generate statement';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Generate statement error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Load funding logs on component mount
  useEffect(() => {
    fetchFundingLogs();
  }, []);

  return {
    fundingLogs,
    loading,
    error,
    fetchFundingLogs,
    generateStatement,
    refetch: fetchFundingLogs
  };
}

export default useFunding;
