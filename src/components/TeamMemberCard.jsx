/* eslint-disable react/prop-types */
const TeamMemberCard = ({
  name,
  designation,
  description,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white pt-8">
      <img className="w-30 h-30 m-auto rounded-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{designation}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="inline-block bg-gray-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;
