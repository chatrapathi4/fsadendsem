import React, { useState, useEffect } from 'react';

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:8080') + '/users';

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
        {' '}
        <button onClick={() => setPage('users')}>User Management</button>
      </nav>

      <hr />

      {/* Pages */}
      {page === 'home'     && <HomePage setPage={setPage} />}
      {page === 'about'    && <AboutPage />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'users'    && <UsersPage />}
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

// ── USER MANAGEMENT (full CRUD — unchanged logic) ────────────────────────────
function UsersPage() {
  const [users, setUsers]         = useState([]);
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [editId, setEditId]       = useState(null);
  const [editName, setEditName]   = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  };

  const addUser = () => {
    if (!name || !email) { alert('Please enter both name and email.'); return; }
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(() => { setName(''); setEmail(''); fetchUsers(); })
      .catch(err => console.error('Error adding user:', err));
  };

  const saveEdit = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName, email: editEmail })
    })
      .then(res => res.json())
      .then(() => { setEditId(null); fetchUsers(); })
      .catch(err => console.error('Error updating user:', err));
  };

  const deleteUser = (id) => {
    if (!window.confirm('Delete this user?')) return;
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => fetchUsers())
      .catch(err => console.error('Error deleting user:', err));
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* Add User */}
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {' '}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {' '}
      <button onClick={addUser}>Add</button>

      {/* Users Table */}
      <h3>Users List</h3>
      {users.length === 0 ? (
        <p>No users found. Add one above.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                {editId === user.id ? (
                  <>
                    <td>
                      <input value={editName} onChange={e => setEditName(e.target.value)} />
                    </td>
                    <td>
                      <input value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                    </td>
                    <td>
                      <button onClick={() => saveEdit(user.id)}>Save</button>
                      {' '}
                      <button onClick={() => setEditId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => {
                        setEditId(user.id);
                        setEditName(user.name);
                        setEditEmail(user.email);
                      }}>Edit</button>
                      {' '}
                      <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
