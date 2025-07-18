import { WorkExp } from "./WorkExp";
// import connector2 from "./connector-2.svg";
// import connector from "./connector.svg";
// import line2 from "./line-2.svg";
// import line3 from "./line-3.svg";
// import line8 from "./line-8.svg";
// import line9 from "./line-9.svg";
// import socmed from "./socmed.svg";
import SocMed from "./SocMed";
import "./style.css";
// import vector22 from "./vector-2-2.svg";
// import vector3 from "./vector-3.svg";
// import vector4 from "./vector-4.svg";
// import test from "../public/test.svg";

export default function App() {
  return (
    <div className="longer-version">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="bkgd">
            <div className="overlap-group-2">
              <img className="vector-4" alt="Vector" src="Vector 1.svg" />

              <img className="ellipse-5" src="Ellipse 3.svg" />

              <img className="vector-5" alt="Vector" src="Vector 2.svg" />

              <div className="rectangle" />
            </div>
          </div>

          <p className="text-wrapper-4">
            © 2025 Amanda Hao. All rights reserved.
          </p>

          <p className="text-wrapper-5">
            thank you for visiting my portfolio :)
          </p>

          <div className="ah-frame">
            <div className="frame-3">
              <div className="text-wrapper-6">AMANDA HAO</div>
            </div>

            <div className="IMG-wrapper">
              <img className="IMG" alt="Img" src="bw.png" />
            </div>

            <div className="frame-3">
              <div className="text-wrapper-6">CURRENTLY @ TESLA</div>
            </div>

            <div className="frame-3">
              <div className="text-wrapper-6">BS/MS @ GEORGETOWN</div>
            </div>
          </div>

          <img className="color-img" alt="Color img" src="left.png" />

          <div className="amanda">
            <div className="rectangle-2" />

            <div className="frame-4">
              <div className="text-wrapper-7">amanda</div>
            </div>
          </div>

          <div className="plants">
            <div className="rectangle-3" />

            <div className="frame-5">
              <div className="text-wrapper-7">plants</div>
            </div>
          </div>

          <div className="dress">
            <div className="rectangle-4" />

            <div className="frame-6">
              <div className="text-wrapper-7">vintage dress</div>
            </div>
          </div>

          <div className="plants-2">
            <div className="rectangle-5" />

            <div className="frame-5">
              <div className="text-wrapper-7">plants</div>
            </div>
          </div>

          <div className="plants-3">
            <div className="rectangle-6" />

            <div className="frame-5">
              <div className="text-wrapper-7">plants</div>
            </div>
          </div>

          <div className="plants-4">
            <div className="rectangle-7" />

            <div className="frame-5">
              <div className="text-wrapper-7">plants</div>
            </div>
          </div>

          <div className="tote">
            <div className="rectangle-8" />

            <div className="frame-7">
              <div className="text-wrapper-7">tote</div>
            </div>
          </div>

          {/* <img className="socmed" alt="Socmed" src={socmed} /> */}
          <SocMed />

          {/* <img className="connector" alt="Connector" src={connector} />

          <img className="line-4" alt="Line" src={line2} />

          <img className="line-5" alt="Line" src={line3} /> */}

          <div className="about">
            <div className="frame-8">
              <div className="text-wrapper-8">about me</div>
            </div>

            <div className="hi-i-m-amanda-a-wrapper">
              <p className="hi-i-m-amanda-a">
                <span className="span">
                  Hi! I'm Amanda, a Georgetown student pursuing a B.S. in
                  Science, Technology &amp; International Affairs and an M.S. in
                  Data Science &amp; Analytics. Across my work experiences and
                  personal projects, I've worn whatever hat the moment called
                  for—PM, developer, data analyst, or designer—to move ideas
                  forward.{" "}
                </span>

                <span className="text-wrapper-9">
                  I'm passionate about tech and people, and I love creating
                  innovative solutions that deliver real impact.
                </span>
              </p>
            </div>
          </div>

          <div className="work-exp-instance">
            <WorkExp
              img="line-5-2.svg"
              line="line-4-2.svg"
              line1="line-6-2.svg"
              line2="line-7-2.svg"
              marriagePactLogo="marriage-pact-logo-1-2.png"
              massiveData="massive-data-institute-cover-1-2.png"
              nbaLogo="image.png"
              property1="tesla"
              vector="vector-5.svg"
              vector1="vector-6.svg"
              vector2="vector-7.svg"
            />
          </div>

          {/* <img className="line-6" alt="Line" src={line8} />

          <img className="line-7" alt="Line" src={line9} /> */}

          <img className="sitting-pic" alt="Sitting pic" src="sitting.png" />

          <div className="proj-desc">
            <div className="frame-9">
              <div className="text-wrapper-6">PROJECTS</div>
            </div>

            <div className="frame-10">
              <p className="text-wrapper-10">
                A selection of personal and work projects to showcase my product
                and design skills.
              </p>
            </div>
          </div>

          {/* <img className="connector-2" alt="Connector" src={connector2} /> */}

          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="rectangle-9" />

              <img className="screenshot" alt="Screenshot" src="wapo.png" />

              <div className="text-wrapper-11">the washington post</div>

              <p className="text-wrapper-12">
                Designed nine innovative features to attract and engage Gen Z
                readers to The Post during the 2024 election.
              </p>

              <div className="group-3">
                <div className="text-wrapper-13">explore</div>

                {/* <img className="vector-6" alt="Vector" src={vector3} /> */}
              </div>
            </div>
          </div>

          <div className="venmo">
            <div className="overlap-4">
              <div className="rectangle-10" />

              <div className="text-wrapper-14">venmo</div>

              <p className="text-wrapper-15">
                Prototyped a budgeting feature that allows users to set limits,
                categorize transactions, and view spending patterns.
              </p>

              <div className="group-4">
                <div className="text-wrapper-13">explore</div>

                {/* <img className="vector-6" alt="Vector" src={vector4} /> */}
              </div>

              <img className="screenshot-2" alt="Screenshot" src="venmo.png" />
            </div>
          </div>

          <div className="amanda-2">
            <div className="rectangle-11" />

            <div className="frame-4">
              <div className="text-wrapper-7">amanda</div>
            </div>
          </div>

          <div className="drink">
            <div className="rectangle-12" />

            <div className="frame-11">
              <div className="text-wrapper-7">drink</div>
            </div>
          </div>

          <div className="sweater">
            <div className="rectangle-13" />

            <div className="frame-12">
              <div className="text-wrapper-7">thrifted sweater</div>
            </div>
          </div>

          <div className="projects">
            <div className="rectangle-14" />

            <div className="frame-13">
              <div className="text-wrapper-7">projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
