import FeaturedEvents from "../components/FeaturedEvents";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import History from "../components/History";
import MissionVision from "../components/MissionVision";
import Team from "../components/Team";

const Home = () => {

  return (
    <section id="Home" className="font-inter">
      {/* Hero Section JSX Start */}

      <Hero />

      {/* Hero Section JSX End */}

      {/* Mission Vision Section JSX Start */}

      <MissionVision />

      {/* Mission Vision Section JSX End */}

      {/* History Section JSX Start */}

      <History />

      {/* History Section JSX End */}

      {/* Admin Section JSX Start */}

      <Team />

      {/* Admin Section JSX End */}

      {/* Featured Events Section JSX Start */}

      <FeaturedEvents />

      {/* Featured Events Section JSX End */}

      {/* Gallery Section JSX Start */}

      <Gallery />

      {/* Gallery Section JSX End */}
    </section>
  );
};

export default Home;
