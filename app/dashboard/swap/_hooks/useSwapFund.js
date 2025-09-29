import { useState, useCallback } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      transactionDate: "2023-10-01",
      transactionRef: "1234567890",
      amountSwapped: "1000",
      exchangeRate: "100",
      status: "Active",
      settlementDate: "2023-10-01",
    },
    {
      id: 2,
      transactionDate: "2023-10-01",
      transactionRef: "1234567890",
      amountSwapped: "1000",
      exchangeRate: "100",
      status: "Processing",
      settlementDate: "2023-10-01",
    },
  ]);

  const addUser = useCallback((user) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
  }, []);

  const removeUser = useCallback((userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  }, []);

  const restrictUser = useCallback((userId) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Restricted" : "Active",
            }
          : user,
      ),
    );
  }, []);

  const editUser = useCallback((userId, updatedData) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user,
      ),
    );
  }, []);

  const filterUsers = useCallback(
    (searchQuery) => {
      if (!searchQuery) return users;

      const query = searchQuery.toLowerCase();
      return users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.role.toLowerCase().includes(query),
      );
    },
    [users],
  );

  return {
    users,
    addUser,
    removeUser,
    restrictUser,
    editUser,
    filterUsers,
  };
};

export default useUsers;
