import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. Home Page
function Home() {
  return (
    <div style={cardStyle}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Home Page!</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        This is the main landing page of our React application.
      </p>
    </div>
  );
}

// 2. About Page
function About() {
  return (
    <div style={cardStyle}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to About Page!</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        We are a dedicated team learning React.
      </p>
    </div>
  );
}

// 3. Services Page
function Services() {
  return (
    <div style={cardStyle}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Services Page!</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        We offer top-notch web development services.
      </p>
    </div>
  );
}

// 4. Contact Page
function Contact() {
  return (
    <div style={cardStyle}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Contact Page!</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        Feel free to reach out to us anytime.
      </p>
    </div>
  );
}

// Reusable Card Style
const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

// Main App Component
export default function App() {
  // Login track karne ke liye state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // STEP 1: Agar logged in nahi hain to SIRF Button dikhai dega (No Inputs)
  if (!isLoggedIn) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f8',
        fontFamily: 'Arial, sans-serif'
      }}>
        <button 
          onClick={() => setIsLoggedIn(true)} 
          style={{
            backgroundColor: '#27ae60',
            color: '#ffffff',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          Login
        </button>
      </div>
    );
  }

  // STEP 2: Button par click karne ke baad poori App/Pages show honge
  return (
    <Router>
      <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {/* Navbar */}
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          backgroundColor: '#34495e',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          
          {/* Logout Button */}
          <button 
            onClick={() => setIsLoggedIn(false)} 
            style={{
              backgroundColor: '#e74c3c',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            Logout
          </button>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
