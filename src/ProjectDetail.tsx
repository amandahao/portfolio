import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import ReactGoogleSlides from "react-google-slides";

interface PasswordProtectedContent {
  isProtected: boolean;
  password: string;
}

interface ProjectDetailData {
  id: string;
  company: string;
  logo: string;
  role: string;
  timeline: string;
  team: string[];
  tags: string[];
  headerImage: string;
  problem?: string;
  mission?: string;
  approach?: string;
  whatIDid?: string;
  focusAreas?: string[];
  impactOutcomes?: string[];
  caseStudyContent?: string;
  passwordProtected?: PasswordProtectedContent;
  insights?: string;
  tldr?: string;
  goalSuccess?: string;
}

const getTagColor = (tagName: string): { bg: string; text: string } => {
  const tagColors: Record<string, { bg: string; text: string }> = {
    // Design tools
    Figma: { bg: "bg-pink-200", text: "text-pink-800" },
    "UX Design": { bg: "bg-orange-200", text: "text-orange-800" },
    Prototyping: { bg: "bg-green-200", text: "text-green-800" },
    "UX Research": { bg: "bg-purple-200", text: "text-purple-800" },

    // Development tools
    Jira: { bg: "bg-blue-200", text: "text-blue-800" },
    Confluence: { bg: "bg-indigo-200", text: "text-indigo-800" },

    // Analytics
    Amplitude: { bg: "bg-red-200", text: "text-red-800" },
    "A/B Testing": { bg: "bg-yellow-200", text: "text-yellow-800" },

    // Strategy
    "Product Strategy": { bg: "bg-teal-200", text: "text-teal-800" },
  };

  return tagColors[tagName] || { bg: "bg-gray-200", text: "text-gray-800" };
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const projectsData: Record<string, ProjectDetailData> = {
    nba: {
      id: "nba",
      company: "National Basketball Association",
      logo: "/src/assets/nba/nba.png",
      role: "Products, Tech & Ops intern",
      timeline: "June - Aug 2024 (10 weeks)",
      team: ["Chelsea Landon & Alaina Browne (Managers)"],
      tags: ["Amplitude", "Jira", "Confluence", "Product Strategy"],
      headerImage: "/src/assets/nba/nba-hero.png",
      whatIDid:
        "My overarching goal for my internship was to optimize user purchase experience and standardize subscription flows across platforms, looking particularly at how season tentpoles change user behavior.",
      focusAreas: [
        "purchase funnel optimization",
        "user segmentation",
        "paywall testing",
        "competitive analysis",
      ],
      impactOutcomes: [
        "Optimized purchase funnel, improving overall conversion rates.",
        "Informed international growth strategy with market-specific insights.",
        "Refined onboarding experience, making subscriptions more accessible.",
        "Enhanced personalization efforts, setting a foundation for future customization.",
        "Developed Amplitude dashboards for data-driven decision-making.",
      ],
      passwordProtected: {
        isProtected: true,
        password: import.meta.env.VITE_PORTF_PW || "",
      },
    },
    wapo: {
      id: "wapo",
      company: "The Washington Post",
      logo: "/src/assets/wapo/wapo.png",
      role: "Product Management intern",
      timeline: "Jan - May 2024 (10 weeks)",
      team: [
        "Meredith Thoms (Manager)",
        "Zoe Wang",
        "Humza Husain",
        "Anish Goel",
        "Sneha Selveraj",
      ],
      tags: ["Figma", "Prototyping", "UX Research", "A/B Testing"],
      headerImage: "/src/assets/wapo/wapo-hero.png",
      mission:
        "The project aims to develop and implement a targeted strategy to attract and engage Gen Z readership to The Washington Post during the 2024 election season. Leveraging digital platforms, innovative content formats, and interactive campaigns, the project seeks to establish The Post as a relevant and trusted paid source of elections news and information for this audience.",
      passwordProtected: {
        isProtected: true,
        password: import.meta.env.VITE_PORTF_PW || "",
      },
    },
    venmo: {
      id: "venmo",
      company: "Venmo",
      logo: "/src/assets/venmo/venmo.png",
      role: "Personal project",
      timeline: "",
      team: [],
      tags: ["Figma", "Prototyping", "UX Design"],
      headerImage: "/src/assets/venmo/venmoe-hero.png",
      problem:
        "Many Venmo users, especially college students, struggle to manage their finances effectively when using the app. This often leads to overspending and difficulty tracking expenses, impacting their financial well-being and user satisfaction.",
      approach:
        "Introduce a budgeting feature within the Venmo app that allows users to set spending limits, categorize transactions, and receive insights into their spending patterns. This feature aims to promote financial responsibility among users.",
      goalSuccess:
        "Success for the Venmo Budgeting Feature would involve achieving the following metrics:",
      impactOutcomes: [
        "Increase in user engagement with budgeting tools.",
        "Reduction in user-reported overspending issues.",
        "Positive user feedback on the budgeting feature through in-app surveys.",
      ],
    },
  };

  const project = projectsData[projectId || ""];

  if (!project) {
    return <div className="text-center py-10">Project not found</div>;
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      project.passwordProtected &&
      password === project.passwordProtected.password
    ) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleBackClick = () => {
    navigate("/work");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="p-4">
        <button onClick={handleBackClick} className="flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="max-w-4xl mx-auto p-wrapper">
          <div className="mb-8 flex items-center">
            <img
              src={project.logo}
              alt={`${project.company} logo`}
              className="h-16 mr-4"
            />
            <h1 className="text-4xl font-bold">{project.company}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {project.role && (
              <div>
                <h3 className="font-bold mb-1">Role</h3>
                <p>{project.role}</p>
              </div>
            )}

            {project.timeline && (
              <div>
                <h3 className="font-bold mb-1">Timeline</h3>
                <p>{project.timeline}</p>
              </div>
            )}

            {project.team && project.team.length > 0 && (
              <div>
                <h3 className="font-bold mb-1">Team</h3>
                <p>{project.team.join(", ")}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => {
              const { bg, text } = getTagColor(tag);
              return (
                <span
                  key={index}
                  className={`rounded-full px-3 py-1 text-sm ${bg} ${text}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {project.headerImage && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={project.headerImage}
                alt={`${project.company} header`}
                className="w-full"
              />
            </div>
          )}

          {/* NBA-specific content */}
          {projectId === "nba" && (
            <>
              {project.whatIDid && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    What I did this summer ☀️
                  </h2>
                  <p className="mb-2">{project.whatIDid}</p>
                  {project.focusAreas && project.focusAreas.length > 0 && (
                    <div>
                      <strong className="font-bold">Focus Areas:</strong>{" "}
                      {project.focusAreas.join(", ")}.
                    </div>
                  )}
                </div>
              )}

              {/* Password protected section */}
              {project.passwordProtected && !isAuthenticated ? (
                <div className="bg-gray-200 p-10 rounded-xl mb-8 text-center">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="gray"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-2"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-600">
                      This case study is password-protected.
                    </h3>
                  </div>

                  <form
                    onSubmit={handlePasswordSubmit}
                    className="max-w-sm mx-auto"
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className={`w-full px-3 py-2 border ${
                        passwordError ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        Incorrect password
                      </p>
                    )}
                    <button
                      type="submit"
                      className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              ) : (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    Purchase CVR Insights
                  </h2>

                  <ReactGoogleSlides
                    width={"100%"}
                    height={540}
                    slidesLink="https://docs.google.com/presentation/d/1uOZA9FcLAvTM2JHDzB-0og2cFAjaOyZUi1mHf15Aslw"
                    position={1}
                    showControls
                  />

                  <h3 className="text-xl font-bold mb-2 mt-8">
                    Tl;dr: Seasonal Insights Informing Product Strategy
                  </h3>
                  <p className="mb-4">
                    The days leading up to ASW is a major opportunity to
                    increase packages page CTR and CVR across{" "}
                    <strong>all platforms</strong>, as we see an all-time high
                    of <strong>47% of web users initiating a purchase</strong>{" "}
                    on 2/15 but low purchase intent (7.58% confirmed purchases).{" "}
                    <mark style={{ backgroundColor: "#E6E6E6" }}>
                      It's worthy to note on 2/15, Nike x NBA ID hosted a
                      promotion on Jayson Tatum sneakers, tied to receiving a
                      free year of Premium.
                    </mark>
                  </p>
                  <p className="mb-4">
                    The opportunity to push Premium SKUs during this time period
                    also remains high.{" "}
                    <strong>2/15 is the only peak date</strong> where a Premium
                    package is the most bought SKU across platforms, accounting
                    for 15.55% of total purchases compared to other first place
                    SKUs on different dates only accounting for 3-5%. Between
                    the four main packages of BLPPUSMO, BLPPUS, BLPEUSMO, and
                    BLPEUS,{" "}
                    <strong>
                      94.8% of purchases on 2/15 were Premium SKUs
                    </strong>
                    .
                  </p>
                  <p className="mb-4">
                    Web traffic during ASW is already high (with user volume
                    similar or more than SoS on desktop web and mobile web
                    respectively), but{" "}
                    <strong>drop off is a huge concern</strong> (especially for
                    guest users and between the purchase initiate and payment
                    page steps). While only 19.4% authenticated users drop off
                    after the purchase initiate step on web,{" "}
                    <strong>51.3% of guest users drop off</strong> at the same
                    step, highlighting the{" "}
                    <strong>
                      need to streamline the account creation flow
                    </strong>
                    .
                  </p>
                  <p className="mb-4">
                    On the other hand, international markets see low purchases
                    during ASW, instead increasing sales through the end of
                    regular season and playoffs. The highest spikes in CVR,
                    particularly in the{" "}
                    <strong>
                      largest international markets AUS, PH, and CAN
                    </strong>
                    , are seen on 4/16, though the largest international spike
                    of purchases occurs on 4/20 (with lower CVR but double the
                    amount of users).
                  </p>
                  <p className="mb-4">
                    In addition, our{" "}
                    <strong>
                      Android users predominantly skew international
                    </strong>{" "}
                    (64.3% of ANDR users vs. 45.8% of iOS users) and have a
                    higher purchase initiate drop-off rate (84.7% of ANDR users
                    vs 59.4% of iOS users). Out of global Android users, the
                    largest number of users live in PH, AUS, BRA, MEX, and IND.
                    Considering these user demographics, English proficiency,
                    platform clarity, and package descriptions can be
                    influential factors behind the generally lower overall CVR
                    on Android.
                  </p>
                </div>
              )}

              {project.impactOutcomes && project.impactOutcomes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Impact & outcomes</h2>
                  <ul className="list-disc pl-5">
                    {project.impactOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Washington Post specific content */}
          {projectId === "wapo" && (
            <>
              {project.mission && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Mission</h2>
                  <p>{project.mission}</p>
                </div>
              )}

              {/* Password protected section */}
              {project.passwordProtected && !isAuthenticated ? (
                <div className="bg-gray-200 p-10 rounded-xl mb-8 text-center">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="gray"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-2"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-600">
                      This case study is password-protected.
                    </h3>
                  </div>

                  <form
                    onSubmit={handlePasswordSubmit}
                    className="max-w-sm mx-auto"
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className={`w-full px-3 py-2 border ${
                        passwordError ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        Incorrect password
                      </p>
                    )}
                    <button
                      type="submit"
                      className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Problem</h2>
                    <p>
                      Gen Z individuals have limited attention spans, especially
                      towards hard news. They do not have time to find the
                      content that is most relevant to them.
                    </p>

                    <h3 className="text-xl font-bold mb-2 mt-2">
                      User Interview Insights
                    </h3>
                    <ul className="list-disc pl-5">
                      <li>
                        Only 25% of users have a news-specific app on their
                        phone and none pay for news.
                      </li>
                      <li>
                        Most users stay updated with news through social media:
                        Instagram, Reddit, Tiktok, etc.
                      </li>
                      <li>
                        Average time spent consuming news in total per day: 15
                        minutes.
                      </li>
                      <li>
                        Written articles and social media (posts, stories, short
                        videos) are the preferred formats for news consumption.
                      </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2 mt-2">
                      Pain Point Rationale
                    </h3>
                    <ol className="list-decimal pl-5">
                      <li>
                        <b>Time</b>
                      </li>
                      <ul className="pl-5" style={{ listStyleType: "circle" }}>
                        <li>
                          Gen Z expects <b>rapid information</b> delivery and
                          efficient communication.
                        </li>
                        <li>
                          Gen Z views social media as the{" "}
                          <b>primary channel for politics</b>, thanks to its
                          quick, engaging format.
                        </li>
                        <li>
                          Gen Z views print newspapers as the{" "}
                          <b>most reliable source</b>, but social media's
                          convenience leads to higher usage.
                        </li>
                      </ul>
                      <li>
                        <b>Personalization</b>
                      </li>
                      <ul className="pl-5" style={{ listStyleType: "circle" }}>
                        <li>
                          Gen Z expects a <b>high degree of personalization</b>{" "}
                          when it comes to media they consume.
                        </li>
                        <li>
                          Being <b>subscriber-centric</b> and relevant is key to
                          increasing customer lifetime value.
                        </li>
                        <li>
                          Generic news feeds are overwhelming for Gen Z, who
                          have a <b>short attention span</b> for reading
                          irrelevant content.
                        </li>
                      </ul>
                      <li>
                        <b>Engagement</b>
                      </li>
                      <ul className="pl-5" style={{ listStyleType: "circle" }}>
                        <li>
                          Gen Z seeks <b>instant communication</b> and
                          collaboration with friends, family, and peers.
                        </li>
                        <li>
                          Gen Z strives for rewarding intellectual pursuits to
                          challenge them to think critically.
                        </li>
                        <li>
                          Gen Z wants <b>interactive experiences</b> that go
                          beyond passive consumption.
                        </li>
                      </ul>
                    </ol>
                    <h2 className="text-2xl font-bold mb-2 mt-8">
                      Feature Ideation
                    </h2>
                    <p className="mb-2">
                      Check out the features in the embedded Figma prototype.
                      Selected features are explained in greater detail below.
                    </p>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="700"
                      src="https://embed.figma.com/proto/K7QkPkGcCFaVcRWQXFjXK7/my-wapo?page-id=0%3A1&node-id=1-2&viewport=603%2C342%2C0.39&scaling=scale-down&content-scaling=fixed&starting-point-node-id=60%3A534&embed-host=share&footer=false"
                      allowFullScreen
                    ></iframe>
                    <div className="flex flex-col md:flex-row mt-6">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-bold mb-2">
                          Cards/Bite Size News
                        </h3>
                        <ul className="list-disc pl-5 leading-relaxed">
                          <li className="mb-2">
                            Understand <b>key takeaways</b> from news articles
                            and election information.
                          </li>
                          <li className="mb-2">
                            <b>Convenient access</b> to more information about a
                            topic of interest.
                          </li>
                          <li className="mb-2">
                            <b>100% of interviewees</b> would use this feature.{" "}
                          </li>
                          <li className="mb-2">
                            "I like how this is{" "}
                            <b>similar to swiping on social media</b> and
                            provides <b>quick bullet points</b> for me to read."
                          </li>
                          <li>
                            <b>Potential iteration:</b> make cards more similar
                            to social media posts (e.g. vertical scroll) as
                            users have already shown a preference for this
                            format.
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-1/2 flex justify-center">
                        <img
                          src="/src/assets/wapo/cards.gif"
                          className="w-1/2 self-center"
                          style={{ maxHeight: 400, width: "auto" }}
                        />
                        <img
                          src="/src/assets/wapo/articles.gif"
                          className="w-1/2 self-center"
                          style={{ maxHeight: 400, width: "auto" }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row mt-6">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-bold mb-2">
                          Est. Reading Time
                        </h3>
                        <ul className="list-disc pl-5 leading-relaxed">
                          <li className="mb-2">
                            Estimates amount of time it would take to read an
                            article based on word count.
                          </li>
                          <li className="mb-2">
                            <b>100% of interviewees</b> would use this feature.
                          </li>
                          <li className="mb-2">
                            "I feel like this is a feature{" "}
                            <b>every news app should have</b>/already has."
                          </li>
                          <li>
                            <b>Potential iteration:</b> calculating estimated
                            reading time based on users' reading speed.
                            Implement test article in onboarding.
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-1/2 flex justify-center">
                        <img
                          src="/src/assets/wapo/ert.png"
                          className="w-1/2 self-center"
                          style={{ maxHeight: 300, width: "auto" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row mt-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-2">
                        Progress Bar/Completion Animation
                      </h3>
                      <ul className="list-disc pl-5 leading-relaxed">
                        <li className="mb-2">
                          <b>100% of interviewees</b> would use this feature.
                        </li>
                        <li className="mb-2">
                          “I like knowing where I am while reading an article
                          and how much I have left to read.”
                        </li>
                        <li className="mb-2">
                          Users felt feature provides a{" "}
                          <b>sense of accomplishment</b> that motivated them to{" "}
                          <b>read more articles</b>.
                        </li>
                        <li className="mb-2">
                          Return to home button <b>improved UX navigation</b>.
                        </li>
                        <li>
                          <b>Potential iteration:</b> mark articles as completed
                          similar to iBooks.
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img
                        src="/src/assets/wapo/completion.gif"
                        className="w-1/2 self-center"
                        style={{ maxHeight: 100, width: "auto" }}
                      />
                      <img
                        src="/src/assets/wapo/progress-bar.png"
                        className="w-1/2 self-center"
                        style={{ maxHeight: 400, width: "auto" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row mt-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-2">TL;DR</h3>
                      <ul className="list-disc pl-5 leading-relaxed">
                        <li className="mb-2">
                          <b>100% of interviewees</b> would use this feature.
                        </li>
                        <li className="mb-2">
                          "If this feature existed,{" "}
                          <b>I would definitely skip to it</b> if I felt the
                          article was too long."
                        </li>
                        <li className="mb-2">
                          Users liked ability to{" "}
                          <b>quickly understand the key points</b> of a lengthy
                          article (over 500 words).
                        </li>
                        <li className="mb-2">
                          Some users expressed preference for{" "}
                          <b>TL;DR to be at top</b>
                          of an article.
                        </li>
                        <li>
                          <b>Potential iteration:</b> Skip to TL;DR button that
                          allows users to jump to the bottom of the article
                          where the TL;DR is.
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img
                        src="/src/assets/wapo/tldr.png"
                        className="w-1/2 self-center"
                        style={{ maxHeight: 300, width: "auto" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row mt-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-2">US Map</h3>
                      <ul className="list-disc pl-5 leading-relaxed">
                        <li className="mb-2">
                          76% of interviewees would use this feature.
                        </li>
                        <li className="mb-2">
                          “I like the interactive aspect of the map, but I would
                          only want to see news and election updates for my
                          state or national headlines.”
                        </li>
                        <li className="mb-2">
                          Users generally liked this feature, but are more
                          interested local news
                        </li>
                        <li>
                          Potential iteration: Showing “hot spots” for national
                          headlines/swing state election news. Allow users to
                          zoom in quickly to their state/county for access to
                          information about local elections and politics.
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img
                        src="/src/assets/wapo/map.gif"
                        className="w-1/2 self-center"
                        style={{ maxHeight: 300, width: "auto" }}
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-2 mt-8">
                    Success Metrics
                  </h2>
                  <ul className="list-disc pl-5">
                    <li>Number of swipes and articles viewed</li>
                    <li>Time spent on app</li>
                    <li>% of time spent on Good News vs regular news</li>
                    <li>
                      Number of users that opted to select onboarding
                      preferences
                    </li>
                    <li>Average # of topics selected</li>
                    <li>Number of users that submitted quizzes</li>
                    <li>Average daily streak</li>
                    <li>% of articles read by average length</li>
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Venmo specific content */}
          {projectId === "venmo" && (
            <>
              {project.problem && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Problem</h2>
                  <p>{project.problem}</p>
                </div>
              )}

              {project.approach && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Approach</h2>
                  <p className="mb-4">{project.approach}</p>

                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Budget Creation:</strong> Users can set monthly or
                      weekly budgets for specific spending categories (e.g.,
                      dining out, transportation, entertainment).
                    </li>
                    <li>
                      <strong>Transaction Categorization:</strong> The app
                      automatically categorizes transactions into predefined
                      categories (e.g., groceries, rent, utilities) and allows
                      users to customize categories.
                    </li>
                    <li>
                      <strong>Budget Tracking:</strong> Users can view their
                      budget progress, including how much they've spent and how
                      much they have left for each category.
                    </li>
                    <li>
                      <strong>Spending Insights:</strong> Venmo provides
                      insights into spending patterns, offering recommendations
                      on where to save.
                    </li>
                    <li>
                      <strong>Reports:</strong> Generate reports on monthly or
                      weekly spending, exportable in PDF or CSV format for
                      further analysis.
                    </li>
                    <li>
                      <strong>Notifications:</strong> Users receive
                      notifications when they are approaching their budget
                      limits in specific categories.
                    </li>
                  </ul>

                  <div className="grid grid-cols-3 gap-2 mb-8">
                    <img
                      src="/src/assets/venmo/screens1.png"
                      alt="Venmo budgeting screens"
                      className="rounded-md"
                    />
                    <img
                      src="/src/assets/venmo/screens2.png"
                      alt="Venmo budgeting screens"
                      className="rounded-md"
                    />
                    <img
                      src="/src/assets/venmo/screens3.png"
                      alt="Venmo budgeting screens"
                      className="rounded-md"
                    />
                  </div>
                </div>
              )}

              {project.goalSuccess && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Goals & success</h2>
                  <p className="mb-4">{project.goalSuccess}</p>

                  {project.impactOutcomes &&
                    project.impactOutcomes.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2">
                        {project.impactOutcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    )}
                </div>
              )}
            </>
          )}
        </div>

        <Footer theme="dark" />
      </div>
    </div>
  );
};

export default ProjectDetail;
