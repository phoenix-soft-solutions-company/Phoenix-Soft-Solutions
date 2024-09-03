import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Contactus from "./sub-pages/company/Contactus";
import Aboutus from "./sub-pages/company/Aboutus";
import WebService from "./sub-pages/services/WebService";
import MobileService from "./sub-pages/services/MobileService";
import CustomService from "./sub-pages/services/CustomService";
import DevopsService from "./sub-pages/services/DevopsService";
import OutsourcingService from "./sub-pages/services/OutsourcingService";
import AiService from "./sub-pages/services/AiService";
import PocService from "./sub-pages/services/PocService";
import QAService from "./sub-pages/services/QAService";
import CloudService from "./sub-pages/services/CloudService";
import GraphicService from "./sub-pages/services/GraphicService";
import BusinessService from "./sub-pages/services/BusinessService";
import MarketingService from "./sub-pages/services/MarketingService";
import CyberService from "./sub-pages/services/CyberService";
import SoftwareService from "./sub-pages/services/SoftwareService";
import BackendService from "./sub-pages/services/BackendService";
import FrontendService from "./sub-pages/services/FrontendService";
import LkDomain from "./sub-pages/domains/LkDomain";
import InternationalDomain from "./sub-pages/domains/InternationalDomain";
import WebHosting from "./sub-pages/hosting/WebHosting";
import CloudHosting from "./sub-pages/hosting/CloudHosting";
import VPSHosting from "./sub-pages/hosting/VPSHosting";
import BusinessEmail from "./sub-pages/hosting/BusinessEmail";
import Admin from "./admin-panel/Admin";
import XcropCounter from "./admin-panel/xcrop/XcropCounter";
import XcropEvent from "./admin-panel/xcrop/XcropEvent";
import XcropProject from "./admin-panel/xcrop/XcropProject";
import XcropFeedback from "./admin-panel/xcrop/XcropFeedback";
import { DarkModeProvider } from "./DarkModeContext";
import Chat from "./components/Chat";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  const location = useLocation();

  const noNavbarPaths = ["/login"];
  const isAdminRoute = location.pathname.includes("phoenix-soft-admin");

  return (
    <DarkModeProvider>
      <div className="flex flex-col min-h-screen relative">
        {!noNavbarPaths.includes(location.pathname) && !isAdminRoute && (
          <Navbar />
        )}
        <div className="flex-grow">
          <Routes>
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
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/web-service" element={<WebService />} />
            <Route path="/mobile-service" element={<MobileService />} />
            <Route path="/custom-service" element={<CustomService />} />
            <Route path="/devops-service" element={<DevopsService />} />
            <Route path="/cloud-service" element={<CloudService />} />
            <Route path="/ai-service" element={<AiService />} />
            <Route
              path="/outsourcing-service"
              element={<OutsourcingService />}
            />
            <Route path="/poc-service" element={<PocService />} />
            <Route path="/qa-service" element={<QAService />} />
            <Route path="/graphic-service" element={<GraphicService />} />
            <Route path="/business-service" element={<BusinessService />} />
            <Route path="/backend-service" element={<BackendService />} />
            <Route path="/frontend-service" element={<FrontendService />} />
            <Route path="/marketing-service" element={<MarketingService />} />
            <Route path="/cyber-service" element={<CyberService />} />
            <Route path="/software-service" element={<SoftwareService />} />
            <Route path="/lk-domain" element={<LkDomain />} />
            <Route
              path="/international-domain"
              element={<InternationalDomain />}
            />
            <Route path="/web-hosting" element={<WebHosting />} />
            <Route path="/cloud-hosting" element={<CloudHosting />} />
            <Route path="/vps-hosting" element={<VPSHosting />} />
            <Route path="/business-email-hosting" element={<BusinessEmail />} />
            {/* Admin routes wrapped in PrivateRoute */}
            <Route
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }>
              <Route path="phoenix-soft-admin-counter" element={<XcropCounter />} />
              <Route path="phoenix-soft-admin-project" element={<XcropProject />} />
              <Route path="phoenix-soft-admin-event" element={<XcropEvent />} />
              <Route path="phoenix-soft-admin-feedback" element={<XcropFeedback />} />
            </Route>
          </Routes>
        </div>
        {!noNavbarPaths.includes(location.pathname) && !isAdminRoute && (
          <Footer />
        )}
        {!isAdminRoute && <Chat />}
      </div>
    </DarkModeProvider>
  );
};

export default App;
