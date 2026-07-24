import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. Home Page
function Home() {
  return (
    <div style={cardStyle}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Home Page!</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        This is the main landing page of our React application. <br />
        Here you can explore all features and navigate through different sections easily.
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
        We are a dedicated team learning React to build modern web applications. <br />
        Our goal is to create clean, fast, and user-friendly web experiences for everyone.
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
        We offer top-notch web development and React application design services. <br />
        Let us help you build your next big project with the best coding standards.
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
        Feel free to reach out to us anytime for queries or project inquiries. <br />
        You can email us directly or connect via our official social media channels.
      </p>
    </div>
  );
}

// Reusable Style for Cards (Simple UI Design)
const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
};

// Main App Component
export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {/* Simple Navbar Design */}
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
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
        </nav>

        {/* Dynamic Page Content */}
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

// Style for Navigation Links
const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};