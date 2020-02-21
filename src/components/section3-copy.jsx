import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default class Section3 extends Component {
  render() {
    return (
      
        <ParallaxProvider>
          <h1 className="font-newzaldtest liberia">
            <div className={"root"}>
              <div className={"barTop"} />
              <span className={`${"copy"} h1`}>
                {"Liberia".split("").map((letter, i) => (
                  <Parallax
                    key={`copy-${i}`}
                    offsetXMax={100 * (i - 3)}
                    className={"letter"}
                  >
                    {letter}
                  </Parallax>
                ))}
              </span>
              <div className={"barBottom"} />
            </div>
          </h1>
        </ParallaxProvider>
      
    );
  }
}
