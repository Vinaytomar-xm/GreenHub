# 🌱 Greenity — P2P Renewable Energy Platform

A full-stack MERN (MongoDB, Express, React, Node.js) peer-to-peer green energy marketplace that connects renewable energy producers directly with consumers — no middlemen & this websites is unique because of this using Hinglish Version this is very attractive and unique , in case in future you can change the language.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Authentication & Auth Guards](#-authentication--auth-guards)
- [Bug Fixes (v2.1)](#-bug-fixes-v21)
- [Default Admin Account](#-default-admin-account)
- [Screenshots Overview](#-screenshots-overview)

---

## ✨ Features

### 🛒 Buy Energy
- Browse verified renewable energy producers (Solar, Wind, Biogas)
- Filter by type, sort by price or rating, search by name/location
- Send buy requests directly to producers
- **Login required** — unauthenticated users are redirected to login, then brought back after

### ⚡ P2P Trading
- Create live energy trade orders between producers and consumers
- Real-time live trade feed (auto-refreshes every 5 seconds)
- Energy mix visualization (Solar / Wind / Biogas breakdown)
- **Login required** to initiate trades

### 📋 Sell Energy
- Multi-step registration form for energy producers (4 steps)
- Collects owner info, energy details, pricing, and review
- Submitted listings go to Admin Panel for approval
- **Login required** to register as a producer

### 🤝 Community
- Browse local energy communities (Neighborhood Grid, Rural Co-op, Industrial Cluster, etc.)
- Join communities via modal form
- Live member count tracking
- **Login required** to join

### 🔗 Connect
- Role-based connection form (Consumer / Producer / Investor)
- Custom fields per role (energy needs, investment amount, producer capacity)
- All submissions stored in MongoDB for admin review
- **Login required** to submit

### 🗺️ Energy Map
- Live SVG map of India showing 15+ major cities
- Color-coded zones: 🟢 Surplus | 🔴 Deficit | 🟡 Balanced
- Auto-refreshes every 10 seconds
- Clickable cities with detailed stats popup

### 💬 Customer Support
- Categorized query form (Trading, Payment, Technical, Account)
- FAQ accordion section
- Auto-generated Ticket IDs (TICK-0001 format)
- Admin can view, reply, and resolve tickets

### 🛡️ Admin Panel (`/admin`)
- Producer Approvals — Review and approve/reject listings with notes
- Buy Requests — Accept or reject buyer requests
- Connections — View all connection form submissions
- Support Tickets — Reply, mark in-progress, resolve
- Users Table — View all registered users
- Live pending-count badges on each tab

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router v6 |
| Styling | Pure CSS with CSS variables (dark theme) |
| State | React Context API (Auth + Notifications) |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Auth | JWT (JSON Web Tokens), bcryptjs |
| HTTP Client | Axios |

---

## 📁 Project Structure

```
greengrid/
├── backend/
│   ├── src/
│   │   ├── server.js         ← Express app + all API routes
│   │   ├── models.js         ← Mongoose schemas (User, Producer, Trade, etc.)
│   │   ├── middleware.js     ← JWT protect + adminOnly guards
│   │   └── data.js           ← Static seed data reference
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── context/
    │   │   ├── AuthContext.jsx           ← JWT auth state (login/logout/user)
    │   │   └── NotificationContext.jsx  ← Global toast notifications
    │   ├── components/
    │   │   ├── Navbar.jsx               ← Auth-aware navigation
    │   │   ├── ProducerCard.jsx         ← Reusable producer card
    │   │   ├── Background.jsx           ← Animated background
    │   │   └── Notification.jsx         ← Toast notification UI
    │   ├── pages/
    │   │   ├── Login.jsx                ← Login with redirect-back support
    │   │   ├── Signup.jsx               ← 2-step signup with role selection
    │   │   ├── Home.jsx                 ← Landing page
    │   │   ├── Dashboard.jsx            ← User dashboard
    │   │   ├── BuyEnergy.jsx            ← Browse & request energy (auth guarded)
    │   │   ├── SellEnergy.jsx           ← Register as producer (auth guarded)
    │   │   ├── Trading.jsx              ← P2P trade orders (auth guarded)
    │   │   ├── Marketplace.jsx          ← Producer marketplace
    │   │   ├── Community.jsx            ← Communities + join (auth guarded)
    │   │   ├── Connect.jsx              ← Connection form (auth guarded)
    │   │   ├── EnergyMap.jsx            ← Live India energy map
    │   │   ├── Support.jsx              ← Customer support tickets
    │   │   └── AdminPanel.jsx           ← Admin-only panel
    │   ├── api.js                       ← Axios instance + all API functions
    │   ├── App.jsx                      ← Routes definition
    │   ├── main.jsx                     ← React entry point
    │   └── index.css                    ← Global styles + CSS variables
    ├── index.html
    ├── vite.config.js                   ← Vite + /api proxy config
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** running locally (`mongod`) OR a MongoDB Atlas connection string

### 1. Clone / Extract the project

```bash
unzip greenhub.zip
cd greenhub
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend starts on **http://localhost:5000**

On first run, the database is automatically seeded with:
- 8 approved energy producers
- 1 admin account (see below)

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend starts on **http://localhost:5173**

Vite automatically proxies all `/api` requests to `http://localhost:5000` — no CORS issues.

---

## 🔧 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=mongodb://localhost:27017/greengrid
JWT_SECRET=your_super_secret_key_here
PORT=5000
```

| Variable | Default | Description |
|---|---|---|
| `MONGO_URI` | `mongodb://localhost:27017/greengrid` | MongoDB connection string |
| `JWT_SECRET` | `greengrid_secret_2024` | Secret key for signing JWTs |
| `PORT` | `5000` | Port for the Express server |

---

## 📡 API Reference

### Auth Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/signup` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login, returns JWT token |
| GET | `/api/auth/me` | Protected | Get current user info |

### Producer Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/producers` | Public | List approved producers (filter & sort supported) |
| GET | `/api/producers/:id` | Public | Get single producer |
| POST | `/api/producers` | Public | Submit new producer listing |

### Trade Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/trades` | Public | List recent trades |
| POST | `/api/trades` | Public | Create a new trade |

### Buy Request Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/buy-requests` | Public | List all buy requests |
| POST | `/api/buy-requests` | Public | Submit a buy request |

### Community Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/communities` | Public | List all communities with member counts |
| POST | `/api/communities/:id/join` | Public | Join a community |

### Other Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/connections` | Submit a connect/interest form |
| POST | `/api/support` | Submit a support ticket |
| GET | `/api/stats` | Platform-wide statistics |
| GET | `/api/energy-map` | City energy data for the map |

### Admin Routes (Protected + Admin Role Required)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/admin/producers` | All producers (including pending) |
| PATCH | `/api/admin/producers/:id` | Approve / reject a producer |
| GET | `/api/admin/users` | All registered users |
| GET | `/api/admin/buy-requests` | All buy requests |
| PATCH | `/api/admin/buy-requests/:id` | Update buy request status |
| GET | `/api/admin/connections` | All connection submissions |
| GET | `/api/support` | All support tickets |
| PATCH | `/api/support/:id` | Reply / resolve a support ticket |

---

## 🔐 Authentication & Auth Guards

JWT tokens are stored in `localStorage` under the key `gg_token` and attached to every Axios request via the `Authorization: Bearer <token>` header.

### Protected Actions (Login Required)

If an unauthenticated user tries to perform any of the following actions, they are:
1. Shown a toast notification: *"Login karo pehle 🔐"*
2. Redirected to `/login?redirect=<current-page>`
3. After successful login, automatically brought back to the original page

| Page | Protected Action |
|---|---|
| Buy Energy | Clicking "Buy Request" on a producer |
| Sell Energy | Submitting the producer registration form |
| Trading | Clicking "Initiate Trade" |
| Community | Clicking "Join Community" |
| Connect | Submitting the connect form |

### Admin Protection

The `/admin` route is protected by both JWT authentication and a role check (`role === 'admin'`). Any non-admin user attempting to access it will be redirected.

---

## 🐛 Bug Fixes (v2.1)

### Fix 1 — `/buy-requests` 400 Error

**Problem:** The frontend was sending `producerId: modal.id`, but Mongoose MongoDB documents return `_id` (ObjectId) as the primary identifier. In some cases `modal.id` was resolving to `undefined`, causing the backend validation to fail with:

```
producerId, buyerName, buyerEmail and amount are required.
```

**Fix:** Updated all producer ID references to use `modal._id || modal.id` as a safe fallback:

```js
// Before (broken)
createBuyRequest({ producerId: modal.id, ... })

// After (fixed)
createBuyRequest({ producerId: modal._id || modal.id, ... })
```

Same fix applied in `Trading.jsx` where `parseInt(selectedId)` was incorrectly treating MongoDB ObjectId strings as integers.

### Fix 2 — Login Redirect Feature

Added auth guards across all action-triggering pages so that unauthenticated users are redirected to login before they can submit any requests, trades, or community joins (see section above).

---

## 🔑 Default Admin Account

An admin account is automatically created on first startup:

| Field | Value |
|---|---|
| Email | `admin@greengrid.in` |
| Password | `admin123` |
| Role | `admin` |

> ⚠️ Change the password in production!

---

## 🗃️ Database Models

| Model | Key Fields |
|---|---|
| `User` | name, email, password (hashed), role, userType, city |
| `Producer` | name, type, location, capacity, price, status (pending/approved/rejected) |
| `Trade` | tradeId, producerId, consumer, amount, status, co2Offset |
| `BuyRequest` | reqId, producerId, buyerName, buyerEmail, amount, duration, status |
| `Connection` | role, name, email, city, message |
| `CommunityMember` | communityId, name, email, reason |
| `SupportQuery` | ticketId, name, email, category, subject, message, adminReply, status |

---

## 📦 Scripts

### Backend
```bash
npm run dev     # Start with nodemon (hot reload)
npm start       # Start normally
```

### Frontend
```bash
npm run dev     # Start Vite dev server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 🌐 Default Ports

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| MongoDB | mongodb://localhost:27017/greengrid |

## Made with Vinay singh Tomar
