"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useLoginWithId } from "../_hooks/useLogin";
import { setUser } from "../../../lib/userSlice";

export default function LoginWithId({ params }) {
  const { login_id } = params;
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginWithId, loading, error, status, message } = useLoginWithId();

  // Get deposit_id from URL search params
  const [depositId, setDepositId] = useState(null);

  useEffect(() => {
    // Get deposit_id from URL search params
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const depositIdParam = searchParams.get("deposit_id");
      setDepositId(depositIdParam);
    }
  }, []);

  useEffect(() => {
    if (!login_id) {
      // Redirect to main login page if no login_id
      router.push("/login");
      return;
    }

    // Perform login with login_id
    loginWithId(login_id, depositId);
  }, [login_id, depositId, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full mx-4">
        <div className="card-body">
          {status === "loading" && (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-semibold">{message}</p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="text-red-500 text-4xl mb-4">❌</div>
              <p className="text-red-600 font-bold text-lg mb-2">{message}</p>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={() => router.push("/login")}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Login
              </button>
            </>
          )}

          {status === "success" && (
            <>
              <div className="text-green-500 text-4xl mb-4">✅</div>
              <p className="text-green-600 font-bold text-lg">{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
