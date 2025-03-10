import "./App.css";
import SplineScene from "./components/SplineScene";
import SocMed from "./components/SocMed";

function App() {
  return (
    <>
      <SplineScene />
      <div
        className="app h-screen flex items-center justify-center"
        // style={{ pointerEvents: "none" }}
      >
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
            Click on the computer to check out my work, or hover over <br />
            other components to learn more about me!
          </span>
          <div style={{ padding: "25px 0px 0px 0px" }}>
            <SocMed />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
