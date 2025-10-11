import { useState } from 'react';
import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';
import UploadClaimsModal from './UploadClaimsModal';

interface DashboardProps {
  activeView: string;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard">
      <main className="main-content-dashboard">
        {activeView === 'overview' && (
          <header className="header">
              <div>
                <h1 className="header-title">Dashboard Overview</h1>
                <p className="header-subtitle">Real-time akuvera AI processing and claim resolution monitoring</p>
              </div>
          </header>
        )}
        {activeView === 'claims' && (
            <header className="header">
                <div>
                    <h1 className="header-title">Claims Management</h1>
                    <p className="header-subtitle">View and manage all dental claims in detail</p>
                </div>
                <div className="header-actions">
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
                </div>
            </header>
        )}
        {activeView === 'overview' ? <DashboardOverview /> : <ClaimsManagement />}
      </main>
      <UploadClaimsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;