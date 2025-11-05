-- Complete database setup for Stockstrail reviews
-- Run this in your Supabase SQL Editor

-- 1. Create the reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  company TEXT,
  position TEXT NOT NULL,
  comment TEXT NOT NULL,
  rating DECIMAL(2,1) NOT NULL CHECK (rating >= 1 AND rating <= 5)
);

-- 2. Create performance indexes
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);

-- 3. Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 4. Create security policies
CREATE POLICY "Allow public review submission" ON reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public review reading" ON reviews
  FOR SELECT USING (true);

-- 5. Insert sample reviews for testing
INSERT INTO reviews (name, company, position, comment, rating) VALUES
('John Smith', 'Tech Corp', 'Software Engineer', 'Excellent service and great investment advice!', 5.0),
('Sarah Johnson', 'Finance Inc', 'Investment Manager', 'Stockstrail helped me achieve my financial goals.', 4.5),
('Mike Chen', 'Startup Co', 'CEO', 'Professional team with excellent market insights.', 4.0),
('Lisa Brown', 'Consulting Ltd', 'Financial Advisor', 'Outstanding customer service and portfolio management.', 5.0),
('David Wilson', 'Retail Corp', 'Business Owner', 'Great platform for managing my investments.', 4.5)
ON CONFLICT DO NOTHING;

-- 6. Verify the setup
SELECT 'Database setup completed successfully!' as status;
SELECT COUNT(*) as total_reviews FROM reviews;


-- Ensure table exists in public schema
create table if not exists public.queries (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  message text not null
);

-- RLS on
alter table public.queries enable row level security;

-- Clean old policies (optional but avoids duplicates)
drop policy if exists "Allow insert for queries (public form)" on public.queries;
drop policy if exists "Allow read for authenticated" on public.queries;

-- Allow public (anon) and authenticated inserts from the website
create policy "Allow insert for queries (public form)"
on public.queries
for insert
to anon, authenticated
with check (true);

-- Optional: only allow reads to authenticated (keeps data private)
create policy "Allow read for authenticated"
on public.queries
for select
to authenticated
using (true);