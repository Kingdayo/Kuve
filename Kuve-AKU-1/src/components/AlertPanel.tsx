import './AlertPanel.css';

const AlertPanel = () => {
  return (
    <div className="alert-panel">
      <div className="alert-header">
        <div className="alert-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="alert-icon" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.275-1.036c-.194.114-.385.158-.546.158-.18 0-.26-.096-.26-.25l.27-1.242c.116-.524.232-1.045.348-1.566l.246-1.176c.047-.226.088-.418.135-.56a.904.904 0 0 1 .135-.34c.047-.105.08-.18.103-.243.023-.062.035-.104.035-.123a.25.25 0 0 0-.25-.25c-.1-.005-.205.03-.3.095-.095.065-.16.145-.2.245l-.25 1.176zM8 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>
        <h3 className="alert-title">Alert</h3>
      </div>

      <div className="alert-block">
        <div className="alert-block-header">
          <h4 className="alert-block-title">Claims Need Review</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="chevron-icon" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
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
              <span className="claim-id">AKU-2025-314</span>
              <span className="claim-details">Dave Trump - $2,770</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">73% confidence</span>
              <a href="#" className="claim-action-link review-link">Review</a>
            </div>
          </li>
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-091</span>
              <span className="claim-details">Abu Hudailah - $1,871</span>
            </div>
            <div className="claim-actions">
              <span className="claim-confidence">85% confidence</span>
              <a href="#" className="claim-action-link review-link">Review</a>
            </div>
          </li>
        </ul>
        <div className="alert-block-footer">
          <a href="#" className="review-all-link">Review all Claims →</a>
        </div>
      </div>

      <hr className="divider" />

      <div className="alert-block">
        <div className="alert-block-header">
          <h4 className="alert-block-title">High Priority Claim</h4>
        </div>
        <p className="alert-block-subtitle">High-value claims requiring urgent attention.</p>

        <ul className="claim-list">
          <li className="claim-item">
            <div className="claim-info">
              <span className="claim-id">AKU-2025-771</span>
              <span className="claim-details">Sarah Johnson - $5,300</span>
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