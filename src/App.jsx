// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Styled navigation bar component
const NavBar = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 1, path: '/color', label: 'Random Color Generator' },
    { id: 2, path: '/quote', label: 'Random Quote Generator' },
    { id: 3, path: '/toggle', label: 'Toggle Button' },
    { id: 4, path: '/signup', label: 'Signup' }
  ];

  return (
    <nav style={styles.navbar}>
      {navItems.map(item => (
        <button
          key={item.id}
          style={styles.navButton}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

// Placeholder components for routes
const RandomColorGenerator = () => <div style={styles.page}>Color Generator Content</div>;
const RandomQuoteGenerator = () => <div style={styles.page}>Quote Generator Content</div>;
const ToggleButtonPage = () => <div style={styles.page}>Toggle Button Content</div>;
const SignupPage = () => <div style={styles.page}>Signup Form Content</div>;
const HomePage = () => <div style={styles.page}>Select an option from the navbar</div>;

// Main App component
function App() {
  return (
    <Router>
      <div style={styles.app}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/color" element={<RandomColorGenerator />} />
          <Route path="/quote" element={<RandomQuoteGenerator />} />
          <Route path="/toggle" element={<ToggleButtonPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// CSS styles (using JavaScript objects)
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  navButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ecf0f1',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '200px',
    textAlign: 'center',
  },
  page: {
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#2c3e50',
  }
};

export default App;