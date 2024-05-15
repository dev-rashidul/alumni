/* eslint-disable react/prop-types */
const MentorCard = ({ name, title, company, desc, imageUrl }) => {
    return (
      <div className="w-full rounded overflow-hidden shadow-lg bg-white mx-2 mb-4">
        <img className="w-40 h-40 mx-auto rounded-full mt-5" src={imageUrl} alt="Person" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">
            {title} at {company}
          </p>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </div>
    );
  };
  
  export default MentorCard;
  