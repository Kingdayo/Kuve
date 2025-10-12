import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';

interface DashboardProps {
  activeView: string;
  onUploadClaims: () => void;
  onOpenReviewModal: (claim: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView, onUploadClaims, onOpenReviewModal }) => {
  return (
    <div className="dashboard-content">
      {activeView === 'overview' ? <DashboardOverview /> : <ClaimsManagement onUploadClaims={onUploadClaims} onOpenReviewModal={onOpenReviewModal} />}
    </div>
  );
};

export default Dashboard;