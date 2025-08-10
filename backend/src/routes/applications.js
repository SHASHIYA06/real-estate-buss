const express = require('express');
const router = express.Router();

// Demo in-memory store if no DB
const STORE = [];

// Helper to persist to Postgres if pool exists
async function persistToDB(pool, app) {
  if (!pool) return null;
  const insert = `INSERT INTO applications(name,email,phone,loan_type_key,preferred_bank,amount,status,created_at) VALUES($1,$2,$3,$4,$5,$6,$7,now()) RETURNING id`;
  const vals = [app.name, app.email, app.phone, app.loan_type, app.preferred_bank || null, app.amount || null, 'New'];
  try {
    const r = await pool.query(insert, vals);
    return r.rows[0].id;
  } catch (e) {
    console.error('DB insert failed', e.message);
    return null;
  }
}

router.get('/', async (req,res) => {
  // If DB present, optionally fetch from DB - for starter return STORE
  res.json(STORE);
});

router.post('/', async (req,res) => {
  const data = req.body;
  data.id = STORE.length + 1;
  data.status = 'New';
  data.created_at = new Date().toISOString();
  STORE.unshift(data);

  // Persist to DB if pool available
  const pool = req.pool;
  if (pool) {
    const dbId = await persistToDB(pool, data);
    if (dbId) data.dbId = dbId;
  }

  // Here you could call Google Sheets append service (not included - requires service account)
  console.log('New application received:', data);
  return res.json({ success:true, application:data });
});

router.patch('/:id/status', (req,res) => {
  const id = Number(req.params.id);
  const app = STORE.find(s => s.id === id);
  if (!app) return res.status(404).json({ error: 'Not found' });
  app.status = req.body.status || app.status;
  return res.json({ success:true, application:app });
});

module.exports = router;
