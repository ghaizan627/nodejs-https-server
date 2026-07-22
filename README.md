# 🚀 Node.js HTTPS Server

A simple HTTPS web server built using **Node.js Core Modules** without any web framework such as Express.

This project was created to understand how HTTPS, routing, and static file serving work behind the scenes using only the built-in modules provided by Node.js.

---

## ✨ Features

- 🔒 HTTPS Server using SSL/TLS
- 🌐 Basic Routing
- 📄 HTML File Serving
- 🎨 Static File Server (CSS, JavaScript, Images)
- 📁 MIME Type Detection
- ⚡ Built with Node.js Core Modules only
- 🚫 No Express.js

---

## 🛠️ Built With

- Node.js
- HTTPS
- FS
- Path
- URL
- Dotenv

---

## 📂 Project Structure

```text
nodejs-https-server/
│
├── cert/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   ├── about.html
│   └── contact.html
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-https-server.git
```

### 2. Navigate to Project

```bash
cd nodejs-https-server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file.

Example:

```env
PORT=8000
```

### 5. Generate SSL Certificate

Create your own SSL certificate using OpenSSL.

```bash
openssl req -nodes -new -x509 -keyout cert/private-key.pem -out cert/certificate.pem -days 365
```

### 6. Start the Server

```bash
npm start
```

or

```bash
npm run dev
```

Open your browser:

```
https://localhost:8000
```

> Because this project uses a self-signed certificate for local development, your browser may display a security warning. This is expected. Continue to the site to proceed.

---

## 📚 Learning Objectives

This project helped me understand:

- HTTPS in Node.js
- SSL Certificates
- Request & Response
- Basic Routing
- Static File Server
- MIME Types
- File System Module
- Path Module
- Environment Variables

---

## 📌 Future Improvements

- [✅] Custom 404 Page
- [ ] Logger
- [ ] REST API
- [ ] Body Parser
- [ ] Cookie Parser
- [ ] Authentication
- [ ] Mini Express Framework
