# RegTracker V3

Production-ready Telegram Mini App for realtime registration tracking.

## Stack

- FastAPI
- PostgreSQL (Supabase)
- WebSockets
- React + Vite
- Tailwind
- Railway

## Setup

Backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```