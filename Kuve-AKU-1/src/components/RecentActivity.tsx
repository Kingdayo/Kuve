import './RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className="grid-card activity-card">
      <h3 className="card-title icon-title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Recent Activity
      </h3>
      <div className="activity-list">
        <div className="activity-item">
          <div className="activity-icon approved">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div className="activity-details">
            <p>Claim AKU-2025-004 approved</p>
            <span>2 hours ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="activity-icon processing">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="activity-details">
            <p>AI processing 5 new claims</p>
            <span>3 hours ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="activity-icon onboarded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div className="activity-details">
            <p>New company onboarded: TY Hospital</p>
            <span>5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;