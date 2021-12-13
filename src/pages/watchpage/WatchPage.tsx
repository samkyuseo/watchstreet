import { Navbar } from "../../components/navbars/Navbar";
import { Chart } from "../../components/charts/Chart";
import { Specs } from "../../components/specs/Specs";
import { Footer } from "../../components/footers/Footer";

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <Chart />
      <Specs />
      <Footer />
    </>
  );
};

export { WatchPage };
