import React from 'react';
import PropTypes from 'prop-types';

// Reusable project card used by src/sections/Projects.js
export default function ProjectCard({ project }) {
  // Destructure commonly used fields for clarity
  const { title, subtitle, year, summary, highlights, stack } = project || {};

  // Style objects kept near top for readability and easier tweaking
  const containerStyle = {
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'all .25s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'relative'
  };

  const headerRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' };
  const titleStyle = { margin: '0 0 0.25rem 0', fontSize: '1.5rem', color: 'var(--text-color)' };
  const subtitleStyle = { margin: 0, color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' };
  const yearStyle = { color: 'var(--muted-text)', fontSize: '0.9rem' };
  const summaryStyle = { margin: '0 0 1.5rem 0', fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-color)' };
  const sectionTitle = { margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' };
  const listStyle = { margin: 0, paddingLeft: '1.25rem', listStyle: 'disc' };
  const listItem = { margin: '0.4rem 0', fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-color)' };
  const tagStyle = { padding: '0.4rem 0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-color)', fontWeight: '500' };

  // Hover handlers kept inline to preserve the subtle interaction
  function handleMouseOver(e) {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
  }
  function handleMouseOut(e) {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
  }

  // Render a single project card with summary, highlights and tech stack
  return (
    <div
      style={containerStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* Header: title + subtitle + year */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={headerRow}>
          <div>
            <h3 style={titleStyle}>{title}</h3>
            <p style={subtitleStyle}>{subtitle}</p>
          </div>
          <span style={yearStyle}>{year}</span>
        </div>
      </div>

      {/* Summary */}
      <p style={summaryStyle}>{summary}</p>

      {/* Highlights list */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={sectionTitle}>Key Features:</h4>
        <ul style={listStyle}>
          {Array.isArray(highlights) && highlights.map((h, i) => (
            <li key={i} style={listItem}>{h}</li>
          ))}
        </ul>
      </div>

      {/* Tech stack tags */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={sectionTitle}>Tech Stack:</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {Array.isArray(stack) && stack.map((tech) => (
            <span key={tech} style={tagStyle}>{tech}</span>
          ))}
        </div>
      </div>

      {/* NOTE: action buttons and status badges were intentionally removed per recent changes */}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
