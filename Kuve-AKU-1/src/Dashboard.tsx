import React from 'react';
import './Dashboard.css';

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
          <div className="header-left">
            <h1 className="header-title">Dashboard Overview</h1>
            <p className="header-subtitle">Real-time akuvera AI processing and claim resolution monitoring</p>
          </div>
          <div className="header-right">
            <div className="timeframe-selector">
              Timeframe: This Month
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="stat-cards">
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Processing Time</span>
                <div className="stat-card-icon time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
              </div>
              <p className="stat-card-value">12m <span className="stat-card-comparison">40% vs manual</span></p>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Avg Success Rate</span>
                <div className="stat-card-icon success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
              </div>
              <p className="stat-card-value">93% <span className="stat-card-comparison">+2 percent vs last month</span></p>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">Patterns Learned</span>
                <div className="stat-card-icon patterns">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                </div>
              </div>
              <p className="stat-card-value">2,847 <span className="stat-card-comparison">Growing daily</span></p>
            </div>
            <div className="stat-card revenue">
              <div className="stat-card-header">
                <span className="stat-card-title">Revenue Generated</span>
                <div className="stat-card-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
              </div>
              <p className="stat-card-value">$198,950 <span className="stat-card-comparison">This month</span></p>
            </div>
          </div>

          <div className="main-grid">
            <div className="grid-card alert-card">
              <div className="card-header">
                <h3 className="card-title">Alert</h3>
                <div className="alert-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
              </div>
              <div className="alert-item">
                <p>Claims Need Review</p>
                <span>3 claims with AI confidence below 90% require manual review before resubmission.</span>
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
              <button className="review-all-btn">Review all Claims</button>
              <div className="high-priority-alert">
                 <div className="high-priority-header">
                    <h4>High Priority Claim</h4>
                    <span>High-value claims requiring urgent attention.</span>
                 </div>
                 <div className="review-claim-item high-priority">
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
            <div className="grid-card chart-card success-rate-card">
              <h3 className="card-title">AI Success Rate Over Time</h3>
              <p className="card-subtitle">Track AI performance trends</p>
              <div className="chart-placeholder">
                {/* Chart will be rendered here */}
              </div>
            </div>
            <div className="grid-card chart-card denial-types-card">
              <h3 className="card-title">Denial Types Distribution</h3>
              <p className="card-subtitle">Most common denial reasons</p>
              <div className="chart-placeholder">
                {/* Chart will be rendered here */}
              </div>
            </div>
            <div className="grid-card activity-card">
              <h3 className="card-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon approved">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div className="activity-details">
                    <p>Claim AKU-2024-004 approved</p>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon processing">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                  </div>
                  <div className="activity-details">
                    <p>AI processing 5 new claims</p>
                    <span>3 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon onboarded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
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
                  <div className="insight-icon pattern">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                  </div>
                  <h4>Pattern Recognition</h4>
                  <p>AI identified 12 new denial patterns this month, improving future processing accuracy by 3.2%</p>
                </div>
                <div className="insight-item">
                  <div className="insight-icon auto-resolution">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path></svg>
                  </div>
                  <h4>Auto-Resolution</h4>
                  <p>89% of denials now resolved automatically without human intervention</p>
                </div>
                <div className="insight-item">
                  <div className="insight-icon speed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                  <h4>Processing Speed</h4>
                  <p>Average processing time reduced by 40% through ML optimizations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;