import Card from "../components/Card";
import "../styles/Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleChange = (e) => {
      setIsPortrait(e.matches);
    };

    setIsPortrait(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

  return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      
      <main className="home">
        <section className="hero">
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="hero-video"
          >
            <source
              src={
                isPortrait
                  ? "/content/landingPagePortrait.mp4"
                  : "/content/landingPageLandscape.mp4"
              }
              type="video/mp4"
            />
          </video>  
        
        
        
            <a href="#section-banner" className="scroll-down">
              <span className="arrow-icon">
                  <svg viewBox="0 0 7 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.48357 22.1206L7 18.6042L4.22628 18.6172L4.22628 -1.21243e-07L2.83943 -1.81864e-07L2.83943 18.6237L-8.14651e-07 18.637L3.48357 22.1206Z" fill="white"></path>
                  </svg>
              </span>
          </a>

        </section>
        <section className="home-section-cards">
          <div class="home_grid__wrapper">
            <Card image="/pictures/services_thubnail.jpg" title="SERVICES" path="/services"/>        
            <Card image="/pictures/aboutUs_thubnail.jpg" title="ABOUT US" path="/services"/>    
            <Card image="/pictures/contact_thubnail.jpg" title="CONTACT" path="/services"/>               
          </div>
          
        </section>
        
        
      </main>
    </div>
  );
}

export default Home;