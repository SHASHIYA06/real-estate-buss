const express = require('express');
const router = express.Router();

const ADMIN_USER = process.env.ADMIN_USER || 'Chandu@1234';
const ADMIN_PASS = process.env.ADMIN_PASS || 'Chandra@4321';

router.post('/login', (req,res)=>{
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return res.json({ success:true, token: 'STATIC_ADMIN_TOKEN' });
  }
  return res.status(401).json({ success:false, message:'Invalid credentials' });
});

module.exports = router;
