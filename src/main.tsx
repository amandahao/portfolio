import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./About.tsx";
import WorkPage from "./Work.tsx";
import ProjectPage from "./Project.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        {/*<Route path="/work/:projectId" element={<ProjectDetail />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
