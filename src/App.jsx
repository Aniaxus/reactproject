import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import Login from "./Login_Res/Login";
import BestSellers from './components/BestSellers';
import StockAlerts from './components/StockAlerts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };
  
  const salesData = [
    // Example sales data
    { date: '2025-03-01', seller: 'Seller A', amount: 100 },
    { date: '2025-03-02', seller: 'Seller B', amount: 200 },
    { date: '2025-03-04', seller: 'Seller C', amount: 50 },
    { date: '2025-03-05', seller: 'Seller D', amount: 250 },
    // Add more data as needed
  ];

  const products = [
    // Example product data
    { name: 'Product A', quantity: 5, minThreshold: 10, maxThreshold: 50 },
    { name: 'Product B', quantity: 60, minThreshold: 10, maxThreshold: 50 },
    // Add more data as needed
  ];

  const stockData = [
    // Example stock data
    { name: 'Product A', quantity: 5 },
    { name: 'Product B', quantity: 60 },
    { name: 'Product C', quantity: 30 },
    { name: 'Product D', quantity: 80 },
    { name: 'Product E', quantity: 20 },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Layout onLogout={logoutUser} /> : <Navigate to="/login" />}
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard stockData={stockData} />} />
          <Route path="BestSellers" element={<BestSellers salesData={salesData} />} />
          <Route path="StockAlerts" element={<StockAlerts products={products} />} />
        </Route>
        <Route path="/login" element={<Login loginUser={loginUser} />} />
      </Routes>
    </Router>
  );
}

export default App;