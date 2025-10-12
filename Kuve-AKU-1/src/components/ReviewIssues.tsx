import React, { useState } from 'react';
import './ReviewIssues.css';

interface ReviewIssuesProps {
  onClose: () => void;
  onNext: () => void;
}

const issuesData = [
  {
    patient: 'Saka Oyetayo',
    claimId: 'No claim #',
    issue: 'Missing claim number',
    status: 'Error',
  },
  {
    patient: 'Cole palmer',
    claimId: 'AKU-2025-112',
    issue: 'Age appears to be missing or invalid',
    status: 'Warning',
  },
  {
    patient: 'The patient name is missing',
    claimId: 'AKU-2025-130',
    issue: 'The patient name is missing',
    status: 'Warning',
  },
];

const ReviewIssues: React.FC<ReviewIssuesProps> = ({ onClose, onNext }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(issuesData.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const isAnyCheckboxChecked = checkedState.some(state => state);

  return (
    <>
      <div className="review-issues-header">
        <h3>Review Claims with Issues</h3>
        <span className="issues-count">3 issues found</span>
      </div>
      <div className="attention-banner">
        <p>The following claims have data issues that need attention. You can review the issues and send them back to the provider for correction</p>
      </div>
      <div className="issues-table">
        <div className="table-header-row">
          <div className="header-cell patient">Patient</div>
          <div className="header-cell issues">Issues</div>
          <div className="header-cell status">Status</div>
        </div>
        {issuesData.map((item, index) => (
          <div key={index} className="table-row">
            <div className="cell patient">
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <div>
                <p className="patient-name">{item.patient}</p>
                <p className="claim-id">{item.claimId}</p>
              </div>
            </div>
            <div className="cell issues">{item.issue}</div>
            <div className="cell status">
              <span className={`status-pill ${item.status.toLowerCase()}`}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="modal-footer">
        <button className="back-button" onClick={onClose}>Back</button>
        <button className={`send-button ${isAnyCheckboxChecked ? 'active' : ''}`} onClick={onNext} disabled={!isAnyCheckboxChecked}>Send to Provider</button>
      </div>
    </>
  );
};

export default ReviewIssues;