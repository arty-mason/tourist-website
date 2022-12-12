import React from 'react';
import Hero from './components/Hero';

import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
