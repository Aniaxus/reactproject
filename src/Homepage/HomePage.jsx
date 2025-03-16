import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import { FaChartBar, FaTrophy, FaExclamationTriangle, FaBox, FaMoneyBill, FaFileInvoice, FaBuilding, FaSignOutAlt } from "react-icons/fa";

const HomePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="homepage-container">
      <aside className="sidebar">
        <h1 className="title">📦 Warehouse Management</h1>
        <nav className="menu">
          <div className="menu-item" onClick={() => navigate("/Dashboard")}>
            <FaChartBar /> Biểu đồ tồn kho
          </div>
          <div className="menu-item" onClick={() => navigate("/BestSellers")}>
            <FaTrophy /> Người bán hàng tốt nhất
          </div>
          <div className="menu-item"  onClick={() => navigate("/StockAlerts")}>
            <FaExclamationTriangle /> Cảnh báo số lượng SP
          </div>
          <div className="menu-item">
            <FaBox /> Báo cáo sản phẩm
          </div>
          <div className="menu-item">
            <FaMoneyBill /> Doanh số theo tháng
          </div>
          <div className="menu-item">
            <FaFileInvoice /> Báo cáo thanh toán
          </div>
          <div className="menu-item">
            <FaBuilding /> Thống kê nhà cung cấp
          </div>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Đăng xuất
        </button>
      </aside>
    </div>
  );
};

export default HomePage;