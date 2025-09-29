import { useState, useCallback } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "johndoe@example.com",
      dateCreated: "2023-10-01",
      status: "Active",
      role: "User",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      dateCreated: "2023-09-15",
      status: "Active",
      role: "Admin",
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
