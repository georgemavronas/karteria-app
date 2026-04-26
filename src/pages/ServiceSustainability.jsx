import React from 'react';
import styles from '../styles/ServiceSustainability.module.css';

function ServiceSustainability() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles['hero-inner']}>
          <h1 className={styles.title}>Βιωσιμότητα &amp; Πιστοποιήσεις</h1>
          <p className={styles.subtitle}>Sustainability &amp; Certifications</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.wrap}>
          <p>
            Η ΚΑΡΤΕΡΙΑ Κατασκευαστική &amp; Συμβουλευτική παρέχει εξειδικευμένες υπηρεσίες
            βιωσιμότητας, περιβαλλοντικού σχεδιασμού και πιστοποιήσεων έργων, με στόχο την
            ανάπτυξη τεχνικών έργων που ανταποκρίνονται στις σύγχρονες απαιτήσεις ενεργειακής
            αποδοτικότητας, περιβαλλοντικής ευθύνης και ποιότητας.
          </p>
          <p>
            Η προσέγγισή μας ενσωματώνει τη βιωσιμότητα και τον ενεργειακό σχεδιασμό από τα
            πρώτα στάδια του έργου, συμβάλλοντας στη δημιουργία αποδοτικών, λειτουργικών και
            περιβαλλοντικά υπεύθυνων κατασκευών με αυξημένη αξία.
          </p>
        </div>
      </section>

      {/* Αντικείμενο Υπηρεσιών */}
      <section className={styles.services}>
        <div className={styles.wrap}>
          <h2 className={styles.heading}>Αντικείμενο Υπηρεσιών</h2>
          <p className={styles.lead}>Οι υπηρεσίες περιλαμβάνουν:</p>
          <ul className={styles.list}>
            <li>Εκπόνηση περιβαλλοντικών μελετών και τεχνικών περιβαλλοντικών τεκμηριώσεων</li>
            <li>
              Σύνταξη Μελετών Περιβαλλοντικών Επιπτώσεων (ΜΠΕ) και υποστήριξη στη διαδικασία
              περιβαλλοντικής αδειοδότησης
            </li>
            <li>
              Παρακολούθηση και τεκμηρίωση συμμόρφωσης με τους εγκεκριμένους περιβαλλοντικούς
              όρους
            </li>
            <li>
              Εκπόνηση ενεργειακών μελετών και μελετών ενεργειακής απόδοσης σύμφωνα με τον
              Κανονισμό Ενεργειακής Απόδοσης Κτιρίων (ΚΕΝΑΚ)
            </li>
            <li>Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης (ΠΕΑ)</li>
            <li>
              Σχεδιασμό και υποστήριξη πιστοποίησης έργων κατά LEED (Leadership in Energy and
              Environmental Design)
            </li>
            <li>Αξιολόγηση βιωσιμότητας και περιβαλλοντικής απόδοσης έργων</li>
            <li>Τεκμηρίωση ενεργειακών και περιβαλλοντικών απαιτήσεων</li>
            <li>Οργάνωση και υποστήριξη διαδικασιών διασφάλισης ποιότητας έργων</li>
            <li>Παρακολούθηση και τεκμηρίωση της ποιότητας κατά τη φάση κατασκευής</li>
            <li>
              Υποστήριξη σε διαδικασίες ελέγχου και πιστοποίησης από ανεξάρτητους φορείς
            </li>
          </ul>
        </div>
      </section>

      {/* LEED */}
      <section className={styles.leed}>
        <div className={styles.wrap}>
          <div className={styles['leed-header']}>
            <span className={styles.badge}>LEED</span>
            <h2 className={styles.heading}>Πιστοποίηση LEED</h2>
          </div>
          <div className={styles['leed-body']}>
            <p>
              Η πιστοποίηση LEED αποτελεί διεθνώς αναγνωρισμένο σύστημα αξιολόγησης
              βιωσιμότητας κτιρίων, το οποίο αναπτύχθηκε από το U.S. Green Building Council
              (USGBC) και εστιάζει στη βελτιστοποίηση της ενεργειακής απόδοσης, στη μείωση
              της κατανάλωσης φυσικών πόρων και στη δημιουργία υγιών και αποδοτικών χώρων.
            </p>
            <p>
              Η ΚΑΡΤΕΡΙΑ υποστηρίζει την εφαρμογή του προτύπου LEED σε όλα τα στάδια του
              έργου, από τον σχεδιασμό έως τη λειτουργία, διασφαλίζοντας τη συμμόρφωση με
              τις απαιτήσεις πιστοποίησης και τη βελτιστοποίηση της συνολικής περιβαλλοντικής
              και λειτουργικής απόδοσης του έργου.
            </p>
            <p>
              Τα έργα αξιολογούνται με βάση συγκεκριμένα κριτήρια βιωσιμότητας και
              κατατάσσονται σε επίπεδα πιστοποίησης, όπως Certified, Silver, Gold και
              Platinum, ανάλογα με την επίδοσή τους.
            </p>
            <div className={styles.levels}>
              <div className={`${styles.level} ${styles.certified}`}>Certified</div>
              <div className={`${styles.level} ${styles.silver}`}>Silver</div>
              <div className={`${styles.level} ${styles.gold}`}>Gold</div>
              <div className={`${styles.level} ${styles.platinum}`}>Platinum</div>
            </div>
            <p>
              Η ενσωμάτωση των αρχών της βιωσιμότητας συμβάλλει στη δημιουργία έργων υψηλής
              ποιότητας, με μειωμένο περιβαλλοντικό αποτύπωμα και αυξημένη επενδυτική αξία.
            </p>
          </div>
        </div>
      </section>

      {/* Προσέγγιση */}
      <section className={styles.approach}>
        <div className={styles.wrap}>
          <h2 className={styles.heading}>Η Προσέγγισή μας</h2>
          <p>
            Η ΚΑΡΤΕΡΙΑ αντιμετωπίζει τη βιωσιμότητα και τις πιστοποιήσεις ως βασικό παράγοντα
            σχεδιασμού και ανάπτυξης των έργων, συμβάλλοντας στη δημιουργία αποδοτικών,
            αξιόπιστων και περιβαλλοντικά υπεύθυνων λύσεων με μακροχρόνια αξία.
          </p>
        </div>
      </section>

    </div>
  );
}

export default ServiceSustainability;
