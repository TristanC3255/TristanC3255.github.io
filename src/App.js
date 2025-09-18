import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
<main className="container">
  <Routes>
    <Route path="/" element={<Navigate to="/about" replace />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/about" replace />} />
  </Routes>
</main>
      <Footer />
    </>
  );
}

export default App;
