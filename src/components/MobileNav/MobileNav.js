import React, { Component } from "react";
import Modal from '../../components/Modal/Modal';

class MobileNav extends Component {
  render() {
    return (
      <div className="mobilenav">
        <div className="mobile-item">
            <a href="#landing-pg" className="menu-nav">
                <i className="fas fa-home"></i>
                <p>Home</p>
            </a>
        </div>
        
        <div className="mobile-item">
            <a href="#about-pg" className="menu-nav">
                <i className="fas fa-user-alt"></i>
                <p>About</p>
            </a>
        </div>
        
        <div className="mobile-item">
            <a href="#what-pg"className="menu-nav">  
                <i className="fas fa-question"></i>
                {/* <i className="fas fa-question-circle"></i> */}
                <p>What</p>
            </a>
        </div>

        <div className="mobile-item">
            <a href="#work-pg" className="menu-nav">
                <i className="fas fa-code"></i>
                <p>Work</p>
            </a>
        </div>

        <div>
            <i className="fas fa-comment"></i>
            <Modal></Modal>
        </div>
      </div>
    )
  }
};

export default MobileNav;