import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="background">
      <Header />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="title text-white">ABOUT</h1>

        <div className="text space-y-6 text-left">
          <p>
            Hi, I'm Amanda Hao, a current third-year student at Georgetown
            University studying Science, Technology & International Affairs
            (STIA), with a minor in Computer Science. I'm also in my first year
            of pursuing an accelerated Master's in Data Science & Analytics
            (DSAN). Growing up in the Bay Area, California, I've always been{" "}
            <b>
              fascinated with the dynamic and rapidly evolving field of
              technology
            </b>
            , especially its role in social issues.
          </p>

          <p>
            Since I was little, I imagined myself a software engineer, but after
            exposure to product management and the amazing people in the
            industry, I knew it was something I wanted to do for a long time. I
            love how <b>people-oriented</b> the field is, and how it offers a{" "}
            <b>welcoming space to constantly learn new things and grow</b>{" "}
            alongside peers and mentors.
          </p>

          <p>
            Over the last year, I worked with the{" "}
            <a href="http://washingtonpost.com/">
              <b>Washington Post</b>
            </a>{" "}
            to design a feature for Gen-Z focused election news engagement and
            interned at the{" "}
            <a href="https://www.nba.com/">
              <b>NBA</b>
            </a>{" "}
            to increase purchase conversion for their League Pass streaming
            service. Now, I'm a product launch manager at the{" "}
            <a href="https://marriagepact.com/">
              <b>Marriage Pact</b>
            </a>
            , an annual matchmaking activity on college campuses that over half
            of the student body participates in.
          </p>

          <p>
            Outside of academics, I'm heavily involved in Georgetown's Asian
            American Student Association, Hoyalytics (my lovely data analytics
            consulting club), and Club Volleyball. I also love to watercolor,
            read Japanese literature, and curate Spotify playlists. On any given
            weekend, you can catch me thrifting, finding new restaurants on
            Beli, or biking somewhere in the DMV.
          </p>

          <p>
            I am <b>endlessly passionate about learning</b> (e.g. teaching
            myself 3D design to create this website!), always{" "}
            <b>go above and beyond</b>, and am confident that I can bring my
            diverse skillset in data analysis, UX design, and project management
            anywhere to{" "}
            <b>build innovative products that create lasting value for users</b>
            .
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
