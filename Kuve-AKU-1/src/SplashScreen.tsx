import React from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onLogin: () => void;
  onGetStarted: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLogin, onGetStarted }) => {
  return (
    <div className="splash-container">
      <div className="splash-card">
        <h1 className="splash-title">Welcome to akuvera</h1>
        <p className="splash-subtitle">Turning Denials Into Approvals</p>
        <div className="splash-logo">
          <img src="/akuvera-logo.png" alt="Akuvera Logo" />
          <p className="splash-tagline">Delivers clarity and truth in denial logic</p>
        </div>
        <div className="splash-buttons">
          <button className="splash-login-btn" onClick={onLogin}>
            Login
          </button>
          <button className="splash-start-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
        <div className="splash-footer">
          <p>v1.0.0 © 2025 Akuvera. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;