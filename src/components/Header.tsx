import SocMed from "./SocMed";
import { Link } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  // const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-10 w-screen px-4 sm:px-8 py-12 overflow-x-hidden">
      <div className="w-full h-full max-w-none">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 h-full w-full">
          <div className="flex-shrink-0">
            <div className="space-y-2">
              <p className="font-medium text-white text-[28px] leading-[1.1]">
                <Link to="/">Hi, I'm Amanda.</Link>
              </p>
              <p className="font-medium text-[#797979] text-[28px] leading-[1.1]">
                I'm a people-first builder <br /> & problem solver.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-start justify-start">
            <div className="space-y-2">
              <p className="font-medium text-white text-[28px] leading-[1.1]">
                Currently a PM <br />
                Intern @ Tesla
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col justify-start">
            <nav className="flex flex-row lg:flex-col">
              <Link
                to="/about"
                className="font-medium text-[28px] leading-[1.1] text-white hover:text-[#797979] transition-colors duration-300 ease-out"
              >
                About
              </Link>
              <Link
                to="/work"
                className="font-medium text-[28px] leading-[1.1] text-white hover:text-[#797979] transition-colors duration-300 ease-out"
              >
                Work
              </Link>
              <Link
                to="/projects"
                className="font-medium text-[28px] leading-[1.1] text-white hover:text-[#797979] transition-colors duration-300 ease-out"
              >
                Projects
              </Link>
            </nav>
          </div>

          <div className="flex-shrink-0 flex justify-start lg:justify-end">
            <SocMed />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
