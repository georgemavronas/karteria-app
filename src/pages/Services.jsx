import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Services.module.css';

function Services() {
  return (
    <section className={styles['services-page']}>

      <div className={styles['services-intro']}>
        <div className={styles['services-intro-inner']}>
          <p className={styles['services-label']}>ΚΑΡΤΕΡΙΑ</p>
          <h1 className={styles['services-title']}>Υπηρεσίες</h1>
          <p className={styles['services-desc']}>
            Ολοκληρωμένες τεχνικές και συμβουλευτικές υπηρεσίες σε κάθε στάδιο ενός έργου —
            από τη μελέτη και την αδειοδότηση έως την κατασκευή και την παράδοση.
          </p>
        </div>
      </div>

      <div className={styles['service-grid']}>

        <Link to="/services/sustainability" className={`${styles['service-card']} ${styles['service-card--link']}`}>
          <p className={styles['service-number']}>01</p>
          <h3>Βιωσιμότητα &amp; Πιστοποιήσεις</h3>
          <p className={styles['service-subtitle']}>ΧΤΙΖΟΝΤΑΣ ΤΟ ΜΕΛΛΟΝ</p>
          <p className={styles['service-intro']}>Μεταμορφώνουμε κατασκευές σε πρότυπα περιβαλλοντικής ευθύνης και υψηλής επενδυτικής αξίας μέσω LEED και ενεργειακής πιστοποίησης.</p>
          <span className={styles['service-link']}>Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/studies" className={`${styles['service-card']} ${styles['service-card--link']}`}>
          <p className={styles['service-number']}>02</p>
          <h3>Μελέτες &amp; Αδειοδότηση</h3>
          <p className={styles['service-subtitle']}>ΑΠΟ ΤΟ ΟΡΑΜΑ ΣΤΗΝ ΥΛΟΠΟΙΗΣΗ</p>
          <p className={styles['service-intro']}>360° μελετητική υποστήριξη — από αρχιτεκτονικά και στατικά έως ηλεκτρομηχανολογικά, με πλήρεις φακέλους για ΕΣΠΑ και ΕΕ.</p>
          <span className={styles['service-link']}>Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/real-estate" className={`${styles['service-card']} ${styles['service-card--link']}`}>
          <p className={styles['service-number']}>03</p>
          <h3>Real Estate Development</h3>
          <p className={styles['service-subtitle']}>ΑΝΕΓΕΡΣΗ &amp; ΑΞΙΟΠΟΙΗΣΗ</p>
          <p className={styles['service-intro']}>Από το πρώτο σχέδιο έως το «κλειδί στο χέρι» — συντονισμός μελετών, αδειών, κατασκευής και τελικής πώλησης.</p>
          <span className={styles['service-link']}>Μάθετε περισσότερα →</span>
        </Link>

        <Link to="/services/project-management" className={`${styles['service-card']} ${styles['service-card--link']}`}>
          <p className={styles['service-number']}>04</p>
          <h3>Project Management</h3>
          <p className={styles['service-subtitle']}>ΕΓΓΥΗΣΗ ΑΠΟΤΕΛΕΣΜΑΤΟΣ</p>
          <p className={styles['service-intro']}>Το έργο σας ολοκληρωμένο στην ώρα του, εντός budget — με πιστοποίηση ISO 9001, 14001, 21502 και υπηρεσίες Commissioning.</p>
          <span className={styles['service-link']}>Μάθετε περισσότερα →</span>
        </Link>

      </div>

    </section>
  );
}

export default Services;
