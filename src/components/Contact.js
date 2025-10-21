function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Main contact info */}
        <div>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out through any of the channels below!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                label: 'Email',
                value: 'tristanchong.3255@gmail.com',
                link: 'mailto:tristanchong.3255@gmail.com',
                description: 'Best way to reach me'
              },
              {                
                label: 'LinkedIn',
                value: 'Connect with me',
                link: 'https://linkedin.com/in/tristan-chong',
                description: 'Professional networking'
              },
              {
                label: 'GitHub',
                value: 'Check out my code',
                link: 'https://github.com/tristanchong',
                description: 'View my projects'
              }
            ].map((contact) => (
              <a 
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <div style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  transition: 'all .25s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-color)', marginBottom: '0.25rem' }}>
                            {contact.label}
                          </h3>
                          <p style={{ 
                            margin: 0, 
                            color: 'var(--muted-text)', 
                            fontSize: '0.85rem' 
                          }}>
                            {contact.description}
                          </p>
                        </div>
                        <span style={{
                          color: 'var(--accent)',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          {contact.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
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

export default Contact;
