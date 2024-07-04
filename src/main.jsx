import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import TopBar from './components/Top-bar';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import { CartProvider } from './sources/CartContext'; // Ensure correct import path

const App = () => {
  return (
    <Router>
      <CartProvider> {/* Ensure CartProvider wraps your application */}
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} /> {/* Route for 404 */}
        </Routes>
      </CartProvider>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
