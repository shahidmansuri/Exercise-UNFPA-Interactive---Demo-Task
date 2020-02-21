/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import ProgressRing from "./ProgressRing";
import "./styles.scss";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";

const FullpageWrapper = () => {
  const [progress, setprogress] = useState(0);
  const [nextClick, setnextClick] = useState(false);
  let handleLeave = () => {
    let frame = () => {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        setprogress(width);
      }
    };
    var width = 0;
    var id = setInterval(frame, 10);
  };
  return (
    // fullpage js component
    <ReactFullpage
      navigation
      fadingEffect={true}
      parallax={true}
      parallaxOptions={{
        type: "reveal",
        percentage: 100,
        property: "translate"
      }}
      onLeave={(origin, destination, direction) => {
        if (origin.index == 0 && destination.index == 1) {
          if (progress == 0) {
            handleLeave();
          }
          if (progress == 100) {
            return true;
          } else {
            return false;
          }
        } else if (origin.index == 1 && destination.index == 2) {
          if (nextClick) {
            setnextClick(false);
            return true;
          } else {
            return false;
          }
        }
      }}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        let upslide = () => fullpageApi.moveSectionDown();
        if (state.destination && state.destination.index == 1) {
          if (progress == 0) {
            setTimeout(() => {
              fullpageApi.moveSectionDown();
            }, 1500);
          }
        } else if (state.destination && state.destination.index == 0) {
          setprogress(0);
        }
        if (fullpageApi && fullpageApi.parallax) {
          const { parallax } = fullpageApi;
          parallax.init();
          parallax.setOption("type", "cover");
          parallax.setOption("percentage", "30");
        }
        return (
          <div id="fullpage">
            <Section1 progress={progress} />
            <Section2
              nextClick={async () => {
                await setnextClick(true);
                if (fullpageApi && fullpageApi.parallax) {
                  fullpageApi.parallax.setOption("type", "reveal");
                  fullpageApi.parallax.setOption("percentage", "62");
                }
                fullpageApi.moveSectionDown();
              }}
            />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section11 />
            <Section8 />
            <Section9 />
            <Section10 />
          </div>
        );
      }}
    />
  );
};

export default FullpageWrapper;
