import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSustainability from "./pages/ServiceSustainability";
import ServiceStudies from "./pages/ServiceStudies";
import ServiceRealEstate from "./pages/ServiceRealEstate";
import ServiceProjectManagement from "./pages/ServiceProjectManagement";

function App() {
  return (
    <div className="app-wrapper">
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