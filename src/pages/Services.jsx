import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services">

      <div className="service-grid">

        <Link to="/services/sustainability" className="service-card service-card--link">
          <h3>Χτίζοντας το Μέλλον</h3>
          <p className="service-subtitle">Βιωσιμότητα &amp; Διεθνείς Πιστοποιήσεις</p>
          <p>Θέλετε το έργο σας να ξεχωρίζει για την ποιότητα, την οικονομία και το κύρος του; Ανακαλύψτε πώς η ΚΑΡΤΕΡΙΑ μεταμορφώνει τις κατασκευές σε πρότυπα περιβαλλοντικής ευθύνης και υψηλής επενδυτικής αξίας.</p>
          <ul className="service-list">
            <li>
              <span className="service-list-title">Το «Κλειδί» του LEED</span>
              Πώς μια διεθνής πιστοποίηση μπορεί να εκτοξεύσει την εμπορική αξία του ακινήτου σας, μειώνοντας παράλληλα δραστικά τα λειτουργικά έξοδα.
            </li>
            <li>
              <span className="service-list-title">Ολιστική Υποστήριξη</span>
              Από τις περιβαλλοντικές μελέτες και την αδειοδότηση μέχρι την έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης (ΠΕΑ).
            </li>
            <li>
              <span className="service-list-title">Εγγύηση Ποιότητας</span>
              Αυστηρή παρακολούθηση κατά την κατασκευή που διασφαλίζει ότι το όραμά σας θα υλοποιηθεί χωρίς εκπτώσεις στη βιωσιμότητα.
            </li>
          </ul>
          <p className="service-cta">Γιατί να συμβιβαστείτε με το απλό, όταν μπορείτε να κατασκευάσετε το κορυφαίο;</p>
        </Link>

        <Link to="/services/studies" className="service-card service-card--link">
          <h3>Από το Όραμα στην Υλοποίηση</h3>
          <p className="service-subtitle">Μελέτες με Τεχνική Πληρότητα &amp; Θεσμική Θωράκιση</p>
          <p>Μια μελέτη δεν είναι απλώς ένα σχέδιο· είναι ο οδικός χάρτης για την επιτυχία του έργου σας.</p>
          <ul className="service-list">
            <li>
              <span className="service-list-title">360° Μελετητική Υποστήριξη</span>
              Από αρχιτεκτονικά και στατικά μέχρι εξειδικευμένα ηλεκτρομηχανολογικά, ενεργειακά και κυκλοφοριακά έργα.
            </li>
            <li>
              <span className="service-list-title">Ωρίμανση &amp; Χρηματοδότηση</span>
              Πλήρεις φάκελοι για προγράμματα ΕΣΠΑ / ΕΕ με μελέτες σκοπιμότητας που «ξεκλειδώνουν» πόρους.
            </li>
            <li>
              <span className="service-list-title">Διεθνή Πρότυπα ISO</span>
              Εγγύηση συμμόρφωσης με ISO 9001, 14001, 50001, 45001.
            </li>
          </ul>
          <p className="service-cta">Μετατρέπουμε την τεχνική πολυπλοκότητα σε εφαρμόσιμη λύση.</p>
        </Link>

        <Link to="/services/real-estate" className="service-card service-card--link">
          <h3>Ανέγερση &amp; Αξιοποίηση</h3>
          <p className="service-subtitle">Μετατρέπουμε τα Ακίνητα σε Αξία που Διαρκεί</p>
          <p>Από το πρώτο σχέδιο έως το «κλειδί στο χέρι» και την τελική πώληση, είμαστε ο στρατηγικός σας συνεργάτης.</p>
          <ul className="service-list">
            <li>
              <span className="service-list-title">Ολοκληρωμένο Real Estate Development</span>
              Συντονισμός μελετών, αδειών και κατασκευής με βιοκλιματικό σχεδιασμό και ενεργειακή εξοικονόμηση.
            </li>
            <li>
              <span className="service-list-title">Ασφαλείς Πωλήσεις &amp; Μεταβιβάσεις</span>
              Τεχνικός έλεγχος, συγκέντρωση δικαιολογητικών και πλήρης φάκελος ακινήτου.
            </li>
            <li>
              <span className="service-list-title">Έξυπνη Διαχείριση (Asset Management)</span>
              Μεγιστοποίηση αξίας μέσω BMS και προηγμένης τεχνικής συντήρησης.
            </li>
          </ul>
          <p className="service-cta">Δεν χτίζουμε απλά κτίρια, δημιουργούμε περιουσιακά στοιχεία με μέλλον.</p>
        </Link>

        <Link to="/services/project-management" className="service-card service-card--link">
          <h3>Project &amp; Construction Management</h3>
          <p className="service-subtitle">Εγγύηση Αποτελέσματος, Χωρίς Αποκλίσεις</p>
          <p>Το έργο σας ολοκληρωμένο στην ώρα του, εντός budget και με την κορυφαία ποιότητα. Η ΚΑΡΤΕΡΙΑ αναλαμβάνει το τιμόνι της υλοποίησης, απαλλάσσοντάς σας από το άγχος του εργοταξίου.</p>
          <ul className="service-list">
            <li>
              <span className="service-list-title">Ολιστική Διαχείριση</span>
              Συντονισμός μελετητών, αναδόχων και προμηθευτών για πιστή εφαρμογή του αρχικού σχεδιασμού.
            </li>
            <li>
              <span className="service-list-title">Αυστηρός Έλεγχος Κόστους &amp; Χρόνου</span>
              Συστηματική παρακολούθηση χρονοδιαγράμματος και πιστοποίηση πληρωμών ανά πάσα στιγμή.
            </li>
            <li>
              <span className="service-list-title">Πιστοποιημένη Ποιότητα &amp; Commissioning</span>
              Εφαρμογή ISO 9001, 14001, 21502 και υπηρεσίες Commissioning (κατά LEED) από την πρώτη μέρα.
            </li>
          </ul>
          <p className="service-cta">Μετατρέπουμε το εργοτάξιο σε μια καλοκουρδισμένη μηχανή.</p>
        </Link>

        <div className="service-card">
          <h3>Service 5</h3>
          <p>Description HEREEEE</p>
        </div>

        <div className="service-card">
          <h3>Service 6</h3>
          <p>Description HEREEEE</p>
        </div>

        <div className="service-card">
          <h3>Service 7</h3>
          <p>Description HEREEEE</p>
        </div>

        <div className="service-card">
          <h3>Service 8</h3>
          <p>Description HEREEEE</p>
        </div>

      </div>

    </section>
  );
}

export default Services;
