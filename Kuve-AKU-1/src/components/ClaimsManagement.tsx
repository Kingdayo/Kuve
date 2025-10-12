import React, { useState, useMemo } from 'react';
import './ClaimsManagement.css';

// SVG Icons as React Components
const ClaimsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8333 9.16667V3.33333L5 8.33333V16.6667H14.1667L15.7583 10.5917L15.8333 10.4167V8.75C15.8333 8.16667 15.3667 7.71667 14.7833 7.54167L10.8333 9.16667Z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 16.6667V8.33333H2.5C2.08333 8.33333 1.66667 8.66667 1.66667 9.16667V15.8333C1.66667 16.3333 2.08333 16.6667 2.5 16.6667H5Z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const InProcessIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5.83333V10L12.5 11.6667" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const NeedsReviewIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93478 12.8512 4.30964 13.4763C3.6845 14.1014 3.33333 14.9493 3.33333 15.8333V17.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9.16667C11.841 9.16667 13.3333 7.67437 13.3333 5.83333C13.3333 3.99229 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99229 6.66667 5.83333C6.66667 7.67437 8.15905 9.16667 10 9.16667Z" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ApprovedSentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 5.83333L8.33329 13.3333L4.16663 9.16667" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ResubmissionIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 10C3.33337 13.6819 6.31814 16.6667 10 16.6667C12.5084 16.6667 14.6739 15.2536 15.8334 13.3333" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6666 6.66667C16.6666 3.01814 13.6819 0 9.99996 0C7.49156 0 5.32608 1.41309 4.16663 3.33333" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83337 3.33333V6.66667H2.50004" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1666 16.6667V13.3333H17.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const AppealIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66663 17.5L9.99996 2.5L18.3333 17.5H1.66663Z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const FilterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 5.83333H17.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 10H15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.5 14.1667H12.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
const ExportIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 10.8333V14.1667C15.8333 15.5474 14.7141 16.6667 13.3333 16.6667H6.66667C5.28591 16.6667 4.16667 15.5474 4.16667 14.1667V10.8333" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 3.33333V11.6667" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 5.83333L10 3.33333L12.5 5.83333" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const MoreIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4.16667C10.4602 4.16667 10.8333 3.79357 10.8333 3.33333C10.8333 2.8731 10.4602 2.5 10 2.5C9.53976 2.5 9.16667 2.8731 9.16667 3.33333C9.16667 3.79357 9.53976 4.16667 10 4.16667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667C10.8333 16.2064 10.4602 15.8333 10 15.8333C9.53976 15.8333 9.16667 16.2064 9.16667 16.6667C9.16667 17.1269 9.53976 17.5 10 17.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const RequestProviderIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const UploadClaimsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 10.8333V14.1667C15.8333 15.5474 14.7141 16.6667 13.3333 16.6667H6.66667C5.28591 16.6667 4.16667 15.5474 4.16667 14.1667V10.8333" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 3.33333V11.6667" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 5.83333L10 3.33333L12.5 5.83333" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const initialClaimsData = [
  { id: 1, claimId: 'AKU-2025-627', customer: 'Raul Sampson', provider: 'LASUTH', payer: 'BlueCross', dateIssued: '18-01-2025 06:17', amount: '$1,280', status: 'In Process' },
  { id: 2, claimId: 'AKU-2025-526', customer: 'Morgan Alex', provider: 'UCH', payer: 'Tinsured', dateIssued: '08-03-2025 22:18', amount: '$8,373', status: 'In Process' },
  { id: 3, claimId: 'AKU-2025-112', customer: 'Barrett Marks', provider: 'OAUTH', payer: 'AIICO', dateIssued: '22-04-2025 10:40', amount: '$2,556', status: 'Needs Review' },
  { id: 4, claimId: 'AKU-2025-334', customer: 'Orlando Tillman', provider: 'OAUTH', payer: 'AIICO', dateIssued: '06-05-2025 07:49', amount: '$3,625', status: 'Needs Review' },
  { id: 5, claimId: 'AKU-2025-121', customer: 'Sidney Ramos', provider: 'OAUTH', payer: 'AIICO', dateIssued: '14-06-2025 19:08', amount: '$7,752', status: 'Needs Review' },
  { id: 6, claimId: 'AKU-2025-004', customer: 'Corey Owen', provider: 'LANDMARK', payer: 'AIICO', dateIssued: '17-07-2025 02:46', amount: '$8,322', status: 'Approved & Sent' },
  { id: 7, claimId: 'AKU-2025-672', customer: 'Orlando Horne', provider: 'LANDMARK', payer: 'AIICO', dateIssued: '11-09-2025 22:12', amount: '$7,728', status: 'Approved & Sent' },
  { id: 8, claimId: 'AKU-2025-009', customer: 'Brittany Price', provider: 'LANDMARK', payer: 'AIICO', dateIssued: '13-09-2025 13:11', amount: '$9,027', status: 'Approved & Sent' },
  { id: 9, claimId: 'AKU-2025-1431', customer: 'Carlie Chandler', provider: 'UNILAGTH', payer: 'AXA', dateIssued: '18-12-2025 22:51', amount: '$8,215', status: 'Approved & Sent' },
];

