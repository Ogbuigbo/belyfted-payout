import React, { useState } from "react";
import ThickDropDownIcon from "../../../public/assets/icons/thickDropDownIcon";
import SkipLeftIcon from "../../../public/assets/icons/skipLeftIcon";
import SkipRightIcon from "../../../public/assets/icons/skipRightIcon";
import LeftIcon from "../../../public/assets/icons/LeftIcon";
import RightIcon from "../../../public/assets/icons/rightIcon";

const UserManagementTable = ({ initialUsers, title = "Swap funds" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users] = useState(initialUsers);

  // Calculate pagination values
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalUsers);
  const currentUsers = users.slice(startIndex, endIndex);

  // Handle page changes
  const goToFirstPage = () => setCurrentPage(1);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="user-management-container">
      <h2 className="table-title">{title}</h2>
      <div className="table-container ">
        <table className="user-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Date Created</th>
              <th>Status</th>
              <th>Role</th>
              <th className="actions-column">
                <button className="icon-button">
                  <span className="three-dots">⋮</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.dateCreated}</td>
                <td>
                  <span
                    className={`status-badge ${
                      user.status === "Active"
                        ? user.role === "Admin"
                          ? "status-admin"
                          : "status-active"
                        : "status-inactive"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.role}</td>
                <td className="actions-column">
                  <button className="icon-button">
                    <span className="three-dots">⋮</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <div className="rows-per-page">
          <span>Rows per page:</span>
          <p>
            10
            <ThickDropDownIcon />
          </p>
        </div>

        <div className="pagination-info">
          {startIndex + 1}-{endIndex} of {totalUsers}
        </div>

        <div className="pagination-buttons">
          <button
            className="pagination-button"
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            <SkipLeftIcon />
          </button>
          <button
            className="pagination-button"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            <LeftIcon />
          </button>
          <button
            className="pagination-button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <RightIcon />
          </button>
          <button
            className="pagination-button"
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
          >
            <SkipRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementTable;
