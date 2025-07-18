import PropTypes from "prop-types";
import { useReducer } from "react";
// import image1 from "./image.png";
// import line42 from "./line-4-2.svg";
// import line43 from "./line-4-3.svg";
// import line44 from "./line-4-4.svg";
// import line4 from "./line-4.svg";
// import line53 from "./line-5-3.svg";
// import line54 from "./line-5-4.svg";
// import line55 from "./line-5-5.svg";
// import line5 from "./line-5.svg";
// import line63 from "./line-6-3.svg";
// import line64 from "./line-6-4.svg";
// import line65 from "./line-6-5.svg";
// import line6 from "./line-6.svg";
// import line73 from "./line-7-3.svg";
// import line74 from "./line-7-4.svg";
// import line75 from "./line-7-5.svg";
// import line7 from "./line-7.svg";
// import marriagePactLogo12 from "./marriage-pact-logo-1-2.png";
// import marriagePactLogo14 from "./marriage-pact-logo-1-4.png";
// import marriagePactLogo15 from "./marriage-pact-logo-1-5.png";
// import marriagePactLogo1 from "./marriage-pact-logo-1.png";
// import massiveDataInstituteCover12 from "./massive-data-institute-cover-1-2.png";
// import massiveDataInstituteCover14 from "./massive-data-institute-cover-1-4.png";
// import massiveDataInstituteCover15 from "./massive-data-institute-cover-1-5.png";
// import massiveDataInstituteCover1 from "./massive-data-institute-cover-1.png";
// import nbaLogo2X13 from "./nba-logo-2x-1-3.png";
// import nbaLogo2X14 from "./nba-logo-2x-1-4.png";
// import nbaLogo2X1 from "./nba-logo-2x-1.png";
import "./style.css";
// import vector3 from "./vector-3.svg";
// import vector4 from "./vector-4.svg";
// import vector5 from "./vector-5.svg";
// import vector6 from "./vector-6.svg";
// import vector10 from "./vector-10.svg";
// import vector11 from "./vector-11.svg";
// import vector12 from "./vector-12.svg";
// import vector13 from "./vector-13.svg";
// import vector14 from "./vector-14.svg";
// import vector15 from "./vector-15.svg";
import test from "../public/test.svg";

interface Props {
  property1: "wp" | "tesla" | "nba" | "mp" | "mdi";
  line: string;
  img: string;
  line1: string;
  line2: string;
  vector: string;
  vector1: string;
  nbaLogo: string;
  vector2: string;
  marriagePactLogo: string;
  massiveData: string;
}

