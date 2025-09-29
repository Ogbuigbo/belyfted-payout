import { useState, useEffect } from 'react';
import { request } from '../../../../_hooks/request';
import { ENDPOINTS } from '../../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useWalletDetails(walletId) {
  const [walletDetails, setWalletDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch wallet details from API
  const fetchWalletDetails = async () => {
    if (!walletId) return;
    
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(`${ENDPOINTS.GET_WALLET_DETAILS}${walletId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data;
        
        // Map backend response to frontend format
        const mappedWalletDetails = {
          id: data.wallet_number || data.uuid || '',
          uuid: data.uuid,
          available: Number(data.available_balance ?? 0),
          ledger: Number(data.ledger_balance ?? 0),
          locked: Number(data.locked_balance ?? 0),
          rollingReserve: Number(data.rolling_reserve_balance ?? 0),
          currency: data.currency || '',
          status: data.status || 'inactive',
          lock: data.lock || 0,
          limit: data.limit || 0,
          virtualAccount: data.virtualaccount,
          // Raw data for any additional fields
          _raw: data,
        };

        setWalletDetails(mappedWalletDetails);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch wallet details');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch wallet details';
      setError(errorMessage);
      console.error('Fetch wallet details error:', err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletDetails();
  }, [walletId]);

  return {
    walletDetails,
    loading,
    error,
    refetch: fetchWalletDetails
  };
}

export default useWalletDetails;
