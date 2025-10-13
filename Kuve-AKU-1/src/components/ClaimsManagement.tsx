import React, { useState, useRef, useEffect } from 'react';
import './ClaimsManagement.css';
import ActionsMenu from './ActionsMenu';
import AiBotModal from './AiBotModal';
import BatchAiBotProgress from './BatchAiBotProgress';

// ... (interface definitions if needed)

const initialClaimsData = [
  {
    claimId: 'AKU-2025-112',
    customer: 'Barrett Marks',
    provider: 'OAUTH',
    payer: 'AIICO',
    dateIssued: '22-04-2025 10:40',
    denialReason: 'CO-23',
    amount: '$2,556',
    status: 'Pending Correction',
  },
  {
    claimId: 'AKU-2025-113',
    customer: 'Barrett Marks',
    provider: 'OAUTH',
    payer: 'AIICO',
    dateIssued: '22-04-2025 10:40',
    denialReason: 'CO-23',
    amount: '$2,556',
    status: 'Pending Correction',
  },
  {
    claimId: 'AKU-2025-627',
    customer: 'Raul Sampson',
    provider: 'LASUTH',
    payer: 'BlueCross',
    dateIssued: '18-01-2025 06:17',
    denialReason: 'CO-16',
    amount: '$1,280',
    status: 'Awaiting Provider Response',
  },
  {
    claimId: 'AKU-2025-526',
    customer: 'Morgan Alex',
    provider: 'UCH',
    payer: 'Tinsured',
    dateIssued: '08-03-2025 22:18',
    denialReason: 'CO-27',
    amount: '$8,373',
    status: 'Awaiting Provider Response',
  },
  {
    claimId: 'AKU-2025-004',
    customer: 'Corey Owen',
    provider: 'LANDMARK',
    payer: 'AIICO',
    dateIssued: '17-07-2025 02:46',
    denialReason: 'CO-16',
    amount: '$8,322',
    status: 'Ready to Submit',
  },
  {
    claimId: 'AKU-2025-334',
    customer: 'Orlando Tillman',
    provider: 'OAUTH',
    payer: 'AIICO',
    dateIssued: '06-05-2025 07:49',
    denialReason: 'N/A',
    amount: '$3,625',
    status: 'In Process',
  },
  {
    claimId: 'AKU-2025-121',
    customer: 'Sidney Ramos',
    provider: 'OAUTH',
    payer: 'AIICO',
    dateIssued: '14-06-2025 19:08',
    denialReason: 'N/A',
    amount: '$7,752',
    status: 'In Process',
  },
  {
    claimId: 'AKU-2025-672',
    customer: 'Orlando Horne',
    provider: 'LANDMARK',
    payer: 'AIICO',
    dateIssued: '11-09-2025 02:46',
    denialReason: 'N/A',
    amount: '$8,322',
    status: 'Approved & Sent',
  },
  {
    claimId: 'AKU-2025-009',
    customer: 'Brittany Price',
    provider: 'LANDMARK',
    payer: 'AIICO',
    dateIssued: '13-09-2025 13:11',
    denialReason: 'N/A',
    amount: '$9,027',
    status: 'Needs Review',
  },
  {
    claimId: 'AKU-2025-1431',
    customer: 'Carlie Chandler',
    provider: 'UNILAGTH',
    payer: 'AXA',
    dateIssued: '18-12-2025 22:51',
    denialReason: 'N/A',
    amount: '$8,215',
    status: 'Appeal',
  },
];


interface ClaimsManagementProps {
  onUploadClaims: () => void;
  onOpenReviewModal: (claim: any) => void;
}

