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