"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../../../public/assets/icons/homeIcon";
import WalletIcon from "../../../public/assets/icons/walletIcon";
import ProfileIcon from "../../../public/assets/icons/profileIcon";
import MoneySendIcon from "../../../public/assets/icons/moneysendIcon";
import MoneyRecieveIcon from "../../../public/assets/icons/moneyrecieveIcon";
import ProfileUserIcon from "../../../public/assets/icons/profileUserIcon";
import SidebarSettingIcon from "../../../public/assets/icons/sidebarSettingIcon";
import SwapIcon from "../../../public/assets/icons/swapIcon";
import HelpIcon from "../../../public/assets/icons/helpIcon";
import LogoutIcon from "../../../public/assets/icons/logoutIcon";
import LogoutModal from "../../(auth)/_components/LogoutModal";
import useLogout from "../../(auth)/_hooks/useLogout";

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const { logout, loading } = useLogout();
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarItems = [
    {
      icon: <HomeIcon />,
      label: "Home",
      path: "/dashboard",
      style: { color: "#E6E9EE" },
    },
    {
      icon: <WalletIcon />,
      label: "Wallet",
      path: "/dashboard/wallet",
      style: { color: "#E6E9EE" },
    },
    // {
    //   icon: <ProfileIcon />,
    //   label: "My Profile",
    //   path: "/dashboard/profile",
    //   style: { color: "#E6E9EE" },
    // },
    {
      icon: <MoneyRecieveIcon />,
      label: "In-bound Payments",
      path: "/dashboard/inbound/history",
      style: { color: "#E6E9EE" },
      submenu: [
        { label: "History", path: "/dashboard/inbound/history" },
        {
          label: "Virtual Account",
          path: "/dashboard/inbound/virtual-account",
        },
        { label: "Payment Links", path: "/dashboard/inbound/payment-links" },
        { label: "Chargebacks", path: "/dashboard/inbound/chargebacks" },
        { label: "Refunds", path: "/dashboard/inbound/refunds" },
      ],
    },
    {
      icon: <MoneySendIcon />,
      label: "Out-bound Payments",
      path: "/dashboard/outbound/beneficiary",
      style: { color: "#E6E9EE" },
      submenu: [
        { label: "Beneficiary", path: "/dashboard/outbound/beneficiary" },
        {
          label: "Make Payout",
          path: "/dashboard/outbound/make-payout",
        },
        { label: "History", path: "/dashboard/outbound/history" },
      ],
    },
    {
      icon: <SwapIcon />,
      label: "Swap Funds",
      path: "/dashboard/swap",
      style: { color: "#E6E9EE" },
    },
    {
      icon: <ProfileUserIcon />,
      label: "Connections",
      path: "/dashboard/users",
      style: { color: "#E6E9EE" },
    },
    {
      icon: <SidebarSettingIcon />,
      label: "Settings",
      path: "/dashboard/settings",
      style: { color: "#E6E9EE" },
    },
  ];

  const bottomItems = [
    {
      icon: <HelpIcon />,
      label: "Help",
      path: "/dashboard/help",
      style: { color: "#E6E9EE" },
    },
    {
      icon: <LogoutIcon />,
      label: "Log out",
      path: "/logout",
      style: { color: "#E6E9EE" },
    },
  ];

  const handleItemClick = (index, hasSubmenu) => {
    if (window.innerWidth < 768) {
      onClose();
    }
    if (hasSubmenu) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setOpenDropdown(null);
    }
  };

  // Helper to check if a path is active (including subroutes)
  const isPathActive = (path) => {
    if (path === "/dashboard") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Helper to get the default submenu item for parent paths
  const getDefaultSubmenuPath = (parentPath) => {
    if (parentPath === "/dashboard/inbound/history") {
      return "/dashboard/inbound/history";
    }
    if (parentPath === "/dashboard/outbound/beneficiary") {
      return "/dashboard/outbound/beneficiary";
    }
    return parentPath;
  };

  // Helper to check if any submenu is active
  const isSubmenuActive = (submenu) =>
    submenu && submenu.some((sub) => isPathActive(sub.path));

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo">
              <Link href="/dashboard">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1745992320/Logo_4_rfabjo.png"
                  alt="logo"
                  height={38}
                  width={115}
                />
              </Link>
            </div>
          </div>
          <button className="close-button hide-on-desktop" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {/* Main navigation items */}
          <ul className="nav-list">
            {sidebarItems.map((item, index) => {
              const isActive = isPathActive(item.path);
              const hasSubmenu = !!item.submenu;
              const isDropdownOpen = openDropdown === index;
              const submenuActive = isSubmenuActive(item.submenu);
              const isInbound = item.label === "In-bound Payments";
              const isOutbound = item.label === "Out-bound Payments";
              return (
                <li
                  key={index}
                  className={`nav-item ${isInbound ? "pr-4" : ""}  ${isOutbound ? "pr-1" : ""}`}
                  style={{ ...item.style }}
                >
                  {hasSubmenu ? (
                    <Link
                      href={item.path}
                      className={`nav-link w-full flex items-center justify-between ${isDropdownOpen || submenuActive || isActive ? "active" : ""}`}
                      onClick={(e) => {
                        handleItemClick(index, true);
                      }}
                    >
                      <span className={`flex items-center flex-1 min-w-0`}>
                        <span
                          className={`nav-icon ${isInbound || isOutbound ? "w-8 " : ""}`}
                        >
                          {React.cloneElement(item.icon, { 
                            isActive: isDropdownOpen || submenuActive || isActive 
                          })}
                        </span>
                        <span
                          className={`nav-label ml-2${isInbound || isOutbound ? " flex-1 ml-0 whitespace-nowrap" : ""}`}
                        >
                          {item.label}
                        </span>
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke={isDropdownOpen ? "#303032" : "#E6E9EE"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => handleItemClick(index, false)}
                    >
                      <p className={`nav-link ${isActive ? "active" : ""}`}>
                        <span className="nav-icon">
                          {React.cloneElement(item.icon, { isActive })}
                        </span>
                        <span className="nav-label ml-2">{item.label}</span>
                      </p>
                    </Link>
                  )}
                  {hasSubmenu && isDropdownOpen && (
                    <ul className="ml-14 mt-2 space-y-3">
                      {item.submenu.map((sub, subIdx) => {
                        // Check if this submenu item should be highlighted
                        const isSubActive = isPathActive(sub.path) || 
                          (isActive && sub.path === getDefaultSubmenuPath(item.path));
                        
                        return (
                          <li key={subIdx}>
                            <Link href={sub.path}>
                              <span
                                className={`block py-4 nav-label  px-2 rounded ${isSubActive ? "text-[#F39C12] font-semibold" : "text-white"} hover:text-[#F39C12]`}
                              >
                                {sub.label}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Bottom navigation items (Help & Logout) */}
          <ul className="nav-list nav-list-bottom !mt-[80px]">
            {bottomItems.map((item, index) => {
              const isActive = isPathActive(item.path);
              if (item.label === "Log out") {
                return (
                  <li
                    key={index}
                    className="nav-item pr-4"
                    onClick={handleItemClick}
                  >
                    <button
                      className={`nav-link w-full text-left flex items-center`}
                      onClick={() => setShowModal(true)}
                    >
                      <span className="nav-icon">
                        {React.cloneElement(item.icon, { isActive: false })}
                      </span>
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="nav-item"
                    style={{ ...item.style }}
                    onClick={handleItemClick}
                  >
                    <Link href={item.path}>
                      <p className={`nav-link ${isActive ? "active" : ""}`}>
                        <span className="nav-icon">
                          {React.cloneElement(item.icon, { isActive })}
                        </span>
                        <span className="nav-label">{item.label}</span>
                      </p>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </aside>

      {/* Desktop sidebar spacer */}
      <div className="sidebar-spacer hide-on-mobile" />

      <LogoutModal
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={logout}
        loading={loading}
      />
    </>
  );
};

export default Sidebar;
