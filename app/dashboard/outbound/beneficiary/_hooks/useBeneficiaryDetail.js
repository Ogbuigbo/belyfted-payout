import { useState, useEffect } from 'react';
import { request } from '../../../../_hooks/request';
import { ENDPOINTS } from '../../../../_hooks/endpoints';
import toast from 'react-hot-toast';

function useBeneficiaryDetail(beneficiaryId) {
  const [beneficiary, setBeneficiary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch beneficiary details from API
  const fetchBeneficiaryDetail = async () => {
    if (!beneficiaryId) return;
    
    try {
      setLoading(true);
      setError(null);

      const response = await request.get(`${ENDPOINTS.GET_BENEFICIARY_DETAIL}/${beneficiaryId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        const data = response.data?.data || response.data;
        setBeneficiary(data);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch beneficiary details');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch beneficiary details';
      setError(errorMessage);
      console.error('Fetch beneficiary detail error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Delete beneficiary
  const deleteBeneficiary = async () => {
    if (!beneficiaryId) return false;
    
    try {
      setLoading(true);
      setError(null);

      const response = await request.delete(`${ENDPOINTS.DELETE_BENEFICIARY}/${beneficiaryId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.data?.success || response.data?.status === 'success') {
        toast.success('Beneficiary deleted successfully');
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to delete beneficiary');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete beneficiary';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Load beneficiary details on component mount
  useEffect(() => {
    fetchBeneficiaryDetail();
  }, [beneficiaryId]);

  return {
    beneficiary,
    loading,
    error,
    fetchBeneficiaryDetail,
    deleteBeneficiary,
    refetch: fetchBeneficiaryDetail
  };
}

export default useBeneficiaryDetail;



