function Skills() {
  const skills = {
    languages: ["JavaScript", "Python", "C++", "HTML", "CSS", "SQL", "Java"],
    frameworks: ["React", "Flet", "Node.js", "Express"],
    tools: ["Git", "Linux", "VS Code", "Docker"],
  };

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(skills).slice(0, 3).map(([category, skillList]) => (
            <div key={category} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all .25s ease',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
            }}>
              <h3 style={{ 
                margin: '0 0 1rem 0',
                textTransform: 'capitalize',
                color: 'var(--accent)',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                {category === 'languages' ? 'Languages' : 
                 category === 'frameworks' ? 'Frameworks' : 
                 'Tools'}
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {skillList.map((skill) => (
                  <span 
                    key={skill}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: 'var(--bg-color)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: 'var(--text-color)',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          section > div:first-of-type > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
