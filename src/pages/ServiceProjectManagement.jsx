import React from 'react';
import '../styles/ServiceProjectManagement.css';

function ServiceProjectManagement() {
  return (
    <div className="pm-page">

      {/* Hero */}
      <section className="pm-hero">
        <div className="pm-hero-inner">
          <p className="pm-hero-label">Υπηρεσίες</p>
          <h1 className="pm-hero-title">Project &amp; Construction Management</h1>
          <p className="pm-hero-subtitle">Εγγύηση Αποτελέσματος, Χωρίς Αποκλίσεις</p>
        </div>
      </section>

      {/* Intro */}
      <section className="pm-intro">
        <div className="pm-container">
          <p>
            Η ΚΑΡΤΕΡΙΑ Κατασκευαστική &amp; Συμβουλευτική αναλαμβάνει την ολοκληρωμένη
            διαχείριση κατασκευαστικών έργων, εξασφαλίζοντας την επιτυχή υλοποίησή τους
            εντός χρόνου, κόστους και ποιοτικών προδιαγραφών.
          </p>
          <p>
            Λειτουργώντας ως Project Manager ή Construction Manager, συντονίζουμε όλους
            τους εμπλεκόμενους — μελετητές, αναδόχους, προμηθευτές και φορείς αδειοδότησης
            — ώστε η υλοποίηση να ακολουθεί πιστά τον αρχικό σχεδιασμό και να παραδίδεται
            στο χρήστη χωρίς εκπλήξεις.
          </p>
        </div>
      </section>

      {/* Ολιστική Διαχείριση */}
      <section className="pm-services-section">
        <div className="pm-container">
          <h2 className="pm-section-title">Ολιστική Διαχείριση Έργου</h2>
          <p className="pm-section-lead">
            Αναλαμβάνουμε τον πλήρη συντονισμό όλων των φάσεων και εμπλεκόμενων μερών:
          </p>
          <ul className="pm-list">
            <li>Ανάπτυξη και παρακολούθηση ολοκληρωμένου Σχεδίου Διαχείρισης Έργου (Project Management Plan)</li>
            <li>Συντονισμός μελετητών, αναδόχων και προμηθευτών κατά την υλοποίηση</li>
            <li>Παρακολούθηση φυσικού αντικειμένου και διασφάλιση συμμόρφωσης με εγκεκριμένες μελέτες</li>
            <li>Διαχείριση αλλαγών (change management) και τεκμηρίωση αποκλίσεων</li>
            <li>Επικοινωνία και αναφορές προόδου (reporting) προς τον κύριο του έργου</li>
            <li>Διαχείριση ρίσκων και ανάπτυξη σχεδίων αντιμετώπισης έκτακτων καταστάσεων</li>
          </ul>
        </div>
      </section>

      {/* Κόστος & Χρόνος */}
      <section className="pm-cost-section">
        <div className="pm-container">
          <h2 className="pm-section-title">Αυστηρός Έλεγχος Κόστους &amp; Χρόνου</h2>
          <p className="pm-section-lead">
            Η οικονομική και χρονική παρακολούθηση του έργου αποτελεί βασική μας δέσμευση:
          </p>
          <ul className="pm-list">
            <li>Ανάπτυξη και συνεχής ενημέρωση λεπτομερούς χρονοδιαγράμματος (Gantt / CPM)</li>
            <li>Παρακολούθηση κόστους και σύγκριση με εγκεκριμένο προϋπολογισμό</li>
            <li>Πιστοποίηση πληρωμών αναδόχων βάσει πραγματικής προόδου εργασιών</li>
            <li>Έλεγχος και διαχείριση απαιτήσεων (claims management)</li>
            <li>Έγκαιρη εντοπισμός αποκλίσεων και λήψη διορθωτικών μέτρων</li>
            <li>Τελική οικονομική εκκαθάριση και σύνταξη τελικής έκθεσης κόστους</li>
          </ul>
          <p className="pm-note">
            Ο συνδυασμός τεχνικής εμπειρίας και οργανωμένης διαχείρισης εξασφαλίζει ότι
            γνωρίζετε ανά πάσα στιγμή πού βρίσκεται η επένδυσή σας.
          </p>
        </div>
      </section>

      {/* Ποιότητα & Commissioning */}
      <section className="pm-services-section">
        <div className="pm-container">
          <h2 className="pm-section-title">Πιστοποιημένη Ποιότητα &amp; Commissioning</h2>
          <p className="pm-section-lead">
            Εφαρμόζουμε διεθνή πρότυπα σε κάθε στάδιο, από την κατασκευή έως την παράδοση:
          </p>
          <ul className="pm-list">
            <li>Σύνταξη και εφαρμογή Σχεδίου Ποιότητας Έργου (Quality Management Plan) κατά ISO 9001</li>
            <li>Τακτικοί έλεγχοι ποιότητας κατά την κατασκευή (inspections &amp; audits)</li>
            <li>Διαχείριση μη συμμορφώσεων και λήψη διορθωτικών / προληπτικών ενεργειών</li>
            <li>Υπηρεσίες Commissioning κτιρίων (Building Commissioning) κατά τα πρότυπα LEED</li>
            <li>Επαλήθευση λειτουργίας Η/Μ συστημάτων, BMS και ενεργειακών εγκαταστάσεων</li>
            <li>Σύνταξη φακέλου παράδοσης (O&amp;M Manuals) και εκπαίδευση λειτουργών</li>
          </ul>

          <div className="pm-iso-grid">
            <div className="pm-iso-card">
              <p className="pm-iso-code">ISO 9001</p>
              <p className="pm-iso-label">Ποιότητα</p>
            </div>
            <div className="pm-iso-card">
              <p className="pm-iso-code">ISO 14001</p>
              <p className="pm-iso-label">Περιβάλλον</p>
            </div>
            <div className="pm-iso-card">
              <p className="pm-iso-code">ISO 21502</p>
              <p className="pm-iso-label">Project Management</p>
            </div>
            <div className="pm-iso-card">
              <p className="pm-iso-code">LEED</p>
              <p className="pm-iso-label">Commissioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Θεσμικό Πλαίσιο */}
      <section className="pm-legal-section">
        <div className="pm-container">
          <h2 className="pm-section-title">Νομική &amp; Τεχνική Θωράκιση</h2>
          <p>
            Η υλοποίηση των έργων πραγματοποιείται σε πλήρη συμμόρφωση με το ισχύον
            θεσμικό και κανονιστικό πλαίσιο, όπως αυτό ορίζεται από:
          </p>
          <ul className="pm-list pm-list--legal">
            <li><strong>Ν. 4412/2016</strong> — Δημόσιες Συμβάσεις Έργων, Προμηθειών και Υπηρεσιών</li>
            <li><strong>ΕΤΕΠ</strong> — Ελληνικές Τεχνικές Προδιαγραφές για δημόσια τεχνικά έργα</li>
            <li>Εφαρμοστέες διατάξεις για αδειοδότηση, επίβλεψη και παραλαβή τεχνικών έργων</li>
          </ul>
          <p className="pm-legal-note">
            Η θεσμική γνώση ενσωματώνεται σε όλες τις φάσεις — από την ανάθεση και τη
            σύμβαση έως την τελική παραλαβή — εξασφαλίζοντας την εγκυρότητα κάθε δημόσιου
            ή ιδιωτικού έργου.
          </p>
        </div>
      </section>

      {/* Προσέγγιση */}
      <section className="pm-approach-section">
        <div className="pm-container">
          <h2 className="pm-section-title">Η Προσέγγισή μας</h2>
          <p>
            Η μεθοδικότητα και η θεσμική γνώση αποτελούν τη βάση κάθε έργου που αναλαμβάνουμε.
            Δεν απλώς παρακολουθούμε — αναλαμβάνουμε ευθύνη, συντονίζουμε ενεργά και
            παραδίδουμε αποτέλεσμα. Γιατί το εργοτάξιο δεν πρέπει να είναι πηγή άγχους,
            αλλά μια καλοκουρδισμένη μηχανή που παράγει αξία.
          </p>
        </div>
      </section>

    </div>
  );
}

export default ServiceProjectManagement;
