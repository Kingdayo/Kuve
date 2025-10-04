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
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Dashboard & Analytics
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Claims
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" />
                </svg>
                Payers
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI Analytics
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                Revenue Breakdown
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">OP</div>
            <div className="user-info">
              <span className="user-name">Operations Team</span>
              <span className="user-role">Admin</span>
            </div>
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
            <div className="stat-card purple">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div className="card-info">
                <span className="card-title">Claims</span>
                <span className="card-value">12</span>
                <span className="card-subtitle">Received Today</span>
              </div>
            </div>
            <div className="stat-card blue">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div className="card-info">
                <span className="card-title">In Process</span>
                <span className="card-value">5</span>
                <span className="card-subtitle">Avg 14 min</span>
              </div>
            </div>
            <div className="stat-card yellow">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="card-info">
                <span className="card-title">Needs Review</span>
                <span className="card-value">3</span>
                <span className="card-subtitle">Awaiting your approval</span>
              </div>
            </div>
            <div className="stat-card teal">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="card-info">
                <span className="card-title">Approved & Sent</span>
                <span className="card-value">8</span>
                <span className="card-subtitle">Sent to insurers</span>
              </div>
            </div>
            <div className="stat-card green">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599.934m-5.198-.934A7.965 7.965 0 0112 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8c0-1.06.216-2.08.604-3m1.431 4.5A7.963 7.963 0 0112 8c.343 0 .678.025.999.072m-2.198 4.028A7.962 7.962 0 0112 12c-3.037 0-5.58-1.71-6.942-4.093" /></svg>
              </div>
              <div className="card-info">
                <span className="card-title">Revenue Generated</span>
                <span className="card-value">$198,950</span>
                <span className="card-subtitle">This month</span>
              </div>
            </div>
          </div>

          <div className="claims-section">
            <div className="claims-header">
              <div className="tabs">
                <button className="tab active">All Claims</button>
                <button className="tab">AI Processing</button>
                <button className="tab">Needs Review</button>
                <button className="tab">Approved & Sent</button>
              </div>
              <button className="export-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Export
              </button>
            </div>
            <div className="claims-list">
              {/* Claims list will be rendered here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;