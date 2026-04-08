create table if not exists public.instagram_comment_codes (
  id uuid primary key default gen_random_uuid(),
  ig_user_id text not null,
  ig_username text not null default '',
  campaign_key text not null default 'default',
  promo_code_id uuid not null references public.promo_codes(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (ig_user_id, campaign_key)
);

alter table public.instagram_comment_codes enable row level security;

drop policy if exists "instagram_comment_codes_admin_select" on public.instagram_comment_codes;
create policy "instagram_comment_codes_admin_select"
on public.instagram_comment_codes for select
to authenticated
using (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));
