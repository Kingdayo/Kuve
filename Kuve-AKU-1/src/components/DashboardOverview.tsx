import { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import RecentActivity from './RecentActivity';
import AiLearningInsights from './AiLearningInsights';
import './DashboardOverview.css';

const successRateData = [
    { name: 'Jan', rate: 60 },
    { name: 'Feb', rate: 75 },
    { name: 'Mar', rate: 70 },
    { name: 'Apr', rate: 85 },
    { name: 'May', rate: 95 },
    { name: 'Jun', rate: 90 },
    { name: 'Jul', rate: 88 },
];

const denialData = [
  { name: 'Prior Authorization', value: 35, color: '#6D28D9' },
  { name: 'Coverage Issues', value: 8, color: '#3B82F6' },
  { name: 'Duplicate Claims', value: 12, color: '#F59E0B' },
  { name: 'Missing Documents', value: 20, color: '#10B981' },
  { name: 'Coding Errors', value: 25, color: '#EF4444' },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Success Rate: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, color }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const labelRadius = outerRadius + 20;
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 15) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={color} fill="none" />
      <circle cx={sx} cy={sy} r={2} fill={color} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" dy={-6} style={{ fontSize: '12px', fontWeight: '500' }}>{name}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#6B7280" dy={8} style={{ fontSize: '11px' }}>{`${(percent * 100).toFixed(0)}%`}</text>
    </g>
  );
};

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const DashboardOverview = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };

  return (
    <div className="dashboard-grid">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">Real-time Akuvera AI processing and claim resolution monitoring</p>
        </div>
        <div className="timeframe-selector">
          <label htmlFor="timeframe">Timeframe: </label>
          <select id="timeframe" name="timeframe" defaultValue="this-month">
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="last-90-days">Last 90 Days</option>
          </select>
        </div>
      </div>
      <>
        <div className="left-column">
            <div className="alert-panel">
              <div className="alert-header">
                <AlertIcon />
                <h3 className="alert-title">Alert</h3>
              </div>
              <p className="alert-subtitle">Claims Need Review</p>
              <div className="alert-item">
                <div className="alert-item-info">
                  <p className="claim-id">AKU-2025-027</p>
                  <p className="claim-details">Ibrahim Joseph - $5,200</p>
                </div>
                <div>
                  <p className="confidence-level">86% confidence</p>
                  <button className="review-button">Review</button>
                </div>
              </div>
              <div className="alert-item">
                <div className="alert-item-info">
                  <p className="claim-id">AKU-2025-314</p>
                  <p className="claim-details">Dave Trump - $2,770</p>
                </div>
                <div>
                  <p className="confidence-level">73% confidence</p>
                  <button className="review-button">Review</button>
                </div>
              </div>
              <div className="alert-item">
                <div className="alert-item-info">
                  <p className="claim-id">AKU-2025-091</p>
                  <p className="claim-details">Abu Hudailah - $1,871</p>
                </div>
                <div>
                  <p className="confidence-level">85% confidence</p>
                  <button className="review-button">Review</button>
                </div>
              </div>
              <button className="review-all-button">Review all Claims</button>
            </div>
            <div className="high-priority-panel">
              <div className="high-priority-header">
                <h3 className="high-priority-title">High Priority Claim</h3>
              </div>
              <p className="high-priority-subtitle">High-value claims requiring urgent attention.</p>
              <div className="high-priority-item">
                <div className="alert-item-info">
                    <p className="claim-id">AKU-2025-771</p>
                    <p className="claim-details">Sarah Johnson - $9,300</p>
                </div>
                <div>
                    <p className="confidence-level">50% confidence</p>
                    <button className="view-claim-button">View Claim</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-card-header">
                    <p className="stat-card-label">Avg Processing Time</p>
                    <div className="icon-bg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)'}}><svg className="stat-card-icon" style={{ color: '#EF4444' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                </div>
                <p className="stat-card-value">12m</p>
                <p className="stat-card-subtext" style={{ color: '#EF4444' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '12px', height: '12px', verticalAlign: 'middle' }}><path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L6.22 8.77a.75.75 0 01-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" transform="rotate(180 10 10)" /></svg>
                    -40% vs manual
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-card-header">
                    <p className="stat-card-label">Avg Success Rate</p>
                    <div className="icon-bg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)'}}><svg className="stat-card-icon" style={{ color: '#F59E0B' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                </div>
                <p className="stat-card-value">93%</p>
                <p className="stat-card-subtext" style={{ color: '#10B981' }}>+2 percent vs last month</p>
              </div>
              <div className="stat-card">
                <div className="stat-card-header">
                    <p className="stat-card-label">Patterns Learned</p>
                    <div className="icon-bg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)'}}><svg className="stat-card-icon" style={{ color: '#3B82F6' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" /></svg></div>
                </div>
                <p className="stat-card-value">2,847</p>
                <p className="stat-card-subtext" style={{ color: '#3B82F6' }}>Growing daily</p>
              </div>
              <div className="stat-card">
                <div className="stat-card-header">
                    <p className="stat-card-label">Revenue Generated</p>
                    <div className="icon-bg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)'}}><svg className="stat-card-icon" style={{ color: '#10B981' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m18 0v-1.5c0-.621-.504-1.125-1.125-1.125H3.75" />
                    </svg></div>
                </div>
                <p className="stat-card-value" style={{ color: '#10B981' }}>$198,950</p>
                <p className="stat-card-subtext" style={{ color: '#10B981' }}>This month</p>
              </div>
            </div>
            <div className="charts-grid">
              <div className="grid-card chart-card">
                <h3 className="card-title">AI Success Rate Over Time</h3>
                <p className="card-subtitle">Track AI performance trends</p>
                <div className="chart-placeholder">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={successRateData} margin={{ top: 5, right: 30, left: -20, bottom: 20 }}>
                            <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#2563EB', strokeWidth: 1, strokeDasharray: '3 3' }} />
                            <Line type="monotone" dataKey="rate" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 4, fill: 'white', stroke: '#2563EB', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
              </div>
              <div className="grid-card chart-card">
                <h3 className="card-title">Denial Types Distribution</h3>
                <p className="card-subtitle">Most common denial reasons</p>
                <div className="chart-placeholder pie-chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                             <Pie
                                data={denialData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                innerRadius={70}
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                                onMouseLeave={onPieLeave}
                             >
                                {denialData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        <div className="bottom-row">
          <div className="grid-item-7">
            <RecentActivity />
          </div>
          <div className="grid-item-8">
            <AiLearningInsights />
          </div>
        </div>
      </>
    </div>
  );
};

export default DashboardOverview;