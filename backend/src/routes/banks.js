const express = require('express');
const router = express.Router();

const SAMPLE = [
  { id:1, name:'State Bank of India', code:'SBI', loan_types: { home:8.35, personal:10.5, education:9.2 } },
  { id:2, name:'HDFC Bank', code:'HDFC', loan_types: { home:8.65, personal:11.0, education:9.5 } },
  { id:3, name:'ICICI Bank', code:'ICICI', loan_types: { home:8.55, personal:10.9, education:9.3 } },
  { id:4, name:'Axis Bank', code:'AXIS', loan_types: { home:8.70, personal:11.2 } },
  { id:5, name:'Punjab National Bank', code:'PNB', loan_types: { home:8.40, personal:10.8 } }
];

router.get('/', (req,res) => res.json(SAMPLE));

module.exports = router;
