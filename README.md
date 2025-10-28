# Secure Survey Dashboard

A Next.js application demonstrating **server-side encryption/decryption** of sensitive survey data using **AES-256-GCM**.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Encryption](https://img.shields.io/badge/Encryption-AES--256--GCM-green?logo=letsencrypt)

---

## Features

- **Server-Side Rendering** with encrypted payload decryption
- **AES-256-GCM Encryption** with Node.js crypto
- **Animated UI** with Framer Motion
- **Real-time Search & Sort** functionality
- **Responsive Design** (mobile, tablet, desktop)
- **TypeScript** for type safety

---

## Quick Setup

### 1. Clone & Install

```bash
git clone https://github.com/suraj235/Fe-task.git
cd Fe-task
npm install
```

### 2. Generate Encryption Key

```bash
# Generate a secure 32-byte key
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Copy the output** (example):
```
XnZr8u95/MeQ3LpK9VwY2HxJ7NmT4RvW6SfA1BgC8dE=
```

### 3. Create Environment File

Create `.env.local` in the project root:

```bash
ENCRYPTION_KEY=paste-your-generated-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Open Browser

Navigate to **http://localhost:3000**

You should see 6 survey cards with search and sort functionality!

---

## 📁 Project Structure

```
secure-survey-dashboard/
├── app/
│   ├── page.tsx                    # Main page (SSR with decryption)
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Styles
│   └── api/surveys/route.ts        # API route (encrypts data)
├── components/
│   ├── SurveyCard.tsx              # Animated survey card
│   ├── SurveyList.tsx              # Search & sort logic
│   └── SearchFilter.tsx            # Search UI
├── lib/
│   └── encryption.ts               # Encryption utilities
├── types/
│   └── survey.ts                   # TypeScript types
└── .env.local                      # Environment variables (create this)
```

---

## How It Works

### Data Flow

```
API Route (encrypts) → Server (decrypts) → Client (displays)
```

---

## Features Demo

### Search
Type in the search box to filter surveys by title, category, or content.

### Sort
Use the dropdown to sort by date, title, or status.

### Animations
- Cards animate on page load (stagger effect)
- Hover over cards for elevation effect
- Smooth transitions when filtering

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Encryption**: Node.js crypto (AES-256-GCM)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

---

## Troubleshooting

### Error: "ENCRYPTION_KEY is not set"
**Fix**: Create `.env.local` with your encryption key

### Error: "Module not found: framer-motion"
**Fix**: Run `npm install`

### API returns 404
**Fix**: Restart dev server (`npm run dev`)

---

## Author

**Suraj Sanwal**
- Email: er.surajsanwal@gmail.com
- GitHub: [@suraj235](https://github.com/suraj235)

---

## 📄 License

MIT License - feel free to use this project for learning!

---

**Built with Next.js 16, TypeScript & AES-256-GCM Encryption** 🔒
