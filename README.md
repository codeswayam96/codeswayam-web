# CodeSwayam Marketing Website (codeswayam-web)

## Overview
**codeswayam-web** is the public-facing marketing and landing website for the CodeSwayam platform. Built with **Next.js** (App Router), **React 19**, and **Tailwind CSS**, it highlights platform products, pricing tiers, and allows new users to discover, register, and subscribe.

---

## 🎯 Key Features
- **Landing Page & Features Grid**: Highlights single products (Auraflow, EMS, etc.) and bundles.
- **Dynamic Pricing Table**: Connects to the NestJS `core-api` billing plans endpoint (`/subscriptions/plans`) to render up-to-date pricing in INR/USD.
- **SSO Access**: Integrates with Clerk authentication through `codeswayam-auth` for user registration.
- **Responsive Layout**: Premium web design optimized for mobile and desktop screens.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16.x (React 19.x)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, `@codeswayam/ui`
- **Analytics**: `@codeswayam/analytics`
- **HTTP client**: `@codeswayam/api-client` (Axios wrapper)

---

## 🔧 Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_URL=http://localhost:3003
```

### 3. Start Development Server
```bash
npm run dev
# Running on http://localhost:3001
```

---

## 🚀 Build and Deploy
```bash
npm run build
npm start
```
