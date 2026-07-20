create table if not exists public.direct_by_episodes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Sin titulo',
  days integer not null default 1 check (days >= 1 and days <= 90),
  hook text not null default '',
  notes text not null default '',
  emotions jsonb not null default '[]'::jsonb,
  day_status jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.direct_by_episodes enable row level security;

drop policy if exists "direct by select own" on public.direct_by_episodes;
drop policy if exists "direct by insert own" on public.direct_by_episodes;
drop policy if exists "direct by update own" on public.direct_by_episodes;
drop policy if exists "direct by delete own" on public.direct_by_episodes;

create policy "direct by select own"
  on public.direct_by_episodes for select
  using (auth.uid() = user_id);

create policy "direct by insert own"
  on public.direct_by_episodes for insert
  with check (auth.uid() = user_id);

create policy "direct by update own"
  on public.direct_by_episodes for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "direct by delete own"
  on public.direct_by_episodes for delete
  using (auth.uid() = user_id);

create index if not exists direct_by_episodes_user_updated_idx
  on public.direct_by_episodes (user_id, updated_at desc);
