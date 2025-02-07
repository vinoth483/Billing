import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Invoice from './components/Invoice';
import Quotation from './components/Quotation';
import CatExtract from './components/CatExtract';
import DeliveryChalan from './components/DeliveryChalan';
import Purchase from './components/Purchase';
import Customer from './components/Customer';
import MarketingAnalysis from './components/MarketingAnalysis'; // New Component
import User from './components/User'; // New Component
import Company from './components/Company'; // New Component
import Bill from './components/Bill';
import Anand from './PDF/Anand';
import Deliverychalan from './PDF/Deliverychalan';
import Gujarat from './PDF/Gujarat';
import InvoicePDF from './PDF/InvoicePDF';
import LightingSc from './PDF/LightingSc';
import Lighting from './PDF/Lighting';
import Precision from './PDF/Precision';
import ViriyaQut from './PDF/ViriyaQut';
import Statement from './PDF/Statement';
import Viriya from './PDF/Viriya';
import './style/layout.css'; // Import your layout styles
import './style/sidebar.css'; // Import your sidebar styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Dashboard and Nested Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* Default route for /dashboard */}
          <Route path="Invoice" element={<Invoice />} />
          <Route path="Quotation" element={<Quotation />} />
          <Route path="CatExtract" element={<CatExtract />} />
          <Route path="DeliveryChalan" element={<DeliveryChalan />} /> {/* Delivery Chalan Route */}
          <Route path="Purchase" element={<Purchase />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="MarketingAnalysis" element={<MarketingAnalysis />} /> {/* Marketing Analysis */}
          <Route path="User" element={<User />} /> {/* User */}
          <Route path="Company" element={<Company />} /> {/* Company */}
          <Route path="Bill" element={<Bill />} />
          <Route path="Anand" element={<Anand />} />
          <Route path="Deliverychalan" element={<Deliverychalan />} />
          <Route path="Gujarat" element={<Gujarat />} />
          <Route path="InvoicePDF" element={<InvoicePDF />} />
          <Route path="LightingSc" element={<LightingSc />} />
          <Route path="Lighting" element={<Lighting />} />
          <Route path="Precision" element={<Precision />} />
          <Route path="ViriyaQut" element={<ViriyaQut />} />
          <Route path="Statement" element={<Statement />} />
          <Route path="Viriya" element={<Viriya />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
