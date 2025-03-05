import "./App.css";
import React from "react";
import SocMed from "./components/SocMed";

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-white">MY WORK</h1>

        <div className="space-y-6 text-left">
          <p>
            Hi, I'm Amanda Hao, a current third-year student at Georgetown
            University studying Science, Technology & International Affairs
            (STIA), with a minor in Computer Science. I'm also in my first year
            pursuing an accelerated Master's in Data Science & Analytics (DSAN).
            Growing up in the Bay Area, California, I've always been fascinated
            with the dynamic and rapidly evolving field of technology,
            especially its role in social issues.
          </p>

          <p>
            Since I was little, I imagined myself a software engineer, but after
            exposure to product management and the amazing people in the
            industry, I knew it was something I wanted to do for a long time. I
            love how people-oriented the field is, and how it offers a welcoming
            space to constantly learn new things and grow alongside peers and
            mentors.
          </p>

          <p>
            Over the last year, I worked with the Washington Post to design a
            feature for Gen-Z focused election news engagement and interned at
            the NBA to increase purchase conversion for their League Pass
            streaming service. Now, I'm a product launch manager at the Marriage
            Pact, an annual matchmaking activity on college campuses that over
            half of the student body participates in.
          </p>

          <p>
            Outside of academics, I'm heavily involved in Georgetown's Asian
            American Student Association, Holylytics (my lovely data analytics
            consulting club), and Club Volleyball. I also love to watercolor,
            read Japanese literature, and curate Spotify playlists. On any given
            weekend, you can catch me thrifting, finding new restaurants on
            Beli, or biking somewhere in the DMV.
          </p>

          <p>
            I am endlessly passionate about learning (e.g. teaching myself 3D
            design to create this website!), always go above and beyond, and am
            confident that I can bring my diverse skillset in data analysis, UX
            design, and project management anywhere to build innovative products
            that create lasting value for users.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <SocMed />

          <div className="mt-4 text-sm opacity-75">© 2025 Amanda Hao</div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
