# Karteria App

React εφαρμογή για το νέο site της **Karteria**. ( https://karteriaee.gr/ )
Το project αποτελεί rebuild του παλιού site χρησιμοποιώντας **React**.

---

## 🚀 Εγκατάσταση Project

Για να τρέξει το project τοπικά:

```bash
npm install
```

Αυτό θα εγκαταστήσει όλα τα απαραίτητα packages.

---

## ▶️ Εκκίνηση Development Server

```bash
npm start
```

Το project θα ανοίξει στο:

```
http://localhost:3000
```

Το site θα κάνει **auto refresh** κάθε φορά που αποθηκεύουμε τις αλλαγές στον κώδικα.

---


---

## 📁 Δομή Project

```bash
src
 ├── components   # επαναχρησιμοποιούμενα components , τα έχουμε όλα μαζί συγκεντρωμένα εδώ
 ├── pages        # σελίδες του site
 ├── assets       # εικόνες, icons , videos κλπ
 ├── styles       # css / scss αρχεία για stylling
 ├── App.js
 │   // -----------------------------------------------------
 │   // Το βασικό component της εφαρμογής.
 │   //
 │   // Εδώ οργανώνεται όλο το site.
 │   // Συνήθως περιέχει:
 │   //
 │   // - Layout (Header, Footer)
 │   // - Routing μεταξύ σελίδων
 │   // - Components
 │   //
 │   // Δηλαδή λειτουργεί σαν "container" για όλη την εφαρμογή.
 │   //
 │   // Συνήθης δομή:
 │   //
 │   // App
 │   //  ├─ Header
 │   //  ├─ Pages / Routes
 │   //  │   ├─ Home
 │   //  │   ├─ About
 │   //  │   └─ Contact
 │   //  └─ Footer
 │   // -----------------------------------------------------
 └── index.js
    // -----------------------------------------------------
    // Σημείο εκκίνησης της React εφαρμογής.
    //
    // Εδώ γίνεται:
    // 1. Φόρτωση του React
    // 2. Δημιουργία του React root
    // 3. Render του βασικού component (App)
    //
    // Με απλά λόγια:
    // Το index.js "βάζει" την React εφαρμογή μέσα στο HTML.
    //
    // Ροή εφαρμογής:
    //
    // HTML (index.html)
    //        ↓
    // index.js
    //        ↓
    // App.js
    //        ↓
    // components / pages
    // -----------------------------------------------------
---

## 👨‍💻 Τεχνολογίες

* React
* JavaScript (JS / JSX)
* CSS

---

## 📌 Σημείωση

Το project δημιουργήθηκε με **Create React App**.
