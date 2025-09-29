"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../lib/userSlice";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const status = user?.config?.kyb_status?.toUpperCase() || null;

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      router.push("/login");
      return;
    }
    if (status !== "REVIEW") {
      router.push("/onboarding/kyb");
      return;
    }
    setIsAuthenticated(true);
    setIsLoading(false);
  }, [router, status]);

  const logout = () => {
    Cookies.remove("authToken", { path: "/" });
    dispatch(clearUser());
    setIsAuthenticated(false);
    router.push("/login");
  };

  return {
    isAuthenticated,
    isLoading,
    kybStatus: status,
    logout,
  };
}
