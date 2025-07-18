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
          <img src="linkedin.png" alt="linkedin" width="35" height="35" />
        </a>
      </div>
      <div style={socmed}>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19tS3c588qctxt9hZhyGAbi0UnXnh1MDl/view?usp=sharing"
        >
          <img src="resume.png" alt="resume" width="35" height="35" />
        </a>
      </div>
      <div style={{ ...socmed, marginRight: "0px" }}>
        <a target="_blank" href="mailto:amandahao@gmail.com">
          <img src="mail.png" alt="email" width="35" height="35" />
        </a>
      </div>
    </div>
  );
}
