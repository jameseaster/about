// React Imports
import React from "react";

// Style Imports
import { AboutStyle } from "./styles";

// Image Imports
import expo from "../../assets/tech/expo.png";
import redux from "../../assets/tech/redux.png";
import react from "../../assets/tech/react.png";
import nodejs from "../../assets/tech/nodejs.png";
import mariadb from "../../assets/tech/mariadb.png";
import feathersjs from "../../assets/tech/feathersjs.png";
import JS_HTML_CSS from "../../assets/tech/JS_HTML_CSS.png";

/**
 * About
 *
 * A biographical section that gives an overview of my background
 * experience and tech familiarity
 */
export const About: React.FC<{}> = () => (
  <AboutStyle id="About">
    <div className="header">
      <h3 className="title">ABOUT</h3>
      <h4 className="subtitle">
        Hello! I am a software engineer based in New Orleans, LA.
      </h4>
    </div>
    <div className="section">
      <p>
        I love developing applications that solve problems for other people. I’m
        always interested and diving into new software engineering technologies
        that allow for more efficient and effective work flow.
      </p>
    </div>
    <div className="section-img">
      <img src={JS_HTML_CSS} alt="JS_HTML_CSS" />
      <img src={react} alt="react" />
      <img src={nodejs} alt="nodejs" className="nodejs" />
      <img src={redux} alt="redux" />
      <img src={mariadb} alt="mariadb" />
      <img src={feathersjs} alt="feathersjs" />
      <img src={expo} alt="expo" />
    </div>
    <div className="section">
      <p>
        Recently, I have been working in JavaScript specifically utilizing
        Vue.js, React, React Native, TypeScript, & Node.js/Express building
        desktop and mobile web applications. I see both mobile and desktop web
        applications as an awesome opportunity to connect with people and add
        value to their daily life.
      </p>
    </div>
    {/* <button>Resume PDF</button> */}
  </AboutStyle>
);
