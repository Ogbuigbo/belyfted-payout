const tabs = [
  { id: "profile", label: "My Profile" },
  { id: "password", label: "Password" },
  { id: "2fa", label: "2FA" },
  { id: "api-keys", label: "API Keys" },
  { id: "webhook", label: "Webhook & IP Whitelisting" },
  { id: "out-bound-payment", label: "Out-Bound Payment" },
  { id: "in-bound-payment", label: "In-Bound Payment" },
  { id: "notifications", label: "General Notification" },
];

export default function SettingsTabs({ activeTab, onTabChange }) {
  return (
    <div className="w-full">
      <nav className="flex md:space-x-6 space-x-2 md:px-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
              activeTab === tab.id
                ? "border-[#F39C12] text-[#F39C12]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
