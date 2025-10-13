import React, { useState } from 'react';
import './Dashboard.css';
import DashboardOverview from './DashboardOverview';
import ClaimsManagement from './ClaimsManagement';
import ClaimDetails from './ClaimDetails';

interface DashboardProps {
  activeView: string;
  onUploadClaims: () => void;
  onOpenReviewModal: (claim: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView, onUploadClaims, onOpenReviewModal }) => {
  const [selectedClaim, setSelectedClaim] = useState<any | null>(null);

  const handleClaimClick = (claim: any) => {
    setSelectedClaim(claim);
  };

  const handleBackToClaims = () => {
    setSelectedClaim(null);
  };

  if (selectedClaim) {
    return (
      <div className="dashboard-content">
        <ClaimDetails claim={selectedClaim} onBack={handleBackToClaims} />
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      {activeView === 'overview' ? <DashboardOverview /> : <ClaimsManagement onUploadClaims={onUploadClaims} onOpenReviewModal={onOpenReviewModal} onClaimClick={handleClaimClick} />}
    </div>
  );
};

export default Dashboard;