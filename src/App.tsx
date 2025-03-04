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
        </main>
      </div>
    </>
  );
}

export default App;
