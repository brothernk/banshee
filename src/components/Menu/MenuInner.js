import React, { Component } from "react";
import bansheelogo from '../../components/Logo/bansheelogo.png';
import Modal from '../../components/Modal/Modal';

class MenuInner extends Component {

    state = {
        modal:  {
            position: 'absolute',
            top: "50%",
            right:0,
            margin:0,
            transform: "translate(0, -50%)",
            zIndex:"9999",
        },
        background: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
        }
    }

    render() {
        return (
            <div>
                {this.props.isOpen ?  
                    <div className="menu-background" style={this.state.background}>
                        <div className="menu-style" style={this.state.modal}>
                            <img className="menu-logo" src={bansheelogo} alt="Banshee"/>
                            <div className="menu-text">
                                <a href="#landing-pg" onClick={this.props.onClose} className="menu-nav">Home</a>
                                <a href="#about-pg" onClick={this.props.onClose} className="menu-nav">About Us</a>
                                <a href="#what-pg" onClick={this.props.onClose} className="menu-nav">What We Do</a>
                                <a href="#work-pg" onClick={this.props.onClose} className="menu-nav">Our Work</a>
                                <Modal onClick={this.props.onClose}></Modal>
                            </div>
                        </div>
                    </div>
                : null }
            </div>
        )
    }    
}

export default MenuInner;