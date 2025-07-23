import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";

interface ProjectData {
  id: string;
  company: string;
  title: string;
  projectType: string;
  timeline: string;
  description: string;
  problem: string;
  goal: string;
  strategy?: string;
  approach?: string;
  features: Array<{
    title: string;
    description?: string;
    details?: string[];
  }>;
  keyHighlights?: string[];
  userJourney?: Array<{
    step: string;
    description: string;
  }>;
  outcomes?: string[];
  metrics?: string[];
  reflection?: string;
  heroImage: string;
  mockupImage?: string;
}

const projectsData: ProjectData[] = [
  {
    id: "washington-post",
    company: "The Washington Post",
    title: "The Washington Post",
    projectType: "Product Consultant (Contract)",
    timeline: "Jan'24-May'24",
    description:
      "The project aims to develop and implement a targeted strategy to attract and engage Gen Z readership to The Washington Post during the 2024 election season, leveraging digital platforms, innovative content formats, and interactive campaigns.",
    problem:
      "Gen Z doesn't trust social media for news, but still gets most of their information from it. They crave fast, personalized, interactive content—but few are paying for news.",
    goal: "Build a product experience during the 2024 election season that positions The Washington Post as a relevant, trustworthy, and engaging source of news for Gen Z (ages 18-24), converting them from casual browsers to subscribers.",
    strategy: "We approached this problem through three lenses:",
    approach:
      "We backed these themes with 25+ user interviews, emphasizing diverse demographics and political perspectives.",
    features: [
      {
        title: "Swipeable Card Format",
        details: ["Bite-sized election news", "Social-feed inspired UX"],
      },
      {
        title: "Estimated Reading Time (ERT)",
        details: [
          "Shows upfront how long an article takes to read",
          "Helps Gen Z weigh time vs comprehension",
        ],
      },
      {
        title: "Progress Bar + Completion Animation",
        details: [
          "Subtle UX that gamifies article reading",
          "Increased likelihood to finish long-form articles",
        ],
      },
      {
        title: "TL;DR & Quiz",
        details: [
          "TL;DR at end of article; high-level summary",
          "Post-article quizzes to reinforce learning",
        ],
      },
      {
        title: "Good News + Interactive US Map",
        details: [
          "Good News  to counter news fatigue",
          "Zoomable US Map for local/state election coverage",
        ],
      },
    ],
    keyHighlights: [
      "0% of users paid for a news app",
      "95% trusted social media less than legacy outlets but still used it more",
      "Top formats: social media posts, short articles, and interactive content",
      "Most-wanted features: Cards, Estimated Reading Time, Progress Bar",
    ],
    userJourney: [
      {
        step: "take onboarding quiz to personalize interests",
        description: "",
      },
      {
        step: "enter 'elections' tab with swipeable article cards",
        description: "",
      },
      {
        step: "read TL;DR and select article by tapping on card",
        description: "",
      },
      { step: "highlight quotes and share to social media", description: "" },
      {
        step: "finish article and complete end of article quiz",
        description: "",
      },
    ],
    outcomes: [
      "Validated top 5 features with 100% user interest",
      "Developed functional Figma prototype and feature-specific recommendations",
      "Delivered full PRD + pricing strategy to WaPo stakeholders",
    ],
    reflection:
      "This project taught me how to translate research into action, prioritize user needs in a critical election cycle, and drive alignment across product, design, and business stakeholders.",
    heroImage: "/projects/wapo-proj.png",
    mockupImage: "/mockups/wapo.png",
  },
  {
    id: "venmo",
    company: "Venmo",
    title: "Venmo",
    projectType: "Personal Project",
    timeline: "Dec'23",
    description:
      "This project aims to introduce category-based budgets, smart notifications, and spending insights to empower Venmo users to build better habits through a low-friction, high-impact experience.",
    problem:
      "Venmo users — especially college students and young professionals — often use the app for casual spending (e.g., food, rideshares, concerts) but lack any visibility into how much they're actually spending.",
    goal: "Introduce a lightweight budgeting feature inside Venmo that lets users set spending limits by category, automatically track expenses, and provide nudges and insights to encourage better financial habits",
    features: [
      {
        title: "Native Budgeting",
        details: [
          "Users didn't want to download or switch to a separate budgeting tool",
          "Embed budgeting inside the existing 'Activity'",
        ],
      },
      {
        title: "Auto Categorization with User Control",
        details: [
          "Transaction categorization to be both smart and editable",
          "Use merchant metadata/transaction description + user-defined rules for flexibility",
        ],
      },
      {
        title: "Nudges > Shaming",
        details: [
          "Notifications are supportive and phrased positively",
          'e.g., "You\'re close to your Dining budget — want to adjust or view spending tips?"',
        ],
      },
      {
        title: "Minimal Setup",
        details: [
          "No friction to start — just set 3 category budgets and go",
          "No full onboarding flow required at launch",
        ],
      },
      {
        title: "Built-In Visual Reports & Insights",
        details: [
          "Users crave awareness of spending habits, not just a static budget",
          "Weekly/monthly reports with graphs, highlights, and recommendations",
        ],
      },
    ],
    userJourney: [
      {
        step: "create monthly budget with spending categories",
        description: "",
      },
      { step: "user pays or requests money", description: "" },
      { step: "venmo auto categorizes transactions", description: "" },
      { step: "user checks dashboard to see spending trends", description: "" },
      {
        step: "venmo sends smart alerts when approaching limits",
        description: "",
      },
    ],
    metrics: [
      "# of users setting budgets",
      "% of transactions auto-categorized",
      "Retention of users using budgeting tool",
      "Positive user survey feedback",
    ],
    reflection:
      "This feature was designed around the principle that financial empowerment should be passive, not punishing. By embedding budgeting where users already transact—and balancing automation and user control—we aim to nudge users toward smarter habits without overwhelming them.",
    heroImage: "/projects/venmo.png",
    mockupImage: "/mockups/venmo.png",
  },
];

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center py-10">Project not found</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="z-10">
        <Header />
      </div>

      <main className="flex-1 px-10 pt-32 pb-24">
        <div>
          {/* Hero Section */}
          <div className="mb-16">
            <div className="rounded-xl overflow-hidden bg-gray-800 shadow-lg mb-8">
              <img
                src={project.heroImage}
                alt={`${project.title} preview`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <p
                  className="font-medium text-white"
                  style={{ fontSize: "28px", lineHeight: "1.1" }}
                >
                  {project.title}
                </p>
                <div className="text-[#797979]">
                  <p
                    className="font-medium"
                    style={{ fontSize: "28px", lineHeight: "1.1" }}
                  >
                    {project.projectType}
                  </p>

                  <p
                    className="font-medium"
                    style={{ fontSize: "28px", lineHeight: "1.1" }}
                  >
                    {project.timeline}
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="font-medium text-white"
                  style={{ fontSize: "28px", lineHeight: "1.1" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Problem & Goal */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Problem
              </p>

              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.problem}
              </p>
            </div>
            <div>
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Goal
              </p>

              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.goal}
              </p>
            </div>
          </div>

          {/* Strategy/Approach */}
          {(project.strategy || project.approach) && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.strategy ? "Strategy" : "Approach"}
              </p>
              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.strategy}
              </p>

              {project.id === "washington-post" && (
                <div className="overflow-x-auto my-8">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th
                          className="text-left pb-3 font-medium text-[#797979]"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Focus Area
                        </th>
                        <th
                          className="text-left pb-3 font-medium text-[#797979]"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Why It Matters for Gen Z
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Time
                        </td>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          15min/day average news consumption; prefer skimmable
                          content
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Personalization
                        </td>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Social feeds have raised expectations for tailored
                          content
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Engagement
                        </td>
                        <td
                          className="font-medium text-white"
                          style={{ fontSize: "20px", lineHeight: "1.1" }}
                        >
                          Gen Z seeks interactivity, not passive reading
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.approach}
              </p>
            </div>
          )}

          {/* User Interview Highlights */}
          {project.keyHighlights && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                User Interview Highlights
              </p>
              <div className="space-y-3">
                <ul
                  className="font-medium text-white"
                  style={{ fontSize: "28px", lineHeight: "1.1" }}
                >
                  {project.keyHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <p
                        className="font-medium text-white"
                        style={{ fontSize: "28px", lineHeight: "1.1" }}
                      >
                        •
                      </p>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mb-16">
            <p
              className="font-medium text-[#797979]"
              style={{ fontSize: "28px", lineHeight: "1.1" }}
            >
              Key Product Decisions & Features
            </p>

            <div className="grid md:grid-cols-[320px_1fr] mt-4">
              {project.mockupImage && (
                <div className="w-96 mb-8 rounded-[50px] overflow-hidden">
                  <img
                    src={project.mockupImage}
                    alt={`${project.title} mockup`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="space-y-8 mt-12">
                {project.features.map((feature, index) => (
                  <div key={index}>
                    <p
                      className="font-medium text-white"
                      style={{ fontSize: "28px", lineHeight: "1.1" }}
                    >
                      {index + 1}. {feature.title}
                    </p>
                    <p
                      className="font-medium text-[#797979]"
                      style={{ fontSize: "28px", lineHeight: "1.1" }}
                    >
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul
                        className="font-medium text-[#797979]"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        {feature.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-2"
                          >
                            <p
                              className="font-medium text-[#797979]"
                              style={{ fontSize: "20px", lineHeight: "1.1" }}
                            >
                              •
                            </p>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Journey */}
          {project.userJourney && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                User Journey Roadmap
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {project.userJourney.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-white border border-gray-300 rounded-xl px-6 py-4 text-center min-h-[72px] min-w-[140px] max-w-[200px] shadow-sm flex items-center justify-center">
                      <p
                        className="font-medium text-[#797979]"
                        style={{ fontSize: "14px", lineHeight: "1.1" }}
                      >
                        {step.step}
                      </p>
                    </div>
                    {index < project.userJourney!.length - 1 && (
                      <div className="mx-3 text-gray-400 text-lg font-bold">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.id === "washington-post" && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Monetization Strategy
              </p>
              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                We proposed a freemium model:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th
                        className="text-left pb-3 font-medium text-[#797979]"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        Tier
                      </th>
                      <th
                        className="text-left pb-3 font-medium text-[#797979]"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        Feature
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="font-medium text-white"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        Free
                      </td>
                      <td
                        className="font-medium text-white"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        10 cards/day, 10 articles/month, ads
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="font-medium text-white"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        Premium
                      </td>
                      <td
                        className="font-medium text-white"
                        style={{ fontSize: "20px", lineHeight: "1.1" }}
                      >
                        Unlimited cards + articles, fewer ads
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Success Metrics */}
          {project.metrics && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Success Metrics
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Outcomes
              </p>
              <div className="space-y-3 mb-6">
                <ul
                  className="font-medium text-white"
                  style={{ fontSize: "28px", lineHeight: "1.1" }}
                >
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <p
                        className="font-medium text-white"
                        style={{ fontSize: "28px", lineHeight: "1.1" }}
                      >
                        •
                      </p>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Reflection */}
          {project.reflection && (
            <div className="mb-16">
              <p
                className="font-medium text-[#797979]"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Reflection
              </p>
              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                {project.reflection}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
