import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import Name from "../../components/Name/Name";
import About from "../../components/About/About";
import What from "../../components/What/What";
import Work from "../../components/Work/Work";
// import Modal from "../../components/Modal/Modal";
import Menu from "../../components/Menu/Menu";

class Home extends Component {
  render() {
    return (
      <div>
        <Logo></Logo>
        <Name></Name>
        <About></About>
        <What></What>
        <Work></Work>
        {/* <Modal></Modal> */}
        <Menu></Menu>
      </div>
    );
  }
}

export default Home;