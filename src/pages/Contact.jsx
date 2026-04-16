import "../styles/Contact.css";

function Contact() {
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
            <a href="mailto:info@karteriaee.gr" className="value">
              info@karteriaee.gr
            </a>
          </div>

          <div className="info-card">
            <span className="label">Τηλ. Επικοινωνίας</span>
            <a href="tel:+302114119730" className="value">
              +30 2114119730
            </a>
          </div>

          <div className="info-card">
            <span className="label">Διεύθυνση</span>
            <span className="value">
              ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΕΩΣ 70, ΔΑΦΝΗ, Τ.Κ. 17237
            </span>
          </div>

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