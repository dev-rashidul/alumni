import { useEffect, useState } from "react";
import Table from "./Table";

const Users = () => {
  // Users State
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section id="Members">
      <div className="container mx-auto py-12 2xl:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Members</h2>
        <div className="mx-5 md:mx-0">
          <Table users={users} />
        </div>
      </div>
    </section>
  );
};

export default Users;
