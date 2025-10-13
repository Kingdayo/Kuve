import React from 'react';
import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';
import ClaimDetails from './ClaimDetails';

interface DashboardProps {
  activeView: string;
  onUploadClaims: () => void;
  onOpenReviewModal: (claim: any) => void;
  selectedClaim: any | null;
  onClaimClick: (claim: any) => void;
  onBackToClaims: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  activeView,
  onUploadClaims,
  onOpenReviewModal,
  selectedClaim,
  onClaimClick,
  onBackToClaims,
}) => {
  if (selectedClaim) {
    return (
      <div className="dashboard-content">
        <ClaimDetails claim={selectedClaim} onBack={onBackToClaims} />
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      {activeView === 'overview' ? (
        <DashboardOverview />
      ) : (
        <ClaimsManagement
          onUploadClaims={onUploadClaims}
          onOpenReviewModal={onOpenReviewModal}
          onClaimClick={onClaimClick}
        />
      )}
    </div>
  );
};

export default Dashboard;