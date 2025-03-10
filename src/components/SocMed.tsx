import CSS from "csstype";
import linkedin from "../assets/linkedin-white.png";
import resume from "../assets/resume-white.png";
import email from "../assets/email-white.png";

const socmed: CSS.Properties = {
  float: "left",
  marginRight: "16px",
};

export default function SocMed() {
  return (
    <div>
      <div style={socmed}>
        <a href="https://www.linkedin.com/in/amandahao/">
          <img src={linkedin} alt="linkedin" width="35" height="35" />
        </a>
      </div>
      <div style={socmed}>
        <img src={resume} alt="resume" width="35" height="35" />
      </div>
      <div style={{ ...socmed, marginRight: "0px" }}>
        <a href="mailto:amandahao@gmail.com">
          <img src={email} alt="resume" width="35" height="35" />
        </a>
      </div>
    </div>
  );
}
