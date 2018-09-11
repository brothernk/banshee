import React, { Component } from "react";

class MenuInner extends Component {

    state = {
        modal:  {
            position: 'absolute',
            top: "50%",
            right:0,
            transform: "translate(-50%, -50%)",
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
                            <div className="menu-btn" onClick={this.props.onClose}><i className="fas fa-times"></i></div>
                            <div className="menu-text">
                                <p>Home</p>
                                <p>About Us</p>
                                <p>What We Do</p>
                                <p>Our Work</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                : null }
            </div>
        )
    }
    
}

export default MenuInner;