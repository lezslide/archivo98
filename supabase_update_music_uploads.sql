update storage.buckets
set file_size_limit = 12582912,
    allowed_mime_types = array['audio/mpeg', 'audio/mp3', 'application/octet-stream']
where id = 'music';

drop policy if exists "music_storage_public_read" on storage.objects;
create policy "music_storage_public_read"
on storage.objects for select
to public
using (bucket_id = 'music');
