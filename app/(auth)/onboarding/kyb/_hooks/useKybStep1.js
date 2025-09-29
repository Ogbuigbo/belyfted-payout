"use client";

import { useState, useEffect } from "react";
import { request } from "../../../../_hooks/request";
import { ENDPOINTS } from "../../../../_hooks/endpoints";

export function useKybStep1(onNext) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    entity: "",
    website: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    business_name: "",
    business_type: "",
    business_industry: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [status, setStatus] = useState(null);

  // Fetch session data on mount
  useEffect(() => {
    async function fetchSession() {
      setLoading(true);
      setError(null);
      try {
        const res = await request.get(ENDPOINTS.KYB_STEP1);
        if (res.data && res.data.data) {
          const { business_info, status } = res.data.data;
          if (business_info) {
            setFormData((prev) => ({
              ...prev,
              ...business_info,
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

  // Handle submit
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await request.post(ENDPOINTS.KYB_STEP1_PROCESS, formData);
      setLoading(false);
      setSuccess("Business info submitted successfully!");
      return true; // success
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit business info");
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
    status,
  };
}
