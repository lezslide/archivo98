# Archivo 98 - Primer prototipo Roblox

Concepto: el jugador entra a una oficina abandonada de Archivo 98, encuentra 5 discos de evidencia y desbloquea una salida antes de que el archivo se cierre.

## Estructura en Roblox Studio

1. Abrir Roblox Studio y crear un proyecto `Baseplate`.
2. En `Explorer`, crear:
   - `ServerScriptService > Script` llamado `GameManager`
   - `StarterGui > ScreenGui` llamado `Archivo98HUD`
   - Dentro de `Archivo98HUD`, un `LocalScript` llamado `HUDClient`
3. Copiar el contenido de:
   - `src/ServerScriptService/GameManager.lua` en `GameManager`
   - `src/StarterGui/Archivo98HUD/HUDClient.lua` en `HUDClient`
4. En `Workspace`, crear una carpeta llamada `Discos`.
5. Crear 5 Parts pequenos dentro de `Discos`, llamados `Disco1`, `Disco2`, etc.
   - Shape: Cylinder
   - Color: rojo oscuro, violeta o negro
   - Anchored: true
   - CanCollide: false
6. Crear un Part llamado `Salida`.
   - Anchored: true
   - CanCollide: true
   - Color: verde oscuro o azul
7. Crear el mapa con Parts: paredes, pasillos, estantes, cajas y una sala final.
8. Presionar Play.

## Loop del juego

- Cada jugador arranca con 0/5 discos.
- Al tocar un disco, lo recoge y suma progreso.
- Cuando consigue 5/5, aparece el objetivo de ir a la salida.
- Al tocar la salida con todos los discos, gana.

## Siguiente mejora sugerida

Agregar una entidad que patrulle los pasillos y reinicie al jugador si lo toca.
