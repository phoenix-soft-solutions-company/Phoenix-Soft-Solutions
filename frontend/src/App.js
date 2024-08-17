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
import AdminCounter from "./admin-panel/components/AdminCounter";
import AdminEvent from "./admin-panel/components/AdminEvent";
import AdminProject from "./admin-panel/components/AdminProject";
import AdminFeedback from "./admin-panel/components/AdminFeedback";

const App = () => {
  const location = useLocation();

  // Paths where Navbar should not be displayed
  const noNavbarPaths = ["/login", "/admin"];

  return (
    <div className="flex flex-col">
      {/* Conditionally render Navbar */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className="">
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

          {/*company sub pages*/}
          <Route path="/company/Aboutus" element={<Aboutus />} />
          <Route path="/company/Contactus" element={<Contactus />} />

          {/* service sub pages */}
          <Route path="/service/web" element={<WebService />} />
          <Route path="/service/mobile" element={<MobileService />} />
          <Route path="/service/custom" element={<CustomService />} />
          <Route path="/service/devops" element={<DevopsService />} />
          <Route path="/service/cloud" element={<CloudService />} />
          <Route path="/service/ai" element={<AiService />} />
          <Route path="/service/outsourcing" element={<OutsourcingService />} />
          <Route path="/service/poc" element={<PocService />} />
          <Route path="/service/qa" element={<QAService />} />
          <Route path="/service/graphic" element={<GraphicService />} />
          <Route path="/service/business" element={<BusinessService />} />
          <Route path="/service/backend" element={<BackendService />} />
          <Route path="/service/frontend" element={<FrontendService />} />
          <Route path="/service/marketing" element={<MarketingService />} />
          <Route path="/service/cyber" element={<CyberService />} />
          <Route path="/service/software" element={<SoftwareService />} />

          {/* domain sub pages */}
          <Route path="/domain/lk" element={<LkDomain />} />
          <Route path="/domain/international" element={<InternationalDomain />} />

          {/* hosting sub pages */}
          <Route path="/hosting/web" element={<WebHosting />} />
          <Route path="/hosting/cloud" element={<CloudHosting />} />
          <Route path="/hosting/vps" element={<VPSHosting />} />
          <Route path="/hosting/business-email" element={<BusinessEmail />} />

          {/* admin routes */}
          <Route path="/admin" element={<Admin />}>
            <Route path="counter" element={<AdminCounter />} />
            <Route path="project" element={<AdminProject />} />
            <Route path="event" element={<AdminEvent />} />
            <Route path="feedback" element={<AdminFeedback />} />
          </Route>
        </Routes>
      </div>
      {!noNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
