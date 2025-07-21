import React from "react";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

interface Project {
  id: string;
  company: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "washington-post",
    company: "The Washington Post",
    title: "The Washington Post",
    description: "Mobile features to engage Gen Z readers during 2024 election",
    image: "/projects/wapo-proj.png",
  },
  {
    id: "venmo",
    company: "Venmo",
    title: "Venmo",
    description:
      "Budgeting feature to set limits, categorize transactions, etc.",
    image: "/projects/venmo.png",
  },
];

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    // <div>

    <div
      className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
      onClick={onClick}
    >
      <div className="mb-8">
        <p
          className="font-medium text-white"
          style={{ fontSize: "28px", lineHeight: "1.1" }}
        >
          {/* <p className="text-2xl sm:text-3xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"> */}
          {project.title}
        </p>
        <p className="font-medium text-[#797979]" style={{ fontSize: "18px" }}>
          {/* <p className="text-gray-400 text-lg mb-6 leading-relaxed"> */}
          {project.description}
        </p>

        <div className="max-w-4xl relative overflow-hidden rounded-xl bg-gray-800 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: "16/10" }}
          />

          {/* Hover overlay */}
          {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-medium">View Project →</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="z-10">
        <Header />
      </div>

      <main className="flex-1 px-10 pt-60 pb-24">
        <div className="w-full">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Projects;
