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
        <div className="splash-content">
          <div>
            <h1 className="splash-title">Welcome to akuvera</h1>
            <p className="splash-subtitle">Turning Denials Into Approvals</p>
          </div>
          <div className="splash-buttons">
            <button className="splash-login-btn" onClick={onLogin}>
              Login
            </button>
            <button className="splash-start-btn" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
        <div className="splash-footer">
          <span className="version">v1.0.0</span>
        </div>
      </div>
      <div className="main-content">
        <div className="splash-logo">
          <img src="/akuvera-logo.png" alt="Akuvera Logo" />
        </div>
        <div className="main-footer">
          <span className="copyright">© 2025 Akuvera. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;