const CURRENCY_SYMBOLS = {
  'USD': '$',
  'NGN': '₦',
  'EUR': '€',
  'GBP': '£',
  'TZS': 'TSh'
};

/**
 * Get currency symbol for supported currencies
 * @param {string} currency 
 * @returns {string} 
 */
export const getCurrencySymbol = (currency) => {
  return CURRENCY_SYMBOLS[currency] || currency;
};

/**
 * Format amount with currency symbol
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code
 * @returns {string} Formatted amount with currency symbol
 */
export const formatCurrency = (amount, currency) => {
  const symbol = getCurrencySymbol(currency);
  const formattedAmount = Number(amount).toLocaleString(undefined, { 
    minimumFractionDigits: 2 
  });
  return `${symbol}${formattedAmount}`;
};

/**
 * Safe number formatting with fallback
 * @param {number} amount 
 * @returns {string} 
 */
export const safeFormatAmount = (amount) => {
  try {
    return Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2 });
  } catch (_) {
    return `${Number(amount) || 0}`;
  }
};
