import React from 'react';
import './ReviewIssuesModal.css';

interface ReviewIssuesModalProps {
  isOpen: boolean;
  onClose: () => void;
  claimData: any;
}

const ReviewIssuesModal: React.FC<ReviewIssuesModalProps> = ({ isOpen, onClose, claimData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Review Issues</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <div className="claim-details-grid">
            <div className="detail-item">
              <label>Claim ID</label>
              <p>{claimData.claimId}</p>
            </div>
            <div className="detail-item">
              <label>Customer</label>
              <p>{claimData.customer}</p>
            </div>
            <div className="detail-item">
              <label>Payer</label>
              <p>{claimData.payer}</p>
            </div>
            <div className="detail-item">
              <label>Provider</label>
              <p>{claimData.provider}</p>
            </div>
          </div>
          <div className="issue-reason-section">
            <label htmlFor="issue-reason">Reason for Issue</label>
            <div className="select-wrapper">
              <select id="issue-reason" defaultValue="Invalid or missing documentation">
                <option>Invalid or missing documentation</option>
                <option>Service not covered</option>
                <option>Duplicate claim</option>
              </select>
            </div>
          </div>
          <div className="comment-section">
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" placeholder="Add a comment..."></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button className="reject-button">Reject</button>
          <button className="approve-button">Approve</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewIssuesModal;