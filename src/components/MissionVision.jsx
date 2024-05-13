import { Link } from "react-router-dom";

const MissionVision = () => {
  return (
    <section id="Mission">
      <div className="bg-gray-200 py-20 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Mission Section */}
            <div className="md:pr-10">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-black mb-6">
                To empower individuals to unleash their full potential by
                providing innovative solutions and fostering growth in our
                communities.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 "
              >
                Learn More
              </Link>
            </div>
            {/* Vision Section */}
            <div className="md:pl-10">
              <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-black mb-6">
                To create a world where everyone has access to opportunities and
                resources, where diversity is celebrated, and where every
                individual can thrive.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
