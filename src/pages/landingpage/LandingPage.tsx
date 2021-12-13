import { Footer } from "../../components/footers/Footer";
import { LandingHero } from "../../components/heros/LandingHero";
import { LandingNavbar } from "../../components/navbars/LandingNavbar";

const LandingPage = () => {
  return (
    <>
      <LandingNavbar />
      <LandingHero />
      <Footer />
    </>
  );
};

export { LandingPage };
