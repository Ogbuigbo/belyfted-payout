// Utility functions

export const toBase64 = (str) => {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64");
  }
  return btoa(str);
};

export const fromBase64 = (str) => {
  if (typeof window === "undefined") {
    return Buffer.from(str, "base64").toString();
  }
  return atob(str);
};
