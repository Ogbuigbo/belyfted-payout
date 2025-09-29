"use client";

import React from "react";
import useGeneralNotification from "../_hooks/useGeneralNotification";

function GeneralNotification() {
  const { 
    notifications, 
    loading, 
    fetching, 
    error, 
    success, 
    setNotifications, 
    updateNotificationSettings,
    clearError,
    clearSuccess 
  } = useGeneralNotification();

  const handleCheckboxChange = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    
    // Clear success/error states when user makes changes
    if (success || error) {
      clearSuccess();
      clearError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map form data to API format
    const apiData = {
      login_alert: notifications.login_alert,
      promotional_emails: notifications.promotional_emails
    };

    const success = await updateNotificationSettings(apiData);
    
    if (success) {
      // Settings updated successfully
      console.log("Notification settings saved:", notifications);
    }
  };
  return (
    <div className="w-full bg-white rounded-xl py-[42px] flex justify-center items-center">
      <div className="max-w-[586px] w-full px-4">
        <h2 className="text-xl font-bold mb-8 text-[#303032]">
          General Notification
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Alert */}
          <div className="flex items-center">
            <div className="flex items-center h-5">
              <input
                id="loginAlert"
                name="loginAlert"
                type="checkbox"
                checked={notifications.login_alert}
                onChange={() => handleCheckboxChange("login_alert")}
                className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="loginAlert"
                className="text-sm font-medium cursor-pointer"
              >
                Login Alert
              </label>
            </div>
          </div>

          {/* Promotional Emails */}
          <div className="flex items-center">
            <div className="flex items-center h-5">
              <input
                id="promotionalEmails"
                name="promotionalEmails"
                type="checkbox"
                checked={notifications.promotional_emails}
                onChange={() => handleCheckboxChange("promotional_emails")}
                className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded  cursor-pointer"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="promotionalEmails"
                className="text-sm font-medium cursor-pointer"
              >
                Promotional Emails
              </label>
            </div>
          </div>

          {/* API Error */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-600">Notification settings updated successfully!</p>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading || fetching}
              className={`w-full py-4 px-4 rounded-lg text-white font-medium transition-colors ${
                loading || fetching
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#042656] hover:bg-blue-800 focus:outline-none"
              }`}
            >
              {loading ? "Saving Changes..." : fetching ? "Loading..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneralNotification;
