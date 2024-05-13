import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: [
        { url: "https://facebook.com/", icon: <BiLogoFacebook /> },
        { url: "https://linkedin.com/", icon: <BiLogoLinkedin /> },
        { url: "https://github.com/", icon: <BiLogoGithub /> },
      ],
    },
    {
      name: "John Doe",
      designation: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: [
        { url: "https://facebook.com/", icon: <BiLogoFacebook /> },
        { url: "https://linkedin.com/", icon: <BiLogoLinkedin /> },
        { url: "https://github.com/", icon: <BiLogoGithub /> },
      ],
    },
    {
      name: "John Doe",
      designation: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: [
        { url: "https://facebook.com/", icon: <BiLogoFacebook /> },
        { url: "https://linkedin.com/", icon: <BiLogoLinkedin /> },
        { url: "https://github.com/", icon: <BiLogoGithub /> },
      ],
    },
    {
      name: "John Doe",
      designation: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: [
        { url: "https://facebook.com/", icon: <BiLogoFacebook /> },
        { url: "https://linkedin.com/", icon: <BiLogoLinkedin /> },
        { url: "https://github.com/", icon: <BiLogoGithub /> },
      ],
    },
    {
      name: "John Doe",
      designation: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: [
        { url: "https://facebook.com/", icon: <BiLogoFacebook /> },
        { url: "https://linkedin.com/", icon: <BiLogoLinkedin /> },
        { url: "https://github.com/", icon: <BiLogoGithub /> },
      ],
    },
    // Add more team members here
  ];

  return (
    <section id="Team" className="py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-12">Our Team</h2>
      <div className="flex flex-wrap justify-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="m-4">
          <TeamMemberCard {...member} />
        </div>
      ))}
    </div>
    </section>
  );
};

export default Team;
