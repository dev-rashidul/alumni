import MentorCard from "./MentorCard";

const Mentorship = () => {
  const mentors = [
    {
      name: "John Doe",
      title: "CEO",
      company: "ABC Inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/120x120",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "XYZ Corp.",
      desc:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/120x120",
    },
    {
      name: "Alice Johnson",
      title: "COO",
      company: "123 Co.",
      desc:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/120x120",
    },
    {
      name: "Bob Brown",
      title: "CFO",
      company: "456 Corp.",
      desc:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "https://via.placeholder.com/120x120",
    },
  ];

  return (
    <section id="Mentoship" className="bg-gray-100 py-12 px-5 md:px-0 2xl:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Mentors</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {mentors.map((story, index) => (
          <MentorCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

export default Mentorship;
