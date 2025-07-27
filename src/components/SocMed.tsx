import type { Properties } from "csstype";

const socmed: Properties = {
  float: "left",
  marginRight: "16px",
};

export default function SocMed() {
  return (
    <div>
      <div style={socmed}>
        <a target="_blank" href="https://www.linkedin.com/in/amandahao/">
          <img
            src="/icons/linkedin.svg"
            alt="linkedin"
            width="35"
            height="35"
          />
        </a>
      </div>
      <div style={socmed}>
        <a href="/Amanda_Hao_Resume.pdf" download>
          <img src="/icons/resume.svg" alt="resume" width="35" height="35" />
        </a>
      </div>
      <div style={{ ...socmed, marginRight: "0px" }}>
        <a target="_blank" href="mailto:amandahao@gmail.com">
          <img src="/icons/email.svg" alt="linkedin" width="35" height="35" />
        </a>
      </div>
    </div>
  );
}
