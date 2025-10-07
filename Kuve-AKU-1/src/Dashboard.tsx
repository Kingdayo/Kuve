import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const successRateData = [
  { name: 'Jan', rate: 88 },
  { name: 'Feb', rate: 90 },
  { name: 'March', rate: 91 },
  { name: 'April', rate: 89 },
  { name: 'May', rate: 92 },
  { name: 'June', rate: 93 },
  { name: 'July', rate: 94 },
];

const denialTypesData = [
  { name: 'Prior Authorization', value: 35 },
  { name: 'Coding Errors', value: 25 },
  { name: 'Missing Documents', value: 20 },
  { name: 'Duplicate Claims', value: 12 },
  { name: 'Coverage Issues', value: 8 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/akuvera-logo.png" alt="Akuvera Logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Claims
                <span className="nav-badge">3</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><path d="M22 12H12l3-3-3-3"></path></svg>
                Providers
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
            <div className="user-avatar">PO</div>
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
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Processing Time</span>
                <div className="stat-card-icon time">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <p className="stat-card-value">12m</p>
              <p className="stat-card-comparison">-40% vs manual</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Success Rate</span>
                <div className="stat-card-icon success">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <p className="stat-card-value">93%</p>
              <p className="stat-card-comparison">+2 percent vs last month</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Patterns Learned</span>
                <div className="stat-card-icon patterns">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
              </div>
              <p className="stat-card-value">2,847</p>
              <p className="stat-card-comparison">Growing daily</p>
            </div>
            <div className="stat-card revenue">
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

        <div className="dashboard-grid">
            <div className="grid-card alert-panel">
                <div className="alert-panel-header">
                    <div className="alert-panel-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15h14a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <h3 className="alert-panel-main-title">Alert</h3>
                </div>
                <div className="alert-sub-panels">
                    <div className="alert-section">
                        <div className="alert-section-header">
                            <h3 className="alert-section-title">Claims Need Review</h3>
                            <span className="alert-count-badge">3</span>
                        </div>
                        <div className="review-claim-list">
                            <div className="review-claim-item">
                                <div>
                                    <p className="claim-id">AKU-2025-027</p>
                                    <p className="claim-details">Ibrahim Joseph - $5,200</p>
                                </div>
                                <div className="claim-confidence">
                                    <span>88% confidence</span>
                                    <button className="review-btn">Review</button>
                                </div>
                            </div>
                            <div className="review-claim-item">
                                <div>
                                    <p className="claim-id">AKU-2025-314</p>
                                    <p className="claim-details">Dave Trump - $2,770</p>
                                </div>
                                <div className="claim-confidence">
                                    <span>73% confidence</span>
                                    <button className="review-btn">Review</button>
                                </div>
                            </div>
                            <div className="review-claim-item">
                                <div>
                                    <p className="claim-id">AKU-2025-091</p>
                                    <p className="claim-details">Abu Hudailah - $1,871</p>
                                </div>
                                <div className="claim-confidence">
                                    <span>85% confidence</span>
                                    <button className="review-btn">Review</button>
                                </div>
                            </div>
                        </div>
                        <button className="review-all-claims-btn">Review all Claims →</button>
                    </div>
                    <div className="alert-section">
                        <div className="alert-section-header">
                            <h3 className="alert-section-title">High Priority Claim</h3>
                            <span className="alert-count-badge">1</span>
                        </div>
                        <div className="review-claim-list">
                           <div className="review-claim-item">
                              <div>
                                <p className="claim-id">AKU-2025-771</p>
                                <p className="claim-details">Sarah Johnson - $9,300</p>
                              </div>
                              <div className="claim-confidence">
                                <span>50% confidence</span>
                                <button className="view-claim-btn">View Claim</button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="charts-section">
                <div className="grid-card chart-card">
                  <h3 className="card-title">AI Success Rate Over Time</h3>
                  <p className="card-subtitle">Track AI performance trends</p>
                  <div className="chart-placeholder">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={successRateData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid-card chart-card">
                  <h3 className="card-title">Denial Types Distribution</h3>
                  <p className="card-subtitle">Most common denial reasons</p>
                  <div className="chart-placeholder">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={denialTypesData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                {denialTypesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            </div>

            <div className="bottom-row">
                <div className="grid-card activity-card">
                    <h3 className="card-title">Recent Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon approved">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="activity-details">
                                <p>Claim AKU-2024-004 approved</p>
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon processing">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="activity-details">
                                <p>AI processing 5 new claims</p>
                                <span>3 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon onboarded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 11a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z" /></svg>
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
                            <div>
                                <h4>Pattern Recognition</h4>
                                <p>AI identified 12 new denial patterns this month, improving future processing accuracy by 3.2%</p>
                            </div>
                        </div>
                        <div className="insight-item">
                            <div className="insight-icon auto-resolution">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1-1v-.5a1.5 1.5 0 01-3 0V16a1 1 0 00-1-1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" /></svg>
                            </div>
                            <div>
                                <h4>Auto-Resolution</h4>
                                <p>89% of denials now resolved automatically without human intervention</p>
                            </div>
                        </div>
                        <div className="insight-item">
                            <div className="insight-icon processing-speed">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.34 3.34A1 1 0 0112.23 4.23l1.83 7.34 7.34 1.83a1 1 0 01-1.1 1.7L2.23 13.77a1 1 0 01-1.1-1.7l7.34-1.83 1.83-7.34a1 1 0 011.04-1.56z" clipRule="evenodd" /></svg>
                            </div>
                            <div>
                                <h4>Processing Speed</h4>
                                <p>Average processing time reduced by 40% through ML optimizations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;