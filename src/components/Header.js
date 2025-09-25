import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

function Header() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();

  // duration should match .page--exiting transition (200ms)
  const EXIT_DURATION = 200;

  const handleNav = (to) => (e) => {
    e.preventDefault();
    // If already on the same path, just scroll to top instead of animating out
    if (to === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const page = document.querySelector('.page');
    // Prevent double clicks while exit animation is running
    if (page && page.classList.contains('page--exiting')) return;

    if (page) page.classList.add('page--exiting');
    setTimeout(() => {
      navigate(to);
    }, EXIT_DURATION);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  return (
    <header
      className="site-header"
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <h1 style={{ margin: 0 }}>Tristan Chong</h1>

        <nav className="main-nav">
          <a href="#/about" className={navClass({isActive: location.pathname === '/about'})} onClick={handleNav('/about')}>About</a>
          <a href="#/projects" className={navClass({isActive: location.pathname === '/projects'})} onClick={handleNav('/projects')}>Projects</a>
          <a href="#/skills" className={navClass({isActive: location.pathname === '/skills'})} onClick={handleNav('/skills')}>Skills</a>
          <a href="#/contact" className={navClass({isActive: location.pathname === '/contact'})} onClick={handleNav('/contact')}>Contact</a>
        </nav>
      </div>

      {/* Right: theme toggle */}
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <span>{theme === "light" ? "🌞 Light" : "🌙 Dark"}</span>
        <div
          onClick={toggleTheme}
          style={{
            position: "relative",
            width: 40,
            height: 20,
            backgroundColor: theme === "light" ? "#ccc" : "#444",
            borderRadius: 10,
            transition: "background-color .3s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 2,
              left: theme === "light" ? 2 : 20,
              width: 16,
              height: 16,
              background: "white",
              borderRadius: "50%",
              transition: "left .3s",
            }}
          />
        </div>
      </label>
    </header>
  );
}

export default Header;
