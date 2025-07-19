import SocMed from "./SocMed";

const Header = () => {
  return (
    <header className="relative z-10 w-screen px-4 sm:px-8 py-12 overflow-x-hidden">
      <div className="w-full h-full max-w-none">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 h-full w-full">
          {/* Column 1 - Intro */}
          <div className="flex-shrink-0">
            <div className="space-y-2">
              <p
                style={{ fontSize: "28px", lineHeight: "1.1" }}
                className="font-medium text-white"
              >
                Hi, I'm Amanda.
              </p>
              <p
                style={{ fontSize: "28px", lineHeight: "1.1" }}
                className="font-medium text-gray-400"
              >
                I'm a people-first builder <br /> & problem solver.
              </p>
            </div>
          </div>

          {/* Column 2 - Currently at Tesla */}
          <div className="flex-shrink-0 flex flex-col items-start lg:items-center justify-start lg:text-center">
            <div className="space-y-2">
              <p
                className="font-medium text-white"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
              >
                Currently a PM <br />
                Intern @ Tesla
              </p>
            </div>
          </div>

          {/* Column 3 - Navigation Menu */}
          <div className="flex-shrink-0 flex flex-col justify-start">
            <nav className="flex flex-row lg:flex-col">
              <a
                href="#about"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
                className="font-medium text-white hover:text-gray-400 transition-colors duration-300 ease-out"
              >
                About
              </a>
              <a
                href="#work"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
                className="font-medium text-white hover:text-gray-400 transition-colors duration-300 ease-out"
              >
                Work
              </a>
              <a
                href="#projects"
                style={{ fontSize: "28px", lineHeight: "1.1" }}
                className="font-medium text-white hover:text-gray-400 transition-colors duration-300 ease-out"
              >
                Projects
              </a>
            </nav>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex-shrink-0 flex justify-start lg:justify-end">
            <SocMed />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
