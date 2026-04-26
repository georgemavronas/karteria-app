import { useState } from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 4000); // 4 deuterolepta dld
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <main className={styles.contact}>

      <section className={styles['contact-intro']}>
        <h1>Επικοινωνία</h1>
        <p>Επικοινωνήστε μαζί μας για οποιαδήποτε πληροφορία ή συνεργασία.</p>
      </section>

      <section className={styles['contact-cards']}>
        <div className={styles['contact-grid']}>
          <div className={styles['info-card']}>
            <span className={styles.label}>EMAIL</span>
            <a href="mailto:info@karteriaee.gr" className={styles.value}>info@karteriaee.gr</a>
          </div>
          <div className={styles['info-card']}>
            <span className={styles.label}>ΤΗΛ. ΕΠΙΚΟΙΝΩΝΙΑΣ</span>
            <a href="tel:+302114119730" className={styles.value}>+30 2114119730</a>
          </div>
          <div className={styles['info-card']}>
            <span className={styles.label}>ΔΙΕΥΘΥΝΣΗ</span>
            <span className={styles.value}>ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΕΩΣ 70, ΔΑΦΝΗ, Τ.Κ. 17237</span>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.1219939385733!2d23.736011976419153!3d37.95093740199203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bda00625d561%3A0x3efec923f2990c23!2zzpXOuC4gzpHOvc-EzrnPg8-EzqzPg861z4nPgiA3MCwgzpTOrM-Gzr3OtyDOkc-Az4TOuc66zq7PgiAxNzIgMzc!5e0!3m2!1sel!2sgr!4v1776365362973!5m2!1sel!2sgr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Χάρτης"
        ></iframe>
      </section>

      <section className={styles['contact-form-section']}>
        <div className={styles['contact-form-wrapper']}>

          <div className={styles['contact-form-left']}>
            <p className={styles['contact-form-label']}>ΓΡΑΨΤΕ ΜΑΣ</p>
            <h2 className={styles['contact-form-title']}>Πώς μπορούμε<br />να σας βοηθήσουμε;</h2>
            <p className={styles['contact-form-sub']}>
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
            </p>
          </div>

          <form className={styles['contact-form']} onSubmit={handleSubmit} noValidate>

            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="286d1c0e-f156-4a74-940e-9f620c9ad8f6" />
            <input type="hidden" name="Hosting Website" value="karteriaee.gr" />

            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="user_name">ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
                <input
                  id="user_name"
                  type="text"
                  name="Αποστολέας"
                  placeholder="Γιώργος Παπαδόπουλος"
                  required
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="user_email">EMAIL</label>
                <input
                  id="user_email"
                  type="email"
                  name="Εmail"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles['form-group']}>
                <label htmlFor="user_phone">ΤΗΛΕΦΩΝΟ <span className={styles.optional}>(προαιρετικό)</span></label>
              <input
                id="user_phone"
                type="tel"
                name="Κινητό Τηλέφωνο"
                placeholder="+30 69xxxxxxxx"
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="subject">ΘΕΜΑ</label>
              <input
                id="subject"
                type="text"
                name="Θέμα"
                placeholder="Πληροφορίες για υπηρεσία..."
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="message">ΜΗΝΥΜΑ</label>
              <textarea
                id="message"
                name="Μήνυμα"
                rows="5"
                placeholder="Γράψτε το μήνυμά σας εδώ..."
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles['form-submit']} ${status === "sending" ? styles.sending : ''}`}
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" && "Αποστολή..."}
              {status === "success" && "✓ Στάλθηκε!"}
              {status === "error" && "Προσπαθήστε ξανά"}
              {status === "idle" && "Αποστολή Μηνύματος"}
            </button>

            {status === "success" && (
              <p className={`${styles['form-feedback']} ${styles.success}`}>Το μήνυμά σας εστάλη με επιτυχία. Θα επικοινωνήσουμε σύντομα!</p>
            )}
            {status === "error" && (
              <p className={`${styles['form-feedback']} ${styles.error}`}>Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.</p>
            )}

          </form>
        </div>
      </section>

    </main>
  );
}

export default Contact;