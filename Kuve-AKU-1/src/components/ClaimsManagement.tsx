import React from 'react';
import './ClaimsManagement.css';

const ClaimsManagement = () => {
  return (
    <div className="claims-management">
      <header className="header">
        <div>
          <h1 className="header-title">Claims Management</h1>
          <p className="header-subtitle">View and manage all denial claims in detail</p>
        </div>
        <div className="header-actions">
          <button className="header-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="header-button-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            Search from Provider
          </button>
          <button className="header-button primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="header-button-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            Upload Claims
          </button>
        </div>
      </header>

      <div className="claims-stat-cards">
        <div className="stat-card claims">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="card-info">
              <span className="card-title">Claims</span>
              <span className="card-value">105</span>
              <span className="card-subtext">+5 Received Today</span>
            </div>
          </div>
        </div>
        <div className="stat-card in-process">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            </div>
            <div className="card-info">
              <span className="card-title">In Process</span>
              <span className="card-value">2</span>
              <span className="card-subtext">Avg 14 min</span>
            </div>
          </div>
        </div>
        <div className="stat-card needs-review">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div className="card-info">
              <span className="card-title">Needs Review</span>
              <span className="card-value">3</span>
              <span className="card-subtext">Awaiting your approval</span>
            </div>
          </div>
        </div>
        <div className="stat-card approved-sent">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="card-info">
              <span className="card-title">Approved & Sent</span>
              <span className="card-value">93</span>
              <span className="card-subtext">Sent to insurers</span>
            </div>
          </div>
        </div>
        <div className="stat-card resubmission">
          <div className="card-content">
            <div className="card-icon">
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21.5 2v6h-6M2.5 22v-6h6"/><path d="M2 11.5a10 10 0 0 1 18.8-4.3l-3.3 3.3"/><path d="M22 12.5a10 10 0 0 1-18.8 4.3l3.3-3.3"/></svg>
            </div>
            <div className="card-info">
              <span className="card-title">Resubmission</span>
              <span className="card-value">2</span>
              <span className="card-subtext">Pending corrections</span>
            </div>
          </div>
        </div>
        <div className="stat-card appeal">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
            </div>
            <div className="card-info">
              <span className="card-title">Appeal</span>
              <span className="card-value">5</span>
              <span className="card-subtext">Challenging denials</span>
            </div>
          </div>
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
            <div className="search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              <input type="text" placeholder="Type to search..." />
            </div>
            <button className="filter-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="filter-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 12.414V17a1 1 0 01-1.447.894l-2-1A1 1 0 018 16v-3.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
              Filter
            </button>
            <button className="export-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="export-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" /></svg>
              Export
            </button>
          </div>
        </div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AKU-2025-627</td>
              <td>Raul Sampson</td>
              <td>LASUTH</td>
              <td>BlueCross</td>
              <td>18-01-2025 06:17</td>
              <td>$1,280</td>
              <td><span className="status-badge in-process">In Process</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-526</td>
              <td>Morgan Alex</td>
              <td>UCH</td>
              <td>Tinsured</td>
              <td>08-03-2025 22:18</td>
              <td>$8,373</td>
              <td><span className="status-badge in-process">In Process</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-112</td>
              <td>Barrett Marks</td>
              <td>OAUTH</td>
              <td>AIICO</td>
              <td>22-04-2025 10:40</td>
              <td>$2,556</td>
              <td><span className="status-badge needs-review">Needs Review</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-334</td>
              <td>Orlando Tillman</td>
              <td>OAUTH</td>
              <td>AIICO</td>
              <td>06-05-2025 07:49</td>
              <td>$3,625</td>
              <td><span className="status-badge needs-review">Needs Review</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-121</td>
              <td>Sidney Ramos</td>
              <td>OAUTH</td>
              <td>AIICO</td>
              <td>14-06-2025 19:08</td>
              <td>$7,752</td>
              <td><span className="status-badge needs-review">Needs Review</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-004</td>
              <td>Corey Owen</td>
              <td>LANDMARK</td>
              <td>AIICO</td>
              <td>17-07-2025 02:46</td>
              <td>$8,322</td>
              <td><span className="status-badge approved-sent">Approved & Sent</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-672</td>
              <td>Orlando Horne</td>
              <td>LANDMARK</td>
              <td>AIICO</td>
              <td>11-09-2025 12:11</td>
              <td>$7,728</td>
              <td><span className="status-badge approved-sent">Approved & Sent</span></td>
              <td className="action-dots">...</td>
            </tr>
            <tr>
              <td>AKU-2025-009</td>
              <td>Brittany Price</td>
              <td>LANDMARK</td>
              <td>AIICO</td>
              <td>13-09-2025 13:11</td>
              <td>$9,027</td>
              <td><span className="status-badge approved-sent">Approved & Sent</span></td>
              <td className="action-dots">...</td>
            </tr>
             <tr>
              <td>AKU-2025-1431</td>
              <td>Carlie Chandler</td>
              <td>UNILAGTH</td>
              <td>AXA</td>
              <td>18-12-2025 22:51</td>
              <td>$8,215</td>
              <td><span className="status-badge approved-sent">Approved & Sent</span></td>
              <td className="action-dots">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimsManagement;