function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
        <div>
          <p>
            I'm a Computer Science student at CCNY passionate about software engineering and machine learning. 
            I enjoy building innovative applications that solve real-world problems, from transcription tools 
            to interactive learning platforms.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or working on personal projects that challenge me to learn something new. I'm always eager to 
            collaborate on meaningful projects that make a positive impact.
          </p>
          <p>
            Currently seeking internship opportunities where I can contribute to impactful projects while 
            continuing to grow my technical skills in software development and AI/ML.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Quick Stats Card */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem',
            transition: 'all .25s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--accent)', fontSize: '1.1rem' }}>
              Overview
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Location</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>New York, NY</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>School</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>CCNY</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Major</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Computer Science</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Focus</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>SWE / ML</span>
              </div>
            </div>
          </div>

          {/* Resume Card */}
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
              Resume
            </h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--muted-text)' }}>
              Download my latest resume
            </p>
            <a 
              href="/resume.pdf" 
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
              Download PDF
            </a>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.8rem', color: 'var(--muted-text)' }}>
              Last updated: October 2024
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile responsive layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          section div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
