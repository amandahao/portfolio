import { useState } from "react";
import "./App.css";
import SplineScene from "./components/SplineScene";

function App() {
  return (
    <>
      <SplineScene />
      <div className="app">
        <main>
          <span className="caption" style={{ color: "#ffffffc9" }}>
            Hi, I'm{" "}
            <span
              style={{
                color: "#ffffff",
              }}
            >
              Amanda.
            </span>
          </span>
          <span
            className="sub-caption"
            style={{
              color: "#ffffffe6",
            }}
          >
            Science, Tech, & Intl Affairs @ Georgetown
          </span>
          <span
            className="desc"
            style={{ color: "#ffffffcc", padding: "60px 0px 0px 0px" }}
          >
            Click on the computer to check out my work, or hover over other
            components to learn more about me!
          </span>
          <div style={{ padding: "25px 0px 0px 0px" }}>
            <div className="socmed">
              <a href="https://www.linkedin.com/in/amandahao/">
                <img
                  src="/src/assets/linkedin.png"
                  alt="linkedin"
                  width="35"
                  height="35"
                />
              </a>
            </div>
            <div className="socmed">
              <img
                src="/src/assets/resume.png"
                alt="resume"
                width="35"
                height="35"
              />
            </div>
            <div className="socmed">
              <a href="mailto:amandahao@gmail.com">
                <img
                  src="/src/assets/email.png"
                  alt="resume"
                  width="35"
                  height="35"
                />
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
