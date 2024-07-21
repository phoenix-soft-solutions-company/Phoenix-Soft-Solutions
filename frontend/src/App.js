import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Technology from "./pages/Technology";
import Career from "./pages/Career";
import Event from "./pages/Event";
import Domain from "./pages/Domain";
import Hosting from "./pages/Hosting";
import Login from "./pages/Login";
import WebService from "./sub-pages/services/WebService";
import LkDomain from "./sub-pages/domains/LkDomain";
import InternationalDomain from "./sub-pages/domains/InternationalDomain";
import WebHosting from "./sub-pages/hosting/WebHosting";
import CloudHosting from "./sub-pages/hosting/CloudHosting";
import VPSHosting from "./sub-pages/hosting/VPSHosting";
import BusinessEmail from "./sub-pages/hosting/BusinessEmail";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/career" element={<Career />} />
          <Route path="/event" element={<Event />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/login" element={<Login />} />

          {/* service sub pages */}
          <Route path="/service/web" element={<WebService />} />

          {/* domain sub pages */}
          <Route path="/domain/lk" element={<LkDomain />} />
          <Route path="/domain/international" element={<InternationalDomain />} />

          {/* hosting sub pages */}
          <Route path="/hosting/web" element={<WebHosting />} />
          <Route path="/hosting/cloud" element={<CloudHosting />} />
          <Route path="/hosting/vps" element={<VPSHosting />} />
          <Route path="/hosting/business-email" element={<BusinessEmail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
