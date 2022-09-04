import '@algolia/autocomplete-theme-classic';
import { Autocomplete } from './Autocomplete';
import './index.css';

const TestPage = () => {
  return (
    <div className='container'>
      <Autocomplete
        placeholder='Search by brand, reference, diameter, year, caliber...'
        openOnFocus={true}
        debug={true}
      />
    </div>
  );
};

export default TestPage;
