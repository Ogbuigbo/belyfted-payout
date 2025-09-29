import { useState, useEffect, useRef, useCallback } from "react";
import { request } from "../../../../_hooks/request";
import { ENDPOINTS } from "../../../../_hooks/endpoints";

export function useVerificationSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isRequestingRef = useRef(false);
  const lastRequestTimeRef = useRef(0);
  const MIN_REQUEST_INTERVAL = 5000;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const checkSessionWithRetry = useCallback(
    async (maxRetries = 3, baseDelay = 1000) => {
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          const response = await request.get(
            ENDPOINTS.KYB_VERIFICATION_SESSION,
          );

          // Handle different possible response structures
          const sessionData = response.data?.data || response.data;
          setSession(sessionData);

          return sessionData;
        } catch (err) {
          if (err.response?.status === 429 && attempt < maxRetries) {
            const delay = baseDelay * Math.pow(2, attempt);

            await sleep(delay);
            continue;
          }

          const errorMessage =
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Failed to verify session";

          setError(errorMessage);
          console.error("Verification session error:", err);
          throw err;
        }
      }
    },
    [],
  );

  const checkSession = useCallback(async () => {
    if (isRequestingRef.current) {
      return;
    }

    const now = Date.now();
    if (now - lastRequestTimeRef.current < MIN_REQUEST_INTERVAL && session) {
      return session;
    }

    isRequestingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      lastRequestTimeRef.current = now;
      await checkSessionWithRetry();
    } catch (err) {
    } finally {
      setLoading(false);
      isRequestingRef.current = false;
    }
  }, [checkSessionWithRetry, session]);

  useEffect(() => {
    checkSession();
  }, []);

  return { session, loading, error, checkSession };
}
