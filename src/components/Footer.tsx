import CSS from "csstype";

const socmed: CSS.Properties = {
  float: "left",
  marginRight: "16px",
};

interface FooterProps {
  theme?: "light" | "dark";
}

export default function Footer({ theme = "light" }: FooterProps) {
  const getImageSrc = (image: string) =>
    theme === "light"
      ? `/src/assets/${image}-white.png`
      : `/src/assets/${image}-black.png`;

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-12">
        <div style={socmed}>
          <a href="https://www.linkedin.com/in/amandahao/">
            <img
              src={getImageSrc("linkedin")}
              alt="linkedin"
              width="35"
              height="35"
            />
          </a>
        </div>
        <div style={socmed}>
          <img
            src={getImageSrc("resume")}
            alt="resume"
            width="35"
            height="35"
          />
        </div>
        <div style={{ ...socmed, marginRight: "0px" }}>
          <a href="mailto:amandahao@gmail.com">
            <img
              src={getImageSrc("email")}
              alt="email"
              width="35"
              height="35"
            />
          </a>
        </div>
      </div>
      {/* change text-black later to a lighter grey */}
      <div
        className={`text-center text-xs ${
          theme === "light" ? "text-white" : "text-black"
        } mt-4 pb-4`}
      >
        © 2025 Amanda Hao
      </div>
    </div>
  );
}
