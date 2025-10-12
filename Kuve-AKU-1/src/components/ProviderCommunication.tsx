import React from 'react';
import './ProviderCommunication.css';

interface ProviderCommunicationProps {
  onBack: () => void;
  onNext: () => void;
}

const ProviderCommunication: React.FC<ProviderCommunicationProps> = ({ onBack, onNext }) => {
  return (
    <>
      <div className="provider-communication-body">
        <h3>Provider Communication</h3>
        <div className="communication-details">
          <div className="detail-item">
            <span className="detail-label">Subject</span>
            <span className="detail-value">Claims Resubmission Request</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Recipient</span>
            <span className="detail-value">OAUTHC</span>
          </div>
        </div>

        <h4>Claims to be returned for correction:</h4>
        <div className="claims-correction-list">
          <div className="claim-item">
            <div>
              <p className="claim-patient">Saka Oyetayo</p>
              <p className="claim-meta">Missing claim number</p>
            </div>
            <span className="status-pill error">Error</span>
          </div>
          <div className="claim-item">
            <div>
              <p className="claim-patient">Cole palmer</p>
              <p className="claim-meta">AAU-2025-112</p>
            </div>
            <span className="status-pill warning">Warning</span>
          </div>
        </div>

        <div className="fax-preview">
          <h4>Fax to Provider</h4>
          <div className="fax-content">
            <p>Dear OAUTHC,</p>
            <p>We've identified data issues in 3 claims from your recent submission that require correction before processing. Please review the details below and resubmit with the necessary corrections.</p>
            <p>Issues identified:</p>
          </div>
        </div>

        <div className="next-steps-banner">
          <h4>Next Steps:</h4>
          <ul>
            <li>Provider will receive notification with detailed issue list</li>
            <li>Remaining valid claims will be processed</li>
            <li>Corrected claims can be resubmitted through normal channels</li>
          </ul>
        </div>
      </div>
      <div className="modal-footer">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="send-button active" onClick={onNext}>Send to Provider</button>
      </div>
    </>
  );
};

export default ProviderCommunication;