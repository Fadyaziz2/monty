// Node.js + Express + MongoDB (Mongoose)
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss');
require('dotenv').config();

const app = express();
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors());
app.use(express.json({ limit: '200kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Mongo Connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/monty_birthday';
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ Mongo connected'))
  .catch(err => console.error('❌ Mongo connection error:', err));

// Schema + Model
const wishSchema = new mongoose.Schema({
  wisher: { type: String, trim: true },
  wish: { type: String, trim: true },
  lang: { type: String, trim: true, default: 'en' },
  ip: String
}, { timestamps: true });

const Wish = mongoose.model('Wish', wishSchema);

// Routes
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/wishes', async (req, res) => {
  try {
    const { wisher, wish, lang } = req.body || {};
    if (!wish || !wisher) return res.status(400).json({ error: 'Missing fields' });

    const safeWisher = xss(String(wisher)).slice(0, 100);
    const safeWish = xss(String(wish)).slice(0, 1000);
    const safeLang = String(lang || 'en').slice(0, 5);

    const doc = await Wish.create({
      wisher: safeWisher,
      wish: safeWish,
      lang: safeLang,
      ip: req.ip
    });

    res.json({ ok: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/wishes', async (req, res) => {
  const items = await Wish.find().sort({ createdAt: -1 }).limit(1000).lean();
  res.json({ wishes: items });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
