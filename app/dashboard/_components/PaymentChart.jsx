import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const PaymentChart = () => {
  const barData = [
    { name: "Jan", value: 70000 },
    { name: "Feb", value: 95000 },
    { name: "Mar", value: 60000 },
    { name: "Apr", value: 45000 },
    { name: "May", value: 45000 },
    { name: "Jun", value: 20000 },
    { name: "Jul", value: 62000 },
    { name: "Aug", value: 35000 },
    { name: "Sep", value: 70000 },
    { name: "Oct", value: 75000 },
    { name: "Nov", value: 72000 },
    { name: "Dec", value: 45000 },
  ];
  // Data for the pie chart
  const pieData = [
    { name: "Payin", value: 75, amount: "$12,200", color: "#042656" },
    { name: "Payout", value: 25, amount: "$5,600", color: "#F39C12" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-date">{`${label} 6, 2022`}</p>
          <p className="tooltip-value">
            ${payload[0].value.toLocaleString()}{" "}
            <span className="upgrade-text">2.5%</span>
          </p>
        </div>
      );
    }
    return null;
  };
  // Format Y-axis values in k format
  const formatYAxis = (value) => {
    if (value === 0) return "0";
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value.toString();
  };

  return (
    <div className="payment-chart">
      {/* Left section - Bar Chart */}
      <div className="chart-panel">
        <div className="button-group">
          <button className="btn btn-secondary">Payin</button>
          <button className="btn btn-primary">Payout</button>
        </div>

        <div className="bar-chart-container">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={barData}
              margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxis}
                domain={[0, 100000]}
                tick={{ fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#002651"
                radius={[20, 20, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right section - Transaction Summary */}
      <div className="summary-panel">
        <h2 className="summary-title">Transaction Summary</h2>

        <div className="donut-chart-container">
          <div className="donut-chart ">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={68}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  paddingAngle={4}
                  activeIndex={[0, 1]}
                  cornerRadius={3.53}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="total-amount-container">
              <span className="total-label ">Total Amount</span>
              <div className="total-value-container">
                <span className="total-value ">$17,890</span>
                <span className="decimals">.12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-list">
          {pieData.map((entry) => (
            <div key={entry.name} className="stat-item">
              <div className="stat-left">
                <div
                  className="percent-badge"
                  style={{ backgroundColor: entry.color }}
                >
                  <span>{entry.value}%</span>
                </div>
                <span className="stat-name">{entry.name}</span>
              </div>
              <span className="stat-value">{entry.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentChart;
