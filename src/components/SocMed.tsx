import CSS from "csstype";

const socmed: CSS.Properties = {
  float: "left",
  marginRight: "16px",
};

export default function SocMed() {
  return (
    <div>
      <div style={socmed}>
        <a href="https://www.linkedin.com/in/amandahao/">
          <img
            src="/src/assets/linkedin.png"
            alt="linkedin"
            width="35"
            height="35"
          />
        </a>
      </div>
      <div style={socmed}>
        <img src="/src/assets/resume.png" alt="resume" width="35" height="35" />
      </div>
      <div style={{ ...socmed, marginRight: "0px" }}>
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
  );
}
