import React from 'react';
import Navbar from './Nav/Navbar'
import HomeScreen from './HomeScreen'
import About from './About'
import Applications from './Applications'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
      <About />
      <Applications />
      <Contact />
    </div>
  );
}

export default App;
