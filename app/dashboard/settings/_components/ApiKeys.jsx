"use client";

import { useState } from "react";
import { useApiKey } from "../_hooks/useApiKey";


const Check = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ApiKeys = () => {
  const { 
    apiKeys, 
    loading, 
    fetching,
    error, 
    success, 
    generateApiCredentials, 
    fetchApiCredentials,
    copyToClipboard 
  } = useApiKey();

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (field) => {
    const success = await copyToClipboard(field);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleGenerate = () => {
    generateApiCredentials();
  };

  const InputField = ({ label, field, placeholder }) => (
    <div className="">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={apiKeys[field]}
          readOnly
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12  border border-gray-300 rounded-xl shadow-sm focus:outline-none text-gray-900 placeholder-gray-400 transition-colors cursor-not-allowed"
        />
        <button
          onClick={() => handleCopy(field)}
          disabled={!apiKeys[field]}
          className="absolute right-0 top-1/2 h-[98%] w-[49px] transform -translate-y-1/2 p-2 rounded-r-xl bg-[#E4E2E4] hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none "
          title="Copy to clipboard"
        >
          {copiedField === field ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.5"
                y="3"
                width="10"
                height="14"
                rx="3"
                stroke="#5E5E60"
                stroke-width="1.5"
              />
              <path
                d="M17.999 7.40234C18.8957 7.92106 19.499 8.89057 19.499 10.001V18.001C19.499 19.6579 18.1559 21.001 16.499 21.001H12.499C11.3886 21.001 10.4191 20.3977 9.90039 19.501"
                stroke="#5E5E60"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-xl py-[42px] flex justify-center items-center">
      <div className="max-w-[586px] w-full px-4">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-bold mb-2">API Keys</h2>
          {/* <button
            onClick={fetchApiCredentials}
            disabled={fetching}
            className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-700 rounded-lg transition-colors duration-200"
            title="Refresh API credentials"
          >
            {fetching ? (
              <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            {fetching ? 'Loading...' : 'Refresh'}
          </button> */}
        </div>

        {/* Input Fields */}
        <div className="space-y-8">
          {fetching && !apiKeys.clientId && !apiKeys.clientSecret && !apiKeys.encryptionKey ? (
            // Show loading skeleton when fetching for the first time
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <InputField
                label="Client ID"
                field="clientId"
                placeholder="Your client ID will appear here"
              />

              <InputField
                label="Client Secret"
                field="clientSecret"
                placeholder="Your client secret will appear here"
              />

              <InputField
                label="Encryption Key"
                field="encryptionKey"
                placeholder="Your encryption key will appear here"
              />
            </>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-[#042656] mt-8 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </div>
          ) : (
            "Generate API Credentials"
          )}
        </button>

        {/* Success Message */}
        {success && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              ✅ API credentials generated successfully!
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">
              ❌ {error}
            </p>
          </div>
        )}

        {/* Copy Success Message */}
        {copiedField && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800">
              {copiedField === "clientId" && "Client ID copied to clipboard!"}
              {copiedField === "clientSecret" &&
                "Client Secret copied to clipboard!"}
              {copiedField === "encryptionKey" &&
                "Encryption Key copied to clipboard!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiKeys;
