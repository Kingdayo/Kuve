import React from 'react';
import './Dashboard.css';
// import akuveraLogo from '../assets/akuvera-logo.svg';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
           {/* <img src={akuveraLogo} alt="Akuvera Logo" className="sidebar-logo" /> */}
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H2"></path><path d="M22 6.1c0 .5-.2 1-.7 1.2l-4.2 1.9c-.5.2-1 .2-1.5 0L11.4 7c-.5-.2-1-.2-1.5 0L5.7 8.9c-.5.2-1 .2-1.5 0L2.3 7.3c-.5-.2-.7-.7-.7-1.2V5c0-.6.5-1 1-1h18c.6 0 1 .4 1 1v1.1z"></path></svg>
                Claims
                <span className="nav-badge">3</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                Providers
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Revenue
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">OP</div>
            <div className="user-info">
              <span className="user-name">Phamo Oloye</span>
              <span className="user-role">Admin</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="settings-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
        </div>
      </aside>
      <main className="main-content-dashboard">
        <header className="header">
          <div>
            <h1 className="header-title">Dashboard Overview</h1>
            <p className="header-subtitle">Real-time akuvera AI processing and claim resolution monitoring</p>
          </div>
          <div className="timeframe-selector">
            Timeframe: This Month
            <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </header>

        <div className="stat-cards">
            <div className="stat-card processing-time">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Processing Time</span>
                <div className="stat-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <p className="stat-card-value">12m</p>
              <p className="stat-card-comparison">-40% vs manual</p>
            </div>
            <div className="stat-card success-rate">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Success Rate</span>
                <div className="stat-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
                </div>
              </div>
              <p className="stat-card-value">93%</p>
              <p className="stat-card-comparison">+2 percent vs last month</p>
            </div>
            <div className="stat-card patterns-learned">
              <div className="stat-card-header">
                <span className="stat-card-title">Patterns Learned</span>
                <div className="stat-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
              </div>
              <p className="stat-card-value">2,847</p>
              <p className="stat-card-comparison">Growing daily</p>
            </div>
            <div className="stat-card revenue-generated">
              <div className="stat-card-header">
                <span className="stat-card-title">Revenue Generated</span>
                <div className="stat-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-1.133-.197c-.751 0-1.367.616-1.367 1.367 0 .751.616 1.367 1.367 1.367.362 0 .695-.142.943-.376.248-.234.39-.56.39-.911v-1.698c.22.07.412.164.567.267C11.338 8.184 12 9.47 12 11c0 1.657-1.343 3-3 3S6 12.657 6 11c0-1.53.662-2.816 1.567-3.582z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <p className="stat-card-value">$198,950</p>
              <p className="stat-card-comparison">This month</p>
            </div>
        </div>

        <div className="charts-section">
            <div className="grid-card chart-card">
              <h3 className="card-title">AI Success Rate Over Time</h3>
              <p className="card-subtitle">Track AI performance trends</p>
              <div className="chart-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 450 250" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(30, 20)">
                    {/* Y-axis lines */}
                    {[0, 50, 100, 150, 200].map(y => (
                       <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F3F4F6" strokeWidth="1" />
                    ))}
                    {/* X-axis */}
                    <line x1="0" y1="200" x2="400" y2="200" stroke="#E5E7EB" strokeWidth="1" />
                    {/* X-axis labels */}
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
                      <text key={label} x={i * (400/6)} y="225" fill="#6B7280" fontSize="12" textAnchor="middle">{label}</text>
                    ))}
                    {/* Data path */}
                    <path d="M 0 160 C 66.6 120, 133.3 140, 200 90 S 333.3 40, 400 70" fill="none" stroke="#2E5BBA" strokeWidth="2.5" />
                    {/* Data points */}
                    <circle cx="0" cy="160" r="4" fill="white" stroke="#2E5BBA" strokeWidth="2" />
                    <circle cx="200" cy="90" r="4" fill="white" stroke="#2E5BBA" strokeWidth="2" />
                    <circle cx="400"cy="70" r="4" fill="white" stroke="#2E5BBA" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="grid-card chart-card">
              <h3 className="card-title">Denial Types Distribution</h3>
              <p className="card-subtitle">Most common denial reasons</p>
              <div className="chart-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(200, 125)">
                        {/* Prior Authorization 35% - light blue #A7C7E7 */}
                        <path d="M 0 0 L 100 0 A 100 100 0 0 1 -58.78 80.9 Z" fill="#A7C7E7"></path>
                        {/* Coding Errors 25% - light green #C1E1C1 */}
                        <path d="M 0 0 L -58.78 80.9 A 100 100 0 0 1 -80.9 -58.78 Z" fill="#C1E1C1"></path>
                        {/* Missing Documents 20% - purple #D8BFD8 */}
                        <path d="M 0 0 L -80.9 -58.78 A 100 100 0 0 1 30.9 -95.11 Z" fill="#D8BFD8"></path>
                        {/* Duplicate Claims 12% - gray #E5E4E2 */}
                        <path d="M 0 0 L 30.9 -95.11 A 100 100 0 0 1 87.63 -48.18 Z" fill="#E5E4E2"></path>
                        {/* Coverage Issues 8% - tan #F5DEB3 */}
                        <path d="M 0 0 L 87.63 -48.18 A 100 100 0 0 1 100 0 Z" fill="#F5DEB3"></path>
                    </g>
                     <g className="pie-labels" fontSize="12" fill="#374151">
                        <text x="280" y="40" textAnchor="start">Prior Authorization 35%</text>
                        <text x="120" y="220" textAnchor="middle">Coding Errors 25%</text>
                        <text x="30" y="100" textAnchor="end">Missing Documents 20%</text>
                        <text x="160" y="20" textAnchor="middle">Duplicate Claims 12%</text>
                        <text x="300" y="140" textAnchor="start">Coverage Issues 8%</text>
                    </g>
                </svg>
              </div>
            </div>
        </div>

        <div className="bottom-section">
            <div className="grid-card activity-card">
                <h3 className="card-title">Recent Activity</h3>
                <div className="activity-list">
                    <div className="activity-item">
                        <div className="activity-icon approved">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="activity-details">
                            <p>Claim AKU-2025-004 approved</p>
                            <span>2 hours ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon processing">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        </div>
                        <div className="activity-details">
                            <p>AI processing 5 new claims</p>
                            <span>3 hours ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon onboarded">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <div className="activity-details">
                            <p>New company onboarded: TY Hospital</p>
                            <span>5 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-card insights-card">
                <h3 className="card-title">AI Learning Insights</h3>
                <div className="insights-grid">
                    <div className="insight-item">
                        <div className="insight-icon pattern-recognition">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h4>Pattern Recognition</h4>
                        <p>AI identified 12 new denial patterns this month, improving future processing accuracy by 3.2%</p>
                    </div>
                    <div className="insight-item">
                        <div className="insight-icon auto-resolution">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><path d="M22 12H12l3-3-3-3"></path></svg>
                        </div>
                        <h4>Auto-Resolution</h4>
                        <p>89% of denials now resolved automatically without human intervention</p>
                    </div>
                    <div className="insight-item">
                        <div className="insight-icon processing-speed">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.2 3.3c.6.2 1.1.7 1.3 1.3l.3 1.1.9 3.2c.2.6.4 1.1.7 1.6l.3.6c.3.5.6.9 1 1.2l.5.4c.6.4 1.2.6 1.9.6h1.3c.6 0 1.1.2 1.5.5s.6 1 .6 1.6-.2 1.1-.5 1.5-.8.6-1.4.6h-1.3c-.7 0-1.3.2-1.9.6l-.5.4c-.4.3-.8.7-1 1.2l-.3.6c-.2.5-.4 1-.7 1.6l-.9 3.2-.3 1.1c-.2.6-.7 1.1-1.3 1.3l-1.1.3c-1.3.4-2.6.4-3.9 0l-1.1-.3c-.6-.2-1.1-.7-1.3-1.3l-.3-1.1-.9-3.2c-.2-.6-.4-1.1-.7-1.6l-.3-.6c-.3-.5-.6-.9-1-1.2l-.5-.4c-.6-.4-1.2-.6-1.9-.6H3.3c-.6 0-1.1-.2-1.5-.5S1.2 14 1.2 13s.2-1.1.5-1.5.8-.6 1.4-.6h1.3c.7 0 1.3-.2 1.9-.6l.5-.4c.4-.3.8-.7 1-1.2l.3-.6c.2-.5.4-1 .7-1.6l.9-3.2.3-1.1c.2-.6.7-1.1 1.3-1.3l1.1-.3c1.3-.4 2.6-.4 3.9 0z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <h4>Processing Speed</h4>
                        <p>Average processing time reduced by 40% through ML optimizations</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;