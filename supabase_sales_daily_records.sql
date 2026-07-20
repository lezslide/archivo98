create table if not exists public.sales_daily_records (
  date date primary key,
  money numeric not null default 0,
  money_goal numeric not null default 50,
  km numeric not null default 0,
  km_goal numeric not null default 25,
  sales jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.sales_daily_records enable row level security;

drop policy if exists "Public can read sales daily records" on public.sales_daily_records;
drop policy if exists "Only Jeremy can read sales daily records" on public.sales_daily_records;
create policy "Only Jeremy can read sales daily records"
  on public.sales_daily_records
  for select
  using ((auth.jwt() ->> 'email') = 'tumberjeremy@gmail.com');

drop policy if exists "Public can insert sales daily records" on public.sales_daily_records;
drop policy if exists "Only Jeremy can insert sales daily records" on public.sales_daily_records;
create policy "Only Jeremy can insert sales daily records"
  on public.sales_daily_records
  for insert
  with check ((auth.jwt() ->> 'email') = 'tumberjeremy@gmail.com');

drop policy if exists "Public can update sales daily records" on public.sales_daily_records;
drop policy if exists "Only Jeremy can update sales daily records" on public.sales_daily_records;
create policy "Only Jeremy can update sales daily records"
  on public.sales_daily_records
  for update
  using ((auth.jwt() ->> 'email') = 'tumberjeremy@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'tumberjeremy@gmail.com');
