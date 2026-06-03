# WinDispatch Broker Ratings API

Simple broker rating API for the WinDispatch Chrome extension.

## Deploy to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
cd windispatch-api
vercel

# 3. Add Vercel KV storage
# Go to: vercel.com → your project → Storage → Create KV Database
# Name it: windispatch-kv
# Connect to your project → it auto-adds KV_URL env vars

# 4. Redeploy after connecting KV
vercel --prod
```

## Endpoints

### GET /api/broker?mc={MC_NUMBER}
Returns ratings for a broker by MC number.

**Response:**
```json
{
  "mc": "1337281",
  "brokerName": "JUNG EXPRESS",
  "avg": 4.2,
  "count": 15,
  "reviews": [
    { "stars": 5, "comment": "Paid fast, great communication", "ts": 1234567890 }
  ]
}
```

### POST /api/broker
Submit a new rating.

**Body:**
```json
{
  "mc": "1337281",
  "brokerName": "JUNG EXPRESS",
  "stars": 4,
  "comment": "Paid in 12 days, good to work with"
}
```

**Response:**
```json
{ "ok": true, "avg": 4.2, "count": 16 }
```

## Environment Variables (auto-set by Vercel KV)
- KV_URL
- KV_REST_API_URL
- KV_REST_API_TOKEN
- KV_REST_API_READ_ONLY_TOKEN
