create table if not exists public.friend_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.users(id) on delete cascade,
  target_id uuid not null references public.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'denied')),
  created_at timestamptz not null default now(),
  responded_at timestamptz
);

create unique index if not exists friend_requests_unique_pair
on public.friend_requests (least(requester_id, target_id), greatest(requester_id, target_id));

alter table public.friend_requests enable row level security;

drop policy if exists "friend_requests_select_own" on public.friend_requests;
create policy "friend_requests_select_own"
on public.friend_requests for select
to authenticated
using (auth.uid() = requester_id or auth.uid() = target_id);

drop policy if exists "friend_requests_insert_own" on public.friend_requests;
create policy "friend_requests_insert_own"
on public.friend_requests for insert
to authenticated
with check (
  auth.uid() = requester_id
  and requester_id <> target_id
  and status = 'pending'
);

drop policy if exists "friend_requests_update_target" on public.friend_requests;
create policy "friend_requests_update_target"
on public.friend_requests for update
to authenticated
using (auth.uid() = target_id)
with check (
  auth.uid() = target_id
  and status in ('accepted', 'denied')
);

drop policy if exists "users_lookup_auth" on public.users;
create policy "users_lookup_auth"
on public.users for select
to authenticated
using (true);
