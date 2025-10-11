import { useState } from 'react';
import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';
import AlertPanel from './AlertPanel';
import RecentActivity from './RecentActivity';
import AiLearningInsights from './AiLearningInsights';

import UploadClaimsModal from './UploadClaimsModal';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview'); // 'overview' or 'claims'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
           {/* <img src={akuveraLogo} alt="Akuvera Logo" className="sidebar-logo" /> */}
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={`nav-item ${activeView === 'overview' ? 'active' : ''}`}>
              <a href="#" onClick={() => setActiveView('overview')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Overview
              </a>
            </li>
            <li className={`nav-item ${activeView === 'claims' ? 'active' : ''}`}>
              <a href="#" onClick={() => setActiveView('claims')}>
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
        {activeView === 'overview' && (
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
        )}
        {activeView === 'claims' && (
            <header className="header">
                <div>
                    <h1 className="header-title">Claims Management</h1>
                    <p className="header-subtitle">View and manage all dental claims in detail</p>
                </div>
                <div className="timeframe-selector">
                    <div className="search-bar-header">
                        <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input type="text" placeholder="Search from Provider" />
                    </div>
                    <button className="upload-claims-button" onClick={handleOpenModal}>
                        <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" >
                            <path d="M10 12.5V3.33331" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66669 6.66669L10 3.33335L13.3334 6.66669" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.6667 10V16.6667H3.33331V10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Upload Claims
                    </button>
                </div>
            </header>
        )}
        {activeView === 'overview' ? (
          <>
            <div className="stat-cards">
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
            <div className="dashboard-grid">
                <div className="grid-item-alert"><AlertPanel /></div>
                <div className="grid-item-overview"><DashboardOverview /></div>
                <div className="grid-item-activity"><RecentActivity /></div>
                <div className="grid-item-insights"><AiLearningInsights /></div>
            </div>
          </>
        ) : null}
        {activeView === 'claims' && <ClaimsManagement />}
      </main>
      <UploadClaimsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;