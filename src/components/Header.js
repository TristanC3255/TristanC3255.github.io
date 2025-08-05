import React, { useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <h1 style={{ margin: 0 }}>Tristan Chong</h1>
      <nav>
        <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#skills">Skills</a> | <a href="#contact">Contact</a>
      </nav>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <span>{theme === 'light' ? '🌞 Light' : '🌙 Dark'}</span>
        <div style={{
            position: 'relative',
            width: '40px',
            height: '20px',
            backgroundColor: theme === 'light' ? '#ccc' : '#444',
            borderRadius: '10px',
            transition: 'background-color 0.3s ease'
        }} onClick={toggleTheme}>
            <div style={{
                position: 'absolute',
                top: '2px',
                left: theme === 'light' ? '2px' : '20px',
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transition: 'left 0.3s ease'
             }} />
            </div>
        </label>
    </header>
  );
}

export default Header;

