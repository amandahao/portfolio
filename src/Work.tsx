import "./App.css";
import React from "react";
import SocMed from "./components/SocMed";
import Header from "./components/Header";

interface ProjectData {
  id: string;
  company: string;
  logo: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectData> = ({
  company,
  logo,
  description,
  imageSrc,
  tags,
}) => {
  return (
    <div
      className="rounded-3xl shadow-lg overflow-hidden mb-8 text-black"
      style={{
        backgroundColor: "#F3F3F3",
        boxShadow: "0px 0px 53.5px 24px rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="flex flex-col md:flex-row p-8">
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
            {tags.map((tag, index) => (
              // map tags to colors based on value, not index
              <span
                key={index}
                className={`rounded-full px-3 py-1 text-sm ${
                  index % 4 === 0
                    ? "bg-pink-200"
                    : index % 4 === 1
                    ? "bg-green-200"
                    : index % 4 === 2
                    ? "bg-orange-200"
                    : "bg-purple-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={`${company} project screenshot`}
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "13.5rem", backgroundPosition: "bottom" }}
          />
        </div>
      </div>
    </div>
  );
};

const WorkPage: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: "nba",
      company: "National Basketball Association",
      logo: "/src/assets/nba/nba.png",
      description:
        "Increase purchase conversion and user retention for NBA League Pass.",
      imageSrc: "/src/assets/nba/gamedetail.png",
      tags: ["Amplitude", "Jira", "Confluence", "Product Strategy"],
    },
    {
      id: "washington-post",
      company: "The Washington Post",
      logo: "/src/assets/wapo/wapo.png",
      description:
        "Designed nine innovative features to attract and engage Gen Z readers to The Post during the 2024 election season.",
      imageSrc: "/images/wapo-project.png",
      tags: ["Figma", "Prototyping", "UX Research", "A/B Testing"],
    },
    {
      id: "venmo",
      company: "Venmo",
      logo: "/src/assets/venmo/venmo.png",
      description:
        "Prototyped a budgeting feature within the app that allows users to set spending limits, categorize transactions, and view spending patterns.",
      imageSrc: "/images/venmo-project.png",
      tags: ["Figma", "Prototyping", "UX Design", "Product Strategy"],
    },
  ];

  return (
    <div className="background">
      <Header />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="title text-white">MY WORK</h1>

        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <SocMed />
          <div
            className="mt-4 text-sm opacity-75 text-white"
            style={{
              position: "absolute",
            }}
          >
            © 2025 Amanda Hao
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
