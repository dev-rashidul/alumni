import Table from "./Table";

const Users = () => {
  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      batch: "2022",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      batch: "2023",
      status: "Inactive",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      batch: "2021",
      status: "Active",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      batch: "2024",
      status: "Active",
    },
  ];

  return (
    <section id="Members">
      <div className="container mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Members</h2>
        <div className="mx-5 md:mx-0">
          <Table data={data} />
        </div>
      </div>
    </section>
  );
};

export default Users;
