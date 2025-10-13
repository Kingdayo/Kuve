import React from 'react';
import './AiBotModal.css';

interface AiBotModalProps {
  claimId: string;
}

const AiBotModal: React.FC<AiBotModalProps> = ({ claimId }) => {
  return (
    <div className="ai-bot-modal-overlay">
      <div className="ai-bot-modal-container">
        <div className="ai-bot-modal-spinner"></div>
        <h2 className="ai-bot-modal-title">Running AI Bot</h2>
        <p className="ai-bot-modal-subtitle">
          Processing claim <span className="ai-bot-modal-claim-id">{claimId}</span>
        </p>
      </div>
    </div>
  );
};

export default AiBotModal;