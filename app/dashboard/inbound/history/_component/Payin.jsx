"use client";

import NavFilter from "../../../../_components/NavFilter";
import Search from "../../../../_components/Search";
import React, { useMemo, useState } from "react";
import usePayin from "../_hooks/usePayin";
import ExportItem from "../../../../_components/ExportItem";
import PayinTable from "./PayinTable";

function Payin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    id: "team",
    label: "Manage Team member",
  });
  const { filterUsers } = usePayin();

  const navItems = [
    { id: "team", label: "In-Bound History" },
    { id: "roles", label: "Reload Wallet History" },
  ];

  const filteredUsers = useMemo(() => {
    return filterUsers(searchQuery);
  }, [filterUsers, searchQuery]);
  return (
    <div className="md:space-y-6 space-y-4 h-screen overflow-hidden lg:pl-4">
      <div className="flex justify-start items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#303032]">History</h1>
          <p className="font-semibold text-[#777779] leading-8 mt-[12px]">
            View all your pay in history
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center items-start">
        <NavFilter
          items={navItems}
          activeItem={activeFilter}
          onItemClick={setActiveFilter}
        />
        <div className="flex flex-row justify-end gap-4 items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-6 h-6 rounded !border-[#89939E] border"
            />
            <label
              htmlFor="checkbox"
              className="text-xs md:text-sm font-medium  text-[#777779]"
            >
              Show subaccounts
            </label>
          </div>
          <Search
            placeholder="Search"
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <ExportItem />
        </div>
      </div>

      <div className="overflow-x-scroll h-full">
        <PayinTable data={filteredUsers} loading={false} />
      </div>
    </div>
  );
}

export default Payin;
