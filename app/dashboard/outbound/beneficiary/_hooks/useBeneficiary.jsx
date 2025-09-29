import { useState, useEffect } from 'react';
import { request } from '../../../../_hooks/request';
import { ENDPOINTS } from '../../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useBeneficiary() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingCountries, setFetchingCountries] = useState(false);
  const [fetchingBanks, setFetchingBanks] = useState(false);
  const [resolvingAccount, setResolvingAccount] = useState(false);
  const [accountDetails, setAccountDetails] = useState(null);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 15,
    total: 0,
    from: null,
    to: null
  });

  // Fetch beneficiaries from API
  const fetchBeneficiaries = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(ENDPOINTS.GET_BENEFICIARIES, {
        params: { page }
      });

      if (response.data?.success) {
        setBeneficiaries(response.data.data || []);
        setPagination(response.data.pagination || pagination);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch beneficiaries');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch beneficiaries';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Add new beneficiary
  const addBeneficiary = async (beneficiaryData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await request.post(ENDPOINTS.ADD_BENEFICIARY, beneficiaryData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success) {
        toast.success('Beneficiary added successfully');
        // Refresh the beneficiaries list
        await fetchBeneficiaries(pagination.current_page);
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to add beneficiary');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to add beneficiary';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fetch countries from API
  const fetchCountries = async () => {
    try {
      setFetchingCountries(true);
      setError(null);

      const response = await request.get(ENDPOINTS.COUNTRIES, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        setCountries(Array.isArray(data) ? data : []);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch countries');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch countries';
      setError(errorMessage);
      console.error('Fetch countries error:', err);
    } finally {
      setFetchingCountries(false);
    }
  };

  // Fetch banks from API
  const fetchBanks = async (country = null, search = null) => {
    try {
      setFetchingBanks(true);
      setError(null);

      // Build query parameters
      const params = {};
      if (country) params.country = country;
      if (search) params.search = search;

      const response = await request.get(ENDPOINTS.GET_BANKS, {
        params,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        // Handle the nested data structure: response.data.data.banks
        const banksData = response.data?.data?.banks || response.data?.data || response.data;
        setBanks(Array.isArray(banksData) ? banksData : []);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch banks');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch banks';
      setError(errorMessage);
      console.error('Fetch banks error:', err);
    } finally {
      setFetchingBanks(false);
    }
  };

  // Resolve account number and bank code
  const resolveAccount = async (accountNumber, bankCode) => {
    try {
      setResolvingAccount(true);
      setError(null);
      setAccountDetails(null);

      const response = await request.post(ENDPOINTS.RESOLVE_ACCOUNT, {
        account_number: accountNumber,
        bank_code: bankCode
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        setAccountDetails(data);
        return data;
      } else {
        throw new Error(response.data?.message || 'Failed to resolve account');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to resolve account';
      setError(errorMessage);
      setAccountDetails(null);
      return null;
    } finally {
      setResolvingAccount(false);
    }
  };

  // Load beneficiaries, countries, and banks on component mount
  useEffect(() => {
    fetchBeneficiaries();
    fetchCountries();
    fetchBanks();
  }, []);

  return {
    beneficiaries,
    countries,
    banks,
    loading,
    fetchingCountries,
    fetchingBanks,
    resolvingAccount,
    accountDetails,
    error,
    pagination,
    fetchBeneficiaries,
    addBeneficiary,
    fetchCountries,
    fetchBanks,
    resolveAccount,
    refetch: () => fetchBeneficiaries(pagination.current_page)
  };
}

export default useBeneficiary;