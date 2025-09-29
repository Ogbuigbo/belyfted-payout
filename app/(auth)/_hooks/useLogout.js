import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearUser } from "../../lib/userSlice";
import { request } from "../../../app/_hooks/request";
import { ENDPOINTS } from "../../../app/_hooks/endpoints";
import { deleteCookie } from "cookies-next";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    setLoading(true);
    try {
      await request.post(ENDPOINTS.LOGOUT);

      deleteCookie("authToken");
      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
      }
      dispatch(clearUser());
      router.push("/login");
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { logout, loading };
}
