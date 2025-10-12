import React from 'react';
import './UploadComplete.css';

interface UploadCompleteProps {
  onClose: () => void;
}

const UploadComplete: React.FC<UploadCompleteProps> = ({ onClose }) => {
  return (
    <>
      <div className="upload-complete-body">
        <div className="completion-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="completion-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>Upload Complete!</h3>
        <p>23 claims have been successfully uploaded and queued for AI processing.</p>

        <div className="upload-summary">
          <div className="summary-item">
            <span className="summary-label">Provider</span>
            <span className="summary-value">OAUTHC</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Claims Processed</span>
            <span className="summary-value">23</span>
          </div>
        </div>

        <div className="correction-info-banner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="info-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>3 claims with issues have been sent back to the provider for correction.</span>
        </div>
      </div>
      <div className="modal-footer">
        <button className="okay-button" onClick={onClose}>Okay</button>
      </div>
    </>
  );
};

export default UploadComplete;