# ⚡ GreenHub — India's Renewable Energy Marketplace

<div align="center">

![GreenHub Banner](https://img.shields.io/badge/GreenHub-Renewable%20Energy%20Marketplace-4ade80?style=for-the-badge&logo=leaflet&logoColor=white)

**Buy & Sell Green Energy Directly — No Middlemen. No Broker Fees. 100% Green.**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-greenhub--frontend--coral.vercel.app-4ade80?style=for-the-badge)](https://greenhub-frontend-coral.vercel.app)
[![Backend API](https://img.shields.io/badge/🔧%20Backend%20API-Railway-blueviolet?style=for-the-badge)](https://greenhub-backend-production.up.railway.app)
[![GitHub](https://img.shields.io/badge/GitHub-Vinaytomar--xm-181717?style=for-the-badge&logo=github)](https://github.com/Vinaytomar-xm)

</div>

---

## 🌍 Live Demo

| | Link |
|---|---|
| 🌐 **Frontend (Vercel)** | [https://greenhub-frontend-coral.vercel.app](https://greenhub-frontend-coral.vercel.app) |
| 🔧 **Backend API (Railway)** | [https://greenhub-backend-production.up.railway.app](https://greenhub-backend-production.up.railway.app) |
| 🗄️ **Database** | MongoDB Atlas (ap-south-1, Mumbai) |

### 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin-email` |'password' |
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
- ✉️ **Email Notifications** — Auto email on approval/rejection via SendGrid
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
![Railway](https://img.shields.io/badge/Deployed-Railway-0B0D0E?logo=railway)

### Email
![SendGrid](https://img.shields.io/badge/Email-SendGrid%20API-1A82E2?logo=sendgrid)

---

## 📁 Project Structure

```
GreenHub/
├── backend/
│   ├── src/
│   │   ├── server.js       # Express app, all API routes
│   │   ├── models.js       # Mongoose schemas
│   │   ├── middleware.js   # JWT auth middleware
│   │   └── email.js        # SendGrid email templates
│   ├── .env.example
│   ├── package.json
│   └── nixpacks.toml
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
- SendGrid account (free) for emails

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
| `FRONTEND_URL` | Frontend URL for CORS | `https://greenhub-frontend-coral.vercel.app` |
| `SENDGRID_API_KEY` | SendGrid API key | `SG.xxxxxxxxxxxx` |
| `EMAIL_FROM` | Verified sender email | `tomarvinaysingh70@gmail.com` |

### Frontend `.env`

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API URL | `https://greenhub-backend-production.up.railway.app/api` |

---

## 📧 Email Notifications

Emails are sent via **SendGrid HTTP API** (port 443 — works on Railway, Render, everywhere):

| Trigger | Recipient | Email Type |
|---|---|---|
| Producer approved/rejected | Producer | Listing status update |
| Buy request accepted/rejected | Buyer | Request status update |
| Support ticket replied | User | Admin reply notification |

---

## 🌐 Deployment

### Backend → Railway

1. Push code to GitHub
2. **[railway.app](https://railway.app)** → **New Project** → **Deploy from GitHub**
3. Select `greenhub-backend` repo
4. **Variables** tab → add all env variables
5. **Settings** → **Networking** → **Generate Domain**

### Frontend → Vercel

1. Push code to GitHub
2. **[vercel.com](https://vercel.com)** → Import project
3. Framework: **Vite** · Output: `dist`
4. Add `VITE_API_URL=https://your-backend.up.railway.app/api`
5. Deploy → Redeploy after backend URL is ready

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
  Made with ❤️ Vinay Singh Tomar
</div>
