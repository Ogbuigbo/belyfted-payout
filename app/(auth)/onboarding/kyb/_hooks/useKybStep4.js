import { useState, useEffect } from "react";
import { request } from "../../../../_hooks/request";
import { ENDPOINTS } from "../../../../_hooks/endpoints";

export function useKybStep4({ documents, setDocuments }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      setLoading(true);
      setError(null);
      try {
        const res = await request.get(ENDPOINTS.KYB_STEP4);
        if (res.data && res.data.data) {
          // Only set documents from backend if parent state is empty
          if (!documents || Object.keys(documents).length === 0) {
            setDocuments(res.data.data.documents || {});
          }
          setStatus(res.data.data.status);
        }
      } catch (err) {
        // It's okay if this fails, it just means the step isn't completed yet.
        // We don't need to show an error for this initial check.
      } finally {
        setLoading(false);
      }
    }
    fetchSession();
  }, [setDocuments]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveDocuments = (newDocuments) => {
    setDocuments(newDocuments);
    closeModal();
  };

  const submitDocuments = async () => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    let fileAdded = false;
    for (const key in documents) {
      if (documents[key]) {
        formData.append(
          key.replace(/([A-Z])/g, "_$1").toLowerCase(),
          documents[key],
        );
        fileAdded = true;
      }
    }

    if (!fileAdded) {
      setError("Please add at least one document.");
      setLoading(false);
      return false;
    }

    try {
      await request.post(ENDPOINTS.KYB_STEP4_PROCESS, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      return true;
    } catch (err) {
      // Check for under review response code
      if (
        err.response?.data?.response_code === "KYB_VERIFICATION_UNDER_REVIEW"
      ) {
        setLoading(false);
        return "under_review";
      }
      const errorMessage =
        err.response?.data?.message || "Failed to submit documents.";
      setError(
        Array.isArray(errorMessage) ? errorMessage.join(", ") : errorMessage,
      );
      setLoading(false);
      return false;
    }
  };

  return {
    loading,
    error,
    isModalOpen,
    openModal,
    closeModal,
    saveDocuments,
    submitDocuments,
    status,
  };
}
