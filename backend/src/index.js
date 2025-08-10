require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// DB pool (if DATABASE_URL provided)
let pool = null;
if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  pool.on('error', (err) => console.error('PG Pool error', err));
} else {
  console.log('No DATABASE_URL provided — running in demo in-memory mode.');
}

// attach pool to req for convenience
app.use((req,res,next)=>{ req.pool = pool; next(); });

// routes
app.use('/api/loan-types', require('./routes/loanTypes'));
app.use('/api/banks', require('./routes/banks'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/auth', require('./routes/auth'));

app.get('/api/health', (req,res)=> res.json({ ok:true, timestamp: new Date().toISOString() }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Backend listening on port', PORT));
