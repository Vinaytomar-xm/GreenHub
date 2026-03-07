# ⚡ GreenHub — India's Renewable Energy Marketplace

<div align="center">

![GreenHub Banner](https://img.shields.io/badge/GreenHub-Renewable%20Energy%20Marketplace-4ade80?style=for-the-badge&logo=leaflet&logoColor=white)

**Buy & Sell Green Energy Directly — No Middlemen. No Broker Fees. 100% Green.**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-greenhub--frontend--eight.vercel.app-4ade80?style=for-the-badge)](https://greenhub-frontend-eight.vercel.app)
[![Backend API](https://img.shields.io/badge/🔧%20Backend%20API-greenhub--backend.onrender.com-38bdf8?style=for-the-badge)](https://greenhub-backend.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Vinaytomar--xm-181717?style=for-the-badge&logo=github)](https://github.com/Vinaytomar-xm)

</div>

---

## 🌍 Live Demo

| | Link |
|---|---|
| 🌐 **Frontend (Vercel)** | [https://greenhub-frontend-coral.vercel.app](https://greenhub-frontend-coral.vercel.app) |
| 🔧 **Backend API (Render)** | [https://greenhub-backend.onrender.com](https://greenhub-backend.onrender.com) |
| 🗄️ **Database** | MongoDB Atlas (ap-south-1, Mumbai) |

> ⚠️ **Note:** Backend is on Render Free Plan — first request may take 30–60 seconds to wake up.

### 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin email | `password` |
| **User** | Register freely | Any password |

---

## ✨ Features

- 🔆 **Sell Energy** — Register as a solar, wind, or biogas producer
- 🛒 **Buy Energy** — Browse and send buy requests to producers
- 🔄 **P2P Trading** — Direct peer-to-peer energy trades
- 🤝 **Community** — Join micro-grids, co-ops, and energy clusters
- 🗺️ **Energy Map** — Live energy producers map of India
- 📊 **Dashboard** — Track your listings, requests, and trades
- 💬 **Support** — Ticket-based support system
- 🛡️ **Admin Panel** — Manage producers, buy requests, and support tickets
- ✉️ **Email Notifications** — Auto email on approval/rejection via Resend API
- 🔒 **Auth** — JWT + Cookie-based authentication
- 📱 **Mobile Responsive** — Hamburger menu below 768px

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4-000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?logo=render)

### Email
![Resend](https://img.shields.io/badge/Email-Resend%20API-000?logo=mail)

---

## 📁 Project Structure

```
GreenHub/
├── backend/
│   ├── src/
│   │   ├── server.js       # Express app, all API routes
│   │   ├── models.js       # Mongoose schemas
│   │   ├── middleware.js   # JWT auth middleware
│   │   └── email.js        # Resend email templates
│   ├── .env.example
│   ├── package.json
│   └── vercel.json
│
└── frontend/
    ├── src/
    │   ├── pages/          # 13 pages
    │   ├── components/     # Navbar, ProducerCard, etc.
    │   ├── context/        # AuthContext, NotificationContext
    │   └── api.js          # Axios config
    ├── .env.example
    └── vite.config.js
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Resend account (free) for emails

### 1. Clone the repo

```bash
git clone https://github.com/Vinaytomar-xm/GreenHub-backend.git
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000/api
npm run dev
```

---

## 🔑 Environment Variables

### Backend `.env`

| Variable | Description | Example |
|---|---|---|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT secret key | `your_secret_key` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |
| `RESEND_API_KEY` | Resend API key | `re_xxxxxxxxxxxx` |
| `EMAIL_FROM` | Sender email | `GreenHub <onboarding@resend.dev>` |

### Frontend `.env`

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |

---

## 📧 Email Notifications

Emails are sent via **Resend API** (HTTP-based, works on all hosting platforms):

| Trigger | Recipient | Email Type |
|---|---|---|
| Producer approved/rejected | Producer | Listing status update |
| Buy request accepted/rejected | Buyer | Request status update |
| Support ticket replied | User | Admin reply notification |

---

## 🌐 Deployment

### Backend → Render

1. Push code to GitHub
2. Create **Web Service** on [render.com](https://render.com)
3. Build: `npm install` · Start: `node src/server.js`
4. Add environment variables in Render dashboard

### Frontend → Vercel

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Framework: **Vite** · Output: `dist`
4. Add `VITE_API_URL=https://your-backend.onrender.com/api`

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with stats & how it works |
| Marketplace | `/marketplace` | Browse all energy producers |
| Sell Energy | `/sell-energy` | Multi-step producer registration |
| Buy Energy | `/buy-energy` | Browse & send buy requests |
| Trading | `/trading` | P2P energy trading |
| Community | `/community` | Energy groups & micro-grids |
| Energy Map | `/energy-map` | Live map of India |
| Dashboard | `/dashboard` | User dashboard |
| Support | `/support` | Ticket support system |
| Admin Panel | `/admin` | Admin management panel |

---

## 👨‍💻 Author

**Vinay Singh Tomar**
- GitHub: [@Vinaytomar-xm](https://github.com/Vinaytomar-xm)

---

## 📄 License

MIT License — feel free to use and modify.

---

<div align="center">
  Made with ❤️ Vinay singh Tomar
</div>
