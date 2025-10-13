import React, { useState, useEffect } from 'react';
import './AiBotModal.css';

interface AiBotModalProps {
  claimId: string;
  onComplete: () => void;
}

const AiBotModal: React.FC<AiBotModalProps> = ({ claimId, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="ai-bot-modal-overlay">
      <div className="ai-bot-modal-container">
        <div className="ai-bot-modal-header">
          <div className="ai-bot-modal-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <span className="ai-bot-modal-claim-id">{claimId}</span>
          <span className="ai-bot-modal-percentage">{Math.round(progress)}%</span>
        </div>
        <div className="ai-bot-modal-progress-bar">
          <div className="ai-bot-modal-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="ai-bot-modal-description">
          Processing claim for categorization and analysis...
        </p>
      </div>
    </div>
  );
};

export default AiBotModal;