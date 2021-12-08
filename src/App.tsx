import { Navbar } from './components/navbar/Navbar';
import { Chart } from './components/chart/Chart';
import { Specs } from './components/specs/Specs';
import { Footer } from './components/footer/Footer';
import { Box } from '@chakra-ui/layout';

function App() {
  return (
    <>
      <Navbar />
      <Chart />
      <Specs />
      <Footer />
    </>
  );
}

export default App;
