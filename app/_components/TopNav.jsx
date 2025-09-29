"use client";

import React, { useState } from "react";
import NotificationIcon from "../../public/assets/icons/notificationIcon";
import SettingIcon from "../../public/assets/icons/settingsIcon";
import Image from "next/image";
import DropdownIcon from "../../public/assets/icons/dropdownIcon";
import NewDropDownIcon from "../../public/assets/icons/newDropDownIcon";
import NotificationPanel from "./NotificationPanel";
import Link from "next/link";
import { useTopNav } from "../_hooks/useTopNav";

const TopNav = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const {
    isLive,
    loading,
    checkingStatus,
    error,
    switchApiEnvironment,
  } = useTopNav();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEnvironmentToggle = async () => {
    await switchApiEnvironment();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-white border-b border-[#D9D9D9] z-40 px-6 flex items-center justify-between lg:pl-[280px]">
        <h1 className="hidden lg:block text-xl font-semibold text-[#303032]">
          Overview
        </h1>
        <div className="lg:hidden w-full">
          <button
            className="text-2xl w-full flex justify-start text-gray-600 hover:text-gray-800"
            onClick={onMenuClick}
          >
            ☰
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Live Status Toggle */}
          <div className="hidden md:flex items-center space-x-2 border border-[#EEEEEE] p-2 rounded-lg">
            <div
              className={`w-[36px] h-[22px] rounded-full cursor-pointer transition-colors duration-200 flex items-center px-1 ${
                loading || checkingStatus ? "opacity-50 cursor-not-allowed" : ""
              } ${
                isLive ? "bg-[#27AE60]" : "bg-gray-300"
              }`}
              onClick={loading || checkingStatus ? undefined : handleEnvironmentToggle}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 transform ${
                  isLive ? "translate-x-3" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-sm font-medium text-[#303032]">
              {checkingStatus ? "Checking..." : loading ? "Switching..." : isLive ? "Live" : "Test"}
            </span>
          </div>

          {/* Action Buttons */}
          <button
            className="p-2 hover:bg-gray-100  relative border border-[#EEEEEE] rounded-lg"
            onClick={() => setIsNotificationOpen(true)}
          >
            <NotificationIcon />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings Button */}
          <Link href="/dashboard/settings">
          <button className="p-2 hover:bg-gray-100 border  border-[#EEEEEE] rounded-lg">
            <SettingIcon />
          </button>
          </Link>

          {/* User Profile */}
          <div className="relative border border-[#EEEEEE] p-1 rounded-lg">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="relative w-[28px] h-[28px] rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1745991507/Ellipse_143_wq7akm.png"
                  alt="user-image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-[#303032]">
                  John Oluwaseyi
                </div>
                <div className="text-xs text-gray-500">Profile</div>
              </div>
              <div className="hidden md:block">
                <NewDropDownIcon />
              </div>
              <div className="md:hidden flex items-center text-sm font-medium">
                JO
                <DropdownIcon
                  className={`ml-1 transform transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <NotificationPanel
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
};

export default TopNav;
