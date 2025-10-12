import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';

interface DashboardProps {
  activeView: string;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView }) => {
  return (
    <div className="dashboard-content">
      {activeView === 'overview' ? <DashboardOverview /> : <ClaimsManagement />}
    </div>
  );
};

export default Dashboard;