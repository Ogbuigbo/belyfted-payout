"use client";

import { useState, useEffect } from "react";
import { request } from "../../../../_hooks/request";
import { ENDPOINTS } from "../../../../_hooks/endpoints";

export function useKybStep2(onNext) {
  const [formData, setFormData] = useState({
    registered_country: "Nigeria",
    registered_year: "2006",
    id_number: "",
    company_number: "",
    tax_vat_id: "",
    business_scopes: "NGO",
    business_description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countriesError, setCountriesError] = useState(null);
  const [status, setStatus] = useState(null);

  // Fetch countries on mount
  useEffect(() => {
    async function fetchCountries() {
      setLoadingCountries(true);
      setCountriesError(null);
      try {
        const res = await request.get(ENDPOINTS.SUPPORTED_COUNTRIES);
        setCountries(res.data?.data || []);
      } catch (err) {
        setCountriesError("Failed to load countries");
      } finally {
        setLoadingCountries(false);
      }
    }
    fetchCountries();
  }, []);

  // Fetch session data on mount
  useEffect(() => {
    async function fetchSession() {
      setLoading(true);
      setError(null);
      try {
        const res = await request.get(ENDPOINTS.KYB_STEP2);
        if (res.data && res.data.data) {
          const { registration_info, status } = res.data.data;
        
          if (registration_info) {
            setFormData((prev) => ({
              ...prev,
              ...registration_info,
            }));
          }
          setStatus(status);
        }
      } catch (err) {
        setError("Failed to load session data");
      } finally {
        setLoading(false);
      }
    }
    fetchSession();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle description change
  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 200) {
      handleInputChange(e);
      setCharCount(e.target.value.length);
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await request.post(ENDPOINTS.KYB_STEP2_PROCESS, formData);
      setLoading(false);
      setSuccess("Business registration info submitted successfully!");
      return true; // success
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit business registration info",
      );
      setLoading(false);
      return false;
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    countries,
    loadingCountries,
    countriesError,
    status,
    handleDescriptionChange,
  };
}
