import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./Muli/stylesheet.css";
import "./NewzaldTest/stylesheet.css";
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
