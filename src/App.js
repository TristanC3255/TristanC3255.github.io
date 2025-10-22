import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import "./styles/App.css";
import "./styles/index.css";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [mounted, setMounted] = useState(true);

  // Toggle mounted to trigger CSS transition on route change
  useEffect(() => {
    setMounted(false);
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  return (
    <>
      <div className="app-shell">
        <Header />
        <main className="container">
          <div className={`page ${mounted ? "page--mounted" : ""}`}>
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
