import React from 'react';
import './ClaimsManagement.css';

const ClaimsManagement = () => {
  return (
    <div className="claims-management-page">
      <div className="claims-stat-cards">
        {/* Claims Card */}
        <div className="stat-card claims">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#7C4DFF" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Claims</p>
            <p className="stat-card-main-number">105</p>
            <p className="stat-card-subtext">↑ 5 Received Today</p>
          </div>
        </div>
        {/* In Process Card */}
        <div className="stat-card in-process">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#1976D2" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">In Process</p>
            <p className="stat-card-main-number">2</p>
            <p className="stat-card-subtext">Avg 14 min</p>
          </div>
        </div>
        {/* Needs Review Card */}
        <div className="stat-card needs-review">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#FF9800" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Needs Review</p>
            <p className="stat-card-main-number">3</p>
            <p className="stat-card-subtext">Awaiting your approval</p>
          </div>
        </div>
        {/* Approved & Sent Card */}
        <div className="stat-card approved-sent">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#4CAF50" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.992 14.414-3.521-3.521 1.414-1.414 2.107 2.107 4.95-4.95 1.414 1.414-6.364 6.364z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Approved & Sent</p>
            <p className="stat-card-main-number">93</p>
            <p className="stat-card-subtext">Sent to insurers</p>
          </div>
        </div>
        {/* Resubmission Card */}
        <div className="stat-card resubmission">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#8BC34A" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6H4c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Resubmission</p>
            <p className="stat-card-main-number">2</p>
            <p className="stat-card-subtext">Pending corrections</p>
          </div>
        </div>
        {/* Appeal Card */}
        <div className="stat-card appeal">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#F44336" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 6h2v6h-2zM11 14h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Appeal</p>
            <p className="stat-card-main-number">5</p>
            <p className="stat-card-subtext">Challenging denials</p>
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
            <div className="table-search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              <input type="text" placeholder="Type to search..." />
            </div>
            <button className="table-action-button">
              <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
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
              <th className="th-claim-id">Claim ID</th>
              <th className="th-customer">Customer</th>
              <th className="th-provider">Provider</th>
              <th className="th-payer">Payer</th>
              <th className="th-date-issued">Date Issued</th>
              <th className="th-amount">Amount</th>
              <th className="th-status">Status</th>
              <th className="th-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="claim-id">AKU-2025-627</td>
              <td>Raul Sampson</td>
              <td><div className="pill-badge">LASUTH</div></td>
              <td><div className="pill-badge">BlueCross</div></td>
              <td className="date-issued">18-01-2025 06:17</td>
              <td className="amount">$1,280</td>
              <td><div className="status-badge in-process"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>In Process</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            {/* More rows... */}
            <tr>
              <td className="claim-id">AKU-2025-526</td>
              <td>Morgan Alex</td>
              <td><div className="pill-badge">UCH</div></td>
              <td><div className="pill-badge">Tinsured</div></td>
              <td className="date-issued">08-03-2025 22:18</td>
              <td className="amount">$8,373</td>
              <td><div className="status-badge in-process"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>In Process</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-112</td>
              <td>Barrett Marks</td>
              <td><div className="pill-badge">OAUTH</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">22-04-2025 10:40</td>
              <td className="amount">$2,556</td>
              <td><div className="status-badge needs-review"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>Needs Review</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-334</td>
              <td>Orlando Tillman</td>
              <td><div className="pill-badge">OAUTH</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">06-05-2025 07:49</td>
              <td className="amount">$3,625</td>
              <td><div className="status-badge needs-review"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>Needs Review</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-121</td>
              <td>Sidney Ramos</td>
              <td><div className="pill-badge">OAUTH</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">14-06-2025 19:08</td>
              <td className="amount">$7,752</td>
              <td><div className="status-badge needs-review"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>Needs Review</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-004</td>
              <td>Corey Owen</td>
              <td><div className="pill-badge">LANDMARK</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">17-07-2025 02:46</td>
              <td className="amount">$8,322</td>
              <td><div className="status-badge approved-sent"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Approved & Sent</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-672</td>
              <td>Orlando Horne</td>
              <td><div className="pill-badge">LANDMARK</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">11-09-2025 02:46</td>
              <td className="amount">$8,322</td>
              <td><div className="status-badge approved-sent"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Approved & Sent</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-009</td>
              <td>Brittany Price</td>
              <td><div className="pill-badge">LANDMARK</div></td>
              <td><div className="pill-badge">AIICO</div></td>
              <td className="date-issued">13-09-2025 13:11</td>
              <td className="amount">$9,027</td>
              <td><div className="status-badge approved-sent"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Approved & Sent</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
            <tr>
              <td className="claim-id">AKU-2025-1431</td>
              <td>Carlie Chandler</td>
              <td><div className="pill-badge">UNILAGTH</div></td>
              <td><div className="pill-badge">AXA</div></td>
              <td className="date-issued">18-12-2025 22:51</td>
              <td className="amount">$8,215</td>
              <td><div className="status-badge approved-sent"><svg className="status-icon" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Approved & Sent</div></td>
              <td className="actions-cell">
                <svg className="actions-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default ClaimsManagement;