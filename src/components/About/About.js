import React from "react";
import thornpic from './thorn.png';
import daphnepic from "./daphne.jpg";

const About = () => (
  <div className="page" id="about-pg">
    <h1 className="page-header">Meet the Team</h1>

    <div className="about-us-content">
      <div className="team-info" id="kendra-info">
        <img src={thornpic} alt="Kendra"></img>
          <h2 className="teammate-name">Kendra Kyndberg</h2>
          <h4>Project Manager</h4>
          <hr></hr>
          <p>Loves being jazzed about your project.</p> 
          <p>Believes branding is all about living your truth.</p>
          <p>Uncontrollable urge to offer book recommendations.</p>
          <button className="port-btn"><a href="https://katebrothern.herokuapp.com" target="_blank" rel="noopener noreferrer">Portfolio</a></button>
      </div>
        
      <div className="team-info" id="kate-info">
        <img src={daphnepic} alt="Kate"></img>
          <h2 className="teammate-name">Kate Brothern</h2>
          <h4>Lead Creative</h4>
          <hr></hr>
          <p>Likes designing rad websites to match your personality.</p>
          <p>Needs another sentence about branding here.</p>
          <p>Thinks vegetables are far superior to fruits.</p>
          <button className="port-btn"><a href="https://katebrothern.herokuapp.com" target="_blank" rel="noopener noreferrer">Portfolio</a></button>
      </div>
    </div>

    <div className="company-explanation">
      <p>Together we make up Kendra/Kate and the Pussycats. We're kind of like Donna and the
        Dynamos except there are two of us and we aren't all that talented.
      </p>
    </div>
  </div>
)

export default About;