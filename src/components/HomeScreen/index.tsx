// React Imports
import React from "react";

// Style Imports
import { HomeScreenStyle } from "./styles";

/**
 * HomeScreen
 *
 * This is the first image and display shown when user
 * enters webpage.
 */
export const HomeScreen: React.FC<{}> = () => (
  <HomeScreenStyle id="Home">
    <div className="text-container">
      <h1>James Easter</h1>
      <h2>software engineer</h2>
      <p>I'm a creative, adaptable workhorse.</p>
    </div>
  </HomeScreenStyle>
);
