insert into loan_types(key,name,required_docs) values
  ('home','Home Loan','["ID","Address","Income","Property Docs"]'),
  ('personal','Personal Loan','["ID","Address","Income"]'),
  ('education','Education Loan','["ID","Address","Income","Admission Docs"]'),
  ('vehicle','Vehicle Loan','["ID","Address","Income","Vehicle Docs"]')
on conflict (key) do nothing;

insert into banks(name,code) values
  ('State Bank of India','SBI'),
  ('HDFC Bank','HDFC'),
  ('ICICI Bank','ICICI'),
  ('Axis Bank','AXIS'),
  ('Punjab National Bank','PNB')
on conflict (code) do nothing;

insert into bank_offers(bank_id,loan_type_key,interest_rate,processing_fee,tenure_min,tenure_max) values
  ((select id from banks where code='SBI'),'home',8.35,1000,60,360),
  ((select id from banks where code='HDFC'),'home',8.65,1500,60,360),
  ((select id from banks where code='ICICI'),'personal',10.9,500,12,60)
on conflict do nothing;
