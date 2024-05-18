import img from "../assets/events.jpeg";

const PastEvents = () => {
  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "August 15, 2024",
      location: "Central Park, New York",
      image: img,
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "September 10, 2024",
      location: "San Francisco, California",
      image: img,
    },
    {
      id: 3,
      title: "Art Exhibations",
      date: "September 10, 2024",
      location: "San Francisco, California",
      image: img,
    },
    // Add more events as needed
  ];

  return (
    <section id="PastEvents">
      <div id="Featured">
        <div className="container mx-auto py-12 px-5 md:px-0 2xl:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700">{event.location}</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
