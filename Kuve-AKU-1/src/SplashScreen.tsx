import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onLogin: () => void;
  onGetStarted: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLogin, onGetStarted }) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCard(true), 100);
  }, []);

  return (
    <div className="splash-container">
      <div className={`splash-card ${showCard ? 'animate-in' : ''}`}>
        <div className="splash-content">
          <div className="splash-left">
            <h1 className="splash-title">Welcome to akuvera</h1>
            <p className="splash-subtitle">Turning Denials Into Approvals</p>
            <div className="splash-buttons">
              <button className="splash-login-btn" onClick={onLogin}>
                Login
              </button>
              <button className="splash-start-btn" onClick={onGetStarted}>
                Get Started
              </button>
            </div>
          </div>
          <div className="splash-right">
            <div className="splash-logo">
              <img src="/akuvera-logo.png" alt="Akuvera Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="splash-footer">
        <span className="version">v1.0.0</span>
        <span className="copyright">© 2025 Akuvera. All rights reserved.</span>
      </div>
    </div>
  );
};

export default SplashScreen;