const statCardsData = [
    { title: 'Claims', value: '105', subtext: '↑ 5 Received Today', icon: <ClaimsIcon />, color: '#8B5CF6', bgColor: '#F5F3FF' },
    { title: 'In Process', value: '2', subtext: 'Avg 14 min', icon: <InProcessIcon />, color: '#3B82F6', bgColor: '#EFF6FF' },
    { title: 'Needs Review', value: '3', subtext: 'Awaiting your approval', icon: <NeedsReviewIcon />, color: '#F97316', bgColor: '#FFF7ED' },
    { title: 'Approved & Sent', value: '93', subtext: 'Sent to insurers', icon: <ApprovedSentIcon />, color: '#10B981', bgColor: '#F0FDF4' },
    { title: 'Resubmission', value: '2', subtext: 'Pending corrections', icon: <ResubmissionIcon />, color: '#F59E0B', bgColor: '#FFFBEB' },
    { title: 'Appeal', value: '5', subtext: 'Challenging denials', icon: <AppealIcon />, color: '#EF4444', bgColor: '#FEF2F2' },
];

const ClaimsManagement: React.FC = () => {
    const [claimsData, setClaimsData] = useState(initialClaimsData);
    const [activeTab, setActiveTab] = useState('All Claims');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedClaimId, setExpandedClaimId] = useState<number | null>(null);
    const [selectedClaimIds, setSelectedClaimIds] = useState<Set<number>>(new Set());

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setExpandedClaimId(null); // Collapse any expanded row when switching tabs
    };

    const handleRowClick = (claimId: number) => {
        setExpandedClaimId(prevId => (prevId === claimId ? null : claimId));
    };

    const handleSelectClaim = (claimId: number) => {
        setSelectedClaimIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(claimId)) {
                newSet.delete(claimId);
            } else {
                newSet.add(claimId);
            }
            return newSet;
        });
    };

    const filteredClaims = useMemo(() => {
        return claimsData.filter(claim => {
            const statusMatch = activeTab === 'All Claims' ||
                (activeTab === 'Sent' ? claim.status === 'Approved & Sent' : claim.status === activeTab);
            const searchMatch = claim.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                claim.claimId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                claim.provider.toLowerCase().includes(searchQuery.toLowerCase());
            return statusMatch && searchMatch;
        });
    }, [claimsData, activeTab, searchQuery]);

    const handleSelectAll = () => {
        if (selectedClaimIds.size === filteredClaims.length) {
            setSelectedClaimIds(new Set());
        } else {
            setSelectedClaimIds(new Set(filteredClaims.map(c => c.id)));
        }
    };

    const isAllSelected = selectedClaimIds.size === filteredClaims.length && filteredClaims.length > 0;


    return (
        <div className="claims-management-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Claims Management</h1>
                    <p className="page-subtitle">View and manage all denial claims in detail</p>
                </div>
                <div className="header-actions">
                    <button className="header-action-btn">
                        <RequestProviderIcon />
                        Request from Provider
                    </button>
                    <button className="header-action-btn">
                        <UploadClaimsIcon />
                        Upload Claims
                    </button>
                </div>
            </div>

            <div className="claims-stat-cards">
                {statCardsData.map(card => (
                    <div key={card.title} className="stat-card" style={{ '--card-bg-color': card.bgColor } as React.CSSProperties}>
                        <div className="stat-card-icon" style={{ color: card.color }}>{card.icon}</div>
                        <div className="stat-card-info">
                            <p className="stat-card-label">{card.title}</p>
                            <p className="stat-card-value" style={{ color: card.color }}>{card.value}</p>
                            <p className="stat-card-subtext">{card.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="claims-table-area">
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
                    <div className="table-actions">
                        <div className="search-bar">
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Type to search..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="action-btn"><FilterIcon /> Filter</button>
                        <button className="action-btn"><ExportIcon /> Export</button>
                    </div>
                </div>

                <div className="claims-table-wrapper">
                    <table className="claims-table">
                        <thead>
                            <tr>
                                <th className="th-checkbox">
                                    <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
                                </th>
                                <th>Claim ID</th>
                                <th>Customer</th>
                                <th>Provider</th>
                                <th>Payer</th>
                                <th>Date Issued</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th className="th-actions"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClaims.map(claim => (
                                <React.Fragment key={claim.id}>
                                    <tr onClick={() => handleRowClick(claim.id)} className={expandedClaimId === claim.id ? 'expanded' : ''}>
                                        <td onClick={e => e.stopPropagation()}>
                                            <input type="checkbox" checked={selectedClaimIds.has(claim.id)} onChange={() => handleSelectClaim(claim.id)} />
                                        </td>
                                        <td>{claim.claimId}</td>
                                        <td>{claim.customer}</td>
                                        <td><div className="provider-badge">{claim.provider}</div></td>
                                        <td><div className="payer-badge">{claim.payer}</div></td>
                                        <td>{claim.dateIssued}</td>
                                        <td className="amount">{claim.amount}</td>
                                        <td>
                                            <div className={`status-badge status-${claim.status.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                                                {claim.status}
                                            </div>
                                        </td>
                                        <td className="actions-cell">
                                            <button className="more-btn"><MoreIcon /></button>
                                        </td>
                                    </tr>
                                    {expandedClaimId === claim.id && (
                                        <tr className="expansion-row">
                                            <td colSpan={9}>
                                                <div className="expansion-content">
                                                    <div className="progress-info">
                                                        <span>{claim.claimId}</span>
                                                        <span>73%</span>
                                                    </div>
                                                    <p>Processing claim for categorization and analysis...</p>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{ width: '73%' }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ClaimsManagement;