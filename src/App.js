import React from "react";
import Navbar from "./components/Nav/Navbar";
import HomeScreen from "./components/HomeScreen";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Navbar />
    <HomeScreen />
    <About />
    <ProjectList />
    <Contact />
    <Footer />
  </div>
);

export default App;
