import React from "react";
import Header from "./components/Header";

const About: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="z-10">
        <Header />
      </div>

      <div className="relative max-w-[60%] px-4 sm:px-8 pt-60 pb-24">
        <div className="space-y-8">
          <div className="space-y-6">
            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-white"
            >
              Hi! I'm Amanda, a{" "}
              <a
                href="https://georgetown.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                Georgetown
              </a>{" "}
              student studying Science, Tech & Int'l Affairs, with a minor in
              CS, and an accelerated M.S. in Data Science. Across my work
              experiences and personal projects, I've worn whatever hat the
              moment called for—PM, developer, data analyst, or designer—to move
              ideas forward.
            </p>

            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-white"
            >
              Currently, I'm a PM intern at{" "}
              <a
                href="https://tesla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                Tesla
              </a>
              , redesigning procurement tools supporting $10B+ in annual spend.
              In past roles, I've boosted League Pass conversions at the{" "}
              <a
                href="https://nba.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                NBA
              </a>
              , built Gen Z election features at{" "}
              <a
                href="https://washingtonpost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                The Washington Post
              </a>
              , and launched campus-wide matchmaking campaigns at{" "}
              <a
                href="https://marriagepact.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                Marriage Pact
              </a>
              .
            </p>

            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-white"
            >
              Beyond work, you'll find me playing volleyball, reading Murakami,
              curating playlists, or{" "}
              <a
                href="https://beliapp.com/"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                Beli
              </a>
              -hopping around DC and NYC. I'm driven by curiosity, creativity,
              and community—and I love constantly learning and building products
              that bring real value to users.
            </p>
          </div>

          {/* Music Section */}
          <div className="pt-16 space-y-4">
            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-[#797979]"
            >
              I love listening to music (160k+ minutes/yearly)—check out what
              I'm listening to right now!
            </p>

            {/* Spotify Widget */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
