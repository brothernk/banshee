import React from "react";
import thornpic from './thorn.png';
import daphnepic from "./daphne.jpg";

const About = () => (
  <div className="page" id="about-pg">
    <h1 className="page-header">Meet the Team</h1>

    <div className="about-us-content">
      <div className="team-info" id="kendra-info">
        <img src={thornpic}></img>
          <h2 className="teammate-name">Kendra Kyndberg</h2>
          <h4>Project Manager</h4>
          <hr></hr>
          <p>Loves being jazzed about your project.</p> 
          <p>Believes branding is all about living your truth.</p>
          <p>Uncontrollable urge to offer book recommendations.</p>
          <button className="port-btn">Portfolio</button>
      </div>
        
      <div className="team-info" id="kate-info">
        <img src={daphnepic}></img>
          <h2 className="teammate-name">Kate Brothern</h2>
          <h4>Lead Creative</h4>
          <hr></hr>
          <p>Loves being jazzed about your project.</p>
          <p>Believes branding is all about living your truth.</p>
          <p>Uncontrollable urge to offer book recommendations.</p>
          <button className="port-btn">Portfolio</button>
      </div>
    </div>

    <div className="company-explanation">
      <p>Together we make up Kendra and the Thigh Pubes. We're kind of like Donna and the
        Dynamos except there are two of us and we aren't all that talented.
      </p>
    </div>
  </div>
)

export default About;