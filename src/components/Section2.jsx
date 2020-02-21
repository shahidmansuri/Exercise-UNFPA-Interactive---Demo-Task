import React, { Component } from "react";

export default class Section2 extends Component {
  render() {
    return (
      <div className="section">
        <div class="middle-section">
          <h1 className="font-newzaldtest">That’s 830 women every day.</h1>
          <h4
            onClick={this.props.nextClick}
            className="text-white font-newzaldtest next-btn"
          >
            Next
          </h4>
        </div>
        <div
          id="blur-image"
          onMouseMove={this.getImageRevel}
          className="cover women"
        ></div>
        <div id="append"></div>
      </div>
    );
  }
}
