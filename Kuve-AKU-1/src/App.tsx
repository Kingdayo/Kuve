import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [activeView, setActiveView] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });
  const [confirmPasswordCriteria, setConfirmPasswordCriteria] = useState({
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });

  const isEmailValid = email.includes('@');

  const validatePassword = (password: string) => {
    setPasswordCriteria({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const validateConfirmPassword = (password: string) => {
    setConfirmPasswordCriteria({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setShowForm(true), 100);
    }
  }, [showSplash]);

  const handleLogin = () => {
    setShowSplash(false);
    setIsLoginView(true);
  };

  const handleGetStarted = () => {
    setShowSplash(false);
    setIsLoginView(false);
  };

  const handleGoBack = () => {
    setShowForm(false);
    setTimeout(() => setShowSplash(true), 400); // Allow time for fade-out animation
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isLoginView) {
        setIsLoggedIn(true);
      } else {
        // For sign-up, you might want to automatically log the user in
        // or redirect to the login page. For now, we'll just log them in.
        setIsLoggedIn(true);
      }
    }, 2000);
  };

  const switchView = (newView: boolean) => {
    if (isLoginView !== newView) {
      setIsLoginView(newView);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPhoneNumber('');
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoggedIn) {
    return (
      <div className="app dashboard-view">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <div className="main-content">
          <header className="header">
            <div>
              <h1 className="header-title">
                {activeView === 'overview' ? 'Dashboard Overview' : 'Claims Management'}
              </h1>
              <p className="header-subtitle">
                {activeView === 'overview'
                  ? 'Real-time akuvera AI processing and claim resolution monitoring'
                  : 'View and manage all dental claims in detail'}
              </p>
            </div>
            <div className="header-actions">
              {activeView === 'overview' ? (
                <div className="timeframe-selector">
                  <select>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="timeframe-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <>
                  <button className="action-button search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    Search from Provider
                  </button>
                  <button className="action-button upload-button" onClick={handleOpenModal}>
                    <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 12.5V3.33331" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66669 6.66669L10 3.33335L13.3334 6.66669" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.6667 10V16.6667H3.33331V10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Upload Claims
                  </button>
                </>
              )}
            </div>
          </header>
          <Dashboard activeView={activeView} onUploadClaims={handleOpenModal} />
        </div>
        <UploadClaimsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    );
  }

  if (showSplash) {
    return <SplashScreen onLogin={handleLogin} onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="app">
      <div className="background-gradient"></div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      <div className="splash-container">
        <div className={`splash-card ${showForm ? 'animate-in' : ''} ${!isLoginView ? 'signup-view' : ''}`}>
          <div className="splash-left-column">
            <div className="login-card">
              <div className="tab-switcher">
                <button
                  className={`tab-button ${isLoginView ? 'active' : ''}`}
                  onClick={() => switchView(true)}
                >
                  Login
                </button>
                <button
                  className={`tab-button ${!isLoginView ? 'active' : ''}`}
                  onClick={() => switchView(false)}
                >
                  Sign Up
                </button>
              </div>
              <div className="form-content-wrapper">
                <div className="card-header">
                  <h1 className="welcome-title">{isLoginView ? 'Welcome Back' : 'Create Account'}</h1>
                  <p className="subtitle">Turning Denials Into Approvals</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="form-input"
                        required
                      />
                      {email.length > 0 && (
                        <div className={`email-validation-icon ${isEmailValid ? 'verified' : 'unverified'}`}>
                          <svg className="verified-icon-svg" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <svg className="unverified-icon-svg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2.5" /><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.5" /></svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isLoginView && (
                    <div className="form-group">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                      <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="(123) 456-7890" className="form-input" required />
                    </div>
                  )}

                  <div className="form-group">
                    <div className="password-header">
                      <label htmlFor="password" className="form-label">Password</label>
                      {isLoginView && <a href="#" className="forgot-link">Forgot password?</a>}
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                      placeholder="••••••••••"
                      className="form-input"
                      required
                    />
                    {password.length > 0 && (
                      <div className="password-strength-indicator">
                        <div className={`criterion ${passwordCriteria.uppercase ? 'verified' : ''}`}><span className="criterion-icon"></span> Upper Case</div>
                        <div className={`criterion ${passwordCriteria.lowercase ? 'verified' : ''}`}><span className="criterion-icon"></span> Lower Case</div>
                        <div className={`criterion ${passwordCriteria.digit ? 'verified' : ''}`}><span className="criterion-icon"></span> Digit</div>
                        <div className={`criterion ${passwordCriteria.specialChar ? 'verified' : ''}`}><span className="criterion-icon"></span> Special Character</div>
                      </div>
                    )}
                  </div>

                  {!isLoginView && (
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); validateConfirmPassword(e.target.value); }}
                        placeholder="••••••••••"
                        className="form-input"
                        required
                      />
                       {confirmPassword.length > 0 && (
                          <div className="password-strength-indicator">
                            <div className={`criterion ${confirmPasswordCriteria.uppercase ? 'verified' : ''}`}><span className="criterion-icon"></span> Upper Case</div>
                            <div className={`criterion ${confirmPasswordCriteria.lowercase ? 'verified' : ''}`}><span className="criterion-icon"></span> Lower Case</div>
                            <div className={`criterion ${confirmPasswordCriteria.digit ? 'verified' : ''}`}><span className="criterion-icon"></span> Digit</div>
                            <div className={`criterion ${confirmPasswordCriteria.specialChar ? 'verified' : ''}`}><span className="criterion-icon"></span> Special Character</div>
                          </div>
                       )}
                    </div>
                  )}

                  <div className="form-actions">
                    <button type="button" className="back-button" onClick={handleGoBack}>Back</button>
                    <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                      {isLoading ? <div className="loading-spinner"></div> : (isLoginView ? 'Login' : 'Sign Up')}
                    </button>
                  </div>

                  <p className="signup-text">
                    {isLoginView ? "Don't have an account yet?" : "Already have an account?"}
                    <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); switchView(!isLoginView); }}>
                      {isLoginView ? 'Sign Up' : 'Login'}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="splash-right-column">
            <div className="splash-logo">
              <img src="/akuvera-logo.png" alt="Akuvera Logo" />
              <p className="splash-tagline">Delivers clarity and truth in denial logic</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <span className="version">v1.0.0</span>
          <span className="copyright">© 2025 Akuvera. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App