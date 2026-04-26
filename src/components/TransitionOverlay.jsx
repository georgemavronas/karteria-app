import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


function TransitionOverlay() {
  const location = useLocation();
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.classList.remove("active");

    void overlay.offsetWidth;

    overlay.classList.add("active");
  }, [location.pathname]);

  return (
    <div ref={overlayRef} id="transition-overlay" className="transition-overlay">
      <img src={process.env.PUBLIC_URL + '/logos/karteria_logo_k_letter_white.svg'} alt="Logo" className="transition-logo" />
    </div>
  );
}

export default TransitionOverlay;
