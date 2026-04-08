alter table public.users
  alter column lecoins set default 0;

update public.users
set lecoins = 0
where lecoins = 100;

alter table public.users
  add column if not exists avatar_url text default '',
  add column if not exists chat_skin text not null default 'classic';

create table if not exists public.admin_emails (
  email text primary key
);

create table if not exists public.promo_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  credits_amount integer not null default 10 check (credits_amount > 0),
  source text default 'manychat_rx',
  created_by uuid references public.users(id) on delete set null,
  claimed_by uuid references public.users(id) on delete set null,
  claimed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.game_config (
  key_name text primary key,
  key_value text not null,
  updated_by uuid references public.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create table if not exists public.music_tracks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist text,
  stream_url text not null,
  cover_url text default '',
  created_by uuid references public.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.user_stickers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  sticker_key text not null,
  quantity integer not null default 1 check (quantity >= 0),
  created_at timestamptz not null default now(),
  unique (user_id, sticker_key)
);

insert into public.game_config (key_name, key_value)
values ('slot_win_rate', '10')
on conflict (key_name) do nothing;

alter table public.admin_emails enable row level security;
alter table public.promo_codes enable row level security;
alter table public.game_config enable row level security;
alter table public.music_tracks enable row level security;
alter table public.user_stickers enable row level security;

drop policy if exists "admin_emails_select_self" on public.admin_emails;
create policy "admin_emails_select_self"
on public.admin_emails for select
to authenticated
using (email = auth.jwt()->>'email');

drop policy if exists "promo_codes_select_auth" on public.promo_codes;
create policy "promo_codes_select_auth"
on public.promo_codes for select
to authenticated
using (true);

drop policy if exists "promo_codes_insert_admin" on public.promo_codes;
create policy "promo_codes_insert_admin"
on public.promo_codes for insert
to authenticated
with check (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));

drop policy if exists "promo_codes_update_claim_or_admin" on public.promo_codes;
create policy "promo_codes_update_claim_or_admin"
on public.promo_codes for update
to authenticated
using (
  claimed_by is null
  or claimed_by = auth.uid()
  or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
)
with check (
  claimed_by = auth.uid()
  or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
);

drop policy if exists "game_config_select_auth" on public.game_config;
create policy "game_config_select_auth"
on public.game_config for select
to authenticated
using (true);

drop policy if exists "game_config_admin_write" on public.game_config;
create policy "game_config_admin_write"
on public.game_config for insert
to authenticated
with check (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));

drop policy if exists "game_config_admin_update" on public.game_config;
create policy "game_config_admin_update"
on public.game_config for update
to authenticated
using (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'))
with check (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));

drop policy if exists "music_tracks_select_auth" on public.music_tracks;
create policy "music_tracks_select_auth"
on public.music_tracks for select
to authenticated
using (true);

drop policy if exists "music_tracks_admin_insert" on public.music_tracks;
create policy "music_tracks_admin_insert"
on public.music_tracks for insert
to authenticated
with check (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));

drop policy if exists "user_stickers_select_own" on public.user_stickers;
create policy "user_stickers_select_own"
on public.user_stickers for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "user_stickers_insert_own" on public.user_stickers;
create policy "user_stickers_insert_own"
on public.user_stickers for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "user_stickers_update_own" on public.user_stickers;
create policy "user_stickers_update_own"
on public.user_stickers for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "user_stickers_delete_own" on public.user_stickers;
create policy "user_stickers_delete_own"
on public.user_stickers for delete
to authenticated
using (user_id = auth.uid());
