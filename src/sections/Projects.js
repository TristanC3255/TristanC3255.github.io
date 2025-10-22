import React from 'react';
import ProjectCard from './ProjectCard';

// Featured projects data (kept inline for simplicity)
const PROJECTS = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'React and Github Pages',
    year: '2024',
    stack: ['React', 'JavaScript', 'CSS', 'Git Hub Pages'],
    summary: 'A responsive, modern portfolio website with dark/light theme switching and smooth animations.',
    highlights: [
      'Fully responsive design across all devices',
      'Dark/light theme with localStorage persistence',
      'Smooth scroll navigation with active section tracking',
      'Modern CSS with custom properties and transitions'
    ],
    links: {
      github: 'https://github.com/TristanC3255',
      demo: 'https://tristanchong.github.io/portfolio'
    },
    status: 'Live',
    image: '/images/portfolio.png'
  }
];

// Reusable style objects to keep JSX uncluttered
const gridStyle = { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' };
const projectsGridStyle = { display: 'flex', flexDirection: 'column', gap: '2rem' };
const sidebarStyle = { display: 'flex', flexDirection: 'column', gap: '1.5rem' };
const moreCardStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'all .25s ease', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)' };
const moreLinkStyle = { display: 'inline-block', background: 'var(--accent)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', transition: 'all .25s ease' };

function Projects() {
  // Main Projects section
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      {/* Grid: projects list + sidebar */}
      <div style={gridStyle}>

        {/* Main column: map projects to reusable ProjectCard */}
        <div style={projectsGridStyle}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Sidebar: More Projects link */}
        <div style={sidebarStyle}>
          <div style={moreCardStyle}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--accent)', fontSize: '1.1rem' }}>More Projects</h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--muted-text)' }}>Check out all my work on GitHub</p>
            <a
              href="https://github.com/TristanC3255"
              target="_blank"
              rel="noopener noreferrer"
              style={moreLinkStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--link-hover)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent)')}
            >
              View GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Mobile responsive layout kept inline for now */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
