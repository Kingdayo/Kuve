import { useState } from 'react';
import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';
import AlertPanel from './AlertPanel';
import RecentActivity from './RecentActivity';
import AiLearningInsights from './AiLearningInsights';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview'); // 'overview' or 'claims'

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
        {activeView === 'overview' ? (
            <div className="dashboard-grid">
                <div className="grid-item-alert"><AlertPanel /></div>
                <div className="grid-item-overview"><DashboardOverview /></div>
                <div className="grid-item-activity"><RecentActivity /></div>
                <div className="grid-item-insights"><AiLearningInsights /></div>
            </div>
        ) : (
          <ClaimsManagement />
        )}
      </main>
    </div>
  );
};

export default Dashboard;