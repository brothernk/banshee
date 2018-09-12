import React, { Component } from "react";

class What extends Component {
  render() {
    return (
      <div className="page" id="what-pg">
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>

        <div className="what-content">
          <div className="steps">
            <h2>Step 1</h2>
          </div>
          <div className="steps">
            <h2>Step 2</h2>
          </div>
          <div className="steps">
            <h2>Step 3</h2>
          </div>
        </div>
      </div>
    )
  }
};

export default What;