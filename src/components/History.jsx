const History = () => {
  return (
    <section id="History">
      <div className="bg-gray-900 text-white py-20 px-5 md:px-0 2xl:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side Content */}
            <div className="md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <p className="text-base md:text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget lorem ac lacus dignissim scelerisque. Vivamus commodo justo
                vitae libero vulputate, a vestibulum enim eleifend. Duis eget
                nisi ut nisi congue eleifend vitae id massa. Nulla eget nibh
                euismod, lacinia lorem ut, efficitur felis.
              </p>
              <p className="text-base md:text-lg mb-6">
                In eget turpis vel sem rutrum congue. In nec ligula in diam
                fringilla fermentum. Maecenas eleifend, lorem quis vestibulum
                malesuada, magna lorem faucibus nunc, et lacinia risus libero
                nec libero.
              </p>
              <p className="text-base md:text-lg mb-6">
                Sed consectetur, urna vel tincidunt convallis, purus eros
                vestibulum velit, ut faucibus neque turpis vel nunc. Aliquam
                luctus velit eu ante volutpat, eget egestas sapien egestas.
                Integer lacinia ex nec malesuada fermentum.
              </p>
            </div>
            {/* Right Side Timeline */}
            <div className="md:pl-10">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute h-full w-0.5 bg-gray-600 left-[25px] top-0"></div>
                {/* Timeline Items */}
                <div className="relative space-y-8">
                  {/* Timeline Item */}
                  <div className="flex">
                    <div className="bg-white rounded-full border-2 border-gray-600 flex items-center justify-center w-12 h-12">
                      <span className="text-gray-600 w-12 text-center">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Foundation</h3>
                      <p className="text-base md:text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <span className="text-sm text-gray-500">2020</span>
                    </div>
                  </div>
                  {/* Timeline Item */}
                  <div className="flex">
                    <div className="bg-white rounded-full border-2 border-gray-600 flex items-center justify-center w-12 h-12">
                      <span className="text-gray-600 w-12 text-center">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Growth</h3>
                      <p className="text-base md:text-lg text-gray-400">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <span className="text-sm text-gray-500">2022</span>
                    </div>
                  </div>
                  {/* Timeline Item */}
                  <div className="flex">
                    <div className="bg-white rounded-full border-2 border-gray-600 flex items-center justify-center w-12 h-12">
                      <span className="text-gray-600 w-12 text-center">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Expansion</h3>
                      <p className="text-base md:text-lg text-gray-400">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <span className="text-sm text-gray-500">2023</span>
                    </div>
                  </div>
                  {/* Timeline Item */}
                  <div className="flex">
                    <div className="bg-white rounded-full border-2 border-gray-600 flex items-center justify-center w-12 h-12">
                      <span className="text-gray-600 w-12 text-center">4</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Future</h3>
                      <p className="text-base md:text-lg text-gray-400">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
