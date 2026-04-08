# Archivo98

Experiencia web estilo Windows 98 con chat, economia, `slot98` y `Under Music`, usando Supabase en el frontend.

## Estructura

- `index.html`: entrada principal
- `app.js`: logica de UI, estado y conexion con Supabase
- `styles.css`: estilos
- `supabase*.sql`: migraciones y actualizaciones para la base

## Desarrollo local

Como es un sitio estatico, alcanza con servir la carpeta:

```powershell
python -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Deploy en Vercel

1. Subi esta carpeta a un repositorio de GitHub.
2. En Vercel elegi `Add New Project`.
3. Importa el repo.
4. Framework Preset: `Other`.
5. Root Directory: dejala en la raiz del repo.
6. Build Command: vacio.
7. Output Directory: vacio.
8. Deploy.

Vercel detecta este proyecto como sitio estatico y publica `index.html` sin build extra.

## Supabase

El proyecto usa una URL publica y una `anon key` en el cliente. Eso es normal para Supabase frontend, pero:

- no subas nunca una `service_role key`
- revisa las politicas RLS antes de publicar
- confirma que las tablas y buckets usados en `app.js` existan en produccion

SQL util incluido en el repo:

- `supabase.sql`
- `supabase_update_economy.sql`
- `supabase_update_rewards_system.sql`
- `supabase_update_social_graph.sql`
- `supabase_update_music_community.sql`

## Flujo sugerido

```powershell
git init
git add .
git commit -m "Initial deploy-ready version"
```

Despues crea el repo remoto en GitHub y ejecuta:

```powershell
git remote add origin TU_URL_DE_GITHUB
git branch -M main
git push -u origin main
```
