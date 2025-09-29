const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_V1 = process.env.NEXT_PUBLIC_API_V1;

export const ENDPOINTS = {
  REGISTER: `${BASE_URL}${API_V1}merchant/auth/register`,
  LOGIN: `${BASE_URL}${API_V1}merchant/auth/login`,
  LOGOUT: `${BASE_URL}${API_V1}merchant/auth/logout`,
  FORGOTPASSWORD: `${BASE_URL}${API_V1}merchant/auth/forgot-password`,
  RESETPASSWORD: `${BASE_URL}api/v1/merchant/auth/reset-password`,
  COUNTRIES: `${BASE_URL}${API_V1}countries`,
  BUSSINESSTYPES: `${BASE_URL}${API_V1}business-type`,
  KYB_STEP1: `${BASE_URL}${API_V1}onboarding/kyb/manual/step1/session`,
  KYB_STEP1_PROCESS: `${BASE_URL}${API_V1}onboarding/kyb/manual/step1/process`,
  KYB_STEP2: `${BASE_URL}${API_V1}onboarding/kyb/manual/step2/session`,
  KYB_STEP2_PROCESS: `${BASE_URL}${API_V1}onboarding/kyb/manual/step2/process`,
  KYB_STEP3: `${BASE_URL}${API_V1}onboarding/kyb/manual/step3/session`,
  KYB_STEP3_PROCESS: `${BASE_URL}${API_V1}onboarding/kyb/manual/step3/process`,
  KYB_STEP4: `${BASE_URL}${API_V1}onboarding/kyb/manual/step4/session`,
  KYB_STEP4_PROCESS: `${BASE_URL}${API_V1}onboarding/kyb/manual/step4/process`,
  SUPPORTED_COUNTRIES: `${BASE_URL}${API_V1}supported-countries`,
  KYB_VERIFICATION_SESSION: `${BASE_URL}${API_V1}onboarding/kyb/manual/verification/session`,

  // New endpoints for login_id and deposit functionality
  APP_DEPOSIT_DATA: `${BASE_URL}${API_V1}app/deposit/data`,
  
  // API Credentials endpoints
  GENERATE_API_CREDENTIALS: `${BASE_URL}${API_V1}merchant/credentials/generate`,
  GET_API_CREDENTIALS: `${BASE_URL}${API_V1}merchant/credentials`,
  
  // 2FA endpoints
  CHECK_2FA_STATUS: `${BASE_URL}${API_V1}merchant/2fa/status`,
  ENABLE_2FA: `${BASE_URL}${API_V1}merchant/2fa/enable`,
  DISABLE_2FA: `${BASE_URL}${API_V1}merchant/2fa/disable`,
  VERIFY_AND_ENABLE_2FA: `${BASE_URL}${API_V1}merchant/2fa/verify-enable`,
  VERIFY_AND_DISABLE_2FA: `${BASE_URL}${API_V1}merchant/2fa/verify-disable`,
  VERIFY_OTP: `${BASE_URL}${API_V1}merchant/2fa/verify-otp`,
  RESEND_OTP: `${BASE_URL}${API_V1}merchant/2fa/resend-otp`,
  VERIFY_2FA_OTP: `${BASE_URL}${API_V1}merchant/2fa/verify-otp`,
  
  // API Environment endpoints
  GET_API_ENVIRONMENT: `${BASE_URL}${API_V1}merchant/api-environment`,
  SWITCH_API_ENVIRONMENT: `${BASE_URL}${API_V1}merchant/api-environment/switch`,
  
  // Beneficiary endpoints
  GET_BENEFICIARIES: `${BASE_URL}${API_V1}merchant/beneficiaries`,
  ADD_BENEFICIARY: `${BASE_URL}${API_V1}merchant/beneficiaries/add`,
  GET_BENEFICIARY_DETAIL: `${BASE_URL}${API_V1}merchant/beneficiaries`,
  DELETE_BENEFICIARY: `${BASE_URL}${API_V1}merchant/beneficiaries`,
  
  // Banks endpoints
  GET_BANKS: `${BASE_URL}${API_V1}merchant/banks`,
  RESOLVE_ACCOUNT: `${BASE_URL}${API_V1}merchant/banks/resolve-account`,
  
  // Change Password endpoint
  CHANGE_PASSWORD: `${BASE_URL}${API_V1}merchant/auth/change-password`,
  
  // Notification Settings endpoints
  GET_NOTIFICATION_SETTINGS: `${BASE_URL}${API_V1}merchant/notifications/settings`,
  UPDATE_NOTIFICATION_SETTINGS: `${BASE_URL}${API_V1}merchant/notifications/settings`,
  
  // Webhook endpoints
  GET_WEBHOOKS: `${BASE_URL}${API_V1}webhook/settings`,
  ADD_WEBHOOK: `${BASE_URL}${API_V1}webhook/settings`,
  UPDATE_WEBHOOK: `${BASE_URL}${API_V1}webhook/settings`,
  DELETE_WEBHOOK: `${BASE_URL}${API_V1}webhook/settings`,
  
  // Wallet endpoints
  GET_WALLETS: `${BASE_URL}${API_V1}merchant/wallets`,
  GET_WALLET_DETAILS: `${BASE_URL}${API_V1}merchant/wallet/`,
  CREATE_WALLET: `${BASE_URL}${API_V1}merchant/wallet/create`,
  
  // Wallet funding endpoints
  GET_FUNDING_LOGS: `${BASE_URL}${API_V1}merchant/funding/logs`,
  
  // Generate statement endpoint
  GENERATE_STATEMENT: `${BASE_URL}${API_V1}merchant/wallets/transaction/logs/statement`,
  
  // Wallet details endpoint
  GET_WALLET_DETAILS: `${BASE_URL}${API_V1}merchant/wallet/`,
};

export { BASE_URL, API_V1 };
