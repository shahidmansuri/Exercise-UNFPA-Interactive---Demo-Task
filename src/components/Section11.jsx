import React, { Component } from "react";

export default class Section11 extends Component {
  render() {
    return (
      <div className="section">
        <div className="video-section">
          <video
            className="videoInsert"
            autoPlay
            controls
            src="/videos/UNFPA.mov"
          ></video>
        </div>
      </div>
    );
  }
}
