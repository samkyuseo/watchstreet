import { Navbar } from './components/navbar/Navbar';
import { Chart } from './components/chart/Chart';
import { Specs } from './components/specs/Specs';
import { Footer } from './components/footer/Footer';

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
