import { useContext, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  // State for Menu Open

  const [isOpen, setIsOpen] = useState(false);

  // Function for Toggle Menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Get Logged in User info

  const { auth } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 py-5 px-5 md:px-0 2xl:px-10">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex justify-between items-center  w-full">
            <div className="mr-4">
              <Link to="/" className="text-white text-2xl font-bold">
                Alumni
              </Link>
            </div>
            <div className="hidden md:flex">
              <Link to="/" className="text-white ms-8">
                Home
              </Link>
              <Link to="/events" className="text-white ms-8">
                Events
              </Link>
              <Link to="/membership" className="text-white ms-8">
                Membership
              </Link>
              <Link to="/networking" className=" text-white  ms-8">
                Networiking
              </Link>
              <Link to="/contact" className="text-white ms-8">
                Contact Us
              </Link>
              {auth?.user ? (
                <Link to="/profile" className="text-white ms-8">
                  Profile
                </Link>
              ) : (
                <span>
                  <Link to="/login" className="text-white ms-8">
                    Login
                  </Link>
                  <span className="text-white px-2">/</span>
                  <Link to="/register" className="text-white">
                    Register
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <FaXmark
                className="block h-6 w-6 text-white cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBarsStaggered
                className="block h-6 w-6 text-white cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            {/* Mobile menu links */}
            <Link to="/" className="block text-white py-2">
              Home
            </Link>
            <Link to="/events" className="block text-white py-2">
              Events
            </Link>
            <Link to="/membership" className="block text-white py-2">
              Membership
            </Link>
            <Link to="/networking" className="block text-white py-2">
              Networiking
            </Link>
            <Link to="/contact" className="block text-white py-2">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
