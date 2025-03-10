import CSS from "csstype";

const socmed: CSS.Properties = {
  float: "left",
  marginRight: "16px",
};

export default function SocMed() {
  return (
    <div>
      <div style={socmed}>
        <a target="_blank" href="https://www.linkedin.com/in/amandahao/">
          <img
            src="/assets/linkedin-white.png"
            alt="linkedin"
            width="35"
            height="35"
          />
        </a>
      </div>
      <div style={socmed}>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1IySIHm8MfS021QnPjOGs7pbmFawubafH/view?usp=sharing"
        >
          <img
            src="/assets/resume-white.png"
            alt="linkedin"
            width="35"
            height="35"
          />
        </a>
      </div>
      <div style={{ ...socmed, marginRight: "0px" }}>
        <a target="_blank" href="mailto:amandahao@gmail.com">
          <img
            src="/assets/email-white.png"
            alt="linkedin"
            width="35"
            height="35"
          />
        </a>
      </div>
    </div>
  );
}
