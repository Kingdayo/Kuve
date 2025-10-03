import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isLoginView, setIsLoginView] = useState(true)

  // Check if email contains @ symbol for verification icon
  const isEmailValid = email.includes('@')

  useEffect(() => {
    // Trigger form animation after component mounts
    setTimeout(() => setShowForm(true), 300)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  const toggleView = () => {
    setIsLoginView(!isLoginView)
  }

  return (
    <div className="app">
      {/* Background with animated gradient */}
      <div className="background-gradient"></div>
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      <div className="container">
        {/* Centered Login Card */}
        <div className={`login-section ${showForm ? 'animate-in' : ''}`}>
          <div className="login-card">
            <div className="tab-switcher">
              <button
                className={`tab-button ${isLoginView ? 'active' : ''}`}
                onClick={() => setIsLoginView(true)}
              >
                Login
              </button>
              <button
                className={`tab-button ${!isLoginView ? 'active' : ''}`}
                onClick={() => setIsLoginView(false)}
              >
                Sign Up
              </button>
            </div>

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
                      {isEmailValid ? (
                        <span className="verified-icon-symbol">✓</span>
                      ) : (
                        <svg className="unverified-icon-svg" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
                          <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="password-header">
                  <label htmlFor="password" className="form-label">Password</label>
                  {isLoginView && <a href="#" className="forgot-link">Forgot password?</a>}
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="form-input"
                  required
                />
              </div>

              {!isLoginView && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="form-input"
                    required
                  />
                </div>
              )}

              <button 
                type="submit" 
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  isLoginView ? 'Login' : 'Sign Up'
                )}
              </button>

              <p className="signup-text">
                {isLoginView ? "Don't have an account yet?" : "Already have an account?"}
                <a href="#" className="signup-link" onClick={toggleView}>
                  {isLoginView ? 'Sign Up' : 'Login'}
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Right side - Logo */}
        <div className={`logo-section ${showForm ? 'animate-in-right' : ''}`}>
          <div className="logo-container">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <svg viewBox="0 0 100 100" className="akuvera-logo">
                  <defs>
                    <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4A90E2" />
                      <stop offset="100%" stopColor="#2E5BBA" />
                    </radialGradient>
                  </defs>
                  <g className="logo-star">
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={i}
                        d="M50,20 L52,35 L50,50 L48,35 Z"
                        fill="url(#logoGradient)"
                        transform={`rotate(${i * 45} 50 50)`}
                        className={`star-ray ray-${i}`}
                      />
                    ))}
                    <circle cx="50" cy="50" r="8" fill="url(#logoGradient)" className="logo-center" />
                  </g>
                </svg>
              </div>
              <div className="logo-text">
                <h2 className="brand-name">akuvera</h2>
                <p className="brand-tagline">Deliver clarity<br />and truth in denial logic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <span className="version">v1.0.0</span>
          <span className="copyright">© 2025 Akuvera. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App