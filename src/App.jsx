import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">My <span>Website</span></div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to My Web Page</h1>
        <p>A responsive experience, no matter the device.</p>
        <button className="cta">Get Started</button>
      </section>
    </div>
  );
}

export default App;