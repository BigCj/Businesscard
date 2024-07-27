import React from 'react';
import './App.css';
import Info from './info';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/woman.png'} alt="woman" />
      </div>
      <Info />
      <Footer />
    </div>
  );
}

export default App;
