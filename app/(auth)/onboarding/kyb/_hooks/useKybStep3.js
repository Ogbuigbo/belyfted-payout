import { useState, useEffect } from "react";
import { request } from "../../../../_hooks/request";
import { ENDPOINTS } from "../../../../_hooks/endpoints";
import { useSelector } from "react-redux";

export function useKybStep3() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [status, setStatus] = useState(null);
  const user = useSelector((state) => state.user.user);

  console.log(user);

  // Modal and editing state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Fetch session data on mount
  useEffect(() => {
    async function fetchSession() {
      setLoading(true);
      setError(null);
      try {
        const res = await request.get(ENDPOINTS.KYB_STEP3);
        if (res.data && res.data.data) {
          const { directors, related_persons, status } = res.data.data;
          const loadedDirectors = directors || related_persons || [];
      
          if (Array.isArray(loadedDirectors) && loadedDirectors.length > 0) {
            setDirectors(loadedDirectors);
          } else if (user) {
            const userDirector = {
              first_name: user.firstname || "",
              middle_name: user.middlename || "",
              last_name: user.lastname || "",
              email: user.email || "",
              phone: user.mobile || "", // <- use `mobile`, not `phone`
              role: "Director", // default
              shares_allocated: "", // default
              ownership_percent: "", // default
            };
            setDirectors([userDirector]);
          }
      
          setStatus(status);
        }
      } catch (err) {
        setError("Failed to load directors data");
      } finally {
        setLoading(false);
      }
      
    }
    fetchSession();
  }, []);

  // Modal logic
  const openAddDirector = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };
  const openEditDirector = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
  };
  const saveDirector = (directorData) => {
    if (editingIndex !== null) {
      setDirectors((prev) =>
        prev.map((d, i) => (i === editingIndex ? directorData : d)),
      );
    } else {
      setDirectors((prev) => [...prev, directorData]);
    }
    closeModal();
  };
  const deleteDirector = (index) => {
    setDirectors((prev) => prev.filter((_, i) => i !== index));
  };

  // Submit directors
  const submitDirectors = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    if (directors.length === 0) {
      setError("Please add at least one director before continuing.");
      setLoading(false);
      return false;
    }
    try {
      await request.post(ENDPOINTS.KYB_STEP3_PROCESS, { directors });
      setLoading(false);
      setSuccess("Directors submitted successfully!");
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit directors");
      setLoading(false);
      return false;
    }
  };

  // For AddDirectorModal
  const initialDirectorData =
    editingIndex !== null ? directors[editingIndex] : null;

  const handleContinue = async () => {
    if (directors.length === 0) {
      setError("Please add at least one director before continuing.");
      return;
    }
    const ok = await submitDirectors();
    if (ok && onNext) onNext();
  };

  return {
    directors,
    loading,
    error,
    success,
    isModalOpen,
    openAddDirector,
    openEditDirector,
    closeModal,
    saveDirector,
    deleteDirector,
    editingIndex,
    initialDirectorData,
    submitDirectors,
    handleContinue,
    status,
  };
}
