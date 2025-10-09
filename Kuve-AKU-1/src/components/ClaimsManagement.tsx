import React, { useState } from 'react';
import UploadClaimsModal from './UploadClaimsModal';
import './ClaimsManagement.css';

const ClaimsManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="claims-management">
        <header className="header">
          <div>
            <h1 className="header-title">Claims Management</h1>
            <p className="header-subtitle">View and manage all dental claims in detail</p>
          </div>
          <div className="header-actions">
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

        <div className="claims-stat-cards">
          {/* Claims Card */}
          <div className="stat-card">
            <svg className="stat-card-icon claims" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <p className="stat-card-main-number claims">105</p>
            <p className="stat-card-label">Claims</p>
            <p className="stat-card-subtext"><span className="arrow">↑</span> 5 Received Today</p>
          </div>
          {/* In Process Card */}
          <div className="stat-card">
            <svg className="stat-card-icon in-process" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="stat-card-main-number in-process">2</p>
            <p className="stat-card-label">In Process</p>
            <p className="stat-card-subtext">Avg 14 min</p>
          </div>
          {/* Needs Review Card */}
          <div className="stat-card">
            <svg className="stat-card-icon needs-review" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
            <p className="stat-card-main-number needs-review">3</p>
            <p className="stat-card-label">Needs Review</p>
            <p className="stat-card-subtext">Awaiting your approval</p>
          </div>
          {/* Approved & Sent Card */}
          <div className="stat-card">
            <svg className="stat-card-icon approved-sent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="stat-card-main-number approved-sent">93</p>
            <p className="stat-card-label">Approved & Sent</p>
            <p className="stat-card-subtext">Sent to insurers</p>
          </div>
          {/* Resubmission Card */}
          <div className="stat-card">
            <svg className="stat-card-icon resubmission" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 4l16 16" /></svg>
            <p className="stat-card-main-number resubmission">2</p>
            <p className="stat-card-label">Resubmission</p>
            <p className="stat-card-subtext">Pending corrections</p>
          </div>
          {/* Appeal Card */}
          <div className="stat-card">
            <svg className="stat-card-icon appeal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            <p className="stat-card-main-number appeal">5</p>
            <p className="stat-card-label">Appeal</p>
            <p className="stat-card-subtext">Challenging denials</p>
          </div>
        </div>

        <div className="claims-table-container">
          <div className="claims-table-header">
            <div className="tabs">
              <button className="tab-button active">All Claims</button>
              <button className="tab-button">In Process</button>
              <button className="tab-button">Needs Review</button>
              <button className="tab-button">Sent</button>
              <button className="tab-button">Resubmission</button>
              <button className="tab-button">Appeal</button>
            </div>
            <div className="table-actions">
              <div className="table-search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                <input type="text" placeholder="Type to search..." />
              </div>
              <button className="table-action-button">
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filter
              </button>
              <button className="table-action-button">
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Export
              </button>
            </div>
          </div>
        <div className="claims-table-wrapper">
          <table className="claims-table">
            <thead>
              <tr>
                <th>Claim ID</th>
                <th>Customer</th>
                <th>Provider</th>
                <th>Payer</th>
                <th>Date Issued</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="claim-id">AKU-2025-627</td>
                <td>Raul Sampson</td>
                <td>
                  <div className="pill-badge">
                    <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    LASUTH
                  </div>
                </td>
                <td>
                  <div className="pill-badge">
                    <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.21-.8-4.24-2.144-5.882z" /></svg>
                    BlueCross
                  </div>
                </td>
                <td className="date-issued">18-01-2025 06:17</td>
                <td className="amount">$1,280</td>
                <td>
                  <div className="status-badge in-process">
                    <svg className="status-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    In Process
                  </div>
                </td>
                <td className="actions-cell">
                  <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="claim-id">AKU-2025-112</td>
                <td>Barrett Marks</td>
                <td>
                  <div className="pill-badge">
                   <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    OAUTH
                  </div>
                </td>
                <td>
                  <div className="pill-badge">
                    <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.21-.8-4.24-2.144-5.882z" /></svg>
                    AIICO
                  </div>
                </td>
                <td className="date-issued">22-04-2025 10:40</td>
                <td className="amount">$2,556</td>
                <td>
                  <div className="status-badge needs-review">
                    <svg className="status-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Needs Review
                  </div>
                </td>
                <td className="actions-cell">
                   <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                </td>
              </tr>
                {/* Row 3 */}
              <tr>
                <td className="claim-id">AKU-2025-004</td>
                <td>Corey Owen</td>
                <td>
                  <div className="pill-badge">
                    <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    LANDMARK
                  </div>
                </td>
                <td>
                  <div className="pill-badge">
                    <svg className="pill-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.21-.8-4.24-2.144-5.882z" /></svg>
                    AIICO
                  </div>
                </td>
                <td className="date-issued">17-07-2025 02:46</td>
                <td className="amount">$8,322</td>
                <td>
                  <div className="status-badge approved-sent">
                    <svg className="status-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Approved & Sent
                  </div>
                </td>
                <td className="actions-cell">
                   <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <UploadClaimsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ClaimsManagement;