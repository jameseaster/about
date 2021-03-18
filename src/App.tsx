// React Imports
import React from "react";

// Components
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Nav/Navbar";
import { HomeScreen } from "./components/HomeScreen";
import { ProjectList } from "./components/ProjectList";

/**
 * App
 *
 * Root react component which renders all other app components
 */
export const App: React.FC<{}> = () => (
  <div className="App">
    <Navbar />
    <HomeScreen />
    <About />
    <ProjectList />
    <Contact />
    <Footer />
  </div>
);
