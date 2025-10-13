import React from 'react';
import './ClaimDetails.css';

interface ClaimDetailsProps {
  claim: any;
  onBack: () => void;
}

const ClaimDetails: React.FC<ClaimDetailsProps> = ({ claim, onBack }) => {
  if (!claim) {
    return <div>Claim not found.</div>;
  }

  return (
    <div className="claim-details-page">
      <div className="details-header">
        <button onClick={onBack} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back
        </button>
        <div className="claim-id-header">
          <span className="claim-id-text">{claim.claimId}</span>
          <span className={`status-badge-lg ${claim.status.toLowerCase().replace(/\s+/g, '-')}`}>{claim.status}</span>
        </div>
        <div className="header-actions">
          <button className="action-btn contact-provider">Contact Provider</button>
          <button className="action-btn run-ai-bot">Run AI Bot</button>
        </div>
      </div>

      <div className="details-tabs">
        {['Overview', 'Services', 'Documents', 'Timeline', 'AI Analysis'].map(tab => (
          <button
            key={tab}
            className={`detail-tab-button ${tab === 'Overview' ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="details-content-grid">
        <div className="info-card">
          <h3>Patient Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>{claim.customer}</p></div>
            <div className="info-item"><span>Date of Birth</span><p>1985-03-15</p></div>
            <div className="info-item"><span>Member ID</span><p>BC-789456123</p></div>
            <div className="info-item"><span>Policy Number</span><p>POL-2024-8877</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>dejiadeleke@gmail.com</p></div>
          </div>
        </div>

        <div className="info-card">
          <h3>Provider Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>{claim.provider}</p></div>
            <div className="info-item"><span>NPI</span><p>1234567890</p></div>
            <div className="info-item"><span>Tax ID</span><p>12-3456789</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>info@lasuth.org</p></div>
            <div className="info-item"><span>Phone Number</span><p>13, Andrew St, NY.</p></div>
          </div>
        </div>

        <div className="info-card">
          <h3>Payer Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>{claim.payer}</p></div>
            <div className="info-item"><span>Policy Type</span><p>Individual Health Plan</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>claims@bluecross.com</p></div>
          </div>
        </div>
      </div>

      <div className="summary-cards-grid">
        <div className="summary-card">
            <svg className="summary-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12.75h.008v.008h-.008v-.008z" />
            </svg>
            <p className="summary-label">Date Issued</p>
            <p className="summary-value">{claim.dateIssued}</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12.75h.008v.008h-.008v-.008z" />
            </svg>
            <p className="summary-label">Date Received</p>
            <p className="summary-value">{claim.dateIssued.replace('06:17', '10:25')}</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            <p className="summary-label">Category</p>
            <p className="summary-value">Outpatient</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.156 0-2.982C10.544 8.22 11.274 8 12 8c.725 0 1.45.22 2.003.659 1.106.826 1.106 2.156 0 2.982C13.536 11.781 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.156 0-2.982C10.544 8.22 11.274 8 12 8c.725 0 1.45.22 2.003.659 1.106.826 1.106 2.156 0 2.982C13.536 11.781 12.768 12 12 12" />
            </svg>
            <p className="summary-label">Total Amount</p>
            <p className="summary-value green">{claim.amount}</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <p className="summary-label">Denial Reason</p>
            <p className="summary-value red">{claim.denialReason}</p>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetails;