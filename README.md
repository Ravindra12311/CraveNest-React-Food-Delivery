# CraveNest — Food Delivery Frontend

A responsive React food-delivery demo inspired by modern restaurant discovery and ordering apps.

## Tech stack
- React + Vite
- React Router
- Lucide React icons
- Plain CSS (responsive layout)
- Local mock data (no backend required)

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open a terminal inside the `cravenest` folder.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Demo routes
- `/` — Home, search, categories, restaurant cards
- `/restaurant/:id` — Restaurant details and menu
- `/offers` — Coupon offers
- `/cart` — Cart and bill calculation
- `/checkout` — Mock checkout
- `/orders` — Order history
- `/profile` — Guest profile and saved restaurants

## Demo coupon codes
- `CRAVE50` — 50% off (up to ₹100), minimum order ₹199
- `WELCOME125` — ₹125 off, minimum order ₹399
- `FEAST20` — 20% off (up to ₹150), minimum order ₹299

## Notes
- This is a frontend-only demo. Restaurant data, menu data, checkout, payment, and order history are mocked in browser memory.
- No real payment is processed and no backend/API is connected.
- Food photos load from Unsplash, so an internet connection is needed for those images.
- The delivery location is sample content (Guntur, Andhra Pradesh); change it in `src/App.jsx` to your preferred demo location.
