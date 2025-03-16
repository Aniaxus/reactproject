import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import "../styles/Dashboard.css";

const Dashboard = ({ stockData }) => {
  const getBarColor = (quantity) => {
    if (quantity < 10) return "#ff4d4d"; // Low stock (red)
    if (quantity < 50) return "#ffcc00"; // Medium stock (yellow)
    return "#4CAF50"; // High stock (green)
  };

  return (
    <div className="dashboard-container">
      <h2>Biểu đồ tồn kho</h2>
      {stockData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stockData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8">
              <LabelList dataKey="quantity" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="empty-message">Không có dữ liệu tồn kho</p>
      )}
    </div>
  );
};

export default Dashboard;