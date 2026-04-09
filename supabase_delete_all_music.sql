begin;

delete from public.music_track_likes;
delete from public.music_track_plays;
delete from public.music_tracks;

delete from storage.objects
where bucket_id = 'music';

commit;
