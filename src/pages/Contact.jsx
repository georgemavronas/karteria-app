import { useState } from "react";
import "../styles/Contact.css";

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
    <main className="contact">

      <section className="contact-intro">
        <h1>Επικοινωνία</h1>
        <p>Επικοινωνήστε μαζί μας για οποιαδήποτε πληροφορία ή συνεργασία.</p>
      </section>

      <section className="contact-cards">
        <div className="contact-grid">
          <div className="info-card">
            <span className="label">Email</span>
            <a href="mailto:info@karteriaee.gr" className="value">info@karteriaee.gr</a>
          </div>
          <div className="info-card">
            <span className="label">Τηλ. Επικοινωνίας</span>
            <a href="tel:+302114119730" className="value">+30 2114119730</a>
          </div>
          <div className="info-card">
            <span className="label">Διεύθυνση</span>
            <span className="value">ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΕΩΣ 70, ΔΑΦΝΗ, Τ.Κ. 17237</span>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-wrapper">

          <div className="contact-form-left">
            <p className="contact-form-label">ΓΡΑΨΤΕ ΜΑΣ</p>
            <h2 className="contact-form-title">Πώς μπορούμε<br />να σας βοηθήσουμε;</h2>
            <p className="contact-form-sub">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Web3Forms Access Key — εδώ πρέπει να αντικαταστήσω το δικο μου από web3forms.com */}
            <input type="hidden" name="access_key" value="286d1c0e-f156-4a74-940e-9f620c9ad8f6" />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Γιώργος Παπαδόπουλος"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">EMAIL</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user_phone">ΤΗΛΕΦΩΝΟ <span className="optional">(προαιρετικό)</span></label>
              <input
                id="user_phone"
                type="tel"
                name="user_phone"
                placeholder="+30 69xxxxxxxx"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">ΘΕΜΑ</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Πληροφορίες για υπηρεσία..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">ΜΗΝΥΜΑ</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Γράψτε το μήνυμά σας εδώ..."
                required
              />
            </div>

            <button
              type="submit"
              className={`form-submit ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" && "Αποστολή..."}
              {status === "success" && "✓ Στάλθηκε!"}
              {status === "error" && "Προσπαθήστε ξανά"}
              {status === "idle" && "Αποστολή Μηνύματος"}
            </button>

            {status === "success" && (
              <p className="form-feedback success">Το μήνυμά σας εστάλη με επιτυχία. Θα επικοινωνήσουμε σύντομα!</p>
            )}
            {status === "error" && (
              <p className="form-feedback error">Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.</p>
            )}

          </form>
        </div>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.1219939385733!2d23.736011976419153!3d37.95093740199203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bda00625d561%3A0x3efec923f2990c23!2zzpXOuC4gzpHOvc-EzrnPg8-EzqzPg861z4nPgiA3MCwgzpTOrM-Gzr3OtyDOkc-Az4TOuc66zq7PgiAxNzIgMzc!5e0!3m2!1sel!2sgr!4v1776365362973!5m2!1sel!2sgr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Χάρτης"
        ></iframe>
      </section>

    </main>
  );
}

export default Contact;