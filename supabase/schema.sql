-- Supabase schema for Loan Lead App
create extension if not exists pgcrypto;

create table if not exists loan_types (
  id serial primary key,
  key text unique,
  name text not null,
  required_docs jsonb default '[]',
  created_at timestamptz default now()
);

create table if not exists banks (
  id serial primary key,
  name text not null,
  code text unique,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create table if not exists bank_offers (
  id serial primary key,
  bank_id int references banks(id) on delete cascade,
  loan_type_key text,
  interest_rate numeric,
  processing_fee numeric,
  tenure_min int,
  tenure_max int,
  last_updated timestamptz default now()
);

create table if not exists applications (
  id serial primary key,
  name text,
  email text,
  phone text,
  loan_type_key text,
  preferred_bank text,
  amount numeric,
  status text default 'New',
  created_at timestamptz default now()
);
