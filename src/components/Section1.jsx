import React, { Component } from "react";
import ProgressRing from "../ProgressRing";

export default class Section1 extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="section child bg-fixed">
        <h1>Every 2 minutes, a woman dies giving birth.</h1>
        <ProgressRing radius={80} stroke={4} progress={progress} />
      </div>
    );
  }
}
