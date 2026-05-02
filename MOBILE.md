# Archivo98 mobile

## Objetivo

Mantener `Archivo98` online y, al mismo tiempo, dejarlo listo para:

- instalarse como PWA
- empaquetarse como app Android
- preparar luego una version iPhone/iPad

## Estado actual

Ya queda agregada una base de:

- `site.webmanifest`
- `service-worker.js`
- `mobile-bootstrap.js`
- `capacitor.config.json`
- `package.json`

## Lo que funciona offline

Con esta base, el shell de la app puede abrir offline si ya se visito antes:

- `index.html`
- `styles.css`
- `app.js`
- algunas paginas y assets locales

## Lo que sigue siendo online

Estas funciones dependen de internet o de servicios externos:

- Supabase
- login remoto
- webhooks e integraciones de Instagram/Meta
- datos comunitarios que hoy vienen del backend

## Siguiente paso recomendado

1. Instalar dependencias:

```powershell
npm install
```

2. Inicializar plataformas:

```powershell
npx cap add android
npx cap add ios
```

3. Sincronizar cambios web:

```powershell
npx cap sync
```

4. Abrir Android Studio:

```powershell
npx cap open android
```

5. Abrir Xcode en Mac:

```powershell
npx cap open ios
```

## Publicacion

- Android: desde Android Studio se genera `APK` para prueba y `AAB` para Play Store.
- iPhone/iPad: desde Xcode se archiva y se sube a App Store Connect.

## Recomendacion de producto

Separar visualmente las funciones:

- `Modo offline`: musica, juegos, experiencia local, assets descargados
- `Modo online`: comunidad, perfiles, chat y automatizaciones
