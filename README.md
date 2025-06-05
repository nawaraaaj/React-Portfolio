# 🚀 React Portfolio Website

A sleek, responsive, and modern developer portfolio built using **React**, deployed live at:  
🌐 [neupanenawaraj.com.np](https://neupanenawaraj.com.np)

---

## 📌 Features

- ⚛️ Built with **React** and **Vite**
- 📬 Integrated **EmailJS** contact form with environment variable security
- 🎨 Clean, minimal UI with responsive design
- 🔗 Social links to GitHub & LinkedIn
- ☁️ Deployed via **Vercel**
- 🔒 Sensitive keys hidden via `.env`

---

## 📁 Project Structure

React-Portfolio/
├── public/
├── src/
│ ├── components/
│ │ └── Contact.jsx
│ ├── App.jsx
│ └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

yaml
Copy
Edit

---

## ⚙️ Environment Variables

This project uses **EmailJS** for sending messages from the contact form.  
Create a `.env` file in the root directory with the following:

```env
VITE_EMAILJS_SERVICE_ID=service_8lmpuh6
VITE_EMAILJS_TEMPLATE_ID=template_pu1ltug
VITE_EMAILJS_PUBLIC_KEY=8yMbGKn8lgxbsYesQ
⚠️ Do NOT commit the actual .env file. It's already included in .gitignore.

🛠️ Getting Started
Clone the repository
bash
Copy
Edit
git clone https://github.com/nawaraaaj/React-Portfolio.git
cd React-Portfolio
Install dependencies
bash
Copy
Edit
npm install
Run the development server
bash
Copy
Edit
npm run dev
Build for production
bash
Copy
Edit
npm run build
📬 Contact
Want to get in touch? Use the form on
🌐 neupanenawaraj.com.np

Or connect with me on:

GitHub: @nawaraaaj

LinkedIn: Nawaraj Neupane
