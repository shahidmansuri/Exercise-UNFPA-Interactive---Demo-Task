import React, { Component } from "react";

export default class Section8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 0
    };
  }

  render() {
    const { image } = this.state;
    return (
      <div className="section">
        <div
          className={
            image == 0 ? "kid bg-transparent" : "newborn bg-transparent"
          }
        >
          <div
            className="hover-box hover-box d-flex align-items-center justify-content-center"
            onMouseEnter={() =>
              this.setState(prev => ({
                image: prev.image ? 0 : 1
              }))
            }
          >
            hover me
          </div>
        </div>
      </div>
    );
  }
}
