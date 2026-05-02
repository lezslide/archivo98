# Instagram Creator Autoreply

Base minima para responder comentarios de Instagram sin ManyChat, usando la API oficial de Meta.

## Que hace

- verifica tu token y tu `account_id`
- recibe webhooks de comentarios
- busca palabras clave
- envia una respuesta privada automatica al comentario

## Variables de entorno

```text
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_ACCOUNT_ID=
INSTAGRAM_VERIFY_TOKEN=
INSTAGRAM_APP_SECRET=
INSTAGRAM_GRAPH_VERSION=v24.0
INSTAGRAM_KEYWORD_RULES=[{"keyword":"precio","reply":"Te escribo por privado ahora."}]
```

## Endpoints

- `/api/instagram-config-test`
- `/api/instagram-webhook`
- `/api/instagram-private-reply`

## Nota

La deduplicacion de eventos en este MVP es en memoria. Sirve para arrancar rapido, pero para produccion conviene guardar eventos procesados en una base.