const ClaimsManagement: React.FC<ClaimsManagementProps> = ({ onUploadClaims, onOpenReviewModal }) => {
  const [claimsData, setClaimsData] = useState(initialClaimsData);
  const [activeTab, setActiveTab] = useState('Resubmission');
  const [activeResubmissionTab, setActiveResubmissionTab] = useState('Pending Correction');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClaims, setSelectedClaims] = useState<string[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [processingClaimId, setProcessingClaimId] = useState<string | null>(null);
  const [isBatchProcessing, setIsBatchProcessing] = useState(false);

  const handleActionsClick = (claimId: string) => {
    setOpenMenuId(prev => (prev === claimId ? null : claimId));
  };

  const handleCloseMenu = () => {
    setOpenMenuId(null);
  };

  const handleRunAiBot = (claimId: string) => {
    setProcessingClaimId(claimId);
    setOpenMenuId(null); // Close the actions menu
  };

  const handleRunBatchAiBot = () => {
    if (selectedClaims.length > 0) {
      setIsBatchProcessing(true);
    }
  };

  const handleAiBotComplete = (claimId: string) => {
    const newStatus = Math.random() < 0.5 ? 'Needs Review' : 'Approved & Sent';
    setClaimsData(prevClaims =>
      prevClaims.map(claim =>
        claim.claimId === claimId ? { ...claim, status: newStatus } : claim
      )
    );
    setProcessingClaimId(null);
  };

  const handleBatchComplete = () => {
    setClaimsData(prevClaims =>
      prevClaims.map(claim => {
        if (selectedClaims.includes(claim.claimId)) {
          const newStatus = Math.random() < 0.5 ? 'Needs Review' : 'Approved & Sent';
          return { ...claim, status: newStatus };
        }
        return claim;
      })
    );
    setSelectedClaims([]);
    setIsBatchProcessing(false);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedClaims(filteredClaims.map(claim => claim.claimId));
    } else {
      setSelectedClaims([]);
    }
  };

  const handleSelectClaim = (claimId: string) => {
    setSelectedClaims(prev =>
      prev.includes(claimId)
        ? prev.filter(id => id !== claimId)
        : [...prev, claimId]
    );
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Optionally reset sub-tab when changing main tabs
    if (tab !== 'Resubmission') {
      setActiveResubmissionTab('Pending Correction');
    }
  };

  const handleResubmissionTabClick = (tab: string) => {
    setActiveResubmissionTab(tab);
  };

  const resubmissionCounts = {
    'Pending Correction': claimsData.filter(c => c.status === 'Pending Correction').length,
    'Awaiting Provider Response': claimsData.filter(c => c.status === 'Awaiting Provider Response').length,
    'Ready to Submit': claimsData.filter(c => c.status === 'Ready to Submit').length,
  };

  const filteredClaims = claimsData.filter(claim => {
    const searchMatch = claim.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        claim.claimId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        claim.provider.toLowerCase().includes(searchQuery.toLowerCase());

    if (!searchMatch) return false;

    if (activeTab === 'Resubmission') {
      return claim.status === activeResubmissionTab;
    }

    const statusMatch = activeTab === 'All Claims' ||
                        (activeTab === 'Sent' ? claim.status === 'Approved & Sent' : claim.status === activeTab);

    return statusMatch;
  });

  const areAllSelected = filteredClaims.length > 0 && selectedClaims.length === filteredClaims.length;

  const exportToCsv = () => {
    const headers = ['Claim ID', 'Customer', 'Provider', 'Payer', 'Date Issued', 'Amount', 'Status'];
    const csvContent = [
      headers.join(','),
      ...filteredClaims.map(claim =>
        [claim.claimId, claim.customer, claim.provider, claim.payer, claim.dateIssued, claim.amount, claim.status].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.href) {
      URL.revokeObjectURL(link.href);
    }
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'claims.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div className="claims-management-page">
      {/* Stat Cards remain the same for now */}
      <div className="claims-stat-cards">
        {/* Claims Card */}
        <div className="stat-card claims">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#7C4DFF" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Claims</p>
            <p className="stat-card-main-number">105</p>
            <p className="stat-card-subtext">↑ 5 Received Today</p>
          </div>
        </div>
        {/* In Process Card */}
        <div className="stat-card in-process">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#1976D2" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">In Process</p>
            <p className="stat-card-main-number">2</p>
            <p className="stat-card-subtext">Avg 14 min</p>
          </div>
        </div>
        {/* Needs Review Card */}
        <div className="stat-card needs-review">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#FF9800" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Needs Review</p>
            <p className="stat-card-main-number">3</p>
            <p className="stat-card-subtext">Awaiting your approval</p>
          </div>
        </div>
        {/* Approved & Sent Card */}
        <div className="stat-card approved-sent">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#4CAF50" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.992 14.414-3.521-3.521 1.414-1.414 2.107 2.107 4.95-4.95 1.414 1.414-6.364 6.364z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Approved & Sent</p>
            <p className="stat-card-main-number">93</p>
            <p className="stat-card-subtext">Sent to insurers</p>
          </div>
        </div>
        {/* Resubmission Card */}
        <div className="stat-card resubmission">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#8BC34A" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6H4c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Resubmission</p>
            <p className="stat-card-main-number">2</p>
            <p className="stat-card-subtext">Pending corrections</p>
          </div>
        </div>
        {/* Appeal Card */}
        <div className="stat-card appeal">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" fill="#F44336" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 6h2v6h-2zM11 14h2v2h-2z"/></svg>
          </div>
          <div className="card-info">
            <p className="stat-card-label">Appeal</p>
            <p className="stat-card-main-number">5</p>
            <p className="stat-card-subtext">Challenging denials</p>
          </div>
        </div>
      </div>

      {processingClaimId && (
        <AiBotModal
          claimId={processingClaimId}
          onComplete={() => handleAiBotComplete(processingClaimId)}
        />
      )}
      <div className="claims-table-container">
        <div className="claims-table-header">
          <div className="tabs">
            {['All Claims', 'In Process', 'Needs Review', 'Sent', 'Resubmission', 'Appeal'].map(tab => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {selectedClaims.length > 1 && !isBatchProcessing ? (
            <div className="table-actions batch-actions">
              <button className="table-action-button delete-btn">
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
              <button className="table-action-button run-ai-bot-btn" onClick={handleRunBatchAiBot}>
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.09 15.57a.75.75 0 01-1.08-.02l-4.25-4.5a.75.75 0 111.1-1.04l3.7 3.92 6.7-6.91a.75.75 0 111.08 1.04l-7.25 7.5z" />
                </svg>
                Run AI Bot ({selectedClaims.length} Claims)
              </button>
            </div>
          ) : !isBatchProcessing ? (
            <div className="table-actions">
              <div className="table-search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="table-action-button">
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filter
              </button>
              <button className="table-action-button" onClick={exportToCsv}>
                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Export
              </button>
            </div>
          ) : null}
        </div>

        {activeTab === 'Resubmission' && (
          <div className="resubmission-tabs-container">
            <div className="resubmission-tabs">
              {['Pending Correction', 'Awaiting Provider Response', 'Ready to Submit'].map(tab => (
                <button
                  key={tab}
                  className={`resubmission-tab-button ${activeResubmissionTab === tab ? 'active' : ''}`}
                  onClick={() => handleResubmissionTabClick(tab)}
                >
                  <span className="resubmission-tab-count">{resubmissionCounts[tab as keyof typeof resubmissionCounts]}</span>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}

        {isBatchProcessing && (
          <BatchAiBotProgress
            claims={selectedClaims}
            onComplete={handleBatchComplete}
            onClose={() => setIsBatchProcessing(false)}
          />
        )}
      <div className="claims-table-wrapper">
        <table className="claims-table">
          <thead>
            <tr>
              <th className="th-checkbox">
                <input
                  type="checkbox"
                  checked={areAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="th-claim-id">Claim ID</th>
              <th className="th-customer">Customer</th>
              <th className="th-provider">Provider</th>
              <th className="th-payer">Payer</th>
              <th className="th-date-issued">Date Issued</th>
              <th className="th-denial-reason">Denial Reason</th>
              <th className="th-amount">Amount</th>
              <th className="th-status">Status</th>
              <th className="th-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.map((claim: any, index) => (
              <tr key={index}>
                <td className="td-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedClaims.includes(claim.claimId)}
                    onChange={() => handleSelectClaim(claim.claimId)}
                  />
                </td>
                <td className="claim-id">{claim.claimId}</td>
                <td>{claim.customer}</td>
                <td><div className="pill-badge">{claim.provider}</div></td>
                <td><div className="pill-badge">{claim.payer}</div></td>
                <td className="date-issued">{claim.dateIssued}</td>
                <td className="denial-reason">{claim.denialReason}</td>
                <td className="amount">{claim.amount}</td>
                <td>
                  <div className={`status-badge ${claim.status.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                    {claim.status}
                  </div>
                </td>
                <td className="actions-cell">
                  <div className="actions-container">
                    <svg
                      className="actions-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => handleActionsClick(claim.claimId)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                    {openMenuId === claim.claimId && (
                      <ActionsMenu onClose={handleCloseMenu} onRunAiBot={() => handleRunAiBot(claim.claimId)} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  );
};

export default ClaimsManagement;