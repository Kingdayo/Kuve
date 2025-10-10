import './AlertPanel.css';

const AlertPanel = () => {
  return (
    <div className="alert-panel">
      <div className="alert-header">
        <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
        <h3 className="alert-title">Alert</h3>
      </div>

      <div className="alert-block">
        <div className="alert-block-header">
          <h4 className="alert-block-title">Claims Need Review</h4>
          <span className="alert-badge review-badge">3</span>
        </div>
        <p className="alert-block-subtitle">Claims with AI confidence below 90% require manual review before resubmission.</p>

        <ul className="claim-list">
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-627</span>
              <span className="claim-details">Ibrahim Joseph - $5,200</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">88% confidence</span>
              <a href="#" className="claim-action-link review-link">Review</a>
            </div>
          </li>
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-112</span>
              <span className="claim-details">Barrett Marks - $2,556</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">82% confidence</span>
              <a href="#" className="claim-action-link review-link">Review</a>
            </div>
          </li>
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-084</span>
              <span className="claim-details">Corey Owen - $8,322</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">76% confidence</span>
              <a href="#" className="claim-action-link review-link">Review</a>
            </div>
          </li>
        </ul>
        <div className="alert-block-footer">
          <a href="#" className="review-all-link">Review all Claims →</a>
        </div>
      </div>

      <div className="alert-block">
        <div className="alert-block-header">
          <h4 className="alert-block-title">High Priority Claim</h4>
          <span className="alert-badge priority-badge">1</span>
        </div>
        <p className="alert-block-subtitle">High-value claims requiring urgent attention.</p>

        <ul className="claim-list">
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-771</span>
              <span className="claim-details">Sarah Johnson - $5,200</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">50% confidence</span>
              <a href="#" className="claim-action-link priority-link">View Claim</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlertPanel;