import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { FaArrowLeft, FaLink, FaGithub } from "react-icons/fa";

// Project details data type with extended information
interface ProjectDetailData {
  id: string;
  company: string;
  logo: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  timeline: string;
  technologies: string[];
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  outcomes: string[];
  imageSrc: string;
  additionalImages?: string[];
  tags: string[];
  links?: {
    title: string;
    url: string;
    type: "website" | "github" | "other";
  }[];
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

const projectsData: ProjectDetailData[] = [
  {
    id: "nba",
    company: "National Basketball Association",
    logo: "/images/nba-logo.png",
    title: "NBA League Pass Conversion Optimization",
    description:
      "Increase purchase conversion and user retention for NBA League Pass.",
    longDescription:
      "Worked to improve the NBA League Pass experience by focusing on user retention and purchase conversion. Implemented data-driven strategies to enhance the viewing experience and increase subscriber loyalty.",
    role: "Products, Tech & Ops Intern",
    timeline: "June - Aug 2024 (10 weeks)",
    technologies: ["Amplitude", "Jira", "Confluence", "Figma"],
    challenges: [
      {
        title: "User Churn",
        description: "Identified high churn rates during off-season periods.",
      },
      {
        title: "Conversion Funnel",
        description:
          "Discovered drop-offs in the purchase process that were affecting revenue.",
      },
    ],
    solutions: [
      {
        title: "User Journey Mapping",
        description:
          "Created comprehensive journey maps to identify pain points in the subscription process.",
      },
      {
        title: "Feature Prioritization",
        description:
          "Led cross-functional team to prioritize features that would have the highest impact on retention.",
      },
    ],
    outcomes: [
      "Increased conversion rate by 15% through UI improvements",
      "Reduced churn by implementing targeted off-season content strategies",
      "Improved mobile app rating from 3.2 to 4.1 stars",
    ],
    imageSrc: "/images/nba-project.png",
    additionalImages: ["/images/nba-detail-1.png", "/images/nba-detail-2.png"],
    tags: ["Amplitude", "Jira", "Confluence", "Product Strategy"],
  },
  {
    id: "washington-post",
    company: "The Washington Post",
    logo: "/images/wapo-logo.png",
    title: "Gen-Z Election Engagement Features",
    description:
      "Designed nine innovative features to attract and engage Gen Z readers to The Post during the 2024 election season.",
    longDescription:
      "Created a suite of interactive features designed to make election news more accessible and engaging for younger audiences. The project focused on increasing time-on-site and subscription conversion among 18-25 year old readers.",
    role: "UX Designer",
    timeline: "Spring 2024",
    technologies: ["Figma", "Adobe XD", "Hotjar", "Google Analytics"],
    challenges: [
      {
        title: "Audience Gap",
        description:
          "The Post had difficulty attracting and retaining younger readers.",
      },
      {
        title: "Content Complexity",
        description:
          "Political content was perceived as overwhelming and difficult to parse by target audience.",
      },
    ],
    solutions: [
      {
        title: "Interactive Explainers",
        description:
          "Designed visual explainers to break down complex political topics.",
      },
      {
        title: "Personalized Election Hub",
        description:
          "Created a customizable dashboard for users to follow topics and candidates they care about.",
      },
    ],
    outcomes: [
      "Increased Gen-Z readership by 27% during election season",
      "Achieved 4.5x higher engagement rates on interactive features",
      "Won internal innovation award for design approach",
    ],
    imageSrc: "/images/wapo-project.png",
    additionalImages: [
      "/images/wapo-detail-1.png",
      "/images/wapo-detail-2.png",
    ],
    tags: ["Figma", "Prototyping", "UX Research", "A/B Testing"],
  },
  {
    id: "venmo",
    company: "Venmo",
    logo: "/images/venmo-logo.png",
    title: "Venmo Budget Tracking Feature",
    description:
      "Prototyped a budgeting feature within the app that allows users to set spending limits, categorize transactions, and view spending patterns.",
    longDescription:
      "Designed and prototyped a comprehensive budgeting solution integrated directly into the Venmo mobile app. The feature helps users better understand their spending patterns and maintain financial awareness.",
    role: "Product Design Intern",
    timeline: "Fall 2023",
    technologies: ["Figma", "Principle", "UserTesting.com"],
    challenges: [
      {
        title: "Feature Integration",
        description:
          "Finding the right balance between Venmo's social features and new financial management tools.",
      },
      {
        title: "User Adoption",
        description:
          "Creating a budgeting experience that users would actually engage with regularly.",
      },
    ],
    solutions: [
      {
        title: "Contextual Categorization",
        description:
          "Implemented automatic transaction categorization with manual override options.",
      },
      {
        title: "Visual Progress Tracking",
        description:
          "Designed intuitive visual indicators for budget progress and spending patterns.",
      },
    ],
    outcomes: [
      "90% positive feedback in user testing sessions",
      "Selected for beta implementation in Q2 2024",
      "Featured in internal design showcase",
    ],
    imageSrc: "/images/venmo-project.png",
    additionalImages: [
      "/images/venmo-detail-1.png",
      "/images/venmo-detail-2.png",
    ],
    tags: ["Figma", "Prototyping", "UX Design"],
    links: [
      {
        title: "Prototype",
        url: "https://www.figma.com/proto/example",
        type: "website",
      },
    ],
  },
];

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/work")}
            className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-medium flex items-center mx-auto"
          >
            <FaArrowLeft className="mr-2" /> Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <button
          onClick={() => navigate("/work")}
          className="flex items-center text-sm mb-8 hover:text-blue-300 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to all projects
        </button>

        {/* Hero Section */}
        <div className="bg-white text-black rounded-3xl overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <img
                src={project.logo}
                alt={`${project.company} logo`}
                className="h-16 mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-xl text-gray-600">{project.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
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

            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-8 shadow-md"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Role</h3>
                <p>{project.role}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Timeline</h3>
                <p>{project.timeline}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Technologies</h3>
                <p>{project.technologies.join(", ")}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg">{project.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-lg">{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                {project.solutions.map((solution, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-lg">{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Only show if there are additional images */}
            {project.additionalImages &&
              project.additionalImages.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Process & Deliverables
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.additionalImages.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`${project.title} detail ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            {/* Only show if there are links */}
            {project.links && project.links.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-4">Related Links</h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      {link.type === "github" ? (
                        <FaGithub className="mr-2" />
                      ) : link.type === "website" ? (
                        <FaLink className="mr-2" />
                      ) : null}
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
