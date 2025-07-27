import React, { useState } from "react";
import Header from "./components/Header";

interface WorkExperience {
  link: string;
  id: string;
  company: string;
  role: string;
  duration: string;
  image: string;
  industry: string;
}

const workExperiences: WorkExperience[] = [
  {
    link: "https://tesla.com",
    id: "tesla",
    company: "Tesla",
    role: "Software Product Manager Intern",
    duration: "May'25-Aug'25",
    image: "/logos/tsla.png",
    industry: "Supply Chain Optimization, Internal Applications",
  },
  {
    link: "https://nba.com",
    id: "nba",
    company: "NBA",
    role: "Products, Tech & Ops Intern",
    duration: "Jun'24-Aug'24",
    image: "/logos/nba.jpg",
    industry: "Consumer Experience, League Pass",
  },
  {
    link: "https://washingtonpost.com",
    id: "washington-post",
    company: "The Washington Post",
    role: "Product Management Intern",
    duration: "Jan'24-May'24",
    image: "/logos/wp.png",
    industry: "Monetization, Subscriptions",
  },
  {
    link: "https://marriagepact.com",
    id: "marriage-pact",
    company: "Marriage Pact",
    role: "Product Launch Manager",
    duration: "Aug'24-May'25",
    image: "/logos/mp.jpg",
    industry: "Annual Matchmaking Activity, $5M seed funding",
  },
  {
    link: "https://mdi.georgetown.edu",
    id: "mdi",
    company: "Massive Data Institute",
    role: "Research Scholar",
    duration: "Aug'23-May'24",
    image: "/logos/mdi.jpg",
    industry:
      "Prof. Amy O'Hara, Compiling Data Sources to Inform Head Start Programs",
  },
];

const WorkCard: React.FC<{ experience: WorkExperience; index: number }> = ({
  experience,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-4 py-4 hover:bg-gray-900/30 transition-colors duration-200 rounded-lg px-4"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="min-w-[60px] h-[60px]">
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.image}
            alt={`${experience.company} logo`}
            className="w-[60px] h-[60px] object-contain rounded-lg"
          />
        </a>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="font-medium text-white text-[28px] leading-[1.1] underline">
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {experience.company}
              </a>
            </p>
            <p className="font-medium text-white text-[28px] leading-[1.1]">
              {experience.duration}
            </p>
          </div>

          <div
            className="font-medium text-white text-[28px] leading-[1.1] cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`transition-transform duration-300 ${
                isHovered ? "-translate-y-full" : "translate-y-0"
              }`}
            >
              {experience.role}
            </div>
            <div
              className={`absolute top-0 left-0 transition-transform duration-300 ${
                isHovered ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {experience.industry}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      <div className="z-10">
        <Header />
      </div>

      <main className="flex-1 px-3 pt-60 pb-24">
        <div className="w-full">
          <div className="space-y-6">
            {workExperiences.map((experience, index) => (
              <div key={experience.id} className="animate-fade-in">
                <WorkCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Work;
