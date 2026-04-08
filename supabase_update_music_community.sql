create table if not exists public.music_track_likes (
  id uuid primary key default gen_random_uuid(),
  track_id uuid not null references public.music_tracks(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (track_id, user_id)
);

create table if not exists public.music_track_plays (
  id uuid primary key default gen_random_uuid(),
  track_id uuid not null references public.music_tracks(id) on delete cascade,
  user_id uuid references public.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.music_tracks
  add column if not exists status text not null default 'pending';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'music_tracks_status_check'
  ) then
    alter table public.music_tracks
      add constraint music_tracks_status_check
      check (status in ('pending', 'approved', 'rejected'));
  end if;
end $$;

update public.music_tracks
set status = 'approved'
where status is null
   or status not in ('pending', 'approved', 'rejected');

alter table public.music_track_likes enable row level security;
alter table public.music_track_plays enable row level security;

drop policy if exists "music_tracks_select_approved_or_admin" on public.music_tracks;
create policy "music_tracks_select_approved_or_admin"
on public.music_tracks for select
to authenticated
using (
  status = 'approved'
  or created_by = auth.uid()
  or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
);

drop policy if exists "music_tracks_submit_auth" on public.music_tracks;
create policy "music_tracks_submit_auth"
on public.music_tracks for insert
to authenticated
with check (
  created_by = auth.uid()
  and (
    status = 'pending'
    or (
      status = 'approved'
      and exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
    )
  )
);

drop policy if exists "music_tracks_admin_update" on public.music_tracks;
create policy "music_tracks_admin_update"
on public.music_tracks for update
to authenticated
using (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'))
with check (exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email'));

drop policy if exists "music_track_likes_select_auth" on public.music_track_likes;
create policy "music_track_likes_select_auth"
on public.music_track_likes for select
to authenticated
using (true);

drop policy if exists "music_track_likes_insert_self" on public.music_track_likes;
create policy "music_track_likes_insert_self"
on public.music_track_likes for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "music_track_likes_delete_self" on public.music_track_likes;
create policy "music_track_likes_delete_self"
on public.music_track_likes for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "music_track_plays_select_auth" on public.music_track_plays;
create policy "music_track_plays_select_auth"
on public.music_track_plays for select
to authenticated
using (true);

drop policy if exists "music_track_plays_insert_auth" on public.music_track_plays;
create policy "music_track_plays_insert_auth"
on public.music_track_plays for insert
to authenticated
with check (user_id = auth.uid() or user_id is null);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'music',
  'music',
  true,
  12582912,
  array['audio/mpeg']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "music_storage_public_read" on storage.objects;
create policy "music_storage_public_read"
on storage.objects for select
to authenticated
using (bucket_id = 'music');

drop policy if exists "music_storage_insert_auth" on storage.objects;
create policy "music_storage_insert_auth"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'music'
  and auth.uid()::text = (storage.foldername(name))[1]
);

drop policy if exists "music_storage_update_own_or_admin" on storage.objects;
create policy "music_storage_update_own_or_admin"
on storage.objects for update
to authenticated
using (
  bucket_id = 'music'
  and (
    auth.uid()::text = (storage.foldername(name))[1]
    or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
  )
)
with check (
  bucket_id = 'music'
  and (
    auth.uid()::text = (storage.foldername(name))[1]
    or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
  )
);

drop policy if exists "music_storage_delete_own_or_admin" on storage.objects;
create policy "music_storage_delete_own_or_admin"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'music'
  and (
    auth.uid()::text = (storage.foldername(name))[1]
    or exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
  )
);
