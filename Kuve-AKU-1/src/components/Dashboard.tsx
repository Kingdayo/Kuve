import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';

interface DashboardProps {
  activeView: string;
  onUploadClaims: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView, onUploadClaims }) => {
  return (
    <div className="dashboard-content">
      {activeView === 'overview' ? <DashboardOverview /> : <ClaimsManagement onUploadClaims={onUploadClaims} />}
    </div>
  );
};

export default Dashboard;