# FUTO Connect

A web app for Federal University of Technology, Owerri (FUTO) students.

## Features (MVP)

- **Assignment Marketplace** – Post coursework with a price in USDT. Other students can contact you to take the job.
- **Events & Clubs** – Browse and join campus events and student clubs.
- **Fundraisers** – Raise crypto for events, clubs or projects with progress tracking.
- **Crypto Wallet** – Demo wallet for receiving and sending USDT (real integration coming next).

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Mock data for now (ready for Supabase / Firebase later)

## Getting Started

```bash
cd futo-connect
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Next Steps (to make it production-ready)

1. Connect Supabase for real auth, database and realtime messaging.
2. Integrate a real crypto wallet (TronLink / Phantom / WalletConnect) + USDT transfers.
3. Add escrow logic so funds are locked until the poster confirms delivery.
4. Student verification (optional school email or ID upload).
5. Messaging system between poster and helper.

## Academic Integrity Notice

This platform includes an assignment marketplace. Users are responsible for complying with FUTO academic regulations. Submitting another person’s work as your own is academic misconduct.

---

Built with ❤️ for FUTO students.
