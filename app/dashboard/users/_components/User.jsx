"use client";

import React, { useState, useMemo } from "react";
import { Table } from "../../../_components/_table/Table";
import Search from "../../../_components/Search";
import NavFilter from "../../../_components/NavFilter";
import useUsers from "../_hooks/useUsers";
import Sidebar from "../../../_components/_sidebar/Sidebar";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

function User() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    id: "team",
    label: "Manage Team member",
  });
  const { users, addUser, removeUser, restrictUser, editUser, filterUsers } =
    useUsers();
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // New state to track open menu
  const [openMenuId, setOpenMenuId] = useState(null);

  const navItems = [
    { id: "team", label: "Manage Team member" },
    { id: "roles", label: "Manage Roles" },
  ];

  const handleAddUser = (userData) => {
    addUser(userData);
    setIsAddUserOpen(false);
  };

  const handleEditUser = (userData) => {
    editUser(selectedUser.id, userData);
    setIsEditUserOpen(false);
    setSelectedUser(null);
  };

  const openEditUser = (user) => {
    setSelectedUser(user);
    setIsEditUserOpen(true);
  };

  const columns = [
    { key: "fullName", label: "Full Name" },
    { key: "email", label: "Email Address" },
    { key: "dateCreated", label: "Date Created" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    { key: "role", label: "Role" },
    {
      key: "actions",
      label: "",
      render: (row) => (
        <div className="relative">
          <button
            className="icon-button"
            onClick={() => setOpenMenuId(openMenuId === row.id ? null : row.id)}
          >
            <span className="three-dots">⋮</span>
          </button>
          {openMenuId === row.id && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  onClick={() => {
                    removeUser(row.id);
                    setOpenMenuId(null);
                  }}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  Remove User
                </button>
                <button
                  onClick={() => {
                    restrictUser(row.id);
                    setOpenMenuId(null);
                  }}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  {row.status === "Active" ? "Restrict User" : "Activate User"}
                </button>
                <button
                  onClick={() => {
                    openEditUser(row);
                    setOpenMenuId(null);
                  }}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  const filteredUsers = useMemo(() => {
    return filterUsers(searchQuery);
  }, [filterUsers, searchQuery]);

  return (
    <div className="md:space-y-6 space-y-4 h-screen overflow-hidden">
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsAddUserOpen(true)}
          className="md:px-6 md:py-[14px] px-4 py-2 bg-[#042656] text-white text-sm rounded-lg hover:bg-[#031c40] transition-colors"
        >
          Add User
        </button>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center items-start">
        <NavFilter
          items={navItems}
          activeItem={activeFilter}
          onItemClick={setActiveFilter}
        />
        <Search
          placeholder="Search"
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      <div className="overflow-x-scroll h-full">
        <Table
          columns={columns}
          data={filteredUsers}
          loading={false}
          headerBgColor="!bg-[#E6E9EE]"
        />
      </div>

      {/* Add User Sidebar */}
      <Sidebar
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        title="Add User"
      >
        <AddUserForm onSubmit={handleAddUser} />
      </Sidebar>

      {/* Edit User Sidebar */}
      <Sidebar
        isOpen={isEditUserOpen}
        onClose={() => setIsEditUserOpen(false)}
        title="Edit User"
      >
        <EditUserForm user={selectedUser} onSubmit={handleEditUser} />
      </Sidebar>
    </div>
  );
}

export default User;
