const Benefit = () => {
  return (
    <section id="Benfit" className="bg-gray-100 py-12 px-5 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-12">Benefits</h2>
      </div>
      <div className="container mx-auto flex items-center flex-wrap">
        {/* Left side content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-10">
          <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-gray-700 mb-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 mb-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              aspernatur officia autem placeat dolorum sunt, dolores recusandae
              eaque quod adipisci dolorem magnam sed omnis animi dicta! Magni
              nesciunt voluptatum enim iusto accusamus voluptatem omnis dolorum
              ad maxime placeat libero animi, natus quod, neque obcaecati
              adipisci tenetur molestiae ex sapiente similique!
            </p>
          </ul>
        </div>
        {/* Right side image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Benefits"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto flex items-center flex-col-reverse md:flex-row flex-wrap py-16">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Benefits"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Right side content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 pl-0 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-gray-700 mb-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 mb-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            aspernatur officia autem placeat dolorum sunt, dolores recusandae
            eaque quod adipisci dolorem magnam sed omnis animi dicta! Magni
            nesciunt voluptatum enim iusto accusamus voluptatem omnis dolorum ad
            maxime placeat libero animi, natus quod, neque obcaecati adipisci
            tenetur molestiae ex sapiente similique!
          </p>
        </div>
      </div>
      <div className="container mx-auto flex items-center flex-wrap">
        {/* Left side content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0  pr-0 md:pr-10">
          <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-gray-700 mb-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 mb-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            aspernatur officia autem placeat dolorum sunt, dolores recusandae
            eaque quod adipisci dolorem magnam sed omnis animi dicta! Magni
            nesciunt voluptatum enim iusto accusamus voluptatem omnis dolorum ad
            maxime placeat libero animi, natus quod, neque obcaecati adipisci
            tenetur molestiae ex sapiente similique!
          </p>
        </div>
        {/* Right side image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Benefits"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefit;
