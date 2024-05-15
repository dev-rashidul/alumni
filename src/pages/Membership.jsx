import { Link } from "react-router-dom";
import Benefit from "../components/Benefit";
import SuccessStory from "../components/SuccessStory";
import Users from "../components/Users";

const Membership = () => {
  return (
    <>
      {/* Benefit Section JSX Start */}

      <Benefit />

      {/* Benefit Section JSX End */}

      {/* Success Story Section JSX Start */}

      <SuccessStory />

      {/* Success Story Section JSX End */}

      {/* Users Section JSX Start */}

      <Users />

      {/* Users Section JSX End */}

      {/* Join Us Button */}

      <div className="registration-btn text-center pb-12">
        <Link
          to="/contact"
          className="text-md text-white bg-blue-700 py-3 px-6 rounded-md transition-all duration-300 hover:bg-blue-500"
        >
          Join Us
        </Link>
      </div>
    </>
  );
};

export default Membership;
