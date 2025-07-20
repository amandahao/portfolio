import React from "react";
import Header from "./components/Header";

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  image: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: "tesla",
    company: "Tesla",
    role: "Software Product Manager Intern",
    duration: "May'25-Aug'25",
    image: "/logos/tsla.png",
  },
  {
    id: "nba",
    company: "NBA",
    role: "Products, Tech & Ops Intern",
    duration: "Jun'24-Aug'24",
    image: "/logos/nba.jpg",
  },
  {
    id: "washington-post",
    company: "The Washington Post",
    role: "Product Management Intern",
    duration: "Jan'24-May'24",
    image: "/logos/wp.png",
  },
  {
    id: "marriage-pact",
    company: "Marriage Pact",
    role: "Product Launch Manager",
    duration: "Aug'24-May'25",
    image: "/logos/mp.jpg",
  },
  {
    id: "mdi",
    company: "Massive Data Institute",
    role: "Research Scholar",
    duration: "Aug'23-May'24",
    image: "/logos/mdi.jpg",
  },
];

const WorkCard: React.FC<{ experience: WorkExperience; index: number }> = ({
  experience,
  index,
}) => {
  return (
    <div
      className="flex items-center gap-4 py-4 hover:bg-gray-900/30 transition-colors duration-200 rounded-lg px-4"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="min-w-[60px] h-[60px]">
        <img
          src={experience.image}
          alt={`${experience.company} logo`}
          className="w-[60px] h-[60px] object-contain rounded-lg"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 flex-wrap">
            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-white underline"
            >
              {experience.company}
            </p>
            <p
              style={{ fontSize: "28px", lineHeight: "1.1" }}
              className="font-medium text-[#797979]"
            >
              {experience.duration}
            </p>
          </div>
          <p
            style={{ fontSize: "28px", lineHeight: "1.1" }}
            className="font-medium text-white"
          >
            {experience.role}
          </p>
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
