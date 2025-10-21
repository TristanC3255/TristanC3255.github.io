function Projects() {
  const projects = [
    {
      id: "portfolio",
      title: "Personal Portfolio",
      subtitle: "React and Github Pages",
      year: "2024",
      stack: ["React", "JavaScript", "CSS", "Git Hub Pages"
      ],
      summary: "A responsive, modern portfolio website with dark/light theme switching and smooth animations.",
      highlights: [
        "Fully responsive design across all devices",
        "Dark/light theme with localStorage persistence",
        "Smooth scroll navigation with active section tracking",
        "Modern CSS with custom properties and transitions"
      ],
      links: {
        github: "https://github.com/tristanchong/portfolio",
        demo: "https://tristanchong.github.io/portfolio"
      },
      status: "Live",
      image: "/images/portfolio.png"
    }
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={project.id} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'all .25s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}
            >
              {/* Project Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.5rem', color: 'var(--text-color)' }}>
                      {project.title}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p style={{ margin: '0 0 1.5rem 0', fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
                {project.summary}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>
                  Key Features:
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyle: 'disc' }}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} style={{ 
                      margin: '0.4rem 0', 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5',
                      color: 'var(--text-color)'
                    }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>
                  Tech Stack:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'var(--bg-color)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--text-color)',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* GitHub Link Card */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            transition: 'all .25s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--accent)', fontSize: '1.1rem' }}>
              More Projects
            </h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--muted-text)' }}>
              Check out all my work on GitHub
            </p>
            <a 
              href="https://github.com/TristanC3255" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all .25s ease'
              }}
              onMouseOver={(e) => e.target.style.background = 'var(--link-hover)'}
              onMouseOut={(e) => e.target.style.background = 'var(--accent)'}
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Mobile responsive layout */}
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
