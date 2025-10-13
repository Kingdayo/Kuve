import React from 'react';
import './ResubmitClaimModal.css';

interface ResubmitClaimModalProps {
  onClose: () => void;
  selectedClaims: any[]; // Using any for now, can be tightened later
}

const ResubmitClaimModal: React.FC<ResubmitClaimModalProps> = ({ onClose, selectedClaims }) => {
  // For now, we'll just display the first selected claim as per the image
  const claimToResubmit = selectedClaims.length > 0 ? selectedClaims[0] : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resubmit-claim-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4V1L8 5l4 4V6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6H4c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8z"/>
            </svg>
            <h2>Resubmit Claims to Payer</h2>
          </div>
          <button onClick={onClose} className="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <p className="modal-subtitle">Resubmit corrected claims back to the payer.</p>

        <div className="claims-to-resubmit-card">
          <div className="card-header">
            <span>Claims To Resubmit ({selectedClaims.length})</span>
          </div>
          {claimToResubmit && (
            <div className="card-body">
              <div className="claim-info">
                <span className="claim-details">{claimToResubmit.claimId} - {claimToResubmit.customer}</span>
                <span className="claim-amount">{claimToResubmit.amount}</span>
              </div>
            </div>
          )}
        </div>

        <div className="form-section">
          <label htmlFor="corrections">Corrections Made</label>
          <textarea
            id="corrections"
            placeholder="Describe the corrections made to address the denial reasons"
          />
        </div>

        <div className="upload-section">
          <div className="upload-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E5E7EB">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>
          <p className="upload-prompt">Upload supporting Documents</p>
          <button className="choose-file-button">Choose File</button>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button className="resubmit-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="resubmit-icon">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Resubmit Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResubmitClaimModal;