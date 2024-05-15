import { Link } from "react-router-dom";
import PastEvents from "../components/PastEvents";
import UpcomingEvents from "../components/UpcomingEvents";

const Events = () => {
  return (
    <>
      {/* Past Events Section JSX Start */}

      <PastEvents />

      {/* Past Events Section JSX End */}

      {/* Upcoming Events Section JSX Start */}

      <UpcomingEvents />

      {/* Upcoming Events Section JSX End */}

      {/* Event Registration Button */}

      <div className="registration-btn text-center py-12">
        <Link className="text-md text-white bg-blue-700 py-3 px-6 rounded-md transition-all duration-300 hover:bg-blue-500" to="/">Registration for Event</Link>
      </div>

    </>
  );
};

export default Events;
