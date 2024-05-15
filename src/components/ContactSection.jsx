import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="Contact" className="bg-gray-100 py-12 px-5 md:px-0">
      <div className="container mx-auto flex flex-wrap">
        {/* Contact Info */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Contact Info</h2>
            <p className="text-gray-600">123 Main St, City, Country</p>
            <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a> 
            <p className="text-gray-600">Mobile Number : <a href="tel:+8801832546798" className="text-blue-500">+880 1832546798</a></p>
            <p className="text-gray-600">WhatsApp: <a href="tel:+8801832546798" className="text-blue-500">+880 1832546798</a></p>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="w-full md:w-1/2 flex md:justify-center">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Social Media Links</h2>
            <div className="flex">
              <Link
                to="/"
                className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full transition-all duration-300 hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoFacebook className="text-white text-lg"/>
              </Link>
              <Link
                to="/"
                className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full transition-all duration-300 hover:bg-blue-500 ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
               <BiLogoLinkedin className="text-white text-lg"/>
              </Link>
              <Link
                to="/"
                className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full transition-all duration-300 hover:bg-blue-500 ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
               <BiLogoGithub className="text-white text-lg"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