export const WorkExp = ({
  property1,
  line = "image.svg",
  img = "line-5-2.svg",
  line1 = "line-6-2.svg",
  line2 = "line-7-2.svg",
  vector = "vector-7.svg",
  vector1 = "vector-8.svg",
  nbaLogo = "nba-logo-2x-1-2.png",
  vector2 = "vector-9.svg",
  marriagePactLogo = "marriage-pact-logo-1-3.png",
  massiveData = "massive-data-institute-cover-1-3.png",
}: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "tesla",
  });

  return (
    <div className="work-exp">
      <div className="overlap">
        <img
          className={`line ${state.property1}`}
          alt="Line"
          src={
            state.property1 === "nba"
              ? test //line43
              : state.property1 === "wp"
              ? test //line44
              : state.property1 === "mp"
              ? test //line4
              : state.property1 === "mdi"
              ? test //line42
              : line
          }
        />

        <img
          className="img"
          alt="Line"
          src={
            state.property1 === "nba"
              ? test //line54
              : state.property1 === "wp"
              ? test //line55
              : state.property1 === "mp"
              ? test //line5
              : state.property1 === "mdi"
              ? test //line53
              : img
          }
        />

        <img
          className="line-2"
          alt="Line"
          src={
            state.property1 === "nba"
              ? test //line64
              : state.property1 === "wp"
              ? test //line65
              : state.property1 === "mp"
              ? test //line6
              : state.property1 === "mdi"
              ? test //line63
              : line1
          }
        />

        <img
          className="line-3"
          alt="Line"
          src={
            state.property1 === "nba"
              ? test //line74
              : state.property1 === "wp"
              ? test //line75
              : state.property1 === "mp"
              ? test //line7
              : state.property1 === "mdi"
              ? test //line73
              : line2
          }
        />

        <div
          className={`ellipse property-1-${state.property1}`}
          onClick={() => {
            dispatch("click_73");
          }}
        />

        <div
          className={`div property-1-0-${state.property1}`}
          onClick={() => {
            dispatch("click");
          }}
        />

        <div
          className={`ellipse-2 property-1-1-${state.property1}`}
          onClick={() => {
            dispatch("click_41");
          }}
        />

        <div
          className={`ellipse-3 property-1-2-${state.property1}`}
          onClick={() => {
            dispatch("click_42");
          }}
        />

        <div
          className={`ellipse-4 property-1-3-${state.property1}`}
          onClick={() => {
            dispatch("click_43");
          }}
        />
      </div>

      <div className="frame">
        <div
          className={`tsla property-1-4-${state.property1}`}
          onClick={() => {
            dispatch("click_83");
          }}
        >
          <div className="tesla-logo">
            <div className="overlap-group">
              <img
                className="vector"
                alt="Vector"
                src={
                  state.property1 === "nba"
                    ? test //vector10
                    : state.property1 === "wp"
                    ? test //vector13
                    : state.property1 === "mp"
                    ? test //vector
                    : state.property1 === "mdi"
                    ? test //vector4
                    : test //vector
                }
              />

              <img
                className="vector-2"
                alt="Vector"
                src={
                  state.property1 === "nba"
                    ? test //vector11
                    : state.property1 === "wp"
                    ? test //vector14
                    : state.property1 === "mp"
                    ? vector2
                    : state.property1 === "mdi"
                    ? test //vector5
                    : vector1
                }
              />
            </div>
          </div>
        </div>

        <div
          className={`nba-logo-wrapper property-1-5-${state.property1}`}
          onClick={() => {
            dispatch("click_51");
          }}
        >
          <img
            className="nba-logo"
            alt="Nba logo"
            src={
              state.property1 === "nba"
                ? test //nbaLogo2X13
                : state.property1 === "wp"
                ? test //nbaLogo2X14
                : state.property1 === "mp"
                ? test //nbaLogo2X1
                : state.property1 === "mdi"
                ? test //image1
                : nbaLogo
            }
          />
        </div>

        <div
          className={`wapo property-1-6-${state.property1}`}
          onClick={() => {
            dispatch("click_53");
          }}
        >
          <img
            className="vector-3"
            alt="Vector"
            src={
              state.property1 === "nba"
                ? test //vector12
                : state.property1 === "wp"
                ? test //vector15
                : state.property1 === "mp"
                ? test //vector3
                : state.property1 === "mdi"
                ? test //vector6
                : vector2
            }
          />
        </div>

        <div
          className={`marriage-pact-logo-wrapper property-1-7-${state.property1}`}
          onClick={() => {
            dispatch("click_55");
          }}
        >
          <img
            className="marriage-pact-logo"
            alt="Marriage pact logo"
            src={
              state.property1 === "nba"
                ? test //marriagePactLogo14
                : state.property1 === "wp"
                ? test //marriagePactLogo15
                : state.property1 === "mp"
                ? test //marriagePactLogo1
                : state.property1 === "mdi"
                ? test //marriagePactLogo12
                : marriagePactLogo
            }
          />
        </div>

        <div
          className={`massive-data-wrapper property-1-8-${state.property1}`}
          onClick={() => {
            dispatch("click_57");
          }}
        >
          <img
            className="massive-data"
            alt="Massive data"
            src={
              state.property1 === "nba"
                ? test //massiveDataInstituteCover14
                : state.property1 === "wp"
                ? test //massiveDataInstituteCover15
                : state.property1 === "mp"
                ? test //massiveDataInstituteCover1
                : state.property1 === "mdi"
                ? test //massiveDataInstituteCover12
                : massiveData
            }
          />
        </div>
      </div>

      <div className={`group property-1-9-${state.property1}`}>
        <div className="may-aug">
          {state.property1 === "tesla" && <>may'25-aug'25</>}

          {state.property1 === "nba" && <>jun'24-aug'24</>}

          {state.property1 === "wp" && <>jan'24-may'24</>}

          {state.property1 === "mp" && <>aug'24-may'25</>}

          {state.property1 === "mdi" && <>aug'23-may'24</>}
        </div>

        <div className="tesla-wrapper">
          <div className="tesla-2">
            {state.property1 === "tesla" && <>tesla</>}

            {state.property1 === "nba" && <>nba</>}

            {state.property1 === "wp" && <>the washington post</>}

            {state.property1 === "mp" && <>marriage pact</>}

            {state.property1 === "mdi" && <>massive data institute</>}
          </div>
        </div>

        <div className="frame-2">
          <div className="group-2">
            <div className="software-product">
              {state.property1 === "tesla" && (
                <>Software Product Manager Intern</>
              )}

              {state.property1 === "nba" && (
                <p className="text-wrapper">Product, Tech &amp; Ops Intern</p>
              )}

              {state.property1 === "wp" && <>Product Management Intern</>}

              {state.property1 === "mp" && <>Product Launch Manager</>}

              {state.property1 === "mdi" && <>MDI Research Scholar</>}
            </div>

            <div className="supply-chain">
              {state.property1 === "tesla" && (
                <p className="text-wrapper">
                  Supply Chain Optimization, International Applications
                </p>
              )}

              {state.property1 === "nba" && (
                <>Consumer Experience, League Pass</>
              )}

              {state.property1 === "wp" && (
                <>Mobile Application, Subscriptions</>
              )}

              {state.property1 === "mp" && (
                <p className="text-wrapper">
                  Annual Matchmaking Activity, $5M seed funding
                </p>
              )}

              {state.property1 === "mdi" && (
                <p className="text-wrapper">
                  Prof. Amy O&#39;Hara, Compiling Data Sources to Inform Head
                  Start Programs
                </p>
              )}
            </div>
          </div>

          <div className="spearhead-an">
            {state.property1 === "tesla" && (
              <p className="text-wrapper">
                Spearhead an application revamp supporting $10B+ in annual
                procurement spend by conducting user interviews, defining and
                validating product requirements, creating Jira tickets, and
                enabling structured cost breakdowns for 5,000+ suppliers.
                <br />
                Lead a UX redesign of internal logistics tooling used by 20,000+
                internal and external users, improving workflow efficiency and
                activity logging to enhance productivity and searchability
                across 426,000+ managed parts.
                <br />
                Build SQL-based role classification logic for 15,000+ users by
                dept/title, increasing data security and access control by 90%.
              </p>
            )}

            {state.property1 === "nba" && (
              <p className="text-wrapper">
                Conducted seasonal analysis on League Pass purchase funnel
                performance to inform business strategy for 24-25 NBA season;
                influenced Premium SKU acquisition CTAs for international iOS
                users for the first half of the season, increasing CVR by 3%.
                <br />
                Developed user stories and acceptance criteria for key product
                features such as iOS winback save offers, CMS page rebuilds, and
                acquisition placements across engineering, API, and design
                teams, increasing League Pass conversion rate by 5-10%.
              </p>
            )}

            {state.property1 === "wp" && (
              <p className="text-wrapper">
                Executed a multi-pronged strategy to attract and engage Gen Z
                readers to The Post during the 2024 election season by
                introducing a new content format for 9 innovative features and
                modeling a freemium pricing strategy to drive adoption.
                <br />
                Designed and pitched features such as time-to-read to
                stakeholders, which were then implemented on The Post website
                through A/B tests, increasing subscriber clickthrough rate by
                0.9%.
              </p>
            )}

            {state.property1 === "mp" && (
              <p className="text-wrapper">
                Execute timely launches of Marriage Pact survey to colleges
                nationwide, leveraging guerrilla marketing and motivating campus
                influencers, with 70%+ campus participation after a one-week
                period.
                <br />
                Directly manage new on-the-ground teams for each college launch
                by developing engagement strategies to boost participation.
              </p>
            )}

            {state.property1 === "mdi" && (
              <p className="text-wrapper">
                Partnered with the National Head Start Association to conduct
                data analysis and visualization on transportation and income
                access issues for 833,000+ children in Head Start programs.
                <br />
                Created an interactive R Shiny dashboard to empower
                decision-makers with program performance metrics, enhancing
                data-driven decision-making for policy improvement.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "nba",
      };

    case "click_41":
      return {
        ...state,
        property1: "wp",
      };

    case "click_42":
      return {
        ...state,
        property1: "mp",
      };

    case "click_43":
      return {
        ...state,
        property1: "mdi",
      };

    case "click_51":
      return {
        ...state,
        property1: "nba",
      };

    case "click_53":
      return {
        ...state,
        property1: "wp",
      };

    case "click_55":
      return {
        ...state,
        property1: "mp",
      };

    case "click_57":
      return {
        ...state,
        property1: "mdi",
      };

    case "click_73":
      return {
        ...state,
        property1: "tesla",
      };

    case "click_83":
      return {
        ...state,
        property1: "tesla",
      };
  }

  return state;
}

WorkExp.propTypes = {
  property1: PropTypes.oneOf(["wp", "tesla", "nba", "mp", "mdi"]),
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  nbaLogo: PropTypes.string,
  vector2: PropTypes.string,
  marriagePactLogo: PropTypes.string,
  massiveData: PropTypes.string,
};
