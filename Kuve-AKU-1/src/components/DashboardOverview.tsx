import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <>
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
        {/* Avg Processing Time */}
        <div className="stat-card">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="stat-card-label">Avg Processing Time</p>
          <p className="stat-card-value">12m</p>
          <p className="stat-card-subtext" style={{ color: '#10B981' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '12px', height: '12px', verticalAlign: 'middle' }}>
              <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L6.22 8.77a.75.75 0 01-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" transform="rotate(180 10 10)" />
            </svg>
            -40% vs manual
          </p>
        </div>

        {/* Avg Success Rate */}
        <div className="stat-card success">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="stat-card-label">Avg Success Rate</p>
          <p className="stat-card-value">93%</p>
          <p className="stat-card-subtext">+2 percent vs last month</p>
        </div>

        {/* Patterns Learned */}
        <div className="stat-card patterns">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
            </svg>
          </div>
          <p className="stat-card-label">Patterns Learned</p>
          <p className="stat-card-value">2,847</p>
          <p className="stat-card-subtext">Growing daily</p>
        </div>

        {/* Revenue Generated */}
        <div className="stat-card revenue">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 10.5 12 10.5s-1.536.71-2.121 1.5c-.586.79-.586 1.804 0 2.594v.026z" />
            </svg>
          </div>
          <p className="stat-card-label">Revenue Generated</p>
          <p className="stat-card-value">$198,950</p>
          <p className="stat-card-subtext">This month</p>
        </div>
      </div>

      <div className="charts-section">
          <div className="grid-card chart-card">
            <h3 className="card-title">AI Success Rate Over Time</h3>
            <p className="card-subtitle">Track AI performance trends</p>
            <div className="chart-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 500 250" preserveAspectRatio="none">
                <g transform="translate(20, 20)">
                  {/* X-axis labels */}
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
                    <text key={label} x={i * (460/6)} y="220" fill="#9CA3AF" fontSize="12" textAnchor="middle">{label}</text>
                  ))}
                  {/* Data path */}
                  <path d="M 0 180 Q 76.67 80, 153.33 100 T 306.67 50 T 460 80" fill="none" stroke="#2563EB" strokeWidth="2.5" />
                  {/* Data points */}
                  <circle cx="0" cy="180" r="4" fill="white" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="153.33" cy="100" r="4" fill="white" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="306.67" cy="50" r="4" fill="white" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="460" cy="80" r="4" fill="white" stroke="#2563EB" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
          <div className="grid-card chart-card">
            <h3 className="card-title">Denial Types Distribution</h3>
            <p className="card-subtitle">Most common denial reasons</p>
            <div className="chart-placeholder pie-chart-container">
            <svg width="100%" height="100%" viewBox="0 0 360 250" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(180, 125)">
                  {/* Slices */}
                  <path d="M 0,-90 A 90 90 0 0 1 85.59,27.81 Z" fill="#93C5FD"></path>
                  <path d="M 85.59,27.81 A 90 90 0 0 1 -52.89,72.82 Z" fill="#6EE7B7"></path>
                  <path d="M -52.89,72.82 A 90 90 0 0 1 -85.59,-27.81 Z" fill="#A78BFA"></path>
                  <path d="M -85.59,-27.81 A 90 90 0 0 1 -52.89,-72.82 Z" fill="#C4B5FD"></path>
                  <path d="M -52.89,-72.82 A 90 90 0 0 1 0,-90 Z" fill="#F5F5F5"></path>
                </g>
                <g className="pie-labels" fontSize="12" fill="#111827">
                  {/* Prior Authorization */}
                  <line x1="228" y1="91" x2="248" y2="81" stroke="#6B7280" strokeWidth="1"/>
                  <text x="253" y="81" dy=".35em" textAnchor="start">Prior Authorization 35%</text>
                  {/* Coding Errors */}
                  <line x1="151" y1="193" x2="141" y2="213" stroke="#6B7280" strokeWidth="1"/>
                  <text x="136" y="213" dy=".35em" textAnchor="end">Coding Errors 25%</text>
                  {/* Missing Documents */}
                  <line x1="100" y1="153" x2="70" y2="153" stroke="#6B7280" strokeWidth="1"/>
                  <text x="65" y="153" dy=".35em" textAnchor="end">Missing Documents 20%</text>
                  {/* Duplicate Claims */}
                  <line x1="106" y1="62" x2="86" y2="42" stroke="#6B7280" strokeWidth="1"/>
                  <text x="81" y="42" dy=".35em" textAnchor="end">Duplicate Claims 12%</text>
                  {/* Coverage Issues */}
                  <line x1="142" y1="42" x2="162" y2="22" stroke="#6B7280" strokeWidth="1"/>
                  <text x="167" y="22" dy=".35em" textAnchor="start">Coverage Issues 8%</text>
                </g>
              </svg>
            </div>
          </div>
      </div>

      <div className="bottom-section">
        <div className="grid-card activity-card">
          <h3 className="card-title icon-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recent Activity
          </h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon approved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="activity-details">
                <p>Claim AKU-2025-004 approved</p>
                <span>2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon processing">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="activity-details">
                <p>AI processing 5 new claims</p>
                <span>3 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon onboarded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div className="activity-details">
                <p>New company onboarded: TY Hospital</p>
                <span>5 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-card insights-card">
          <h3 className="card-title icon-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3.75-3.75m0 0L11.25 6l3.75 3.75M7.5 13.5v4.5m12-4.5v-4.5m-4.5 0h-3M15 12h3m-3 3h3" />
            </svg>
            AI Learning Insights
          </h3>
          <div className="insights-grid">
            <div className="insight-item">
              <div className="insight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
                </svg>
              </div>
              <h4>Pattern Recognition</h4>
              <p>AI identified 12 new denial patterns this month, improving future processing accuracy by 3.2%</p>
            </div>
            <div className="insight-item">
              <div className="insight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <h4>Auto-Resolution</h4>
              <p>89% of denials now resolved automatically without human intervention</p>
            </div>
            <div className="insight-item">
              <div className="insight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.357-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              <h4>Processing Speed</h4>
              <p>Average processing time reduced by 40% through ML optimizations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;