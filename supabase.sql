create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  username text not null,
  status text not null default 'offline' check (status in ('online', 'offline')),
  lecoins integer not null default 100 check (lecoins >= 0),
  credits integer not null default 0 check (credits >= 0),
  last_seen timestamptz default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  room text not null default 'global',
  user_id uuid references public.users(id) on delete set null,
  username text not null,
  content text not null check (char_length(content) <= 280),
  created_at timestamptz not null default now()
);

create table if not exists public.private_messages (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid references public.users(id) on delete cascade,
  to_user_id uuid references public.users(id) on delete cascade,
  content text not null check (char_length(content) <= 1000),
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.messages enable row level security;
alter table public.private_messages enable row level security;

drop policy if exists "users_select_self" on public.users;
create policy "users_select_self"
on public.users for select
to authenticated
using (auth.uid() = id);

drop policy if exists "users_insert_self" on public.users;
create policy "users_insert_self"
on public.users for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "users_update_self" on public.users;
create policy "users_update_self"
on public.users for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "messages_select_all" on public.messages;
create policy "messages_select_all"
on public.messages for select
to authenticated
using (true);

drop policy if exists "messages_insert_auth" on public.messages;
create policy "messages_insert_auth"
on public.messages for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "private_messages_select_own" on public.private_messages;
create policy "private_messages_select_own"
on public.private_messages for select
to authenticated
using (auth.uid() = from_user_id or auth.uid() = to_user_id);

drop policy if exists "private_messages_insert_own" on public.private_messages;
create policy "private_messages_insert_own"
on public.private_messages for insert
to authenticated
with check (auth.uid() = from_user_id);

alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.users;
