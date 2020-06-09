import React from 'react';
import Navbar from './Nav/Navbar'
import HomeScreen from './HomeScreen'
import About from './About'
import About2 from './About2'
import Applications from './Applications'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
      {/* <About /> */}
      <About2 />
      <Applications />
      <Contact />
    </div>
  );
}

export default App;
