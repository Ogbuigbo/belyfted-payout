import { useState, useEffect } from 'react';
import { request } from '../../../_hooks/request';
import { ENDPOINTS } from '../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useWallets() {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch wallets from API
  const fetchWallets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_WALLETS, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        const list = Array.isArray(data) ? data : [];

        // Map backend payload to UI-friendly shape expected by WalletCard/WalletTable
        const mapped = list.map((w) => ({
          id: w.wallet_number || w.uuid || '', // Display ID (wallet_number)
          uuid: w.uuid || '', // UUID for API calls
          available: Number(w.available_balance ?? 0),
          ledger: Number(w.ledger_balance ?? 0),
          locked: Number(w.locked_balance ?? w.lock ?? 0),
          currency: w.currency || '',
          // Retain flag (use the same mock flag until backend supplies flags)
          flag: w.flag || 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1751888774/Frame_1618869784_ewkle5.svg',
          // Preserve raw fields if needed elsewhere
          _raw: w,
        }));

        setWallets(mapped);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch wallets');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch wallets';
      setError(errorMessage);
      console.error('Fetch wallets error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new wallet
  const createWallet = async (walletData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.CREATE_WALLET, walletData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Wallet created successfully');
        // Refresh the wallets list
        await fetchWallets();
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to create wallet');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to create wallet';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchWallets();
  }, []);

  return {
    wallets,
    loading,
    error,
    fetchWallets,
    createWallet,
    refetch: fetchWallets
  };
}

export default useWallets;