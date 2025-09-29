"use client";

import React from "react";

const NotificationPanel = ({ isOpen, onClose }) => {
  const notifications = [
    {
      type: "money_added",
      title: "Money Added Successfully",
      time: "3 hours ago",
      amount: "+$ 12,000",
    },
    {
      type: "transfer",
      title: "Transfer Made Successfully",
      time: "4 hours ago",
      amount: "-$ 12,000",
    },
    {
      type: "money_added",
      title: "Money Added Successfully",
      time: "5 hours ago",
      amount: "+$ 500",
    },
    {
      type: "conversion",
      title: "Conversion Made Successfully",
      time: "31 May, 07:34 AM",
      amount: "$12,000",
    },
    {
      type: "transfer",
      title: "Transfer Made Successfully",
      time: "31 May, 07:34 AM",
      amount: "+$ 1,000",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[998]" onClick={onClose} />
      )}

      {/* Notification Panel */}
      <div
        className={`fixed top-0 right-0 w-[400px] h-full bg-white z-[999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 text-white bg-[#002855] rounded-lg">
              System
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Notifications
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Campaigns
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Today</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.type === "money_added"
                          ? "bg-green-100"
                          : notification.type === "transfer"
                            ? "bg-blue-100"
                            : "bg-orange-100"
                      }`}
                    >
                      {notification.type === "money_added"
                        ? "💰"
                        : notification.type === "transfer"
                          ? "↗️"
                          : "🔄"}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {notification.title}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`font-medium ${
                      notification.amount.startsWith("+")
                        ? "text-green-600"
                        : notification.amount.startsWith("-")
                          ? "text-red-600"
                          : "text-gray-900"
                    }`}
                  >
                    {notification.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Yesterday</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    🔄
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      Conversion Made Successfully
                    </p>
                    <p className="text-gray-500 text-xs">31 May, 07:34 AM</p>
                  </div>
                </div>
                <span className="font-medium text-gray-900">$12,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
