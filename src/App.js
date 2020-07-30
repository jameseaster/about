import React from "react";
import Navbar from "./components/Nav/Navbar";
import HomeScreen from "./components/HomeScreen";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

const App = () => (
  <div className="App">
    <Navbar />
    <HomeScreen />
    <About />
    <ProjectList />
    <Contact />
  </div>
);

export default App;
