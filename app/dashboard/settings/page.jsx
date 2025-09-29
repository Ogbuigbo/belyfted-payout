"use client";

import { useState } from "react";
import SettingsTabs from "./_components/SettingsTab";
import ProfileSettings from "./_components/ProfileSettings";
import ChangePassword from "./_components/ChangePassword";
import GeneralNotification from "./_components/GeneralNotification";
import InBoundPaymentSettings from "./_components/InboundPaymentSettings";
import OutBoundPayment from "./_components/OutboundPaymentSettings";
import ApiKeys from "./_components/ApiKeys";
import TwoFASettings from "./_components/_2FA/TwoFASettings";
import Webhook from "./_components/_webhook&whitelist/Webhook";

// Import other setting components as needed

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "password":
        return <ChangePassword />;
      case "2fa":
        return <TwoFASettings />;
      case "api-keys":
        return <ApiKeys />;
      case "webhook":
        return <Webhook />;
      case "out-bound-payment":
        return <OutBoundPayment />;
      case "in-bound-payment":
        return <InBoundPaymentSettings />;
      case "notifications":
        return <GeneralNotification />;
      default:
        return <div>API Keys content</div>;
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="">
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
