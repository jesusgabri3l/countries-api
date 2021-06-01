import React from 'react';
import './styles/styles.css';

import Navbar from './components/layouts/Navbar'
import RouterHelper from './components/layouts/RouterHelper';

function App() {
    return (
        <section className="main-wrapper">
            <Navbar />
            <RouterHelper/>
        </section>
    );
}

export default App;
