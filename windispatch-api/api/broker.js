// api/broker.js — WinDispatch Broker Ratings API
// GET  /api/broker?mc=1337281       → get ratings for broker
// POST /api/broker                  → submit a new rating
// Uses Vercel KV (Redis) for storage

import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ── GET — fetch broker ratings ──────────────────────────────────────────
  if (req.method === 'GET') {
    const { mc } = req.query;
    if (!mc || !/^\d+$/.test(mc)) {
      return res.status(400).json({ error: 'Invalid MC number' });
    }

    const key = `broker:${mc}`;
    const data = await kv.get(key);

    if (!data) {
      return res.status(200).json({
        mc,
        avg: null,
        count: 0,
        reviews: []
      });
    }

    return res.status(200).json(data);
  }

  // ── POST — submit a rating ──────────────────────────────────────────────
  if (req.method === 'POST') {
    const { mc, brokerName, stars, comment } = req.body || {};

    // Validate
    if (!mc || !/^\d+$/.test(String(mc))) {
      return res.status(400).json({ error: 'Invalid MC number' });
    }
    if (!stars || stars < 1 || stars > 5) {
      return res.status(400).json({ error: 'Stars must be 1-5' });
    }
    if (comment && comment.length > 300) {
      return res.status(400).json({ error: 'Comment too long (max 300 chars)' });
    }

    const key = `broker:${String(mc)}`;
    const existing = await kv.get(key) || { mc: String(mc), brokerName: brokerName || '', count: 0, sum: 0, avg: null, reviews: [] };

    // Add review
    const review = {
      stars: parseInt(stars),
      comment: (comment || '').trim().substring(0, 300),
      ts: Date.now()
    };

    existing.reviews.unshift(review); // newest first
    if (existing.reviews.length > 50) existing.reviews = existing.reviews.slice(0, 50); // keep last 50
    existing.count = (existing.count || 0) + 1;
    existing.sum   = (existing.sum   || 0) + parseInt(stars);
    existing.avg   = Math.round((existing.sum / existing.count) * 10) / 10;
    if (brokerName) existing.brokerName = brokerName;

    await kv.set(key, existing);

    return res.status(200).json({ ok: true, avg: existing.avg, count: existing.count });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
