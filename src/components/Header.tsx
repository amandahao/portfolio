import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-blue-300 transition-colors ${
              isActive("/") ? "font-bold" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-300 transition-colors ${
              isActive("/about") ? "font-bold" : ""
            }`}
          >
            ABOUT
          </Link>
          <Link
            to="/work"
            className={`hover:text-blue-300 transition-colors ${
              isActive("/work") ? "font-bold" : ""
            }`}
          >
            MY WORK
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-indigo-900 md:hidden">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <Link
                to="/"
                className={`hover:text-blue-300 transition-colors ${
                  isActive("/") ? "font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`hover:text-blue-300 transition-colors ${
                  isActive("/about") ? "font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/work"
                className={`hover:text-blue-300 transition-colors ${
                  isActive("/work") ? "font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                MY WORK
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
