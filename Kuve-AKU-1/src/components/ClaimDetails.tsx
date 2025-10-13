import React from 'react';
import './ClaimDetails.css';

interface ClaimDetailsProps {
  claim: any; // Define a proper type later
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
        {/* Patient Information */}
        <div className="info-card">
          <h3>Patient Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>Deiji Adeleke</p></div>
            <div className="info-item"><span>Date of Birth</span><p>1985-03-15</p></div>
            <div className="info-item"><span>Member ID</span><p>BC-789456123</p></div>
            <div className="info-item"><span>Policy Number</span><p>POL-2024-8877</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>dejiadeleke@gmail.com</p></div>
          </div>
        </div>

        {/* Provider Information */}
        <div className="info-card">
          <h3>Provider Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>Lagos State University Teaching Hospital (LASUTH)</p></div>
            <div className="info-item"><span>NPI</span><p>1234567890</p></div>
            <div className="info-item"><span>Tax ID</span><p>12-3456789</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>info@lasuth.org</p></div>
            <div className="info-item"><span>Phone Number</span><p>13, Andrew St, NY.</p></div>
          </div>
        </div>

        {/* Payer Information */}
        <div className="info-card">
          <h3>Payer Information</h3>
          <div className="info-grid">
            <div className="info-item"><span>Name</span><p>BlueCross</p></div>
            <div className="info-item"><span>Policy Type</span><p>Individual Health Plan</p></div>
            <div className="info-item"><span>Contact Number</span><p>+1 (555) 123-4567</p></div>
            <div className="info-item"><span>Contact Mail</span><p>claims@bluecross.com</p></div>
          </div>
        </div>
      </div>

      <div className="summary-cards-grid">
        <div className="summary-card">
            <svg className="summary-icon" /* icon */ />
            <p className="summary-label">Date Issued</p>
            <p className="summary-value">18-01-2025 06:17</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" /* icon */ />
            <p className="summary-label">Date Received</p>
            <p className="summary-value">18-01-2025 10:25</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" /* icon */ />
            <p className="summary-label">Category</p>
            <p className="summary-value">Outpatient</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" /* icon */ />
            <p className="summary-label">Total Amount</p>
            <p className="summary-value green">{claim.amount}</p>
        </div>
        <div className="summary-card">
            <svg className="summary-icon" /* icon */ />
            <p className="summary-label">Denial Reason</p>
            <p className="summary-value red">Incorrect procedure code</p>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetails;