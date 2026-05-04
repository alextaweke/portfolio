// App.tsx
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";

import { portfolioData } from "./data/portfolioData";
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Combine all projects for case study route
  const allProjects = [
    ...portfolioData.completedProjects,
    ...portfolioData.ongoingProjects,
  ];

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen font-sans bg-white dark:bg-gray-900">
        <Navbar
          name={portfolioData.name}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          {/* MAIN PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero data={portfolioData} />
                <Services />
                <Projects
                  completed={portfolioData.completedProjects}
                  ongoing={portfolioData.ongoingProjects}
                />
                <Skills
                  categories={portfolioData.skills}
                  variant="default"
                  showIcons={true}
                  showLevel={false}
                />
                <About />
                <Contact email={portfolioData.email} />
                <Footer data={portfolioData} />
              </>
            }
          />

          {/* CASE STUDY ROUTE - Fixed */}
          <Route
            path="/case-study/:projectId"
            element={<CaseStudy projects={allProjects} />}
          />

          {/* ADMIN */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
