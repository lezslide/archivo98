create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  username text not null,
  status text not null default 'offline' check (status in ('online', 'offline')),
  lecoins integer not null default 0 check (lecoins >= 0),
  credits integer not null default 0 check (credits >= 0),
  avatar_url text default '',
  chat_skin text not null default 'classic',
  bio text default '',
  instagram_handle text default '',
  tiktok_handle text default '',
  website_url text default '',
  role_label text default '',
  brand_name text default '',
  last_seen timestamptz default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  room text not null default 'global',
  user_id uuid references public.users(id) on delete set null,
  username text not null,
  content text not null check (char_length(content) <= 1200),
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.messages enable row level security;

drop policy if exists "users_select_auth" on public.users;
create policy "users_select_auth"
on public.users for select
to authenticated
using (true);

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
to anon, authenticated
using (room = 'global');

drop policy if exists "messages_insert_auth" on public.messages;
create policy "messages_insert_auth"
on public.messages for insert
to authenticated
with check (auth.uid() = user_id and room = 'global');

drop policy if exists "messages_insert_guest" on public.messages;
create policy "messages_insert_guest"
on public.messages for insert
to anon
with check (
  room = 'global'
  and user_id is null
  and char_length(username) between 1 and 40
  and char_length(content) between 1 and 1200
);

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end
$$;

notify pgrst, 'reload schema';
