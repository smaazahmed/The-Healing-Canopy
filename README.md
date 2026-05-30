# The Healing Canopy - Mental Health Application

Welcome to **The Healing Canopy** repository! The Healing Canopy is a beautifully designed, premium mental health single-page web application. It is designed to assist users on their mental health journey, enable direct appointment scheduling with professional therapists, and provide dedicated management dashboards for doctors.

The application uses pure **HTML5**, **Vanilla CSS3** (utilizing a relaxing custom forest-green theme), and **Vanilla JavaScript ES6** on the frontend, and utilizes a lightweight `json-server` mock backend to persist and handle user data, appointments, and contact requests.

---

## ✨ Features & Functionality

### 1. 🔐 User Account & Session Management
* **Secure Registration:** Users can create a brand new account by entering their Full Name, Email, and Password. The system checks if the email already exists in the system to prevent duplicates.
* **Authentication & Login:** A dual-mode login/signup gateway page authenticates existing credentials against the database.
* **Session Persistence:** Successfully logged-in users are stored locally in the browser's `localStorage` to persist sessions, custom greeting menus, and tailored user flows.

### 2. 📅 Therapist Appointment Booking (`consult.html`)
* **Custom Scheduling Engine:** Logged-in users can book appointments with any of the certified practitioners.
* **Booking Fields:** Users provide their Full Name, Email Address, Contact Number, preferred Date, preferred Time, and select a therapist.
* **Live API Connection:** Form submission automatically updates the appointments registry on the database and alerts the user with their confirmed schedule.

### 3. 🎛️ Secure Doctor Administration Portal (`admin_login.html` & `admin_dashboard.html`)
A secure dashboard where registered therapists can manage their practices, patient sessions, and inbox:
* **Doctor Authentication:** A specialized portals page where only doctors with registered emails can log in.
* **Appointment Tracker:** Displays a custom tabular view of upcoming patient appointments booked specifically under their name, featuring client names, emails, phone numbers, and time slots.
* **Direct Contact Inbox:** Displays message requests sent directly to the logged-in doctor, containing details on patient subjects and messages.
* **Global Users Registry:** Lists all users registered on the platform for client management.
* **Secure Session Terminate:** One-click secure logout that clears administrator tokens.

### 4. 📖 Educational Resources (`resources.html`)
* A curated repository of mental health articles, deep-dive wellness reads, and stress-coping strategies complete with clean, grid-aligned card layouts.

---

## 🛠️ Technology Stack
* **Frontend:** HTML5, Vanilla CSS3 (Custom Responsive Layouts & Aesthetic Green Color Palette), JavaScript (ES6, dynamic DOM manipulation, LocalStorage and Fetch API integrations)
* **Icons:** Font Awesome v6.5
* **Backend Mock:** Node.js `json-server` (Running on standard Port 3000 to manage RESTful CRUD endpoints `/users`, `/appointments`, `/messages`, and `/doctors`).

---

## 🚀 Installation & Setup

### 1. Download/Clone the Project
Clone the repository or download and extract the ZIP file to your local computer.
```bash
git clone https://github.com/your-username/the-healing-canopy.git
cd the-healing-canopy
```

### 2. Install Server Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed. Run the command below to install the mock database packages:
```bash
npm install
```

### 3. Launch the Backend Mock Database
Start the local server so logins, registrations, messages, and appointments can persist:
```bash
npx json-server db.json --port 3000
```
*Note: Keep this terminal window running. The backend API is hosted at `http://localhost:3000`.*

### 4. Launch the Web Application
No special local web server is required for the frontend!
1. Navigate into the folder.
2. Double-click the **`index.html`** file to launch the app directly in your web browser, or serve it using VS Code "Live Server".

---

## 🔑 Demo Doctor Login Credentials
Use the following credentials to access the Doctor/Admin Dashboard for testing purposes:

| Doctor Name | Email Address | Password |
| :--- | :--- | :--- |
| **Dr. Elizabeth Jane Harwood** | `elizabeth@The Healing Canopy.com` | `password123` |
| **Mr. John Blake** | `john@The Healing Canopy.com` | `password123` |
| **Dr. Victoria Anne Caldwell** | `victoria@The Healing Canopy.com` | `password123` |
