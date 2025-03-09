import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

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
      headerImage: "/src/assets/wapo/header-image.png",
      problem:
        "Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text.",
      passwordProtected: {
        isProtected: true,
        password: "wapo2024",
      },
    },
    nba: {
      id: "nba",
      company: "National Basketball Association",
      logo: "/src/assets/nba/nba.png",
      role: "Products, Tech & Ops intern",
      timeline: "June - Aug 2024 (10 weeks)",
      team: ["Chelsea Landon & Alaina Browne (Managers)"],
      tags: ["Amplitude", "Jira", "Confluence", "Product Strategy"],
      headerImage: "/src/assets/nba/header-images.png",
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
        password: "nba2024",
      },
    },
    venmo: {
      id: "venmo",
      company: "Venmo",
      logo: "/src/assets/venmo/venmo.png",
      role: "Personal project (not affiliated with Venmo)",
      timeline: "",
      team: [],
      tags: ["Figma", "Prototyping", "UX Design"],
      headerImage: "/src/assets/venmo/header-image.png",
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

        <div className="max-w-4xl mx-auto">
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
                  <div className="text-sm text-gray-500 mb-4">July 2024</div>

                  <h3 className="text-xl font-bold mb-2">
                    Tl;dr: Seasonal Insights Informing Product Strategy
                  </h3>
                  <p className="mb-4">
                    The days leading up to ASW is a major opportunity to
                    increase packages page CTR and CVR across{" "}
                    <strong>all platforms</strong>, as we see an all-time high
                    of <strong>47% of web users initiating a purchase</strong>{" "}
                    (vs 5% but low purchase intent (7.58% confirmed purchases).
                    It's worthy to note on 2/15, Nike x NBA ID hosted a
                    promotion on Jayson Tatum sneakers, tied to receiving a free
                    year of Premium.
                  </p>
                  <p className="mb-4">
                    The opportunity to push Premium SKUs during this time period
                    also remains high.{" "}
                    <strong>2/15 is the only peak date</strong> where a Premium
                    package is the most bought SKU across platforms, accounting
                    for 15.3% of total purchases compared to other first place
                    SKUs on different dates only accounting for 3-5%. Between
                    the four main packages of BLPPUSMO, BLPUS, BLPEUSMO, and
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
                    guest users and authenticated users through the purchase
                    initiate and payment page steps). While only 19.4%
                    authenticated users drop off after the purchase initiate
                    step on web, <strong>51.3% of guest users drop off</strong>{" "}
                    at the same step, highlighting the{" "}
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
                    higher purchase initiate drop-off rate (84.7% vs. 70.9% of
                    iOS users vs 79.4% of global Android users, the largest
                    number of users live in PH, AUS, BRA, MEX, and IND.
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
                  <ul className="list-disc pl-5 space-y-2">
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
              {project.problem && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Problem</h2>
                  <p>{project.problem}</p>
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
                  {/* Content that would be shown after password authentication */}
                  <div className="bg-gray-200 p-6 rounded-xl mb-8">
                    <p className="text-gray-600 italic">
                      Detailed case study content would be displayed here after
                      authentication.
                    </p>
                  </div>
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
