// This seed script is intended for Postgres/Supabase usage.
// It prints SQL statements for manual execution against your DB.
const fs = require('fs');
const sql = fs.readFileSync(__dirname + '/seed.sql', 'utf8');
console.log('-- Run the following SQL in your Postgres/Supabase SQL editor --');
console.log(sql);
