// Simple fingerprint generation for web authentication
export const getFingerPrint = async () => {
  try {
    if (typeof window === "undefined") {
      return "server-fingerprint-" + Date.now();
    }

    // Basic fingerprint using available browser information
    const fingerprint = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timestamp: Date.now(),
    };

    // Create a simple hash of the fingerprint data
    const fingerprintString = JSON.stringify(fingerprint);
    let hash = 0;
    for (let i = 0; i < fingerprintString.length; i++) {
      const char = fingerprintString.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }

    return `web-fingerprint-${Math.abs(hash)}`;
  } catch (error) {
    console.error("Error generating fingerprint:", error);
    return "web-fingerprint-" + Date.now();
  }
};
