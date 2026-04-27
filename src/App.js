import "./App.css";
import "./index.css";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TransitionOverlay from "./components/TransitionOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSustainability from "./pages/ServiceSustainability";
import ServiceStudies from "./pages/ServiceStudies";
import ServiceRealEstate from "./pages/ServiceRealEstate";
import ServiceProjectManagement from "./pages/ServiceProjectManagement";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

function App() {

{  
  // An den einai "back" i "forward" (auto simenei to navigationType !== "POP"), emfanizei to TransitionOverlay. alliws den to emfanizoume
  //mesa sto navigationType exw to type gia to an einai back h oxi. 
}

const navigationType = useNavigationType();
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      {
        // An den einai "back" i "forward" (auto simenei to navigationType !== "POP"), emfanizei to TransitionOverlay. alliws den to emfanizoume
      }
      {navigationType !== "POP" && <TransitionOverlay />}
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sustainability" element={<ServiceSustainability />} />
          <Route path="/services/studies" element={<ServiceStudies />} />
          <Route path="/services/real-estate" element={<ServiceRealEstate />} />
          <Route path="/services/project-management" element={<ServiceProjectManagement />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;