import React, { useState } from 'react';

// Simple tab-based navigation
function App() {
  const [page, setPage] = useState('home');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>

      {/* Navigation */}
      <nav>
        <strong>My Portfolio</strong>
        {' | '}
        <button onClick={() => setPage('home')}>Home</button>
        {' '}
        <button onClick={() => setPage('about')}>About</button>
        {' '}
        <button onClick={() => setPage('projects')}>Projects</button>
      </nav>

      <hr />

      {/* Pages */}
      {page === 'home'     && <HomePage setPage={setPage} />}
      {page === 'about'    && <AboutPage />}
      {page === 'projects' && <ProjectsPage />}
    </div>
  );
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <div>
      <h1>Thigulla Chatrapathi Reddy</h1>
      <p><strong>Role:</strong> Student</p>
      <p><strong>Email:</strong> chatrapathireddythigulla@gmail.com</p>

      <h3>Connect:</h3>
      <ul>
        <li><a href="https://github.com/chatrapathi4" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/chatrapathi-reddy-thigulla-0a63b6315/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://www.codechef.com/users/mihawk_0_9" target="_blank" rel="noreferrer">CodeChef</a></li>
      </ul>

      <p>
        <button onClick={() => setPage('projects')}>View Projects</button>
        {' '}
        <button onClick={() => setPage('about')}>About Me</button>
      </p>
    </div>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I'm <strong>Thigulla Chatrapathi Reddy</strong>, a B.Tech Computer Science student
        interested in full-stack web development.
      </p>
      <p><strong>Email:</strong> chatrapathireddythigulla@gmail.com</p>
      <p><strong>Location:</strong> India</p>

      <h3>Skills</h3>
      <ul>
        <li>Java, Spring Boot</li>
        <li>React, JavaScript</li>
        <li>MySQL, REST APIs</li>
        <li>HTML, CSS, Git</li>
      </ul>

      <h3>Education</h3>
      <p>B.Tech in Computer Science — Ongoing</p>

      <h3>Links</h3>
      <ul>
        <li><a href="https://github.com/chatrapathi4" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/chatrapathi-reddy-thigulla-0a63b6315/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://www.codechef.com/users/mihawk_0_9" target="_blank" rel="noreferrer">CodeChef</a></li>
      </ul>
    </div>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────────────────────
function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>

      <h3>1. Portfolio Website</h3>
      <p>
        Full-stack portfolio built with React and Spring Boot, connected to MySQL.
        Includes CRUD user management.
      </p>
      <p><strong>Tech:</strong> React, Spring Boot, MySQL, REST API</p>
      <p><a href="https://github.com/chatrapathi4" target="_blank" rel="noreferrer">GitHub →</a></p>

      <hr />

      <h3>2. CRUD User Management System</h3>
      <p>
        A complete Create, Read, Update, Delete system demonstrating RESTful API
        design and JPA integration with a React frontend.
      </p>
      <p><strong>Tech:</strong> Java, Spring Data JPA, React, MySQL</p>
      <p><a href="https://github.com/chatrapathi4" target="_blank" rel="noreferrer">GitHub →</a></p>

      <hr />

      <h3>3. Competitive Programming</h3>
      <p>
        Solutions to competitive programming problems on CodeChef focusing on
        algorithms and data structures.
      </p>
      <p><strong>Tech:</strong> C++, Java</p>
      <p><a href="https://www.codechef.com/users/mihawk_0_9" target="_blank" rel="noreferrer">CodeChef →</a></p>
    </div>
  );
}

export default App;
