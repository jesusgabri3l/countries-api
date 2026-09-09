import './styles/styles.scss';

import { HashRouter as Router } from 'react-router-dom';

import CountriesProvider from './components/CountriesProvider';
import Navbar from './components/layouts/Navbar';
import RouterHelper from './components/layouts/RouterHelper';

function App() {
  return (
    <CountriesProvider>
      <Router>
        <section className="main-wrapper">
          <Navbar />
          <RouterHelper />
        </section>
      </Router>
    </CountriesProvider>
  );
}

export default App;
