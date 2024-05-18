import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="bg-gray-100 px-0 2xl:px-10">
        <div className="container mx-auto py-12 px-5 md:px-0">
          <div className="md:flex md:items-center md:justify-between">
            {/* Left Side Content */}
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl font-bold text-blue-600 md:text-5xl lg:text-6xl mb-3">
                Welcome to IIT JU!
              </h1>
              <h4 className="text-2xl md:text-3xl font-semibold">
                Embrace innovation, explore posibilities.
              </h4>
              <p className="mt-3 text-base md:text-lg text-gray-600">
                Your description here. This can include features, benefits, or
                any other information you want to highlight.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="text-base text-white bg-blue-600 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-blue-500"
                >
                  Learn more
                </Link>
              </div>
            </div>
            {/* Right Side Image */}
            <div className="md:w-1/2">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  className="object-cover"
                  src={heroImg}
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
