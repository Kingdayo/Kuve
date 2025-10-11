import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
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
  { name: 'Prior Authorization', value: 35, color: '#93C5FD' },
  { name: 'Coding Errors', value: 25, color: '#6EE7B7' },
  { name: 'Missing Documents', value: 20, color: '#A78BFA' },
  { name: 'Duplicate Claims', value: 12, color: '#C4B5FD' },
  { name: 'Coverage Issues', value: 8, color: '#F5F5F5' },
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

const DashboardOverview = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1 className="header-title">Dashboard Overview</h1>
          <p className="header-subtitle">Real-time akuvera AI processing and claim resolution monitoring</p>
        </div>
        <div className="timeframe-selector">
          Timeframe: This Month
          <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </header>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="stat-card-label">Avg Processing Time</p>
          <p className="stat-card-value">12m</p>
          <p className="stat-card-subtext" style={{ color: '#10B981' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '12px', height: '12px', verticalAlign: 'middle' }}>
              <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L6.22 8.77a.75.75 0 01-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" transform="rotate(180 10 10)" />
            </svg>
            -40% vs manual
          </p>
        </div>
        <div className="stat-card success">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="stat-card-label">Avg Success Rate</p>
          <p className="stat-card-value">93%</p>
          <p className="stat-card-subtext">+2 percent vs last month</p>
        </div>
        <div className="stat-card patterns">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
            </svg>
          </div>
          <p className="stat-card-label">Patterns Learned</p>
          <p className="stat-card-value">2,847</p>
          <p className="stat-card-subtext">Growing daily</p>
        </div>
        <div className="stat-card revenue">
          <div className="stat-card-icon-container">
            <svg className="stat-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 10.5 12 10.5s-1.536.71-2.121 1.5c-.586.79-.586 1.804 0 2.594v.026z" />
            </svg>
          </div>
          <p className="stat-card-label">Revenue Generated</p>
          <p className="stat-card-value">$198,950</p>
          <p className="stat-card-subtext">This month</p>
        </div>
      </div>

      <div className="charts-section">
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
                            cy="45%"
                            labelLine={false}
                            outerRadius={65}
                            innerRadius={50}
                            dataKey="value"
                            isAnimationActive={true}
                         >
                            {denialData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>


    </>
  );
};

export default DashboardOverview;