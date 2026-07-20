create extension if not exists pgcrypto;

create table if not exists public.under_map_locations (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 90),
  category text not null default 'other' check (category in ('fair', 'safe', 'clothes', 'other')),
  details text default '' check (char_length(details) <= 180),
  lat double precision not null check (lat between -90 and 90),
  lng double precision not null check (lng between -180 and 180),
  status text not null default 'published' check (status in ('published', 'hidden')),
  created_at timestamptz not null default now()
);

alter table public.under_map_locations enable row level security;

drop policy if exists "under_map_locations_select_published" on public.under_map_locations;
create policy "under_map_locations_select_published"
on public.under_map_locations for select
to anon, authenticated
using (status = 'published');

drop policy if exists "under_map_locations_insert_public" on public.under_map_locations;
drop policy if exists "under_map_locations_insert_auth" on public.under_map_locations;
create policy "under_map_locations_insert_auth"
on public.under_map_locations for insert
to authenticated
with check (status = 'published');

drop policy if exists "under_map_locations_delete_auth" on public.under_map_locations;
create policy "under_map_locations_delete_auth"
on public.under_map_locations for delete
to authenticated
using (true);
