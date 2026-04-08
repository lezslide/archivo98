alter table public.users
  add column if not exists avatar_url text default '',
  add column if not exists chat_skin text not null default 'classic';

update public.users
set avatar_url = coalesce(avatar_url, ''),
    chat_skin = coalesce(chat_skin, 'classic');

drop policy if exists "users_select_self" on public.users;
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
