# 📸 Image Upload & Authentication App

A modern full-stack web application built with the **MERN** stack (MongoDB, Express, React, Node.js) that allows users to register, login, and upload images securely.

---

## 🚀 Features

- 🔐 User authentication using **JWT**
- 🌈 Beautiful **gradient UI** with Tailwind CSS
- ☁️ Upload and preview images
- 🔒 Protected routes for secure access
- ⚡ Real-time feedback using **React Hot Toast**
- 📦 Organized project structure

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Bcrypt for password hashing
- JWT for authentication

---

## 📂 Project Structure

📦 My-app/ ├── 📁 client/ # Frontend (React) │ ├── App.jsx │ ├── main.jsx │ ├── index.css │ ├── pages/ # Login, Register, Upload │ └── ... ├── 📁 server/ # Backend (Node + Express) │ ├── models/ │ ├── routes/ │ ├── controllers/ │ └── server.js └── README.md

🧑‍💻 Usage

1. Register a new account or login.

2. Access the protected upload route.

3. Upload an image and view the success toast.

4. Logout securely when done.

🔒 Security Notes

. Passwords are hashed using Bcrypt.

. Tokens are stored securely in localStorage.

. All upload and profile routes are protected via middleware.

✨ Author
Muhammed Shareef
🔗 www.shareefshareef2006@gmail.com
