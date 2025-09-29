"use client";

import { useState } from "react";
import { useAuth } from "./_hooks/useAuth";
import LeftSidebar from "../_components/_sidebar/LeftSidebar";
import TopNav from "../_components/TopNav";

export default function DashboardLayout({ children }) {
  const { isLoading, kybStatus } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isLoading || kybStatus !== "REVIEW") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px]">
      <LeftSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="lg:pl-60  Bigmd:pl-[245px]">
        <TopNav onMenuClick={toggleSidebar} />
        <main className="p-4 md:p-8 ">{children}</main>
      </div>
    </div>
  );
}
