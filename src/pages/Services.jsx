import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services-page">

      <div className="services-intro">
        <div className="services-intro-inner">
          <h1 className="services-title">Υπηρεσίες</h1>
          <p className="services-desc">
            Ολοκληρωμένες τεχνικές και συμβουλευτικές υπηρεσίες σε κάθε στάδιο ενός έργου —
            από τη μελέτη και την αδειοδότηση έως την κατασκευή και την παράδοση.
          </p>
        </div>
      </div>

      <div className="service-grid">

        <Link to="/services/sustainability" className="service-card service-card--link">
          <p className="service-number">01</p>
          <h3>Βιωσιμότητα &amp; Πιστοποιήσεις</h3>
          <p className="service-subtitle">ΧΤΙΖΟΝΤΑΣ ΤΟ ΜΕΛΛΟΝ</p>
          <p className="service-intro">Μεταμορφώνουμε κατασκευές σε πρότυπα περιβαλλοντικής ευθύνης και υψηλής επενδυτικής αξίας μέσω LEED και ενεργειακής πιστοποίησης.</p>
          <span className="service-link">Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/studies" className="service-card service-card--link">
          <p className="service-number">02</p>
          <h3>Μελέτες &amp; Αδειοδότηση</h3>
          <p className="service-subtitle">ΑΠΟ ΤΟ ΟΡΑΜΑ ΣΤΗΝ ΥΛΟΠΟΙΗΣΗ</p>
          <p className="service-intro">360° μελετητική υποστήριξη — από αρχιτεκτονικά και στατικά έως ηλεκτρομηχανολογικά, με πλήρεις φακέλους για ΕΣΠΑ και ΕΕ.</p>
          <span className="service-link">Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/real-estate" className="service-card service-card--link">
          <p className="service-number">03</p>
          <h3>Real Estate Development</h3>
          <p className="service-subtitle">ΑΝΕΓΕΡΣΗ &amp; ΑΞΙΟΠΟΙΗΣΗ</p>
          <p className="service-intro">Από το πρώτο σχέδιο έως το «κλειδί στο χέρι» — συντονισμός μελετών, αδειών, κατασκευής και τελικής πώλησης.</p>
          <span className="service-link">Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/project-management" className="service-card service-card--link">
          <p className="service-number">04</p>
          <h3>Project Management</h3>
          <p className="service-subtitle">ΕΓΓΥΗΣΗ ΑΠΟΤΕΛΕΣΜΑΤΟΣ</p>
          <p className="service-intro">Το έργο σας ολοκληρωμένο στην ώρα του, εντός budget — με πιστοποίηση ISO 9001, 14001, 21502 και υπηρεσίες Commissioning.</p>
          <span className="service-link">Μάθετε περισσότερα →</span>
        </Link>

      </div>

    </section>
  );
}

export default Services;
