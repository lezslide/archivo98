alter table public.music_tracks
  add column if not exists visibility text not null default 'public';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'music_tracks_visibility_check'
  ) then
    alter table public.music_tracks
      add constraint music_tracks_visibility_check
      check (visibility in ('public', 'private'));
  end if;
end $$;

update public.music_tracks
set visibility = 'public'
where visibility is null
   or visibility not in ('public', 'private');

drop policy if exists "music_tracks_select_approved_or_admin" on public.music_tracks;
create policy "music_tracks_select_approved_or_admin"
on public.music_tracks for select
to authenticated
using (
  (
    visibility = 'public'
    and status = 'approved'
  )
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
    visibility = 'private'
    or (
      visibility = 'public'
      and (
        status = 'pending'
        or (
          status = 'approved'
          and exists (select 1 from public.admin_emails a where a.email = auth.jwt()->>'email')
        )
      )
    )
  )
);
