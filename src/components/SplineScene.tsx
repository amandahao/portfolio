import Spline from "@splinetool/react-spline";
import CSS from "csstype";

const splineStyle: CSS.Properties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

export default function SplineScene() {
  return (
    <div style={splineStyle}>
      <Spline scene="https://prod.spline.design/mQBeylvlmtVYUMk9/scene.splinecode" />
    </div>
  );
}
