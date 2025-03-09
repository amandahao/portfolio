import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface ProjectData {
  id: string;
  company: string;
  logo: string;
  description: string;
  imageSrc: string;
  tags: string[];
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

const ProjectCard: React.FC<ProjectData & { onClick: () => void }> = ({
  company,
  logo,
  description,
  imageSrc,
  tags,
  onClick,
}) => {
  return (
    <div
      className="rounded-3xl shadow-lg overflow-hidden mb-8 text-black"
      style={{
        backgroundColor: "#F3F3F3",
        boxShadow: "0px 0px 53.5px 24px rgba(255, 255, 255, 0.25)",
      }}
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row p-8">
        {/* p-8 a bit too big imo, change smaller to mimic figma design */}
        <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-12 mr-4 object-contain" // if NBA, h-16
            />
            <h3 className="text-2xl font-bold text-left project-title">
              {company}
            </h3>
          </div>
          <p className="mb-6 text-left project-desc">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
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
        </div>
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={`${company} project screenshot`}
            className="w-full rounded-xl object-cover"
            style={{ height: "13.5rem", backgroundPosition: "bottom" }}
          />
        </div>
      </div>
    </div>
  );
};

const WorkPage: React.FC = () => {
  const navigate = useNavigate();

  const projects: ProjectData[] = [
    {
      id: "nba",
      company: "National Basketball Association",
      logo: "/src/assets/nba/nba.png",
      description:
        "Increase purchase conversion and user retention for NBA League Pass.",
      imageSrc: "/src/assets/nba/nba-hero.png",
      tags: ["Amplitude", "Jira", "Confluence", "Product Strategy"],
    },
    {
      id: "wapo",
      company: "The Washington Post",
      logo: "/src/assets/wapo/wapo.png",
      description:
        "Designed nine innovative features to attract and engage Gen Z readers to The Post during the 2024 election season.",
      imageSrc: "/src/assets/wapo/wapo-hero.png",
      tags: ["Figma", "Prototyping", "UX Research", "A/B Testing"],
    },
    {
      id: "venmo",
      company: "Venmo",
      logo: "/src/assets/venmo/venmo.png",
      description:
        "Prototyped a budgeting feature within the app that allows users to set spending limits, categorize transactions, and view spending patterns.",
      imageSrc: "/src/assets/venmo/venmo-hero.png",
      tags: ["Figma", "Prototyping", "UX Design", "Product Strategy"],
    },
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/work/${projectId}`);
  };

  return (
    <div className="background">
      <Header />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="title text-white">MY WORK</h1>

        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default WorkPage;
