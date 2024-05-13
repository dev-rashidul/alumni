import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-5 md:px-0">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Section */}
          <div className="flex-1 lg:pr-20">
            <h2 className="text-lg md:text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae explicabo, nisi quibusdam quos nobis laudantium iste tempore incidunt, nemo laborum, magnam dolores culpa odio totam commodi odit ipsa. Sed tempora illo qui necessitatibus ab architecto facere rem ut, praesentium alias dolor doloribus culpa corporis provident corrupti, assumenda, mollitia temporibus asperiores.
            </p>
          </div>
          {/* Navigation Menu */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/events" className="hover:text-gray-400">
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/membership" className="hover:text-gray-400">
                  Membership
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/networking" className="hover:text-gray-400">
                  Networking
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="/" className="text-xl hover:text-gray-400">
                <BiLogoFacebook/>
              </Link>
              <Link to="/" className="text-xl hover:text-gray-400">
                <BiLogoGithub/>
              </Link>
              <Link to="/" className="text-xl hover:text-gray-400">
                <BiLogoLinkedin/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
