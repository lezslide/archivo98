alter table public.users
  add column if not exists bio text default '',
  add column if not exists instagram_handle text default '',
  add column if not exists tiktok_handle text default '',
  add column if not exists website_url text default '',
  add column if not exists role_label text default '',
  add column if not exists brand_name text default '';

create table if not exists public.user_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  tagline text default '',
  focus text not null check (focus in ('music', 'fashion', 'startup')),
  mode text not null,
  problem text default '',
  impact text default '',
  manifesto text default '',
  notes_primary text default '',
  notes_secondary text default '',
  ai_reply text default '',
  role_label text default '',
  brand_name text default '',
  instagram_handle text default '',
  tiktok_handle text default '',
  website_url text default '',
  bio text default '',
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_projects enable row level security;

drop policy if exists "user_projects_select_published_or_own" on public.user_projects;
create policy "user_projects_select_published_or_own"
on public.user_projects for select
to authenticated
using (is_published = true or auth.uid() = user_id);

drop policy if exists "user_projects_insert_own" on public.user_projects;
create policy "user_projects_insert_own"
on public.user_projects for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "user_projects_update_own" on public.user_projects;
create policy "user_projects_update_own"
on public.user_projects for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

alter publication supabase_realtime add table public.user_projects;
