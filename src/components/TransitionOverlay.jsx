import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Ayto to component emfanizei ena overlay kathe fora
// pou o xristis allazei selida (page transition efé)
function TransitionOverlay() {
  // Pairno to current path gia na ksero pote allazei selida
  const location = useLocation();
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Afairo tin klasi gia na epanakiniso to animation
    overlay.classList.remove("active");

    // Anakazo ton browser na "diabasei" to DOM (force reflow)
    // etsi to animation ksekina apo tin arxi
    void overlay.offsetWidth;

    // Prosthetho tin klasi .active gia na trexei to animation
    overlay.classList.add("active");
  }, [location.pathname]); // Trexei kathe fora pou allazei to path

  return (
    // To overlay me to logo sti mesi
    <div ref={overlayRef} id="transition-overlay" className="transition-overlay">
      <img src="/logos/karteria_logo_white.svg" alt="Logo" className="transition-logo" />
    </div>
  );
}

export default TransitionOverlay;
