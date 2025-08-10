const express = require('express');
const router = express.Router();

// In production, these come from DB. For starter, return seeded list.
const LOAN_TYPES = [
  { id: 'home', name: 'Home Loan', docs: ['ID','Address','Income','Property Documents'] },
  { id: 'personal', name: 'Personal Loan', docs: ['ID','Address','Income'] },
  { id: 'education', name: 'Education Loan', docs: ['ID','Address','Income','Admission Docs'] },
  { id: 'business', name: 'Business Loan', docs: ['ID','Address','Business Proof','Income'] },
  { id: 'vehicle', name: 'Vehicle Loan', docs: ['ID','Address','Income','Vehicle Docs'] },
];

router.get('/', (req,res) => {
  res.json(LOAN_TYPES);
});

module.exports = router;
