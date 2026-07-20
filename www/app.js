const SUPABASE_URL = "https://qttxcfbgyfmvyglzwxct.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8zeUhO0eNbsQddb7koQZ1w_VwuK8FjO";

const hasSupabaseConfig =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes("PONER_TU_SUPABASE_URL") &&
  !SUPABASE_ANON_KEY.includes("PONER_TU_SUPABASE_ANON_KEY");

const PUBLIC_APP_IDS = new Set(["users"]);
const PRIVATE_APP_IDS = new Set(["alaxd-overlay", "sales-goals", "episode-constructor", "creator-pro"]);
const PRIVATE_ACCESS_CODES = [
  [116, 117, 109, 98, 101, 114, 106, 101, 114, 101, 109, 121, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109],
];

const SKINS = [
  {
    id: "classic",
    name: "Classic Silver",
    cost: 0,
    preview: "linear-gradient(180deg, #ffffff, #e2e2e2)",
    textClass: "skin-classic",
  },
  {
    id: "matrix",
    name: "Matrix Green",
    cost: 120,
    preview: "linear-gradient(180deg, #001a10, #053822)",
    textClass: "skin-matrix",
  },
  {
    id: "lava",
    name: "Lava Wire",
    cost: 180,
    preview: "linear-gradient(180deg, #2b0707, #7d180d)",
    textClass: "skin-lava",
  },
  {
    id: "ice",
    name: "Ice Pop",
    cost: 220,
    preview: "linear-gradient(180deg, #eef8ff, #b8e4ff)",
    textClass: "skin-ice",
  },
];

const EMOJIS = ["ðŸ˜€", "ðŸ˜ˆ", "ðŸ”¥", "ðŸ’€", "ðŸ–¤", "âš¡", "ðŸŽ®", "ðŸ’¸"];

const MOBILE_BREAKPOINT = 768;
const EMOJI_GROUPS = {
  under: ["ðŸ–¤","â›“ï¸","ðŸ•·ï¸","ðŸŒ‘","ðŸ”®","ðŸª¦","ðŸ©¸","ðŸ¦‡","ðŸ—¡ï¸","ðŸ”ª","âš°ï¸","ðŸ•¯ï¸","ðŸŒ«ï¸","ðŸ‘ï¸","ðŸ§¿","ðŸ¥€","ðŸ«€","ðŸ","ðŸ¦‚","ðŸª¬","ðŸ©¶","ðŸ§¨","ðŸŒ§ï¸","ðŸ§Š","ðŸª©","ðŸ•¶ï¸","ðŸŽ±","ðŸª","ðŸŒ˜","ðŸ’¿"],
  gamer: ["ðŸŽ®","ðŸ•¹ï¸","ðŸ‘¾","ðŸ†","ðŸ’¥","âš¡","ðŸ”¥","ðŸŽ¯","ðŸš€","ðŸ›¡ï¸","ðŸ—ºï¸","ðŸŽ²","âŒ¨ï¸","ðŸ–¥ï¸","ðŸ”«","ðŸª“","âš”ï¸","ðŸ¹","ðŸ§ ","ðŸ’£","ðŸ”‹","ðŸ§ª","ðŸ§¬","ðŸ¤–","ðŸš¨","ðŸ","â³","ðŸ“¡","ðŸª™","ðŸ’¾"],
  meme: ["ðŸ˜‚","ðŸ¤£","ðŸ’€","ðŸ¤¡","ðŸ—¿","ðŸ˜Ž","ðŸ¤¯","ðŸ˜­","ðŸ™ƒ","ðŸ« ","ðŸ¥´","ðŸ¤¨","ðŸ˜","ðŸ˜³","ðŸ¤","ðŸ«¡","ðŸ¸","ðŸ·","ðŸ§ƒ","ðŸŒ","ðŸ«µ","ðŸ¤Œ","ðŸ˜¶â€ðŸŒ«ï¸","ðŸ˜¬","ðŸ˜¹","ðŸ™ˆ","ðŸ‘€","ðŸ¤“","ðŸ˜´","ðŸ§ "],
  classic: ["ðŸ˜€","ðŸ˜","ðŸ˜„","ðŸ˜…","ðŸ˜Š","ðŸ˜‰","ðŸ˜","ðŸ˜˜","ðŸ˜œ","ðŸ¤”","ðŸ˜´","ðŸ˜¡","ðŸ˜±","ðŸ˜‡","ðŸ˜Ž","ðŸ˜ˆ","ðŸ‘»","ðŸ’–","ðŸ’”","ðŸ‘","ðŸ‘Ž","ðŸ‘","ðŸ™","ðŸ’ª","ðŸŽ‰","ðŸŽµ","ðŸŒˆ","â˜€ï¸","â­","ðŸ’¸"],
};

const SLOT_SYMBOLS = [
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/1_9e93997f-11bc-4318-bdee-be673ac1a38d.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/6.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/5.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/4.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/8.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/3.jpg?v=1774789967",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/2.jpg?v=1774789178",
  "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/5a6f3b0ad467738ca46c19c57db87cd0.jpg?v=1774953008",
];
const SLOT_REEL_REPEAT = 5;
const SLOT_SYMBOL_HEIGHT = 80;
const SLOT_VISIBLE_OFFSET = SLOT_SYMBOL_HEIGHT;
const SLOT_REEL_DURATIONS = [1200, 1800, 2400];
const SLOT_BET_COST = 10;
const SLOT_BASE_JACKPOT = 120;
const SLOT_JACKPOT_CONTRIBUTION = 4;
const SLOT_MAX_HEAT = 4;
const SLOT_ALBUM_TARGET = 8;
const SLOT_ALBUM_PRIZE = 500;
const SLOT_SYMBOL_BASE_WEIGHTS = [2, 26, 22, 18, 15, 12, 8, 1];
const DEFAULT_MUSIC_COVER = "https://cdn.shopify.com/s/files/1/0995/6432/3185/files/winunder.png?v=1775529015";
const GLOBAL_CHAT_PROHIBITED_KEYWORDS = [
  "asesinato", "asesinar", "matar", "muerto", "cadaver", "cadÃ¡ver", "gore", "sangre",
  "decapitado", "decapitado", "descuartizado", "violacion", "violaciÃ³n", "porno", "porn",
  "pornografia", "pornografÃ­a", "xxx", "nudes", "nude", "desnuda", "desnudo", "sexual",
];

const CREATIVE_STYLE_SEEDS = [
  "cyber cumbia rota",
  "under nocturno de periferia",
  "glam mugriento de after",
  "romance de autopista",
  "futurismo barrial",
  "pop trash elegante",
  "uniforme de culto digital",
  "streetwear melancolico",
];
const CREATIVE_MUSIC_SEEDS = [
  "sintes rotos y bajos densos",
  "dem bow lento con aire fantasmal",
  "guitarras crudas con eco largo",
  "club latino industrial",
  "balada digital de madrugada",
  "percusiones secas y hook de mantra",
  "voz hablada con coros de vidrio",
  "beats de pasarela underground",
];
const CREATIVE_VISUAL_SEEDS = [
  "flash quemado, cuero y neblina",
  "fierros cromados y rimel corrido",
  "verde monitor, latex y humo",
  "blanco de probador con sombra azul",
  "polaroid sucia y espejo roto",
  "asfalto mojado con delineado corrido",
  "lycra, denim y luz de kiosco",
  "habitacion vacia con aura pop",
];
const EPISODE_BUILDER_STORAGE_KEY = "archivo98_episode_constructor_v3";
const EPISODE_BUILDER_SELECTED_KEY = "archivo98_episode_constructor_selected";
const EPISODE_BUILDER_EPISODES = [1, 2, 3, 4, 5, 6];
const EPISODE_BUILDER_GUIDE_VERSION = 3;
const EPISODE_ONE_TEMPLATE_URL = "./assets/episodio_1_codex_corregido.json";
const EPISODE_BUILDER_DAYS = 3;
const EPISODE_DEFAULT_BLOCKS_PER_DAY = 7;
const EPISODE_DAY_EMOTIONS = ["curiosidad", "tension", "resolucion"];
const EPISODE_FIELDS = [
  "titulo",
  "cantidad_bloques",
  "objetivo",
  "gancho_1",
  "gancho_2",
  "gancho_3",
  "cliffhanger",
  "dinero_inicial",
  "dinero_final",
  "km_iniciales",
  "km_finales",
  "estado",
];
const EPISODE_DAY_BLOCKS = [
  "gancho",
  "contexto",
  "objetivo",
  "preparacion",
  "conflicto",
  "avance",
  "cierre",
];
const EPISODE_BLOCK_FIELDS = [
  "descripcion",
  "emocion",
  "plantilla_numero",
  "duracion",
  "dialogo",
  "voz_en_off",
  "pregunta_camarografo",
  "musica",
  "separador_final",
  "prioridad",
  "estado",
  "tomas",
  "instruccion_editor",
];
const EPISODE_TEMPLATE_LIBRARY = {
  ganchos: [
    "Hoy el objetivo parece simple, pero cada minuto lo vuelve mas caro.",
    "Si esto sale mal, el episodio termina antes de empezar.",
    "Tres dias para convertir una idea chica en una prueba real.",
    "La camara entra cuando todavia no hay plan B.",
  ],
  curiosidad: [
    "Mostrar una pista incompleta y prometer resolverla en el siguiente bloque.",
    "Presentar un dato raro antes de explicar por que importa.",
    "Abrir una pregunta visual: algo se ve, pero todavia no se entiende.",
    "Usar una frase corta que obligue a esperar la respuesta.",
  ],
  tension: [
    "El recurso clave falta justo cuando el plan parecia acomodado.",
    "La plata alcanza menos de lo previsto y obliga a recortar una decision.",
    "La ruta cambia por clima, cansancio o una respuesta inesperada.",
    "La persona que podia ayudar no aparece y hay que improvisar.",
  ],
  caida: [
    "La meta se cumple, pero aparece un costo que obliga a frenar antes de perderlo todo.",
    "El bloque cambia de energia: de avance a peligro concreto, con una decision de retirada.",
    "Mostrar la amenaza sin exagerarla: oscuridad, plata, celular, cansancio o contexto inseguro.",
    "Cerrar la caida con una pregunta practica: si conviene seguir o proteger lo conseguido.",
  ],
  avance: [
    "Cerrar una mini meta visible: plata, km, contacto, venta o aprendizaje.",
    "Registrar una mejora pequena pero comprobable frente a camara.",
    "Comparar el antes y despues del dia con una placa simple.",
    "Convertir un error en una decision nueva para el siguiente bloque.",
  ],
  presion: [
    "Poner reloj, meta y distancia emocional: falta poco, pero cualquier intento puede fallar.",
    "Acelerar cortes y contador para que la editora sienta carrera contra el tiempo.",
    "Usar rechazos rapidos antes del intento que destraba la meta.",
    "Combinar respiracion corta, mirada al reloj y numero faltante para sostener urgencia.",
  ],
  urgencia: [
    "La meta se logro, pero ahora hay que llegar a tiempo a una accion concreta.",
    "Transformar el avance en carrera: caminar, consultar horario, cruzar, llamar o apurar compra.",
    "Usar planos de traslado para que la energia no caiga despues de cumplir la meta.",
    "Cerrar con entrega o encargo realizado, dejando pendiente ver el resultado.",
  ],
  humano: [
    "Bajar la velocidad y mostrar cansancio, duda o alivio sin explicar de mas.",
    "Dejar una pregunta del camarografo que saque una respuesta real.",
    "Mostrar una micro reaccion antes de volver al objetivo.",
    "Usar silencio, mirada o gesto como puente emocional.",
  ],
  revelacion: [
    "Preparar el objeto final antes de mostrarlo completo: manos, bolsa, papel, espera.",
    "Revelar con antes/despues claro: de un sticker a una plancha con cien oportunidades.",
    "Dejar que el plano respire para que la recompensa se entienda sin sobreexplicar.",
    "Unir satisfaccion con nuevo peso: ya no es promesa, ahora hay producto real.",
  ],
  mision: [
    "Convertir la recompensa en un plan nuevo con pasos concretos: vender, reinvertir, repetir.",
    "Mostrar que el episodio no termina en premio sino en sistema para seguir creciendo.",
    "Usar mapa, numeros y stock para abrir una mision mas grande que el bloque anterior.",
    "Cerrar con decision activa: que se hace manana con lo que ya se consiguio.",
  ],
  resolucion: [
    "Terminar con numeros reales y una emocion honesta, sin maquillar.",
    "Mostrar lo conseguido y tambien lo que quedo abierto.",
    "Cerrar con una accion concreta para manana.",
    "Dejar una imagen final que resuma el costo del intento.",
  ],
  cliffhanger: [
    "La ultima frase abre una duda que no se puede resolver hoy.",
    "Cerrar con una llamada o mensaje que cambia la ruta.",
    "Dejar un objeto, ticket o mapa como promesa del proximo dia.",
    "Apagar la camara justo antes de revelar la decision dificil.",
  ],
  final_abierto: [
    "Cerrar la transformacion lograda y abrir inmediatamente el problema del episodio siguiente.",
    "La ultima imagen debe sentirse como victoria incompleta: hay cien stickers, pero falta venderlos.",
    "Anticipar una caida futura sin resolverla, para que la editora conecte con el proximo video.",
    "Terminar con orgullo e intriga: lo conseguido pesa tanto como el desafio que viene.",
  ],
};
const OFFICIAL_ACCOUNT_EMAILS = [["tumberjeremy", "gmail.com"], ["tumberjeremy", "gmal.com"]].map((parts) => parts.join("@"));
const FORCED_ADMIN_EMAILS = ["jeremiastumber1@gmail.com", ...OFFICIAL_ACCOUNT_EMAILS];
const UNDER_BOT_NAMES = [
  "emo.culture", "under.darkk", "velvet.error", "r0pa.negra", "sadclub.uy", "afterglow.ba", "kiosk.angel", "trash.luxe",
  "night.archive", "feria.ghost", "lowkey.musa", "bruma.exe", "vhs.mood", "rimmel.fail", "piba.noise", "neo.barrio",
  "cold.denim", "late.checkout", "microdrop", "glitch.monte", "bunker.fit", "sombra.lila", "club.ansiedad", "darkitos",
  "cyber.feria", "percha404", "vinilo.sucio", "hoodieangel", "plata.triste", "malla.nocturna", "ruido.fino", "casi.vip",
  "under.tienda", "mirror.selfie", "lento.wav", "poxi.pop", "blacktag", "mood.bolsita", "calle.pixel", "ojera.club",
  "soft.knife", "feral.look", "cromado.uy", "drip.mate", "luz.kiosco", "rare.talle", "baja.fidelidad", "playlist.rota",
  "prenda.unica", "tinta.fria", "morocha.web", "rave.feria", "noir.delivery", "bolsa.negra", "zapas.mojadas", "angel.rar",
  "subsuelo.pop", "campera.vieja", "limbo.fit", "fake.lujo", "motel.neon", "chomba.dark", "cargo.soul", "noche.zip",
  "rip.stock", "talle.uno", "flash.crudo", "arco.under", "buzo.fantasma", "feria.latam", "brillo.raro", "gris.mental",
  "blonda.exe", "club.periferia", "lluvia.denim", "neon.pobre", "mate.noir", "pasto.sintetico", "daga.pop", "sudor.club",
  "rosa.mugre", "trapera.fina", "altar.fit", "pocket.uy", "pantalon.bug", "santo.drop", "webcam.triste", "aura.barata",
  "lapiz.negro", "vidriera.404", "gomaespuma", "nube.rancia", "corte.raro", "pichi.glam", "bondi.night", "filtro.azul",
  "sirena.ba", "llave.pixel", "boliche.vacio", "humo.talle", "cajonera", "tela.mental", "after.office", "raro.pero",
  "lunar.fake", "musa.terminal", "gris.plateado", "pixel.feria", "eco.barrial", "satin.error", "local.fantasma", "cierre.zip",
  "sombra.market", "chill.under", "palo.santo", "diorama.pop", "cable.suelto", "nylon.rosa", "club.delirio", "dromo.uy",
];
const UNDER_BOT_COLORS = ["#fb7185", "#a3e635", "#c084fc", "#38bdf8", "#facc15", "#f472b6", "#67e8f9", "#d8b4fe", "#fdba74", "#86efac"];
const UNDER_BOT_ROLES = [
  "habla de looks",
  "manda referencias",
  "vive en feria",
  "escucha under",
  "saca fotos con flash",
  "arma playlist",
  "comenta drops",
  "mira la noche",
  "opina de prendas",
  "lurker activo",
];
const UNDER_BOT_PERSONAS = UNDER_BOT_NAMES.map((username, index) => ({
  username,
  initials: getUnderBotInitials(username),
  nickColor: UNDER_BOT_COLORS[index % UNDER_BOT_COLORS.length],
  textColor: index % 3 === 0 ? "#f3f4f6" : index % 3 === 1 ? "#eaffb7" : "#f3e8ff",
  role: UNDER_BOT_ROLES[index % UNDER_BOT_ROLES.length],
}));
const UNDER_BOT_THREADS = [
  [
    { bot: "Mora Stock", text: "si el primer drop va con catalogo + mercado libre, las fotos tienen que parecer ficha tecnica pero con actitud: frente, detalle de costura, etiqueta y fit real." },
    { bot: "Tano Percha", text: "total. y en feria lo mismo: si una campera tiene historia, se etiqueta como pieza unica. no es 'usado', es archivo." },
    { bot: "Montevideo Flash", text: "esa lectura pega con la escena: Dillom, YSY A, Neo Pistea, PekeÃ±o 77, Zeballos... todos venden mundo antes que producto." },
    { bot: "Nico Booth", text: "para mi el hilo es ropa + musica: playlist del drop, fotos con flash duro, y una mesa donde la gente pueda tocar las prendas." },
  ],
  [
    { bot: "Lila Courier", text: "si user99 se libera en 5.000 km, yo lo haria como herramienta interna: stock, pedidos, talles, quien reservo y quien retiro." },
    { bot: "Mora Stock", text: "y que marque estado de prenda: encontrada, lavada, fotografiada, publicada, vendida. eso te ordena antes de shopify." },
    { bot: "Tano Percha", text: "ademas te evita vender dos veces la misma prenda. en feria eso pasa cuando la mesa esta prendida fuego." },
  ],
  [
    { bot: "Montevideo Flash", text: "shopify en 10.000 tiene sentido si ya hay identidad. no abriria tienda vacia; abriria con 20 piezas muy claras." },
    { bot: "Nico Booth", text: "20 piezas, un visual por drop y referencia musical. algo tipo 'asfalto mojado', no catalogo frio." },
    { bot: "Mora Stock", text: "igual la descripcion tiene que vender: medidas, estado, textura, como queda. el under tambien necesita datos." },
  ],
  [
    { bot: "Tano Percha", text: "ferias pop-up en 20.000 es perfecto. probas percheros, precios, trato con gente, y que prendas hacen que alguien frene." },
    { bot: "Lila Courier", text: "yo haria una lista: mesa chica, espejo, bolsas, qr a shopify, playlist, cartel de talles y un formulario para comunidad." },
    { bot: "Montevideo Flash", text: "si cae alguien por la musica, tiene que entender la ropa. si cae por ropa, tiene que sentir la musica. ahi nace la comunidad." },
  ],
  [
    { bot: "Mora Stock", text: "el local de ropa en 30.000 no deberia ser solo local. deberia ser punto de encuentro: retiro, fotos, custom, mini drops." },
    { bot: "Nico Booth", text: "y una pared para contenido. cada persona que prueba una pieza puede salir con foto vertical lista para historia." },
    { bot: "Tano Percha", text: "el local fijo llega cuando la feria ya probo que hay movimiento. no antes." },
  ],
];

function getUnderBotInitials(username) {
  return String(username || "??")
    .split(/[._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "??";
}

const UNDER_BOT_THREADS_V2 = [
  [
    { bot: "emo.culture", text: "holaa" },
    { bot: "under.darkk", text: "esa campera rota vaa *** no pregunten" },
    { bot: "r0pa.negra", text: "si el cierre esta medio muerto mejor... mas historia" },
    { bot: "vhs.mood", text: "flash + pared fea = listo x_x" },
  ],
  [
    { bot: "sadclub.uy", text: "q escuchan¿" },
    { bot: "playlist.rota", text: "puse dillom y desp zeballos... nada q ver pero si" },
    { bot: "glitch.monte", text: "yo elijo todo gigante cuando suena peke77 xd" },
    { bot: "afterglow.ba", text: "musica triste = lana negra, no lo invente yo" },
  ],
  [
    { bot: "feria.ghost", text: "feria d noche obvio" },
    { bot: "luz.kiosco", text: "con luz mala todo queda mas real :P" },
    { bot: "mirror.selfie", text: "de dia se vende, d noche se mitifica jaja" },
    { bot: "cyber.feria", text: "empieza feria termina secta" },
  ],
  [
    { bot: "kiosk.angel", text: "una remera rara > 20 prendas correctitas" },
    { bot: "rare.talle", text: "talle unico pero decilo biennn" },
    { bot: "blacktag", text: "etiqueta linda y ya parece reliquia" },
    { bot: "bolsa.negra", text: "bolsa negra + sticker = archivo 2007" },
  ],
  [
    { bot: "neo.barrio", text: "marca q parece fotolog viejo >>>" },
    { bot: "trash.luxe", text: "fotos feas buenas, eso" },
    { bot: "club.ansiedad", text: "igual pongan precio xq me pierdo :/" },
    { bot: "velvet.error", text: "caos prolijamente roto" },
  ],
  [
    { bot: "campera.vieja", text: "guardo ropa para una foto q nunca hago" },
    { bot: "flash.crudo", text: "flash directo o nadaaaaa" },
    { bot: "motel.neon", text: "fondo perfecto mata todo, sorry" },
  ],
  [
    { bot: "sombra.market", text: "ml es caja, el mito va aca" },
    { bot: "under.tienda", text: "catalogo = archivo / chat = quilombo lindo" },
    { bot: "microdrop", text: "si nadie habla es solo web vacia :s" },
  ],
];

const state = {
  zIndex: 20,
  windows: new Map(),
  windowScrollPositions: new Map(),
  activeWindowId: null,
  startMenuOpen: false,
  isAdmin: false,
  supabase: null,
  supabaseLoadError: "",
  authReady: false,
  pendingInitialAppId: "",
  realtimeChannel: null,
  onlineInterval: null,
  globalMessages: [],
  underBotMessages: [],
  underBotChat: {
    active: false,
    timer: 0,
    reactionTimers: [],
    threadIndex: 0,
    messageIndex: 0,
    lastUserPrompt: "",
    aiQueue: [],
    aiLoading: false,
  },
  generatedCodes: [],
  generatedCodeCursor: 0,
  musicTracks: [],
  privateMusicTracks: [],
  musicPending: [],
  publishedProjects: [],
  userProjects: [],
  publicProfileCache: new Map(),
  chatSelectedImageName: "",
  musicUpload: {
    file: null,
    fileName: "",
    status: "",
    scrollTop: 0,
  },
  creativeStudio: {
    focus: localStorage.getItem("user98_creative_focus") || "music",
    mode: localStorage.getItem("user98_creative_mode") || "artist",
    manifesto: localStorage.getItem("user98_creative_manifesto") || "",
    musicNotes: localStorage.getItem("user98_creative_music_notes") || "",
    lookNotes: localStorage.getItem("user98_creative_look_notes") || "",
    releasePlan: localStorage.getItem("user98_creative_release_plan") || "",
    alterEgo: localStorage.getItem("user98_creative_alter_ego") || "user98",
    moodline: localStorage.getItem("user98_creative_moodline") || "Oscuro, sensual, callejero y futurista.",
    palette: localStorage.getItem("user98_creative_palette") || "Negro humo / Plata / Rojo quemado / Verde monitor",
    problem: localStorage.getItem("user98_creative_problem") || "",
    impact: localStorage.getItem("user98_creative_impact") || "",
    aiReply: localStorage.getItem("user98_creative_ai_reply") || "",
    projectTitle: localStorage.getItem("user98_creative_project_title") || "",
    projectTagline: localStorage.getItem("user98_creative_project_tagline") || "",
  },
  episodeBuilder: loadEpisodeBuilderDraft(),
  player: {
    audio: null,
    audioContext: null,
    analyser: null,
    gainNode: null,
    sourceNode: null,
    frequencyData: null,
    vizFrame: 0,
    currentTrackId: "",
    isPlaying: false,
    powerOn: true,
    currentTime: 0,
    duration: 0,
    volume: 0.85,
    boost: 1,
    modalOpen: false,
    activeTab: "playlist",
    libraryView: "top",
    skinUrl: "./retro-player-shell-buttons.png",
    appBg: "#0d0d0d",
    lcdText: "#000000",
    lcd: { top: 27.7, left: 30.3, width: 42, height: 21 },
    controls: {
      play: { top: 51.6, left: 43, width: 15, height: 10, radius: 50 },
      "vol-up": { top: 48.5, left: 70.3, width: 11, height: 8, radius: 40 },
      "vol-down": { top: 48.6, left: 20.5, width: 11, height: 8, radius: 40 },
      prev: { top: 57.6, left: 32.2, width: 12, height: 7, radius: 30 },
      next: { top: 57.3, left: 56.5, width: 12, height: 7, radius: 30 },
      stop: { top: 62.5, left: 45.5, width: 10, height: 7, radius: 50 },
      power: { top: 23.1, left: 45.5, width: 10, height: 7, radius: 50 },
      setup: { top: 69.7, left: 45.5, width: 11, height: 6, radius: 20 },
    },
  },
  slot98: {
    spinning: false,
    status: "Listo para jugar.",
    currentReels: [0, 1, 2],
    stickers: [],
    ticketSymbol: "",
    ticketVisible: false,
    menuOpen: false,
    musicEnabled: false,
    heat: 0,
    combo: 0,
    pity: 0,
    jackpotPool: SLOT_BASE_JACKPOT,
    lastSpinSummary: "Pozo base cargado.",
    inventoryOpen: false,
  },
  gameConfig: {
    slot_win_rate: 10,
  },
  rankings: {
    lecoins: [],
    credits: [],
  },
  adminAlbumProgress: [],
  adminAlbumProgressError: "",
  user: {
    id: localStorage.getItem("win98_guest_id") || crypto.randomUUID(),
    email: "",
    username: localStorage.getItem("win98_username") || "",
    avatar_url: localStorage.getItem("win98_avatar_url") || "",
    chat_skin: localStorage.getItem("win98_chat_skin") || "classic",
    nick_color: localStorage.getItem("win98_nick_color") || "#7dd3fc",
    text_color: localStorage.getItem("win98_text_color") || "#f3f4f6",
    bio: localStorage.getItem("win98_bio") || "",
    instagram_handle: localStorage.getItem("win98_instagram_handle") || "",
    tiktok_handle: localStorage.getItem("win98_tiktok_handle") || "",
    website_url: localStorage.getItem("win98_website_url") || "",
    role_label: localStorage.getItem("win98_role_label") || "",
    brand_name: localStorage.getItem("win98_brand_name") || "",
    lecoins: 0,
    credits: 0,
    loggedIn: false,
  },
  privateContacts: [],
  incomingContactRequests: [],
  outgoingContactRequests: [],
  localPrivateMessages: {},
  moderationStrikes: {},
  socialFeatureError: "",
};

localStorage.setItem("win98_guest_id", state.user.id);

function loadStoredContacts() {
  state.privateContacts = [];
  state.incomingContactRequests = [];
  state.outgoingContactRequests = [];
  localStorage.removeItem("win98_private_contacts");
}

function loadModerationStrikes() {
  try {
    const raw = localStorage.getItem("win98_moderation_strikes");
    const parsed = raw ? JSON.parse(raw) : {};
    state.moderationStrikes = parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    state.moderationStrikes = {};
  }
}

function persistModerationStrikes() {
  localStorage.setItem("win98_moderation_strikes", JSON.stringify(state.moderationStrikes));
}

function getUserStrikeCount(username) {
  return Number(state.moderationStrikes[String(username || "").toLowerCase()] || 0);
}

function addModerationStrike(username) {
  const key = String(username || "").trim().toLowerCase();
  if (!key) return 0;
  state.moderationStrikes[key] = getUserStrikeCount(key) + 1;
  persistModerationStrikes();
  return state.moderationStrikes[key];
}

function detectProhibitedChatContent(text, imageFile) {
  const haystack = `${String(text || "")} ${String(imageFile?.name || "")}`.toLowerCase();
  return GLOBAL_CHAT_PROHIBITED_KEYWORDS.find((keyword) => haystack.includes(keyword)) || "";
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function getContactById(contactId) {
  return state.privateContacts.find((contact) => contact.id === contactId) || null;
}

async function loadSocialGraph() {
  if (!state.supabase || !state.user.loggedIn) {
    state.privateContacts = [];
    state.incomingContactRequests = [];
    state.outgoingContactRequests = [];
    state.socialFeatureError = "";
    return;
  }

  const { data: requests, error: requestsError } = await state.supabase
    .from("friend_requests")
    .select("id,requester_id,target_id,status,created_at")
    .or(`requester_id.eq.${state.user.id},target_id.eq.${state.user.id}`)
    .order("created_at", { ascending: false });

  if (requestsError) {
    console.error(requestsError);
    state.privateContacts = [];
    state.incomingContactRequests = [];
    state.outgoingContactRequests = [];
    state.socialFeatureError = "Falta activar la tabla de solicitudes en Supabase.";
    return;
  }

  const relatedIds = Array.from(new Set(
    (requests || []).flatMap((request) => [request.requester_id, request.target_id]).filter((id) => id && id !== state.user.id),
  ));
  let userMap = new Map();
  if (relatedIds.length) {
    const { data: users, error: usersError } = await state.supabase
      .from("users")
      .select("id,email,username,status,avatar_url,bio,role_label,brand_name")
      .in("id", relatedIds);
    if (usersError) {
      console.error(usersError);
      state.socialFeatureError = "No pude cargar los perfiles de contactos desde Supabase.";
    } else {
      userMap = new Map((users || []).map((user) => [user.id, user]));
      state.socialFeatureError = "";
    }
  } else {
    state.socialFeatureError = "";
  }

  state.privateContacts = [];
  state.incomingContactRequests = [];
  state.outgoingContactRequests = [];

  (requests || []).forEach((request) => {
    const incoming = request.target_id === state.user.id;
    const otherUserId = incoming ? request.requester_id : request.target_id;
    const otherUser = userMap.get(otherUserId);
    if (!otherUser) return;
    const record = {
      id: otherUser.id,
      email: otherUser.email || "",
      username: otherUser.username || (otherUser.email ? otherUser.email.split("@")[0] : "user"),
      online: otherUser.status === "online",
      avatar_url: otherUser.avatar_url || "",
      bio: otherUser.bio || "",
      role_label: otherUser.role_label || "",
      brand_name: otherUser.brand_name || "",
      requestId: request.id,
      createdAt: request.created_at,
    };
    if (request.status === "accepted") {
      if (!state.privateContacts.some((contact) => contact.id === record.id)) {
        state.privateContacts.push(record);
      }
      return;
    }
    if (request.status !== "pending") return;
    if (incoming) {
      state.incomingContactRequests.push(record);
    } else {
      state.outgoingContactRequests.push(record);
    }
  });
}

async function addPrivateContact(rawValue) {
  if (!state.supabase || !state.user.loggedIn) {
    alert("Inicia sesion para mandar solicitudes.");
    return false;
  }
  const email = normalizeEmail(rawValue);
  if (!email || !email.includes("@")) {
    alert("Escribi el mail real del contacto.");
    return false;
  }
  if (email === normalizeEmail(state.user.email)) {
    alert("No podes agregarte a vos mismo.");
    return false;
  }
  if (state.privateContacts.some((contact) => normalizeEmail(contact.email) === email)) {
    alert("Ese contacto ya fue aceptado.");
    return false;
  }
  if (state.incomingContactRequests.some((contact) => normalizeEmail(contact.email) === email) || state.outgoingContactRequests.some((contact) => normalizeEmail(contact.email) === email)) {
    alert("Ya existe una solicitud pendiente para ese mail.");
    return false;
  }

  const { data: targetUser, error: lookupError } = await state.supabase
    .from("users")
    .select("id,email,username,status,avatar_url,bio,role_label,brand_name")
    .eq("email", email)
    .maybeSingle();

  if (lookupError) {
    console.error(lookupError);
    alert("No pude validar ese mail en Supabase. Revisa la migracion de contactos.");
    return false;
  }
  if (!targetUser?.id) {
    alert("No existe un usuario real con ese mail.");
    return false;
  }

  const { error: insertError } = await state.supabase
    .from("friend_requests")
    .insert({
      requester_id: state.user.id,
      target_id: targetUser.id,
      status: "pending",
    });

  if (insertError) {
    console.error(insertError);
    alert(insertError.message || "No pude mandar la solicitud.");
    return false;
  }

  await loadSocialGraph();
  refreshWindow("private-chat");
  refreshWindow("chat-global");
  alert(`Solicitud enviada a ${targetUser.username || targetUser.email}.`);
  return true;
}

async function respondToContactRequest(requestId, nextStatus) {
  if (!state.supabase || !state.user.loggedIn) return;
  const { error } = await state.supabase
    .from("friend_requests")
    .update({ status: nextStatus, responded_at: new Date().toISOString() })
    .eq("id", requestId)
    .eq("target_id", state.user.id)
    .eq("status", "pending");

  if (error) {
    console.error(error);
    alert(error.message || "No pude responder la solicitud.");
    return;
  }

  await loadSocialGraph();
  refreshWindow("private-chat");
  refreshWindow("chat-global");
}

function serializeGlobalMessagePayload(payload) {
  return JSON.stringify({
    text: payload.text || "",
    nickColor: payload.nickColor || state.user.nick_color || "#7dd3fc",
    textColor: payload.textColor || state.user.text_color || "#f3f4f6",
    isBot: Boolean(payload.isBot),
    botRole: payload.botRole || "",
  });
}

function parseGlobalMessagePayload(message) {
  const fallback = {
    username: message.username || "Anon",
    text: message.content || "",
    nickColor: "#7dd3fc",
    textColor: "#f3f4f6",
    imageUrl: message.imageUrl || "",
    blurred: Boolean(message.blurred),
    isLocalOnly: false,
    isBot: Boolean(message.isBot),
    botRole: message.botRole || "",
  };
  try {
    const parsed = JSON.parse(message.content);
    if (parsed && typeof parsed === "object" && "text" in parsed) {
      return {
        ...fallback,
        text: String(parsed.text || ""),
        nickColor: String(parsed.nickColor || "#7dd3fc"),
        textColor: String(parsed.textColor || "#f3f4f6"),
        imageUrl: String(parsed.imageUrl || ""),
        blurred: Boolean(parsed.blurred),
        isLocalOnly: Boolean(message.isLocalOnly),
        isBot: Boolean(parsed.isBot || message.isBot),
        botRole: String(parsed.botRole || message.botRole || ""),
      };
    }
  } catch (_error) {
  }
  return fallback;
}

function renderEmojiPicker(targetId, attrName) {
  return Object.entries(EMOJI_GROUPS).map(([groupName, emojis]) => `
    <details class="emoji-group">
      <summary>${escapeHtml(groupName.toUpperCase())}</summary>
      <div class="emoji-grid">
        ${emojis.map((emoji) => `<button class="emoji-btn" ${attrName}="${escapeHtml(emoji)}" type="button">${emoji}</button>`).join("")}
      </div>
    </details>
  `).join("");
}

function init() {
  loadStoredContacts();
  loadModerationStrikes();
  ensureEpisodeConstructorLauncher();
  updatePrivateAppVisibility();
  bindDesktop();
  bindStartMenu();
  updateClock();
  setInterval(updateClock, 1000);
  initSupabaseClient();
  applyUserSkin();
  loadPublishedEpisodeTemplate().then((loaded) => {
    if (!loaded) loadDefaultEpisodeBuilderScript();
  });
  openInitialAppFromUrl();
  window.addEventListener("orientationchange", adjustWindowsForViewport);
}

function getEpisodeConstructorIconMarkup() {
  return `
    <svg class="shortcut-icon icon-large" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#f8fafc" stroke="#111827" stroke-width="1.4"/>
      <path d="M8 7h8M8 11h8M8 15h5" stroke="#111827" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M5.8 7h1M5.8 11h1M5.8 15h1" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M14.2 14.2l2.2 2.2 3.1-4" stroke="#22c55e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Constructor</span>
  `;
}

function ensureEpisodeConstructorLauncher() {
  const shortcuts = document.getElementById("desktop-shortcuts");
  if (shortcuts) {
    let shortcut = shortcuts.querySelector('[data-app="episode-constructor"]');
    if (!shortcut) {
      shortcut = document.createElement("div");
      shortcut.className = "shortcut";
      shortcut.dataset.app = "episode-constructor";
      shortcut.dataset.privateApp = "1";
      shortcut.innerHTML = getEpisodeConstructorIconMarkup();
    }
    const proyectosShortcut = shortcuts.querySelector('[data-app="proyectos"]');
    if (proyectosShortcut?.nextElementSibling !== shortcut) {
      proyectosShortcut?.after(shortcut);
    }
  }

  const startContent = document.querySelector("#start-menu .start-content");
  if (startContent) {
    let startItem = startContent.querySelector('[data-app="episode-constructor"]');
    if (!startItem) {
      startItem = document.createElement("button");
      startItem.className = "start-item";
      startItem.dataset.app = "episode-constructor";
      startItem.dataset.privateApp = "1";
      startItem.textContent = "Constructor de Episodios";
    }
    const proyectosItem = startContent.querySelector('[data-app="proyectos"]');
    if (proyectosItem?.nextElementSibling !== startItem) {
      proyectosItem?.after(startItem);
    }
  }
}

function openInitialAppFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "episode-constructor" || params.get("resetConstructor") === "1") {
    localStorage.removeItem(getEpisodeBuilderStorageKey());
    state.episodeBuilder = createEpisodeBuilderDraft(getSelectedEpisodeNumber());
    persistEpisodeBuilderDraft("Plantilla reiniciada a 21 bloques.");
    loadDefaultEpisodeBuilderScript({ force: true });
  }
  const appId = params.get("app") || params.get("open");
  if (!appId || !desktopApps[appId]) return;
  if (!state.authReady && isProtectedApp(appId)) {
    state.pendingInitialAppId = appId;
    return;
  }
  requestAnimationFrame(() => openWindow(appId));
}

function isMobileViewport() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function getWindowMetrics(app) {
  if (!isMobileViewport()) {
    return { width: app.width, height: app.height, left: app.x, top: app.y };
  }
  const width = Math.max(260, window.innerWidth - 12);
  const height = Math.max(240, window.innerHeight - 46);
  return { width, height, left: 6, top: 6 };
}

function adjustWindowsForViewport() {
  state.windows.forEach((entry, appId) => {
    entry.element.classList.toggle("mobile-window", isMobileViewport());
    if (!isMobileViewport()) return;
    const app = desktopApps[appId];
    if (!app) return;
    const next = getWindowMetrics(app);
    entry.element.style.width = `${next.width}px`;
    entry.element.style.height = `${next.height}px`;
    entry.element.style.left = `${next.left}px`;
    entry.element.style.top = `${next.top}px`;
  });
}

function initSupabaseClient() {
  if (!hasSupabaseConfig) {
    state.authReady = true;
    updateOnlineIndicator();
    openPendingInitialApp();
    return;
  }

  if (!window.supabase?.createClient) {
    state.supabaseLoadError = "No se cargo la libreria de Supabase. Revisa la conexion a cdn.jsdelivr.net o instala el cliente local.";
    state.authReady = true;
    updateOnlineIndicator();
    rerenderCoreApps();
    openPendingInitialApp();
    return;
  }

  state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  state.supabase.auth.getSession()
    .then(({ data }) => {
      handleSessionChange(data.session);
    })
    .catch((error) => {
      console.error("No se pudo conectar con Supabase:", error);
      updateOnlineIndicator();
    });
  state.supabase.auth.onAuthStateChange((_event, session) => {
    handleSessionChange(session);
  });
}

async function handleSessionChange(session) {
  state.authReady = true;
  if (!session?.user) {
    state.user.loggedIn = false;
    state.user.email = "";
    state.user.lecoins = 0;
    state.user.credits = 0;
    state.isAdmin = false;
    state.generatedCodes = [];
    state.musicTracks = [];
    state.privateMusicTracks = [];
    state.musicPending = [];
    state.rankings.lecoins = [];
    state.rankings.credits = [];
    await initSupabase();
    updateOnlineIndicator();
    updatePrivateAppVisibility();
    rerenderCoreApps();
    openPendingInitialApp();
    return;
  }

  state.user.id = session.user.id;
  state.user.email = session.user.email || "";
  state.user.loggedIn = true;
  await ensureProfile();
  await refreshProfileFromDb(false);
  await loadAdminStatus();
  await loadGeneratedCodes();
  await loadRankings();
  await loadAdminAlbumProgress();
  await loadGameConfig();
  await loadMusicTracks();
  await loadSlot98Stickers();
  await initSupabase();
  updateOnlineIndicator();
  updatePrivateAppVisibility();
  applyUserSkin();
  rerenderCoreApps();
  openPendingInitialApp();
  const usersWindow = state.windows.get("users")?.element || document;
  setUserActionStatus(usersWindow, "");
}

function rerenderCoreApps() {
  ["users", "chat-global", "private-chat", "slot98-game", "episode-constructor"].forEach(refreshWindow);
}

function getPrivateAccessList() {
  return PRIVATE_ACCESS_CODES.map((codes) => String.fromCharCode(...codes));
}

function hasPrivateAppAccess() {
  const current = normalizeEmail(state.user.email || "");
  return Boolean(current) && getPrivateAccessList().includes(current);
}

function isPrivateApp(appId) {
  return PRIVATE_APP_IDS.has(appId);
}

function updatePrivateAppVisibility() {
  document.body.classList.toggle("private-apps-unlocked", hasPrivateAppAccess());
  document.querySelectorAll("[data-app]").forEach((node) => {
    if (isPrivateApp(node.dataset.app)) node.dataset.privateApp = "1";
  });
}

function bindDesktop() {
  document.querySelectorAll(".shortcut").forEach((shortcut) => {
    shortcut.addEventListener("dblclick", () => openWindow(shortcut.dataset.app));
    shortcut.addEventListener("click", () => {
      document.querySelectorAll(".shortcut").forEach((item) => item.classList.remove("selected"));
      shortcut.classList.add("selected");
      if (isMobileViewport()) {
        openMobileApp(shortcut.dataset.app);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".shortcut")) {
      document.querySelectorAll(".shortcut").forEach((item) => item.classList.remove("selected"));
    }
    if (!event.target.closest("#start-menu") && !event.target.closest("#start-btn")) {
      closeStartMenu();
    }
  });
}

function toggleFullscreen() {
  const root = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
  if (root.requestFullscreen) {
    root.requestFullscreen().catch(() => alert("En iPhone: Compartir > Agregar a inicio para usar pantalla completa."));
    return;
  }
  alert("En iPhone: Compartir > Agregar a inicio para usar pantalla completa.");
}

function bindStartMenu() {
  document.getElementById("start-btn").addEventListener("click", () => {
    state.startMenuOpen ? closeStartMenu() : openStartMenu();
  });

  document.getElementById("taskbar-fullscreen")?.addEventListener("click", toggleFullscreen);

  document.querySelectorAll(".start-item[data-app]").forEach((item) => {
    item.addEventListener("click", () => {
      if (isMobileViewport()) {
        openMobileApp(item.dataset.app);
      } else {
        openWindow(item.dataset.app);
      }
      closeStartMenu();
    });
  });

  document.getElementById("restart-app").addEventListener("click", () => location.reload());
}

function openStartMenu() {
  state.startMenuOpen = true;
  document.getElementById("start-menu").classList.remove("hidden");
}

function closeStartMenu() {
  state.startMenuOpen = false;
  document.getElementById("start-menu").classList.add("hidden");
}

function openMobileApp(appId) {
  if (!canOpenRegisteredApp(appId)) return;
  if (appId === "creator-pro") {
    window.location.href = "./creator-pro.html?v=direct-by-ep6-tomas-1";
    return;
  }
  if (appId === "alaxd-overlay") {
    window.location.href = "./alaxd.html?v=alaxd-5";
    return;
  }
  if (appId === "under-maps") {
    window.location.href = "./under-maps.html?v=under-maps-1";
    return;
  }
  if (appId === "sales-goals") {
    window.location.href = "./ventas-metas.html?v=sales-goals-16";
    return;
  }
  if (appId === "sales-registry") {
    window.location.href = "./ventas-registro.html?v=sales-registry-2";
    return;
  }
  if (appId === "xp-agar-strike") {
    window.location.href = "./xp-agar-strike.html?v=xp-agar-strike-1";
    return;
  }
  openWindow(appId);
}

function openWindow(appId) {
  if (!canOpenRegisteredApp(appId)) return;
  const existing = state.windows.get(appId);
  if (existing) {
    if (existing.minimized) {
      existing.minimized = false;
      existing.element.classList.remove("hidden");
    }
    focusWindow(appId);
    return;
  }

  const app = desktopApps[appId];
  if (!app) return;

  const metrics = getWindowMetrics(app);
  const node = document.getElementById("window-template").content.firstElementChild.cloneNode(true);
  node.dataset.appId = appId;
  node.classList.toggle("mobile-window", isMobileViewport());
  node.style.width = `${metrics.width}px`;
  node.style.height = `${metrics.height}px`;
  node.style.left = `${metrics.left}px`;
  node.style.top = `${metrics.top}px`;
  node.querySelector(".header-title").textContent = app.title;
  node.querySelector(".window-body").innerHTML = app.render();
  document.getElementById("window-layer").appendChild(node);

  state.windows.set(appId, {
    element: node,
    minimized: false,
    maximized: false,
    restoreRect: null,
  });

  bindWindowControls(node, appId);
  makeDraggable(node);
  makeResizable(node);
  if (typeof app.bind === "function") app.bind(node);
  focusWindow(appId);
}

function isProtectedApp(appId) {
  return appId && !PUBLIC_APP_IDS.has(appId);
}

function openPendingInitialApp() {
  const appId = state.pendingInitialAppId;
  state.pendingInitialAppId = "";
  if (!appId) return;
  requestAnimationFrame(() => openWindow(appId));
}

function canOpenRegisteredApp(appId) {
  if (isPrivateApp(appId) && !hasPrivateAppAccess()) {
    if (!state.authReady) {
      state.pendingInitialAppId = appId;
      return false;
    }
    alert(state.user.loggedIn ? "Acceso privado." : "Ingresa para continuar.");
    if (appId !== "users") openWindow("users");
    return false;
  }
  if (!isProtectedApp(appId) || state.user.loggedIn) return true;
  if (!state.authReady) {
    state.pendingInitialAppId = appId;
    return false;
  }
  alert("Crea cuenta o ingresa para desbloquear todas las apps de user98.");
  if (appId !== "users") openWindow("users");
  return false;
}

function closeWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  win.element.remove();
  state.windows.delete(appId);
  if (state.activeWindowId === appId) state.activeWindowId = null;
  updateTaskbar();
}

function minimizeWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  win.minimized = true;
  win.element.classList.add("hidden");
  if (state.activeWindowId === appId) state.activeWindowId = null;
  updateTaskbar();
}

function maximizeWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  if (!win.maximized) {
    win.restoreRect = {
      width: win.element.style.width,
      height: win.element.style.height,
      left: win.element.style.left,
      top: win.element.style.top,
    };
    win.maximized = true;
    win.element.classList.add("maximized");
  } else {
    win.maximized = false;
    win.element.classList.remove("maximized");
    Object.assign(win.element.style, win.restoreRect);
  }
  focusWindow(appId);
}

function focusWindow(appId) {
  state.activeWindowId = appId;
  state.zIndex += 1;
  state.windows.forEach((entry) => {
    entry.element.classList.remove("active");
    entry.element.classList.add("inactive");
  });
  const win = state.windows.get(appId);
  if (!win) return;
  win.element.style.zIndex = String(state.zIndex);
  win.element.classList.add("active");
  win.element.classList.remove("inactive");
  updateTaskbar();
}

function updateTaskbar() {
  const container = document.getElementById("taskbar-items");
  container.innerHTML = "";
  state.windows.forEach((win, appId) => {
    const button = document.createElement("button");
    button.className = "task-item";
    if (state.activeWindowId === appId && !win.minimized) button.classList.add("active");
    button.textContent = desktopApps[appId].title;
    button.addEventListener("click", () => {
      if (win.minimized) {
        win.minimized = false;
        win.element.classList.remove("hidden");
        focusWindow(appId);
      } else if (state.activeWindowId === appId) {
        minimizeWindow(appId);
      } else {
        focusWindow(appId);
      }
    });
    container.appendChild(button);
  });
}

function bindWindowControls(node, appId) {
  node.addEventListener("mousedown", () => focusWindow(appId));
  node.querySelector('[data-action="close"]').addEventListener("click", (event) => {
    event.stopPropagation();
    closeWindow(appId);
  });
  node.querySelector('[data-action="minimize"]').addEventListener("click", (event) => {
    event.stopPropagation();
    minimizeWindow(appId);
  });
  node.querySelector('[data-action="maximize"]').addEventListener("click", (event) => {
    event.stopPropagation();
    maximizeWindow(appId);
  });
}

function makeDraggable(winEl) {
  if (isMobileViewport()) return;
  const dragHandle = winEl.dataset.appId === "winamp"
    ? (winEl.querySelector(".retro-mp3-shell .player") || winEl.querySelector(".window-header"))
    : winEl.querySelector(".window-header");
  if (!dragHandle) return;
  dragHandle.addEventListener("mousedown", (event) => {
    if (winEl.dataset.appId === "winamp") {
      if (
        event.target.closest(".btn") ||
        event.target.closest(".lcd-display") ||
        event.target.closest("#config-modal") ||
        event.target.closest(".editor-panel") ||
        event.target.closest(".retro-track-play") ||
        event.target.closest(".retro-track-remove") ||
        event.target.closest(".retro-track-add") ||
        event.target.closest(".retro-track-input")
      ) return;
    }
    if (event.target.closest(".win-btn")) return;
    const appId = winEl.dataset.appId;
    const win = state.windows.get(appId);
    if (!win || win.maximized) return;
    focusWindow(appId);

    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = winEl.offsetLeft;
    const startTop = winEl.offsetTop;

    function onMove(moveEvent) {
      const maxLeft = window.innerWidth - winEl.offsetWidth;
      const maxTop = window.innerHeight - 30 - winEl.offsetHeight;
      winEl.style.left = `${clamp(startLeft + (moveEvent.clientX - startX), 0, Math.max(0, maxLeft))}px`;
      winEl.style.top = `${clamp(startTop + (moveEvent.clientY - startY), 0, Math.max(0, maxTop))}px`;
    }

    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });
}

function makeResizable(winEl) {
  if (isMobileViewport()) return;
  const handle = winEl.querySelector(".window-resizer");
  handle.addEventListener("mousedown", (event) => {
    event.stopPropagation();
    const appId = winEl.dataset.appId;
    const win = state.windows.get(appId);
    if (!win || win.maximized) return;

    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = winEl.offsetWidth;
    const startHeight = winEl.offsetHeight;

    function onMove(moveEvent) {
      winEl.style.width = `${Math.max(320, startWidth + (moveEvent.clientX - startX))}px`;
      winEl.style.height = `${Math.max(220, startHeight + (moveEvent.clientY - startY))}px`;
    }

    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });
}

function refreshWindow(appId) {
  const current = state.windows.get(appId);
  if (!current || !desktopApps[appId]) return;
  const scrollContainers = Array.from(current.element.querySelectorAll(".window-content, .discord-messages, .msn-chatlog, .slot98-window-content"))
    .map((node, index) => ({
      key: `${appId}:${index}`,
      top: node.scrollTop,
      left: node.scrollLeft,
    }));
  scrollContainers.forEach((entry) => {
    state.windowScrollPositions.set(entry.key, entry);
  });
  const activeFieldId = current.element.querySelector(":focus")?.id || "";
  const formState = Array.from(current.element.querySelectorAll("input[id], textarea[id], select[id]")).map((node) => ({
    id: node.id,
    value: node.type === "checkbox" || node.type === "radio" ? node.checked : node.value,
    checked: Boolean(node.checked),
    selectionStart: typeof node.selectionStart === "number" ? node.selectionStart : null,
    selectionEnd: typeof node.selectionEnd === "number" ? node.selectionEnd : null,
    isBoolean: node.type === "checkbox" || node.type === "radio",
  }));
  current.element.querySelector(".window-body").innerHTML = desktopApps[appId].render();
  if (typeof desktopApps[appId].bind === "function") desktopApps[appId].bind(current.element);
  if (appId === "winamp") {
    makeDraggable(current.element);
  }
  const nextScrollContainers = Array.from(current.element.querySelectorAll(".window-content, .discord-messages, .msn-chatlog, .slot98-window-content"));
  requestAnimationFrame(() => {
    formState.forEach((entry) => {
      const node = current.element.querySelector(`#${CSS.escape(entry.id)}`);
      if (!node) return;
      if (entry.isBoolean) {
        node.checked = entry.checked;
      } else {
        node.value = entry.value;
        if (activeFieldId === entry.id && typeof node.setSelectionRange === "function" && entry.selectionStart !== null) {
          node.focus();
          node.setSelectionRange(entry.selectionStart, entry.selectionEnd ?? entry.selectionStart);
        }
      }
    });
    nextScrollContainers.forEach((node, index) => {
      const saved = state.windowScrollPositions.get(`${appId}:${index}`);
      if (!saved) return;
      node.scrollTop = saved.top;
      node.scrollLeft = saved.left;
    });
  });
}

function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function isOfficialEmail(value) {
  return OFFICIAL_ACCOUNT_EMAILS.includes(String(value || "").trim().toLowerCase());
}

function getPublicEmail(value) {
  return isOfficialEmail(value) ? "" : String(value || "");
}

function getUsername() {
  if (isOfficialEmail(state.user.email)) return "Archivo98 Oficial";
  return state.user.username || "Invitado";
}

function getAvatarMarkup(size = "small") {
  const label = escapeHtml((getUsername() || "U").slice(0, 2).toUpperCase());
  const avatarClass = size === "large" ? "user-avatar large" : "user-avatar";
  if (state.user.avatar_url) {
    return `<img class="${avatarClass}" src="${escapeHtml(state.user.avatar_url)}" alt="Avatar" onerror="this.replaceWith(document.createElement('div'))" />`;
  }
  return `<div class="${avatarClass} fallback">${label}</div>`;
}

function getUserDisplayName(user) {
  if (!user) return "Anon";
  if (isOfficialEmail(user.email)) return "Archivo98 Oficial";
  return user.username || (user.email ? user.email.split("@")[0] : "Anon");
}

function getKnownUserData(userId, fallbackUsername = "", fallbackAvatarUrl = "") {
  if (userId && userId === state.user.id) {
    return {
      id: state.user.id,
      username: getUsername(),
      email: getPublicEmail(state.user.email),
      avatar_url: state.user.avatar_url,
      bio: state.user.bio,
      role_label: state.user.role_label,
      brand_name: state.user.brand_name,
    };
  }

  const contact = [...state.privateContacts, ...state.incomingContactRequests, ...state.outgoingContactRequests]
    .find((item) => item.id === userId);
  if (contact) {
    return {
      id: contact.id,
      username: getUserDisplayName(contact),
      email: getPublicEmail(contact.email),
      avatar_url: contact.avatar_url || "",
      bio: contact.bio || "",
      role_label: contact.role_label || "",
      brand_name: contact.brand_name || "",
    };
  }

  const cached = state.publicProfileCache.get(userId)?.user;
  if (cached) return cached;

  return {
    id: userId,
    username: fallbackUsername,
    avatar_url: fallbackAvatarUrl,
  };
}

function getUserAvatarMarkup(user, size = "small") {
  const displayName = getUserDisplayName(user);
  const label = escapeHtml((displayName || "U").slice(0, 2).toUpperCase());
  const avatarClass = size === "large" ? "user-avatar large" : size === "mini" ? "user-avatar mini" : "user-avatar";
  if (user?.avatar_url) {
    return `<img class="${avatarClass}" src="${escapeHtml(user.avatar_url)}" alt="${escapeHtml(displayName)}" onerror="this.replaceWith(document.createElement('div'))" />`;
  }
  return `<div class="${avatarClass} fallback">${label}</div>`;
}

function renderProfileTrigger(userId, fallbackUsername = "", fallbackAvatarUrl = "", size = "small", extraClass = "") {
  const user = getKnownUserData(userId, fallbackUsername, fallbackAvatarUrl);
  if (!userId) return `<div class="chat-avatar-spacer"></div>`;
  return `
    <button class="avatar-trigger ${escapeHtml(extraClass || "")}" data-open-profile="${escapeHtml(userId)}" data-profile-name="${escapeHtml(getUserDisplayName(user))}" data-profile-avatar="${escapeHtml(user.avatar_url || fallbackAvatarUrl || "")}" type="button">
      ${getUserAvatarMarkup(user, size)}
    </button>
  `;
}

function bindProfileTriggers(scope = document) {
  scope.querySelectorAll("[data-open-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      openPublicProfile(button.dataset.openProfile, {
        username: button.dataset.profileName || "",
        avatar_url: button.dataset.profileAvatar || "",
      });
    });
  });
}

function persistCreativeStudio() {
  localStorage.setItem("user98_creative_focus", state.creativeStudio.focus || "music");
  localStorage.setItem("user98_creative_mode", state.creativeStudio.mode || "artist");
  localStorage.setItem("user98_creative_manifesto", state.creativeStudio.manifesto || "");
  localStorage.setItem("user98_creative_music_notes", state.creativeStudio.musicNotes || "");
  localStorage.setItem("user98_creative_look_notes", state.creativeStudio.lookNotes || "");
  localStorage.setItem("user98_creative_release_plan", state.creativeStudio.releasePlan || "");
  localStorage.setItem("user98_creative_alter_ego", state.creativeStudio.alterEgo || "");
  localStorage.setItem("user98_creative_moodline", state.creativeStudio.moodline || "");
  localStorage.setItem("user98_creative_palette", state.creativeStudio.palette || "");
  localStorage.setItem("user98_creative_problem", state.creativeStudio.problem || "");
  localStorage.setItem("user98_creative_impact", state.creativeStudio.impact || "");
  localStorage.setItem("user98_creative_ai_reply", state.creativeStudio.aiReply || "");
  localStorage.setItem("user98_creative_project_title", state.creativeStudio.projectTitle || "");
  localStorage.setItem("user98_creative_project_tagline", state.creativeStudio.projectTagline || "");
}

function pickCreativeSeed(pool) {
  return pool[Math.floor(Math.random() * pool.length)] || "";
}

function buildCreativeManifesto() {
  return `user98 mezcla ${pickCreativeSeed(CREATIVE_STYLE_SEEDS)} con ${pickCreativeSeed(CREATIVE_MUSIC_SEEDS)}. La imagen pide ${pickCreativeSeed(CREATIVE_VISUAL_SEEDS)} y una actitud de icono under que no pide permiso.`;
}

function buildCreativeReleasePlan() {
  return [
    "1. Reel teaser con frase corta y look protagonista.",
    `2. Hook musical: ${pickCreativeSeed(CREATIVE_MUSIC_SEEDS)}.`,
    `3. Visual principal: ${pickCreativeSeed(CREATIVE_VISUAL_SEEDS)}.`,
    "4. CTA: comenta user98 y entra al universo completo por DM.",
  ].join("\n");
}

function buildCreativeLookNotes() {
  return [
    `Base: ${pickCreativeSeed(CREATIVE_STYLE_SEEDS)}.`,
    "Prenda hero: top ajustado, campera statement o conjunto de silueta fuerte.",
    "Accesorios: lentes finos, anillos, metal, sporty o glam sucio.",
    `Escena: ${pickCreativeSeed(CREATIVE_VISUAL_SEEDS)}.`,
  ].join("\n");
}

function buildCreativeAlias() {
  const prefix = ["USER", "CTRL", "NENA", "NEON", "ANTI", "LUX", "RUIDO", "ZERO"][Math.floor(Math.random() * 8)];
  const suffix = ["98", "CORE", "VOID", "STAR", "MALA", "MODE", "WAVE", "NITE"][Math.floor(Math.random() * 8)];
  return `${prefix}${suffix}`;
}

function getCreativeModeOptions() {
  if (state.creativeStudio.focus === "fashion") {
    return [
      { value: "brand", label: "Empezar una marca" },
      { value: "image", label: "Reforzar mi imagen" },
    ];
  }
  if (state.creativeStudio.focus === "startup") {
    return [
      { value: "product", label: "Lanzar producto" },
      { value: "service", label: "Resolver una necesidad" },
    ];
  }
  return [
    { value: "artist", label: "Desarrollar artista" },
    { value: "release", label: "Preparar lanzamiento" },
  ];
}

function getCreativeQuestionLabels() {
  if (state.creativeStudio.focus === "fashion") {
    return {
      problem: state.creativeStudio.mode === "brand" ? "Que hueco queres ocupar en moda?" : "Que version de vos queres reforzar?",
      impact: state.creativeStudio.mode === "brand" ? "Que queres que sienta la gente al ver tu marca?" : "Como queres impactar visualmente?",
    };
  }
  if (state.creativeStudio.focus === "startup") {
    return {
      problem: "Que problema real queres resolver?",
      impact: "Que cambio queres provocar en la gente o el mercado?",
    };
  }
  return {
    problem: state.creativeStudio.mode === "release" ? "Que queres que pase con este lanzamiento?" : "Que identidad musical queres construir?",
    impact: "Como queres impactar emocionalmente y visualmente?",
  };
}

function buildCreativeAiReply() {
  const focus = state.creativeStudio.focus;
  const mode = state.creativeStudio.mode;
  const problem = state.creativeStudio.problem || "todavia no definido";
  const impact = state.creativeStudio.impact || "todavia no definido";
  const alias = state.creativeStudio.alterEgo || "user98";

  if (focus === "startup") {
    return [
      `Vision: ${alias} tiene que atacar ${problem} con una propuesta simple, visible y deseable.`,
      `Impacto buscado: ${impact}.`,
      "Direccion AI: defini una promesa en una frase, un publico obsesivo inicial y una prueba minima que se pueda mostrar en un reel o landing.",
      "Siguiente movimiento: arma una demo clara, una frase de valor y una estetica que haga parecer al proyecto inevitable.",
    ].join("\n");
  }

  if (focus === "fashion") {
    return [
      `Direccion de moda: ${alias} tiene que convertir ${problem} en una firma visible.`,
      `Impacto buscado: ${impact}.`,
      `Modo activo: ${mode === "brand" ? "marca" : "imagen personal"}.`,
      "Sugerencia AI: elegi una silueta hero, una textura dominante y un gesto visual repetible para que tu universo se reconozca aunque cambie el outfit.",
    ].join("\n");
  }

  return [
    `Direccion musical: ${alias} tiene que sonar a ${problem}.`,
    `Impacto buscado: ${impact}.`,
    `Modo activo: ${mode === "release" ? "lanzamiento" : "desarrollo artistico"}.`,
    "Sugerencia AI: construi un hook corto, una frase de personaje y un look de portada que se puedan repetir en cada reel hasta volverse identidad.",
  ].join("\n");
}

function getCreativeProjectLabels() {
  if (state.creativeStudio.focus === "fashion") {
    return {
      title: state.creativeStudio.mode === "brand" ? "Nombre de la marca" : "Nombre del proyecto de imagen",
      tagline: state.creativeStudio.mode === "brand" ? "Que vende o representa tu marca?" : "Como queres que te lean visualmente?",
      notesTitle: "Panel de moda",
      notesPlaceholder: "Coleccion, siluetas, materiales, accesorios, maquillaje, casting, locacion.",
    };
  }
  if (state.creativeStudio.focus === "startup") {
    return {
      title: "Nombre del proyecto o startup",
      tagline: "Promesa corta del proyecto",
      notesTitle: "Panel de startup",
      notesPlaceholder: "Problema, solucion, publico, modelo, prueba minima, pitch y rollout.",
    };
  }
  return {
    title: "Nombre artistico, track o era",
    tagline: "Frase corta del proyecto musical",
    notesTitle: "Panel de musica",
    notesPlaceholder: "Sonido, concepto, identidad, portada, performance, narrativa y hook.",
  };
}

function getCreativePublicRoleHint() {
  if (state.creativeStudio.focus === "fashion") return "Fundador/a, director creativo, modelo, estilista";
  if (state.creativeStudio.focus === "startup") return "Founder, builder, operador, creador";
  return "Vocalista, musico, productor, banda, performer";
}

function getProjectStatusMeta(status) {
  if (status === "draft") return { label: "Borrador", className: "draft" };
  if (status === "archived") return { label: "Archivado", className: "archived" };
  return { label: "Publicado", className: "published" };
}

function renderPublishedProjectCards() {
  if (!state.publishedProjects.length) {
    return `<div class="note-box">Todavia no publicaste proyectos desde este estudio.</div>`;
  }
  return state.publishedProjects.map((project) => `
    <div class="creative-project-card">
      <div class="creative-project-top">
        <strong>${escapeHtml(project.title || "Proyecto sin titulo")}</strong>
        <span>${escapeHtml(project.focus || "music")} Â· ${escapeHtml(project.mode || "artist")}</span>
      </div>
      <div class="creative-project-tagline">${escapeHtml(project.tagline || "Sin tagline")}</div>
      <div class="creative-project-copy">${escapeHtml(project.problem || "")}</div>
      <div class="creative-project-copy">${escapeHtml(project.impact || "")}</div>
      <div class="creative-project-links">
        ${project.instagram_handle ? `<span>@${escapeHtml(project.instagram_handle.replace(/^@+/, ""))}</span>` : ""}
        ${project.tiktok_handle ? `<span>TikTok: @${escapeHtml(project.tiktok_handle.replace(/^@+/, ""))}</span>` : ""}
        ${project.website_url ? `<a href="${escapeHtml(project.website_url)}" target="_blank" rel="noopener noreferrer">Abrir link</a>` : ""}
        <span>${escapeHtml(formatProjectDate(project.created_at))}</span>
      </div>
      <div class="creative-project-meta">${escapeHtml(project.role_label || state.user.role_label || "")}${project.brand_name ? ` Â· ${escapeHtml(project.brand_name)}` : ""}</div>
    </div>
  `).join("");
}

function formatProjectDate(value) {
  if (!value) return "Sin fecha";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Sin fecha";
  return parsed.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function renderManagedProjectCards() {
  if (!state.userProjects.length) {
    return `<div class="note-box">Todavia no guardaste proyectos en este estudio.</div>`;
  }
  return state.userProjects.map((project) => {
    const status = getProjectStatusMeta(project.project_status || (project.is_published ? "published" : "draft"));
    return `
      <div class="creative-project-card managed">
        <div class="creative-project-top">
          <strong>${escapeHtml(project.title || "Proyecto sin titulo")}</strong>
          <span class="creative-status-pill ${escapeHtml(status.className)}">${escapeHtml(status.label)}</span>
        </div>
        <div class="creative-project-tagline">${escapeHtml(project.tagline || "Sin tagline")}</div>
        <div class="creative-project-links">
          <span>${escapeHtml(project.focus || "music")} Â· ${escapeHtml(project.mode || "artist")}</span>
          <span>${escapeHtml(formatProjectDate(project.updated_at || project.created_at))}</span>
        </div>
        <div class="creative-project-copy">${escapeHtml(project.problem || "")}</div>
        <div class="creative-project-actions">
          ${status.className !== "published" ? `<button class="action-btn" data-project-status="${escapeHtml(project.id)}:published">Publicar</button>` : ""}
          ${status.className !== "draft" ? `<button class="action-btn" data-project-status="${escapeHtml(project.id)}:draft">Borrador</button>` : ""}
          ${status.className !== "archived" ? `<button class="action-btn" data-project-status="${escapeHtml(project.id)}:archived">Archivar</button>` : ""}
          <button class="action-btn" data-project-delete="${escapeHtml(project.id)}">Borrar</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderPublicOnlyProjectCards() {
  if (!state.publishedProjects.length) {
    return `<div class="note-box">Todavia no publicaste proyectos desde este estudio.</div>`;
  }
  return state.publishedProjects.map((project) => `
    <div class="creative-project-card">
      <div class="creative-project-top">
        <strong>${escapeHtml(project.title || "Proyecto sin titulo")}</strong>
        <span>${escapeHtml(project.focus || "music")} Â· ${escapeHtml(project.mode || "artist")}</span>
      </div>
      <div class="creative-project-tagline">${escapeHtml(project.tagline || "Sin tagline")}</div>
      <div class="creative-project-copy">${escapeHtml(project.problem || "")}</div>
      <div class="creative-project-copy">${escapeHtml(project.impact || "")}</div>
      <div class="creative-project-links">
        <span>${escapeHtml(formatProjectDate(project.updated_at || project.created_at))}</span>
      </div>
    </div>
  `).join("");
}

function normalizeCreativeWebsite(url) {
  const trimmed = (url || "").trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

async function fetchPublicProfileData(userId, fallbackUser = {}) {
  if (!userId) return null;
  const previous = state.publicProfileCache.get(userId) || {
    user: { id: userId, ...fallbackUser },
    projects: [],
    publicTracks: [],
    likedTracks: [],
    loading: false,
    error: "",
  };
  state.publicProfileCache.set(userId, { ...previous, loading: true, error: "" });

  if (!state.supabase) {
    const offlineProfile = { ...previous, loading: false, error: "Inicia Supabase para ver perfiles completos." };
    state.publicProfileCache.set(userId, offlineProfile);
    return offlineProfile;
  }

  const [{ data: userData, error: userError }, { data: projects, error: projectsError }, { data: publicTracks, error: publicTracksError }, { data: likeRows, error: likesError }] = await Promise.all([
    state.supabase
      .from("users")
      .select("id,username,email,avatar_url,bio,instagram_handle,tiktok_handle,website_url,role_label,brand_name,status")
      .eq("id", userId)
      .maybeSingle(),
    state.supabase
      .from("user_projects")
      .select("id,title,tagline,focus,mode,problem,impact,created_at")
      .eq("user_id", userId)
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(12),
    state.supabase
      .from("music_tracks")
      .select("id,title,artist,cover_url,created_at,status,visibility")
      .eq("created_by", userId)
      .eq("status", "approved")
      .eq("visibility", "public")
      .order("created_at", { ascending: false })
      .limit(8),
    state.supabase
      .from("music_track_likes")
      .select("track_id,created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(8),
  ]);

  let likedTracks = [];
  if (!likesError && likeRows?.length) {
    const likedIds = Array.from(new Set((likeRows || []).map((item) => item.track_id).filter(Boolean)));
    if (likedIds.length) {
      const { data: likedData, error: likedError } = await state.supabase
        .from("music_tracks")
        .select("id,title,artist,cover_url,created_at,status,visibility")
        .in("id", likedIds)
        .eq("status", "approved")
        .eq("visibility", "public");
      if (!likedError) {
        const likedMap = new Map((likedData || []).map((track) => [track.id, track]));
        likedTracks = likedIds.map((id) => likedMap.get(id)).filter(Boolean);
      }
    }
  }

  const nextProfile = {
    user: {
      id: userId,
      username: userData?.username || fallbackUser.username || "Anon",
      email: userData?.email || fallbackUser.email || "",
      avatar_url: userData?.avatar_url || fallbackUser.avatar_url || "",
      bio: userData?.bio || fallbackUser.bio || "",
      instagram_handle: userData?.instagram_handle || "",
      tiktok_handle: userData?.tiktok_handle || "",
      website_url: userData?.website_url || "",
      role_label: userData?.role_label || fallbackUser.role_label || "",
      brand_name: userData?.brand_name || fallbackUser.brand_name || "",
      status: userData?.status || "",
    },
    projects: projectsError ? [] : (projects || []),
    publicTracks: publicTracksError ? [] : (publicTracks || []),
    likedTracks,
    loading: false,
    error: userError ? (userError.message || "No pude abrir el perfil.") : "",
  };

  state.publicProfileCache.set(userId, nextProfile);
  return nextProfile;
}

function renderPublicTrackList(tracks, emptyText) {
  if (!tracks.length) {
    return `<div class="note-box">${escapeHtml(emptyText)}</div>`;
  }
  return tracks.map((track) => `
    <div class="public-track-row">
      <div class="public-track-cover">${track.cover_url ? `<img src="${escapeHtml(track.cover_url)}" alt="${escapeHtml(track.title || "Track")}" />` : "<span>â™ª</span>"}</div>
      <div class="public-track-meta">
        <strong>${escapeHtml(track.title || "Track sin titulo")}</strong>
        <span>${escapeHtml(track.artist || "Anon")}</span>
      </div>
    </div>
  `).join("");
}

function openPublicProfile(userId, fallbackUser = {}) {
  if (!userId) return;
  const appId = `profile-${userId}`;
  const existing = state.publicProfileCache.get(userId) || {
    user: { id: userId, ...fallbackUser },
    projects: [],
    publicTracks: [],
    likedTracks: [],
    loading: true,
    error: "",
  };
  state.publicProfileCache.set(userId, existing);

  desktopApps[appId] = {
    title: `Perfil: ${fallbackUser.username || existing.user.username || "User"}`,
    width: 620,
    height: 560,
    x: 220,
    y: 80,
    render() {
      const profile = state.publicProfileCache.get(userId) || existing;
      const user = profile.user || fallbackUser;
      const isMobile = false;
      if (isMobile) {
        return `
          <div class="window-content discord-shell mobile-global-chat">
            <section class="discord-main">
              <div class="discord-topbar compact">
                <div>
                  <div class="discord-title"># general-under</div>
                  <div class="discord-subtitle">Global simplificado para celular.</div>
                </div>
                <div class="discord-topbar-actions">
                  <button class="action-btn" data-open-private="1">MSN</button>
                  <button class="action-btn" data-open-config="1">Config</button>
                  <button class="action-btn" data-open-music="1">Music</button>
                </div>
              </div>
              <div id="chat-messages" class="discord-messages ${escapeHtml(getSkinClass())}"></div>
              <div class="discord-compose mobile">
                <div class="discord-compose-tools mobile">
                  <button id="chat-image-trigger" class="discord-upload-label" type="button" data-action="pick-chat-image">${escapeHtml(getSelectedChatImageName() || "Foto")}</button>
                  <input id="global-image-input" class="hidden" type="file" accept="image/*">
                  <div id="chat-image-status" class="discord-upload-status">${escapeHtml(getSelectedChatImageName() || "")}</div>
                </div>
                <div class="discord-message-row">
                  <input id="chat-input" class="win-input discord-message-input" type="text" maxlength="280" placeholder="Mandar mensaje a #general-under" />
                  <button class="message-send discord-send" data-action="send-chat-message">Enviar</button>
                </div>
              </div>
            </section>
          </div>
          <div class="window-statusbar"><div class="status-panel">Global Chat</div><div class="status-panel">${state.user.loggedIn ? "Realtime" : "Solo lectura"}</div></div>
        `;
      }
      return `
        <div class="window-content public-profile-shell">
          <section class="public-profile-hero">
            ${renderProfileTrigger(userId, getUserDisplayName(user), user.avatar_url || "", "large", "large")}
            <div class="public-profile-copy">
              <div class="public-profile-name">${escapeHtml(getUserDisplayName(user))}</div>
              <div class="public-profile-role">${escapeHtml(user.role_label || "Perfil creativo")}${user.brand_name ? ` Â· ${escapeHtml(user.brand_name)}` : ""}</div>
              <div class="public-profile-bio">${escapeHtml(user.bio || "Todavia no cargo una bio publica.")}</div>
              <div class="public-profile-links">
                ${user.instagram_handle ? `<span>@${escapeHtml(user.instagram_handle.replace(/^@+/, ""))}</span>` : ""}
                ${user.tiktok_handle ? `<span>TikTok: @${escapeHtml(user.tiktok_handle.replace(/^@+/, ""))}</span>` : ""}
                ${user.website_url ? `<a href="${escapeHtml(user.website_url)}" target="_blank" rel="noopener noreferrer">Abrir web</a>` : ""}
                <span>${escapeHtml(user.status || "offline")}</span>
              </div>
            </div>
          </section>
          ${profile.loading ? '<div class="note-box">Cargando perfil...</div>' : ""}
          ${profile.error ? `<div class="note-box">${escapeHtml(profile.error)}</div>` : ""}
          <div class="public-profile-grid">
            <section class="public-profile-card">
              <h3>Proyectos publicados</h3>
              <div class="creative-project-list">
                ${profile.projects.length ? profile.projects.map((project) => `
                  <div class="creative-project-card">
                    <div class="creative-project-top">
                      <strong>${escapeHtml(project.title || "Proyecto")}</strong>
                      <span>${escapeHtml(project.focus || "")} Â· ${escapeHtml(project.mode || "")}</span>
                    </div>
                    <div class="creative-project-tagline">${escapeHtml(project.tagline || "Sin tagline")}</div>
                    <div class="creative-project-copy">${escapeHtml(project.problem || "")}</div>
                    <div class="creative-project-copy">${escapeHtml(project.impact || "")}</div>
                  </div>
                `).join("") : '<div class="note-box">No hay proyectos visibles todavia.</div>'}
              </div>
            </section>
            <section class="public-profile-card">
              <h3>Subio a Under Music</h3>
              <div class="public-track-list">${renderPublicTrackList(profile.publicTracks, "Todavia no publico musica visible.")}</div>
            </section>
          </div>
          <div class="public-profile-grid single">
            <section class="public-profile-card">
              <h3>Lo que escucha</h3>
              <div class="public-track-list">${renderPublicTrackList(profile.likedTracks, "Todavia no marco tracks en Under Music.")}</div>
            </section>
          </div>
        </div>
        <div class="window-statusbar"><div class="status-panel">Perfil publico</div><div class="status-panel">${escapeHtml(String(profile.projects.length))} proyectos</div></div>
      `;
    },
    bind(win) {
      bindProfileTriggers(win);
    },
  };

  openWindow(appId);
  fetchPublicProfileData(userId, fallbackUser).then(() => {
    desktopApps[appId].title = `Perfil: ${getUserDisplayName(state.publicProfileCache.get(userId)?.user || fallbackUser)}`;
    const win = state.windows.get(appId)?.element;
    if (win) {
      win.querySelector(".header-title").textContent = desktopApps[appId].title;
    }
    refreshWindow(appId);
    updateTaskbar();
  });
}

async function loadUserProjects() {
  if (!state.supabase || !state.user.loggedIn) {
    state.userProjects = [];
    state.publishedProjects = [];
    return;
  }

  let result = await state.supabase
    .from("user_projects")
    .select("id,title,tagline,focus,mode,problem,impact,is_published,project_status,created_at,updated_at")
    .eq("user_id", state.user.id)
    .order("updated_at", { ascending: false });

  if (result.error && /project_status/i.test(result.error.message || "")) {
    result = await state.supabase
      .from("user_projects")
      .select("id,title,tagline,focus,mode,problem,impact,is_published,created_at,updated_at")
      .eq("user_id", state.user.id)
      .order("updated_at", { ascending: false });
  }

  if (result.error) {
    console.error(result.error);
    state.userProjects = [];
    state.publishedProjects = [];
    return;
  }

  state.userProjects = (result.data || []).map((project) => ({
    ...project,
    project_status: project.project_status || (project.is_published ? "published" : "draft"),
  }));
  state.publishedProjects = state.userProjects.filter((project) => project.project_status === "published");
}

async function loadPublishedProjects() {
  await loadUserProjects();
}

async function saveCreativeProject(win, nextStatus = "published") {
  if (!state.supabase || !state.user.loggedIn) {
    alert("Necesitas iniciar sesion para guardar un proyecto.");
    return;
  }

  const syncFieldsToState = () => {
    state.creativeStudio.focus = win.querySelector("[data-creative-focus].active")?.dataset.creativeFocus || state.creativeStudio.focus;
    state.creativeStudio.mode = win.querySelector("[data-creative-mode].active")?.dataset.creativeMode || state.creativeStudio.mode;
    state.creativeStudio.projectTitle = win.querySelector("#creative-project-title")?.value.trim() || "";
    state.creativeStudio.projectTagline = win.querySelector("#creative-project-tagline")?.value.trim() || "";
    state.creativeStudio.problem = win.querySelector("#creative-problem")?.value.trim() || "";
    state.creativeStudio.impact = win.querySelector("#creative-impact")?.value.trim() || "";
    state.creativeStudio.manifesto = win.querySelector("#creative-manifesto")?.value || "";
    state.creativeStudio.lookNotes = win.querySelector("#creative-look-notes")?.value || win.querySelector("#creative-startup-notes")?.value || "";
    state.creativeStudio.musicNotes = win.querySelector("#creative-music-notes")?.value || "";
    state.creativeStudio.releasePlan = win.querySelector("#creative-release-plan")?.value || "";
    state.creativeStudio.aiReply = win.querySelector("#creative-ai-reply")?.value || "";
    state.user.role_label = win.querySelector("#creative-role-label")?.value.trim() || "";
    state.user.brand_name = win.querySelector("#creative-brand-name")?.value.trim() || "";
    state.user.instagram_handle = win.querySelector("#creative-instagram")?.value.trim() || "";
    state.user.tiktok_handle = win.querySelector("#creative-tiktok")?.value.trim() || "";
    state.user.website_url = normalizeCreativeWebsite(win.querySelector("#creative-website")?.value.trim() || "");
    state.user.bio = win.querySelector("#creative-bio")?.value.trim() || "";
  };

  syncFieldsToState();
  persistCreativeStudio();

  if (!state.creativeStudio.projectTitle) {
    alert("Pone un nombre para el proyecto antes de guardarlo.");
    return;
  }

  const projectPayload = {
    user_id: state.user.id,
    title: state.creativeStudio.projectTitle,
    tagline: state.creativeStudio.projectTagline,
    focus: state.creativeStudio.focus,
    mode: state.creativeStudio.mode,
    problem: state.creativeStudio.problem,
    impact: state.creativeStudio.impact,
    manifesto: state.creativeStudio.manifesto,
    notes_primary: state.creativeStudio.focus === "music" ? state.creativeStudio.musicNotes : state.creativeStudio.lookNotes,
    notes_secondary: state.creativeStudio.focus === "startup" ? state.creativeStudio.releasePlan : state.creativeStudio.aiReply,
    ai_reply: state.creativeStudio.aiReply,
    role_label: state.user.role_label,
    brand_name: state.user.brand_name,
    instagram_handle: state.user.instagram_handle,
    tiktok_handle: state.user.tiktok_handle,
    website_url: normalizeCreativeWebsite(state.user.website_url),
    bio: state.user.bio,
    is_published: nextStatus === "published",
    project_status: nextStatus,
    updated_at: new Date().toISOString(),
  };

  const { error: userError } = await state.supabase
    .from("users")
    .update({
      bio: state.user.bio,
      instagram_handle: state.user.instagram_handle,
      tiktok_handle: state.user.tiktok_handle,
      website_url: normalizeCreativeWebsite(state.user.website_url),
      role_label: state.user.role_label,
      brand_name: state.user.brand_name,
      last_seen: new Date().toISOString(),
    })
    .eq("id", state.user.id);
  const userColumnsMissing = userError && /column/i.test(userError.message || "");

  const { error: projectError } = await state.supabase
    .from("user_projects")
    .insert(projectPayload);

  if ((userError && !userColumnsMissing) || projectError) {
    console.error(userError || projectError);
    alert((userError && !userColumnsMissing ? userError : projectError)?.message || "No pude publicar el proyecto.");
    return;
  }

  localStorage.setItem("win98_bio", state.user.bio || "");
  localStorage.setItem("win98_instagram_handle", state.user.instagram_handle || "");
  localStorage.setItem("win98_tiktok_handle", state.user.tiktok_handle || "");
  localStorage.setItem("win98_website_url", state.user.website_url || "");
  localStorage.setItem("win98_role_label", state.user.role_label || "");
  localStorage.setItem("win98_brand_name", state.user.brand_name || "");
  await loadUserProjects();
  refreshWindow("proyectos");
  alert(nextStatus === "published" ? "Proyecto publicado." : nextStatus === "archived" ? "Proyecto archivado." : "Proyecto guardado como borrador.");
}

async function updateCreativeProjectStatus(projectId, nextStatus) {
  if (!state.supabase || !state.user.loggedIn || !projectId) return;
  let result = await state.supabase
    .from("user_projects")
    .update({
      is_published: nextStatus === "published",
      project_status: nextStatus,
      updated_at: new Date().toISOString(),
    })
    .eq("id", projectId)
    .eq("user_id", state.user.id);

  if (result.error && /project_status/i.test(result.error.message || "")) {
    result = await state.supabase
      .from("user_projects")
      .update({
        is_published: nextStatus === "published",
        updated_at: new Date().toISOString(),
      })
      .eq("id", projectId)
      .eq("user_id", state.user.id);
  }

  if (result.error) {
    alert(result.error.message || "No pude actualizar el proyecto.");
    return;
  }

  await loadUserProjects();
  refreshWindow("proyectos");
}

async function deleteCreativeProject(projectId) {
  if (!state.supabase || !state.user.loggedIn || !projectId) return;
  const { error } = await state.supabase
    .from("user_projects")
    .delete()
    .eq("id", projectId)
    .eq("user_id", state.user.id);

  if (error) {
    alert(error.message || "No pude borrar el proyecto.");
    return;
  }

  await loadUserProjects();
  refreshWindow("proyectos");
}

function isEffectiveAdmin() {
  return state.isAdmin || FORCED_ADMIN_EMAILS.includes((state.user.email || "").toLowerCase()) || isOfficialEmail(state.user.email);
}

async function initSupabase() {
  if (!state.supabase) return;
  await fetchRecentMessages();
  subscribeToChat();
  if (!state.user.loggedIn) return;
  await loadSocialGraph();
  await loadUserProjects();
  startPresenceHeartbeat();
}

function updateOnlineIndicator() {
  const indicator = document.getElementById("online-indicator");
  if (!indicator) return;
  if (!state.supabase) {
    indicator.textContent = state.supabaseLoadError ? "Supabase no cargo" : "Sin Supabase";
    return;
  }
  if (!state.user.loggedIn) {
    indicator.textContent = "Offline";
    return;
  }
  indicator.textContent = `Online Â· ${state.user.credits} cr`;
}

async function submitAuth(mode, win) {
  if (!state.supabase) return;
  setUserActionStatus(win, mode === "sign-up" ? "Creando cuenta..." : "Ingresando...");
  const email = win.querySelector("#auth-email")?.value.trim();
  const password = win.querySelector("#auth-password")?.value.trim();
  if (!email || !password) {
    setUserActionStatus(win, "");
    alert("Complet? email y contrase?a.");
    return;
  }

  let result;
  try {
    result = mode === "sign-up"
      ? await state.supabase.auth.signUp({ email, password })
      : await state.supabase.auth.signInWithPassword({ email, password });
  } catch (error) {
    console.error("Fallo de conexion con Supabase:", error);
    const message = "No puedo conectar con Supabase. RevisÃ¡ que el proyecto/base estÃ© activo y que la SUPABASE_URL sea la actual.";
    setUserActionStatus(win, message);
    alert(message);
    return;
  }

  if (result.error) {
    setUserActionStatus(win, "");
    alert(result.error.message);
    return;
  }

  if (mode === "sign-up" && !result.data.session) {
    setUserActionStatus(win, "");
    alert("Cuenta creada. Si tu proyecto pide confirmar email, aprobalo y despu?s ingres?.");
  }
}

async function ensureProfile() {
  if (!state.supabase || !state.user.loggedIn) return;
  const fallbackName = state.user.username || (state.user.email ? state.user.email.split("@")[0] : `user_${state.user.id.slice(0, 6)}`);
  const { data: existingProfile, error } = await state.supabase
    .from("users")
    .select("*")
    .eq("id", state.user.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return;
  }

  if (existingProfile?.id) {
    state.user.email = existingProfile.email || state.user.email;
    state.user.username = existingProfile.username || fallbackName;
    state.user.avatar_url = existingProfile.avatar_url || "";
    state.user.chat_skin = existingProfile.chat_skin || "classic";
    state.user.bio = existingProfile.bio || "";
    state.user.instagram_handle = existingProfile.instagram_handle || "";
    state.user.tiktok_handle = existingProfile.tiktok_handle || "";
    state.user.website_url = existingProfile.website_url || "";
    state.user.role_label = existingProfile.role_label || "";
    state.user.brand_name = existingProfile.brand_name || "";
    state.user.lecoins = Number(existingProfile.lecoins || 0);
    state.user.credits = Number(existingProfile.credits || 0);
    localStorage.setItem("win98_username", state.user.username);
    localStorage.setItem("win98_avatar_url", state.user.avatar_url);
    localStorage.setItem("win98_chat_skin", state.user.chat_skin);
    localStorage.setItem("win98_bio", state.user.bio);
    localStorage.setItem("win98_instagram_handle", state.user.instagram_handle);
    localStorage.setItem("win98_tiktok_handle", state.user.tiktok_handle);
    localStorage.setItem("win98_website_url", state.user.website_url);
    localStorage.setItem("win98_role_label", state.user.role_label);
    localStorage.setItem("win98_brand_name", state.user.brand_name);
    await state.supabase
      .from("users")
      .update({
        email: state.user.email,
        status: "online",
        last_seen: new Date().toISOString(),
      })
      .eq("id", state.user.id);
    return;
  }

  state.user.username = fallbackName;
  localStorage.setItem("win98_username", fallbackName);
  const insertPayload = {
    id: state.user.id,
    email: state.user.email,
    username: fallbackName,
    avatar_url: state.user.avatar_url || "",
    chat_skin: state.user.chat_skin || "classic",
    bio: state.user.bio || "",
    instagram_handle: state.user.instagram_handle || "",
    tiktok_handle: state.user.tiktok_handle || "",
    website_url: state.user.website_url || "",
    role_label: state.user.role_label || "",
    brand_name: state.user.brand_name || "",
    status: "online",
    lecoins: state.user.lecoins || 0,
    credits: state.user.credits || 0,
    last_seen: new Date().toISOString(),
  };
  const insertResult = await state.supabase.from("users").insert(insertPayload);
  if (insertResult.error && /column/i.test(insertResult.error.message || "")) {
    await state.supabase.from("users").insert({
      id: state.user.id,
      email: state.user.email,
      username: fallbackName,
      avatar_url: state.user.avatar_url || "",
      chat_skin: state.user.chat_skin || "classic",
      status: "online",
      lecoins: state.user.lecoins || 0,
      credits: state.user.credits || 0,
      last_seen: new Date().toISOString(),
    });
  }
}

function syncEconomyViews({ rerenderSlot = false } = {}) {
  updateOnlineIndicator();
  updateSlot98CreditsDisplay();
  refreshWindow("users");
  refreshWindow("chat-global");
  refreshWindow("private-chat");
  if (rerenderSlot) refreshWindow("slot98-game");
}

function clearPromoCodeInputs() {
  document.querySelectorAll("#redeem-code-input, #slot98-code-input").forEach((input) => {
    input.value = "";
  });
}

async function refreshProfileFromDb(showAlert = true) {
  if (!state.supabase || !state.user.loggedIn) return;
  const { data, error } = await state.supabase
    .from("users")
    .select("*")
    .eq("id", state.user.id)
    .single();

  if (error) {
    console.error(error);
    if (showAlert) alert("No se pudo cargar el perfil.");
    return;
  }

  state.user.email = data.email || state.user.email;
  state.user.username = data.username || state.user.username;
  state.user.avatar_url = data.avatar_url || "";
  state.user.chat_skin = data.chat_skin || "classic";
  state.user.bio = data.bio || "";
  state.user.instagram_handle = data.instagram_handle || "";
  state.user.tiktok_handle = data.tiktok_handle || "";
  state.user.website_url = data.website_url || "";
  state.user.role_label = data.role_label || "";
  state.user.brand_name = data.brand_name || "";
  state.user.lecoins = Number(data.lecoins || 0);
  state.user.credits = Number(data.credits || 0);

  localStorage.setItem("win98_username", state.user.username);
  localStorage.setItem("win98_avatar_url", state.user.avatar_url);
  localStorage.setItem("win98_chat_skin", state.user.chat_skin);
  localStorage.setItem("win98_bio", state.user.bio);
  localStorage.setItem("win98_instagram_handle", state.user.instagram_handle);
  localStorage.setItem("win98_tiktok_handle", state.user.tiktok_handle);
  localStorage.setItem("win98_website_url", state.user.website_url);
  localStorage.setItem("win98_role_label", state.user.role_label);
  localStorage.setItem("win98_brand_name", state.user.brand_name);
  applyUserSkin();
  updateOnlineIndicator();
  rerenderCoreApps();
}

async function saveProfileData() {
  if (!state.supabase || !state.user.loggedIn) return;
  const username = document.querySelector("#username-input")?.value.trim();
  const avatarUrl = document.querySelector("#avatar-input")?.value.trim() || "";
  if (!username) {
    alert("ElegÃ­ un nombre visible.");
    return;
  }

  const { error } = await state.supabase
    .from("users")
    .update({
      username,
      avatar_url: avatarUrl,
      last_seen: new Date().toISOString(),
    })
    .eq("id", state.user.id);

  if (error) {
    alert(error.message);
    return;
  }

  state.user.username = username;
  state.user.avatar_url = avatarUrl;
  localStorage.setItem("win98_username", username);
  localStorage.setItem("win98_avatar_url", avatarUrl);
  updateOnlineIndicator();
  rerenderCoreApps();
}

async function updateUserPassword(win) {
  if (!state.supabase || !state.user.loggedIn) return;

  const nextPassword = win.querySelector("#new-password-input")?.value.trim() || "";
  const confirmPassword = win.querySelector("#confirm-password-input")?.value.trim() || "";

  if (!nextPassword || !confirmPassword) {
    setUserActionStatus(win, "");
    alert("CompletÃ¡ la nueva contraseÃ±a y su confirmaciÃ³n.");
    return;
  }

  if (nextPassword.length < 6) {
    setUserActionStatus(win, "");
    alert("La nueva contraseÃ±a debe tener al menos 6 caracteres.");
    return;
  }

  if (nextPassword !== confirmPassword) {
    setUserActionStatus(win, "");
    alert("Las contraseÃ±as no coinciden.");
    return;
  }

  setUserActionStatus(win, "Actualizando contraseÃ±a...");
  const { error } = await state.supabase.auth.updateUser({ password: nextPassword });

  if (error) {
    setUserActionStatus(win, "");
    alert(error.message);
    return;
  }

  win.querySelector("#new-password-input").value = "";
  win.querySelector("#confirm-password-input").value = "";
  setUserActionStatus(win, "ContraseÃ±a actualizada.");
}

async function signOutUser() {
  if (!state.supabase) return;
  const usersWindow = state.windows.get("users")?.element || document;
  setUserActionStatus(usersWindow, "Cerrando sesi?n...");
  await state.supabase.auth.signOut();
  if (state.realtimeChannel) {
    state.supabase.removeChannel(state.realtimeChannel);
    state.realtimeChannel = null;
  }
  setUserActionStatus(usersWindow, "");
}

function setUserActionStatus(container, text) {
  const scope = container instanceof Element ? container : document;
  const node = scope.querySelector("#user-action-status");
  if (node) node.textContent = text || "";
}

async function loadRankings() {
  if (!state.supabase || !state.user.loggedIn) return;
  const [{ data: lecoins }, { data: credits }] = await Promise.all([
    state.supabase.from("users").select("username,lecoins").order("lecoins", { ascending: false }).limit(8),
    state.supabase.from("users").select("username,credits").order("credits", { ascending: false }).limit(8),
  ]);
  state.rankings.lecoins = lecoins || [];
  state.rankings.credits = credits || [];
}

async function loadAdminStatus() {
  if (!state.supabase || !state.user.loggedIn) return;
  const { data } = await state.supabase
    .from("admin_emails")
    .select("email")
    .eq("email", state.user.email)
    .maybeSingle();
  state.isAdmin = Boolean(data?.email) || FORCED_ADMIN_EMAILS.includes((state.user.email || "").toLowerCase());
}

async function loadGeneratedCodes() {
  if (!state.supabase || !state.user.loggedIn || !isEffectiveAdmin()) {
    state.generatedCodes = [];
    state.generatedCodeCursor = 0;
    return;
  }
  const { data, error } = await state.supabase
    .from("promo_codes")
    .select("code,credits_amount,claimed_at,created_at")
    .is("claimed_at", null)
    .order("created_at", { ascending: false })
    .limit(20);
  if (error) {
    console.error(error);
    return;
  }
  state.generatedCodes = data || [];
  if (!state.generatedCodes.length) {
    state.generatedCodeCursor = 0;
  } else {
    state.generatedCodeCursor = state.generatedCodeCursor % state.generatedCodes.length;
  }
}

function renderGeneratedCodesText() {
  if (!state.generatedCodes.length) {
    return "";
  }
  return state.generatedCodes.map((item) => item.code).join("\n");
}

async function loadAdminAlbumProgress() {
  if (!state.supabase || !state.user.loggedIn || !isEffectiveAdmin()) {
    state.adminAlbumProgress = [];
    state.adminAlbumProgressError = "";
    return;
  }

  const [{ data: users, error: usersError }, { data: stickers, error: stickersError }] = await Promise.all([
    state.supabase.from("users").select("id,username,credits").order("username", { ascending: true }),
    state.supabase.from("user_stickers").select("user_id,sticker_key,quantity"),
  ]);

  if (usersError || stickersError) {
    console.error(usersError || stickersError);
    state.adminAlbumProgress = [];
    state.adminAlbumProgressError = "Falta permiso para ver el progreso global del album.";
    return;
  }

  const progressMap = new Map();
  (stickers || []).forEach((item) => {
    if (!item?.user_id) return;
    const current = progressMap.get(item.user_id) || { unique: 0, total: 0 };
    if (Number(item.quantity || 0) > 0) current.unique += 1;
    current.total += Number(item.quantity || 0);
    progressMap.set(item.user_id, current);
  });

  state.adminAlbumProgress = (users || [])
    .map((user) => {
      const progress = progressMap.get(user.id) || { unique: 0, total: 0 };
      return {
        username: user.username || "Anon",
        credits: Number(user.credits || 0),
        unique: progress.unique,
        total: progress.total,
        remaining: Math.max(0, SLOT_ALBUM_TARGET - progress.unique),
      };
    })
    .sort((a, b) => {
      if (a.remaining !== b.remaining) return a.remaining - b.remaining;
      if (a.unique !== b.unique) return b.unique - a.unique;
      return b.total - a.total;
    })
    .slice(0, 12);
  state.adminAlbumProgressError = "";
}

function renderAdminAlbumProgress() {
  if (state.adminAlbumProgressError) {
    return `<div class="rank-row empty">${escapeHtml(state.adminAlbumProgressError)}</div>`;
  }
  if (!state.adminAlbumProgress.length) {
    return `<div class="rank-row empty">Todavia no hay progreso visible del album.</div>`;
  }
  return state.adminAlbumProgress.map((entry, index) => `
    <div class="rank-row album-progress-row">
      <span>#${index + 1}</span>
      <strong>${escapeHtml(entry.username)}</strong>
      <span>${escapeHtml(String(entry.unique))}/${SLOT_ALBUM_TARGET}</span>
      <span>${entry.remaining === 0 ? "Listo" : `Faltan ${entry.remaining}`}</span>
    </div>
  `).join("");
}

async function resetCreditsRanking() {
  if (!state.supabase || !isEffectiveAdmin()) return;
  const [resetUsers, resetStickers] = await Promise.all([
    state.supabase
      .from("users")
      .update({ credits: 0, last_seen: new Date().toISOString() })
      .gte("credits", 0),
    state.supabase
      .from("user_stickers")
      .delete()
      .gte("quantity", 0),
  ]);

  if (resetUsers.error || resetStickers.error) {
    alert(resetUsers.error?.message || resetStickers.error?.message || "No se pudo reiniciar credits.");
    return;
  }

  state.user.credits = 0;
  state.slot98.stickers = [];
  state.slot98.heat = 0;
  state.slot98.combo = 0;
  state.slot98.pity = 0;
  state.slot98.inventoryOpen = false;
  state.slot98.lastSpinSummary = "Economia reiniciada por admin.";
  await loadRankings();
  await loadAdminAlbumProgress();
  syncEconomyViews({ rerenderSlot: true });
  alert("Credits, ranking e inventario reiniciados.");
}

async function loadGameConfig() {
  if (!state.supabase || !state.user.loggedIn) return;
  const { data } = await state.supabase
    .from("game_config")
    .select("key_name,key_value")
    .in("key_name", ["slot_win_rate"])
    .limit(10);

  if (!data) return;
  data.forEach((row) => {
    if (row.key_name === "slot_win_rate") {
      state.gameConfig.slot_win_rate = Number(row.key_value || 10);
    }
  });
}

async function loadMusicTracks() {
  if (!state.supabase || !state.user.loggedIn) {
    state.musicTracks = [];
    state.privateMusicTracks = [];
    state.musicPending = [];
    return;
  }
  const [publicResult, privateResult] = await Promise.all([
    state.supabase
      .from("music_tracks")
      .select("id,title,artist,stream_url,cover_url,created_at,status,created_by,visibility")
      .eq("status", "approved")
      .eq("visibility", "public")
      .order("created_at", { ascending: false })
      .limit(50),
    state.supabase
      .from("music_tracks")
      .select("id,title,artist,stream_url,cover_url,created_at,status,created_by,visibility")
      .eq("created_by", state.user.id)
      .eq("visibility", "private")
      .order("created_at", { ascending: false })
      .limit(50),
  ]);
  if (publicResult.error || privateResult.error) {
    console.error(publicResult.error || privateResult.error);
    state.musicTracks = [];
    state.privateMusicTracks = [];
    state.musicPending = [];
    return;
  }
  const approvedTracks = publicResult.data || [];
  const privateTracks = privateResult.data || [];
  const trackIds = approvedTracks.map((track) => track.id);
  const [likesResult, playsResult, pendingResult] = await Promise.all([
    trackIds.length
      ? state.supabase.from("music_track_likes").select("track_id,user_id").in("track_id", trackIds)
      : Promise.resolve({ data: [] }),
    trackIds.length
      ? state.supabase.from("music_track_plays").select("track_id").in("track_id", trackIds)
      : Promise.resolve({ data: [] }),
    isEffectiveAdmin()
      ? state.supabase
          .from("music_tracks")
          .select("id,title,artist,stream_url,cover_url,created_at,status,created_by,visibility")
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(20)
      : Promise.resolve({ data: [] }),
  ]);

  const likeCounts = new Map();
  const likedByMe = new Set();
  (likesResult.data || []).forEach((row) => {
    likeCounts.set(row.track_id, (likeCounts.get(row.track_id) || 0) + 1);
    if (row.user_id === state.user.id) likedByMe.add(row.track_id);
  });

  const playCounts = new Map();
  (playsResult.data || []).forEach((row) => {
    playCounts.set(row.track_id, (playCounts.get(row.track_id) || 0) + 1);
  });

  state.musicTracks = approvedTracks.map((track) => ({
    ...track,
    like_count: likeCounts.get(track.id) || 0,
    play_count: playCounts.get(track.id) || 0,
    liked_by_me: likedByMe.has(track.id),
  }));
  state.privateMusicTracks = privateTracks.map((track) => ({
    ...track,
    like_count: 0,
    play_count: 0,
    liked_by_me: false,
  }));
  state.musicPending = pendingResult.data || [];
  const availableTracks = [...state.privateMusicTracks, ...state.musicTracks];
  if (state.player.currentTrackId && !availableTracks.some((track) => track.id === state.player.currentTrackId)) {
    state.player.currentTrackId = "";
  }
  if (availableTracks.length && !state.player.currentTrackId) {
    state.player.currentTrackId = availableTracks[0].id;
  }
  updateMediaSession();
  if (state.windows.has("winamp")) {
    refreshWindow("winamp");
  }
}

function getCurrentMusicTrack() {
  return [...state.privateMusicTracks, ...state.musicTracks].find((track) => track.id === state.player.currentTrackId)
    || state.privateMusicTracks[0]
    || state.musicTracks[0]
    || null;
}

function setMusicUploadStatus(container, text) {
  const scope = container instanceof Element ? container : document;
  const node = scope.querySelector("#music-upload-status");
  state.musicUpload.status = text || "";
  if (node) node.textContent = state.musicUpload.status;
}

function syncMusicOutputGain() {
  const audio = ensureMusicAudio();
  audio.volume = Math.min(1, state.player.volume);
  if (state.player.gainNode) {
    state.player.gainNode.gain.value = Math.max(0, Math.min(3, state.player.volume * state.player.boost));
  }
}

function shouldUseMusicWebAudio() {
  return !isMobileViewport();
}

function rememberUserPanelScroll(container) {
  const panel = (container instanceof Element ? container : document).querySelector(".window-content.user-panel");
  if (!panel) return;
  state.musicUpload.scrollTop = panel.scrollTop || 0;
}

function restoreUserPanelScroll(container) {
  const panel = (container instanceof Element ? container : document).querySelector(".window-content.user-panel");
  if (!panel) return;
  requestAnimationFrame(() => {
    panel.scrollTop = state.musicUpload.scrollTop || panel.scrollTop || 0;
  });
}

async function recordMusicPlay(trackId) {
  if (!state.supabase || !state.user.loggedIn || !trackId) return;
  const { error } = await state.supabase
    .from("music_track_plays")
    .insert({ track_id: trackId, user_id: state.user.id });
  if (error) {
    console.error(error);
    return;
  }
  const track = state.musicTracks.find((item) => item.id === trackId);
  if (track) track.play_count = Number(track.play_count || 0) + 1;
  refreshWindow("winamp");
}

function ensureMusicAudio() {
  if (state.player.audio) return state.player.audio;
  const audio = new Audio();
  audio.preload = "metadata";
  audio.crossOrigin = "anonymous";
  audio.volume = Math.min(1, state.player.volume);
  audio.addEventListener("timeupdate", () => {
    state.player.currentTime = audio.currentTime || 0;
    state.player.duration = audio.duration || 0;
    updateMediaSessionPosition();
    updateUnderMusicUi();
  });
  audio.addEventListener("loadedmetadata", () => {
    state.player.duration = audio.duration || 0;
    updateMediaSession();
    updateMediaSessionPosition();
    updateUnderMusicUi();
  });
  audio.addEventListener("play", () => {
    state.player.isPlaying = true;
    void ensureMusicAnalyser();
    startMusicVisualizerLoop();
    updateMediaSession();
    updateUnderMusicUi();
  });
  audio.addEventListener("pause", () => {
    state.player.isPlaying = false;
    stopMusicVisualizerLoop();
    updateMediaSession();
    updateUnderMusicUi();
  });
  audio.addEventListener("ended", () => {
    stopMusicVisualizerLoop();
    playAdjacentTrack(1);
  });
  state.player.audio = audio;
  bindMediaSessionActions();
  return audio;
}

async function ensureMusicAnalyser() {
  const audio = ensureMusicAudio();
  if (!shouldUseMusicWebAudio()) {
    return null;
  }
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!state.player.audioContext) {
    state.player.audioContext = new AudioContextCtor();
  }
  if (state.player.audioContext.state === "suspended") {
    try {
      await state.player.audioContext.resume();
    } catch (_error) {
    }
  }
  if (!state.player.analyser) {
    state.player.analyser = state.player.audioContext.createAnalyser();
    state.player.analyser.fftSize = 64;
    state.player.analyser.smoothingTimeConstant = 0.82;
    state.player.frequencyData = new Uint8Array(state.player.analyser.frequencyBinCount);
  }
  if (!state.player.gainNode) {
    state.player.gainNode = state.player.audioContext.createGain();
  }
  if (!state.player.sourceNode) {
    state.player.sourceNode = state.player.audioContext.createMediaElementSource(audio);
    state.player.sourceNode.connect(state.player.gainNode);
    state.player.gainNode.connect(state.player.analyser);
    state.player.analyser.connect(state.player.audioContext.destination);
  }
  syncMusicOutputGain();
  return state.player.analyser;
}

function stopMusicVisualizerLoop() {
  if (state.player.vizFrame) {
    cancelAnimationFrame(state.player.vizFrame);
    state.player.vizFrame = 0;
  }
}

function startMusicVisualizerLoop() {
  stopMusicVisualizerLoop();
  const paint = () => {
    updateUnderMusicUi();
    if (!state.player.isPlaying || !state.player.powerOn) {
      state.player.vizFrame = 0;
      return;
    }
    state.player.vizFrame = requestAnimationFrame(paint);
  };
  state.player.vizFrame = requestAnimationFrame(paint);
}

function bindMediaSessionActions() {
  if (!("mediaSession" in navigator)) return;
  navigator.mediaSession.setActionHandler("play", () => {
    toggleMusicPlayback(true);
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    toggleMusicPlayback(false);
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    playAdjacentTrack(-1);
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    playAdjacentTrack(1);
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    seekMusicBy(-10);
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    seekMusicBy(10);
  });
}

function updateMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const track = getCurrentMusicTrack();
  if (!track) {
    navigator.mediaSession.metadata = null;
    navigator.mediaSession.playbackState = "none";
    return;
  }
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title || "Under Music",
    artist: track.artist || "Under community",
    album: "Under Music",
    artwork: [
      { src: track.cover_url || DEFAULT_MUSIC_COVER, sizes: "512x512", type: "image/png" },
    ],
  });
  navigator.mediaSession.playbackState = state.player.isPlaying ? "playing" : "paused";
  updateMediaSessionPosition();
}

function updateMediaSessionPosition() {
  if (!("mediaSession" in navigator)) return;
  const audio = state.player.audio;
  if (!audio || !Number.isFinite(audio.duration) || !audio.duration) return;
  if (typeof navigator.mediaSession.setPositionState !== "function") return;
  try {
    navigator.mediaSession.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate || 1,
      position: audio.currentTime || 0,
    });
  } catch (_error) {
  }
}

function getRetroClockText() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function updateUnderMusicUi() {
  const win = state.windows.get("winamp")?.element;
  if (!win) return;
  const track = getRetroCurrentTrack();
  const playerNode = win.querySelector("#player-container");
  playerNode?.classList.toggle("power-on", state.player.powerOn);
  win.querySelector("#status")?.replaceChildren(document.createTextNode(
    !state.player.powerOn
      ? "OFF"
      : state.player.isPlaying
        ? "PLAYING"
        : state.player.currentTime > 0
          ? "PAUSED"
          : "LISTO",
  ));
  win.querySelector("#clock")?.replaceChildren(document.createTextNode(getRetroClockText()));
  win.querySelector("#track-name")?.replaceChildren(document.createTextNode(track?.title || "LISTO PARA REPRODUCIR"));
  win.querySelector("#vol-label")?.replaceChildren(document.createTextNode(`VOL: ${Math.round(state.player.volume * 100)}%`));
  win.querySelector("#timer-display")?.replaceChildren(document.createTextNode(formatMusicTime(state.player.currentTime)));
  win.querySelectorAll("[data-play-track-id]").forEach((node) => {
    node.closest(".retro-track-row")?.classList.toggle("active", node.dataset.playTrackId === state.player.currentTrackId);
  });
  win.querySelectorAll("#viz .bar").forEach((bar, index) => {
    let nextHeight = 2;
    if (state.player.powerOn && state.player.isPlaying && state.player.analyser && state.player.frequencyData) {
      state.player.analyser.getByteFrequencyData(state.player.frequencyData);
      const bucket = state.player.frequencyData[index % state.player.frequencyData.length] || 0;
      nextHeight = 2 + ((bucket / 255) * 18);
    }
    bar.style.height = `${nextHeight.toFixed(1)}px`;
  });
}

function formatMusicTime(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const mins = Math.floor(safe / 60);
  const secs = String(safe % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function getRetroPlayerPlaylist() {
  const allTracks = [...state.privateMusicTracks, ...state.musicTracks];
  return allTracks.length
    ? allTracks.map((track) => ({
        id: track.id,
        title: track.title || "SIN TITULO",
        artist: track.artist || "UNDER COMMUNITY",
        play_count: Number(track.play_count || 0),
        like_count: Number(track.like_count || 0),
        liked_by_me: Boolean(track.liked_by_me),
        created_at: track.created_at || "",
        visibility: track.visibility || "public",
      }))
    : [{ id: "fallback-track", title: "LISTO PARA REPRODUCIR", artist: "UNDER COMMUNITY" }];
}

function getRetroCurrentTrack() {
  const playlist = getRetroPlayerPlaylist();
  return playlist.find((track) => track.id === state.player.currentTrackId) || getCurrentMusicTrack() || playlist[0] || null;
}

function getSortedMusicTracks() {
  const list = state.player.libraryView === "mine"
    ? [...state.privateMusicTracks]
    : [...state.musicTracks];
  switch (state.player.libraryView) {
    case "mine":
      return list.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    case "new":
      return list.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    case "plays":
      return list.sort((a, b) => Number(b.play_count || 0) - Number(a.play_count || 0));
    case "likes":
      return list.sort((a, b) => Number(b.like_count || 0) - Number(a.like_count || 0));
    case "top":
    default:
      return list.sort((a, b) => {
        const scoreA = Number(a.play_count || 0) + (Number(a.like_count || 0) * 3);
        const scoreB = Number(b.play_count || 0) + (Number(b.like_count || 0) * 3);
        if (scoreA !== scoreB) return scoreB - scoreA;
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
      });
  }
}

function getRetroControlStyle(controlId) {
  const control = state.player.controls[controlId];
  if (!control) return "";
  return `top:${control.top}%; left:${control.left}%; width:${control.width}%; height:${control.height}%; border-radius:${control.radius}%;`;
}

function getRetroCoordsOutput() {
  const lines = [
    "/* Nueva Configuracion */",
    `.lcd { top: ${state.player.lcd.top}%; left: ${state.player.lcd.left}%; width: ${state.player.lcd.width}%; height: ${state.player.lcd.height}%; }`,
  ];
  Object.entries(state.player.controls).forEach(([id, control]) => {
    lines.push(`.${id} { top: ${control.top}%; left: ${control.left}%; width: ${control.width}%; height: ${control.height}%; border-radius: ${control.radius}%; }`);
  });
  return lines.join("\n");
}

function renderRetroTrackList() {
  const playlist = getSortedMusicTracks();
  if (!playlist.length) {
    return `<div class="retro-track-empty">Todavia no hay tracks aprobados.</div>`;
  }
  return playlist.map((track) => `
    <div class="retro-track-row ${track.id === state.player.currentTrackId ? "active" : ""}">
      <div class="retro-track-meta">
        <strong>${escapeHtml(track.title)}</strong>
        <span>${escapeHtml(track.artist || "UNDER COMMUNITY")} Â· ${escapeHtml(String(track.play_count || 0))} plays Â· ${escapeHtml(String(track.like_count || 0))} likes</span>
      </div>
      <div class="retro-track-actions">
        <button type="button" class="retro-track-play" data-play-track-id="${escapeHtml(track.id)}">PLAY</button>
        <button type="button" class="retro-track-like ${track.liked_by_me ? "active" : ""}" data-like-track-id="${escapeHtml(track.id)}">${track.liked_by_me ? "LIKED" : "LIKE"}</button>
      </div>
    </div>
  `).join("");
}

function renderRetroTrackListV2() {
  const playlist = getSortedMusicTracks();
  if (!playlist.length) {
    return `<div class="retro-track-empty">${state.player.libraryView === "mine" ? "Todavia no tenes tracks privados." : "Todavia no hay tracks aprobados."}</div>`;
  }
  return playlist.map((track) => {
    const metaLine = track.visibility === "private"
      ? "Solo para vos Â· URL o upload privado"
      : `${escapeHtml(track.artist || "UNDER COMMUNITY")} Â· ${escapeHtml(String(track.play_count || 0))} plays Â· ${escapeHtml(String(track.like_count || 0))} likes`;
    return `
      <div class="retro-track-row ${track.id === state.player.currentTrackId ? "active" : ""}">
        <div class="retro-track-meta">
          <strong>${escapeHtml(track.title)}</strong>
          <span>${metaLine}</span>
        </div>
        <div class="retro-track-actions">
          <button type="button" class="retro-track-play" data-play-track-id="${escapeHtml(track.id)}">PLAY</button>
          ${track.visibility === "private"
            ? ""
            : `<button type="button" class="retro-track-like ${track.liked_by_me ? "active" : ""}" data-like-track-id="${escapeHtml(track.id)}">${track.liked_by_me ? "LIKED" : "LIKE"}</button>`}
        </div>
      </div>
    `;
  }).join("");
}

function renderRetroNowPanel() {
  const track = getCurrentMusicTrack();
  if (!track) {
    return `<div class="retro-now-panel"><div class="retro-now-empty">No hay track seleccionado.</div></div>`;
  }
  const sourceLabel = track.visibility === "private" ? "Biblioteca privada" : "Biblioteca publica";
  return `
    <div class="retro-now-panel">
      <div class="retro-now-row"><span>Titulo</span><strong>${escapeHtml(track.title || "SIN TITULO")}</strong></div>
      <div class="retro-now-row"><span>Artista</span><strong>${escapeHtml(track.artist || "UNDER COMMUNITY")}</strong></div>
      <div class="retro-now-row"><span>Fuente</span><strong>${escapeHtml(sourceLabel)}</strong></div>
      <div class="retro-now-row"><span>Tiempo</span><strong>${escapeHtml(formatMusicTime(state.player.currentTime))} / ${escapeHtml(formatMusicTime(state.player.duration))}</strong></div>
      <div class="retro-now-row"><span>Boost</span><strong>x${escapeHtml(state.player.boost.toFixed(1))}</strong></div>
      <div class="retro-now-actions">
        <button type="button" class="retro-now-btn" data-now-action="play">${state.player.isPlaying ? "PAUSAR" : "REPRODUCIR"}</button>
        <button type="button" class="retro-now-btn" data-now-action="prev">ANTERIOR</button>
        <button type="button" class="retro-now-btn" data-now-action="next">SIGUIENTE</button>
        <button type="button" class="retro-now-btn" data-now-action="boost-normal">BOOST 1X</button>
        <button type="button" class="retro-now-btn" data-now-action="boost-mid">BOOST 1.5X</button>
        <button type="button" class="retro-now-btn" data-now-action="boost-max">BOOST 2X</button>
      </div>
    </div>
  `;
}

function toggleRetroPlayerModal(forceOpen) {
  state.player.modalOpen = typeof forceOpen === "boolean" ? forceOpen : !state.player.modalOpen;
  const win = state.windows.get("winamp")?.element;
  if (win) {
    refreshPlayerSurface(win);
    return;
  }
  refreshWindow("winamp");
}

function setRetroPlayerTab(tabId) {
  state.player.activeTab = tabId;
  const win = state.windows.get("winamp")?.element;
  if (win) {
    refreshPlayerSurface(win);
    return;
  }
  refreshWindow("winamp");
}

function setMusicLibraryView(viewId) {
  state.player.libraryView = viewId;
  if (viewId === "mine" && state.privateMusicTracks.length && !state.privateMusicTracks.some((track) => track.id === state.player.currentTrackId)) {
    state.player.currentTrackId = state.privateMusicTracks[0].id;
  }
  if (viewId !== "mine" && state.musicTracks.length && !state.musicTracks.some((track) => track.id === state.player.currentTrackId)) {
    state.player.currentTrackId = state.musicTracks[0].id;
  }
  const win = state.windows.get("winamp")?.element;
  if (win) {
    refreshPlayerSurface(win);
    updateUnderMusicUi();
    return;
  }
  refreshWindow("winamp");
}

function updateRetroPlayerColors({ lcdText, appBg }) {
  if (lcdText) state.player.lcdText = lcdText;
  if (appBg) state.player.appBg = appBg;
  refreshWindow("winamp");
}

function refreshPlayerSurface(win) {
  const scope = win instanceof Element ? win : state.windows.get("winamp")?.element;
  if (!scope) return;
  const modal = scope.querySelector("#config-modal");
  if (modal) modal.classList.toggle("open", state.player.modalOpen);
  const playlistTab = scope.querySelector('[data-retro-tab="playlist"]');
  const nowTab = scope.querySelector('[data-retro-tab="now"]');
  playlistTab?.classList.toggle("active", state.player.activeTab === "playlist");
  nowTab?.classList.toggle("active", state.player.activeTab === "now");
  const playlistContent = scope.querySelector("#content-playlist");
  const nowContent = scope.querySelector("#content-now");
  playlistContent?.classList.toggle("hidden", state.player.activeTab !== "playlist");
  nowContent?.classList.toggle("hidden", state.player.activeTab !== "now");
  if (playlistContent) {
    const listContainer = playlistContent.querySelector("#track-list-container");
    if (listContainer) listContainer.innerHTML = renderRetroTrackListV2();
    const copyNode = playlistContent.querySelector(".retro-playlist-copy");
    if (copyNode) {
      copyNode.textContent = state.player.libraryView === "mine"
        ? "Tus tracks privados y personales."
        : "Tracks aprobados por la comunidad. Likes y plays arman el top.";
    }
  }
  if (nowContent) {
    nowContent.innerHTML = renderRetroNowPanel();
    scope.querySelectorAll("[data-now-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.nowAction;
        if (action === "play") void toggleMusicPlayback();
        if (action === "prev") playAdjacentTrack(-1);
        if (action === "next") playAdjacentTrack(1);
        if (action === "boost-normal") state.player.boost = 1;
        if (action === "boost-mid") state.player.boost = 1.5;
        if (action === "boost-max") state.player.boost = 2;
        syncMusicOutputGain();
        refreshPlayerSurface(scope);
        updateUnderMusicUi();
      });
    });
  }
}

function stopMusicPlayback() {
  const audio = state.player.audio;
  if (audio) {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (_error) {
    }
  }
  state.player.currentTime = 0;
  state.player.duration = 0;
  state.player.isPlaying = false;
  stopMusicVisualizerLoop();
  updateMediaSession();
  updateMediaSessionPosition();
  updateUnderMusicUi();
}

async function playMusicTrack(trackId, { autoplay = true } = {}) {
  const library = [...state.privateMusicTracks, ...state.musicTracks];
  const track = library.find((item) => item.id === trackId) || library[0];
  if (!track) return;
  const audio = ensureMusicAudio();
  state.player.powerOn = true;
  const currentSrc = audio.currentSrc || audio.src || "";
  const sourceChanged = currentSrc !== track.stream_url;
  state.player.currentTrackId = track.id;
  if (sourceChanged) {
    audio.src = track.stream_url;
    audio.load();
    state.player.currentTime = 0;
    state.player.duration = 0;
  }
  updateMediaSession();
  updateUnderMusicUi();
  if (!autoplay) return;
  try {
    await ensureMusicAnalyser();
    await audio.play();
    if (sourceChanged) {
      recordMusicPlay(track.id);
    }
  } catch (_error) {
  }
}

function getCurrentTrackIndex() {
  const currentId = getCurrentMusicTrack()?.id;
  return getRetroPlayerPlaylist().findIndex((track) => track.id === currentId);
}

function playAdjacentTrack(step) {
  const playlist = getRetroPlayerPlaylist();
  if (!playlist.length) return;
  const currentIndex = playlist.findIndex((track) => track.id === state.player.currentTrackId);
  const baseIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextIndex = (baseIndex + step + playlist.length) % playlist.length;
  playMusicTrack(playlist[nextIndex].id);
}

function seekMusicBy(deltaSeconds) {
  const audio = state.player.audio;
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min((audio.duration || Infinity), (audio.currentTime || 0) + deltaSeconds));
  state.player.currentTime = audio.currentTime || 0;
  updateMediaSessionPosition();
  updateUnderMusicUi();
}

async function toggleMusicPlayback(forcePlay) {
  if (!state.player.powerOn) return;
  const track = getRetroCurrentTrack();
  if (!track) return;
  const audio = ensureMusicAudio();
  if (!audio.src) {
    await playMusicTrack(track.id, { autoplay: true });
    return;
  }
  const shouldPlay = typeof forcePlay === "boolean" ? forcePlay : audio.paused;
  if (shouldPlay) {
    try {
      await ensureMusicAnalyser();
      await audio.play();
    } catch (_error) {
    }
  } else {
    audio.pause();
  }
}

function makeCodeValue() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "RX-";
  for (let i = 0; i < 8; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

async function generatePromoCodes(amount = 5) {
  if (!state.supabase || !isEffectiveAdmin()) return;
  const payload = Array.from({ length: amount }, () => ({
    code: makeCodeValue(),
    credits_amount: 10,
    source: "manychat_rx",
    created_by: state.user.id,
  }));

  const { data, error } = await state.supabase
    .from("promo_codes")
    .insert(payload)
    .select("code,credits_amount,claimed_at");

  if (error) {
    alert(error.message);
    return;
  }

  state.generatedCodes = [...(data || []), ...state.generatedCodes].slice(0, 20);
  await loadGeneratedCodes();
  rerenderCoreApps();
}

async function redeemPromoCode(code) {
  if (!state.supabase || !state.user.loggedIn) return;
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) return;

  const { data, error } = await state.supabase
    .from("promo_codes")
    .select("id,code,credits_amount,claimed_by,claimed_at")
    .eq("code", cleanCode)
    .maybeSingle();

  if (error || !data) {
    alert("CÃ³digo invalido.");
    return;
  }
  if (data.claimed_at || data.claimed_by) {
    alert("Ese cÃ³digo ya fue usado.");
    return;
  }

  const nextCredits = state.user.credits + Number(data.credits_amount || 0);
  const updateUser = state.supabase
    .from("users")
    .update({ credits: nextCredits, last_seen: new Date().toISOString() })
    .eq("id", state.user.id);
  const updateCode = state.supabase
    .from("promo_codes")
    .update({ claimed_by: state.user.id, claimed_at: new Date().toISOString() })
    .eq("id", data.id);

  const [userResult, codeResult] = await Promise.all([updateUser, updateCode]);
  if (userResult.error || codeResult.error) {
    alert(userResult.error?.message || codeResult.error?.message || "No se pudo canjear.");
    return;
  }

  state.user.credits = nextCredits;
  clearPromoCodeInputs();
  setSlot98Status(`Carga confirmada. +${data.credits_amount} credits.`);
  await loadGeneratedCodes();
  await loadRankings();
  await loadAdminAlbumProgress();
  syncEconomyViews({ rerenderSlot: true });
  alert(`Codigo cargado: +${data.credits_amount} credits`);
}

async function saveGameConfig() {
  if (!state.supabase || !isEffectiveAdmin()) return;
  const winRateValue = document.querySelector("#admin-winrate-input")?.value.trim();
  const nextRate = Math.max(1, Math.min(100, Number(winRateValue || 10)));
  const { error } = await state.supabase
    .from("game_config")
    .upsert({ key_name: "slot_win_rate", key_value: String(nextRate), updated_by: state.user.id }, { onConflict: "key_name" });
  if (error) {
    alert(error.message);
    return;
  }
  state.gameConfig.slot_win_rate = nextRate;
  rerenderCoreApps();
}

async function addMusicTrack() {
  if (!state.supabase || !isEffectiveAdmin()) return;
  const title = document.querySelector("#music-title-input")?.value.trim();
  const artist = document.querySelector("#music-artist-input")?.value.trim();
  const streamUrl = document.querySelector("#music-url-input")?.value.trim();
  const coverUrl = document.querySelector("#music-cover-input")?.value.trim() || "";
  if (!title || !streamUrl) {
    alert("PonÃ© al menos titulo y URL.");
    return;
  }
  const { error } = await state.supabase
    .from("music_tracks")
    .insert({ title, artist, stream_url: streamUrl, cover_url: coverUrl, created_by: state.user.id });
  if (error) {
    alert(error.message);
    return;
  }
  await loadMusicTracks();
  rerenderCoreApps();
}

async function uploadMusicFile(file) {
  if (!state.supabase || !file) return "";
  const originalName = String(file.name || "track.mp3");
  const lowerName = originalName.toLowerCase();
  const looksLikeMp3 = lowerName.endsWith(".mp3");
  const normalizedType = file.type || (looksLikeMp3 ? "audio/mpeg" : "");
  if (!looksLikeMp3 && normalizedType !== "audio/mpeg" && normalizedType !== "audio/mp3") {
    throw new Error("Solo se permiten archivos MP3.");
  }
  const safeName = `${Date.now()}-${String(file.name || "track.mp3").replace(/[^a-zA-Z0-9._-]/g, "-")}`;
  const path = `${state.user.id}/${safeName}`;
  const uploadFile = normalizedType && normalizedType !== file.type
    ? new File([file], originalName, { type: normalizedType })
    : file;
  const { error } = await state.supabase.storage.from("music").upload(path, uploadFile, {
    cacheControl: "3600",
    contentType: normalizedType || "audio/mpeg",
    upsert: false,
  });
  if (error) {
    if (String(error.message || "").toLowerCase().includes("mime")) {
      throw new Error("Supabase rechazo el MP3 por tipo MIME. Ejecuta la migracion nueva del bucket music.");
    }
    throw error;
  }
  const { data } = state.supabase.storage.from("music").getPublicUrl(path);
  return data?.publicUrl || "";
}

async function submitCommunityTrack(win = document) {
  if (!state.supabase || !state.user.loggedIn) return;
  setMusicUploadStatus(win, "Preparando track...");
  const title = win.querySelector("#music-submit-title")?.value.trim();
  const artist = win.querySelector("#music-submit-artist")?.value.trim();
  const directUrl = win.querySelector("#music-submit-url")?.value.trim();
  const coverUrl = win.querySelector("#music-submit-cover")?.value.trim() || "";
  const visibility = win.querySelector("#music-submit-visibility")?.value === "public" ? "public" : "private";
  const file = state.musicUpload.file || win.querySelector("#music-submit-file")?.files?.[0];
  if (!title || (!directUrl && !file)) {
    alert("PonÃ© titulo y un MP3 por URL o archivo.");
    return;
  }
  let streamUrl = directUrl;
  if (file) {
    try {
      streamUrl = await uploadMusicFile(file);
    } catch (error) {
      alert(error.message || "No pude subir el MP3.");
      return;
    }
  }
  const payload = {
    title,
    artist,
    stream_url: streamUrl,
    cover_url: coverUrl,
    created_by: state.user.id,
    visibility,
    status: visibility === "private" ? "approved" : (isEffectiveAdmin() ? "approved" : "pending"),
  };
  const { error } = await state.supabase.from("music_tracks").insert(payload);
  if (error) {
    alert(error.message);
    return;
  }
  alert(isEffectiveAdmin() ? "Track publicado." : "Track enviado para aprobacion.");
  ["#music-submit-title", "#music-submit-artist", "#music-submit-url", "#music-submit-cover"].forEach((selector) => {
    const input = win.querySelector(selector);
    if (input) input.value = "";
  });
  const fileInput = win.querySelector("#music-submit-file");
  if (fileInput) fileInput.value = "";
  await loadMusicTracks();
  rerenderCoreApps();
}

async function submitCommunityTrack(win = document) {
  if (!state.supabase || !state.user.loggedIn) return;
  setMusicUploadStatus(win, "Preparando track...");
  const title = win.querySelector("#music-submit-title")?.value.trim();
  const artist = win.querySelector("#music-submit-artist")?.value.trim();
  const directUrl = win.querySelector("#music-submit-url")?.value.trim();
  const coverUrl = win.querySelector("#music-submit-cover")?.value.trim() || "";
  const file = state.musicUpload.file || win.querySelector("#music-submit-file")?.files?.[0];
  if (!title || (!directUrl && !file)) {
    setMusicUploadStatus(win, "");
    alert("Pone titulo y un MP3 por URL o archivo.");
    return;
  }
  let streamUrl = directUrl;
  if (file) {
    try {
      setMusicUploadStatus(win, `Subiendo ${state.musicUpload.fileName || file.name || "track.mp3"}...`);
      streamUrl = await uploadMusicFile(file);
    } catch (error) {
      setMusicUploadStatus(win, "");
      alert(error.message || "No pude subir el MP3.");
      return;
    }
  }
  const payload = {
    title,
    artist,
    stream_url: streamUrl,
    cover_url: coverUrl,
    created_by: state.user.id,
    status: isEffectiveAdmin() ? "approved" : "pending",
  };
  const { error } = await state.supabase.from("music_tracks").insert(payload);
  if (error) {
    setMusicUploadStatus(win, "");
    alert(error.message);
    return;
  }
  const successMessage = visibility === "private"
    ? "Track privado guardado."
    : (isEffectiveAdmin() ? "Track publicado." : "Track enviado para aprobacion.");
  setMusicUploadStatus(win, visibility === "private" ? "Track privado listo en Mis Tracks." : (isEffectiveAdmin() ? "Track publicado." : "Track enviado a revision."));
  alert(successMessage);
  ["#music-submit-title", "#music-submit-artist", "#music-submit-url", "#music-submit-cover", "#music-submit-visibility"].forEach((selector) => {
    const input = win.querySelector(selector);
    if (!input) return;
    if (selector === "#music-submit-visibility") {
      input.value = "private";
    } else {
      input.value = "";
    }
  });
  const fileInput = win.querySelector("#music-submit-file");
  if (fileInput) fileInput.value = "";
  state.musicUpload.file = null;
  state.musicUpload.fileName = "";
  await loadMusicTracks();
  rerenderCoreApps();
}

async function moderateMusicTrack(trackId, status) {
  if (!state.supabase || !isEffectiveAdmin() || !trackId) return;
  const { error } = await state.supabase.from("music_tracks").update({ status }).eq("id", trackId);
  if (error) {
    alert(error.message);
    return;
  }
  await loadMusicTracks();
  rerenderCoreApps();
}

async function toggleMusicLike(trackId) {
  if (!state.supabase || !state.user.loggedIn || !trackId) return;
  const track = state.musicTracks.find((item) => item.id === trackId);
  if (!track) return;
  if (track.liked_by_me) {
    const { error } = await state.supabase
      .from("music_track_likes")
      .delete()
      .eq("track_id", trackId)
      .eq("user_id", state.user.id);
    if (error) {
      alert(error.message);
      return;
    }
    track.liked_by_me = false;
    track.like_count = Math.max(0, Number(track.like_count || 0) - 1);
  } else {
    const { error } = await state.supabase
      .from("music_track_likes")
      .insert({ track_id: trackId, user_id: state.user.id });
    if (error) {
      alert(error.message);
      return;
    }
    track.liked_by_me = true;
    track.like_count = Number(track.like_count || 0) + 1;
  }
  refreshWindow("winamp");
}

function renderPendingMusicRows() {
  if (!state.musicPending.length) {
    return `<div class="rank-row empty">No hay tracks pendientes.</div>`;
  }
  return state.musicPending.map((track) => `
    <div class="rank-row music-pending-row">
      <strong>${escapeHtml(track.title)}</strong>
      <span>${escapeHtml(track.artist || "UNDER COMMUNITY")}</span>
      <div class="music-pending-actions">
        <button class="action-btn" data-approve-track="${escapeHtml(track.id)}">Aprobar</button>
        <button class="action-btn" data-reject-track="${escapeHtml(track.id)}">Rechazar</button>
      </div>
    </div>
  `).join("");
}

async function buySkin(skinId) {
  if (!state.supabase || !state.user.loggedIn) return;
  const skin = SKINS.find((item) => item.id === skinId);
  if (!skin) return;
  if (skin.id === state.user.chat_skin) return;
  if (state.user.credits < skin.cost) {
    alert("No tenes credits suficientes para esa skin.");
    return;
  }

  const nextCredits = state.user.credits - skin.cost;
  const { error } = await state.supabase
    .from("users")
    .update({
      credits: nextCredits,
      chat_skin: skin.id,
      last_seen: new Date().toISOString(),
    })
    .eq("id", state.user.id);

  if (error) {
    alert(error.message);
    return;
  }

  state.user.credits = nextCredits;
  state.user.chat_skin = skin.id;
  localStorage.setItem("win98_chat_skin", skin.id);
  applyUserSkin();
  await loadRankings();
  rerenderCoreApps();
  updateOnlineIndicator();
}

function applyUserSkin() {
  document.body.dataset.chatSkin = state.user.chat_skin || "classic";
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getSlotBaseTransform(symbolIndex, repeatBlock = 2) {
  return -(((repeatBlock * SLOT_SYMBOLS.length) + symbolIndex) * SLOT_SYMBOL_HEIGHT - SLOT_VISIBLE_OFFSET);
}

function renderSlotStars() {
  return Array.from({ length: 48 }, (_, index) => {
    const left = (index * 37) % 100;
    const top = (index * 19) % 100;
    const size = 1 + (index % 3);
    const duration = 2 + ((index * 13) % 4);
    const delayMs = (index * 170) % 4000;
    return `<span class="slot98-star" style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;animation-duration:${duration}s;animation-delay:${delayMs}ms;"></span>`;
  }).join("");
}

function renderSlotStrip() {
  return Array.from({ length: SLOT_REEL_REPEAT }, () => (
    SLOT_SYMBOLS.map((symbolUrl) => `
      <div class="slot98-symbol">
        <img src="${symbolUrl}" alt="">
      </div>
    `).join("")
  )).join("");
}

function getSlotUniqueStickerCount() {
  return state.slot98.stickers.filter((item) => item.quantity > 0).length;
}

function getSlotJackpotFloor() {
  return SLOT_BASE_JACKPOT + (state.slot98.combo * 15);
}

function getSlotCurrentWinRate() {
  const heatBoost = state.slot98.heat >= SLOT_MAX_HEAT ? 10 : 0;
  const pityBoost = Math.min(12, state.slot98.pity * 2);
  return Math.min(85, state.gameConfig.slot_win_rate + heatBoost + pityBoost);
}

function pickWeightedIndex(weights) {
  const total = weights.reduce((sum, value) => sum + Math.max(0, Number(value) || 0), 0);
  if (!total) return Math.floor(Math.random() * SLOT_SYMBOLS.length);
  let cursor = Math.random() * total;
  for (let index = 0; index < weights.length; index += 1) {
    cursor -= Math.max(0, Number(weights[index]) || 0);
    if (cursor <= 0) return index;
  }
  return weights.length - 1;
}

function getSlotSymbolWeights() {
  const ownedSymbols = new Set(
    state.slot98.stickers
      .filter((item) => Number(item.quantity || 0) > 0)
      .map((item) => item.sticker_key),
  );
  const uniqueCount = getSlotUniqueStickerCount();
  return SLOT_SYMBOLS.map((symbolUrl, index) => {
    let weight = SLOT_SYMBOL_BASE_WEIGHTS[index] || 1;
    const owned = ownedSymbols.has(symbolUrl);

    if (owned) {
      weight *= 1.35;
      if (uniqueCount >= 4) weight *= 1.35;
      if (uniqueCount >= 6) weight *= 1.6;
      if (uniqueCount >= 7) weight *= 1.75;
    } else {
      if (uniqueCount >= 3) weight *= 0.85;
      if (uniqueCount >= 5) weight *= 0.6;
      if (uniqueCount >= 6) weight *= 0.45;
      if (uniqueCount >= 7) weight *= 0.3;
    }

    return Math.max(0.15, Number(weight.toFixed(2)));
  });
}

function pickSlotSymbolIndex() {
  return pickWeightedIndex(getSlotSymbolWeights());
}

function isSlotNearMiss(results) {
  return results[0] === results[1] || results[1] === results[2] || results[0] === results[2];
}

function renderSlotHeatMeter() {
  return Array.from({ length: SLOT_MAX_HEAT }, (_, index) => `
    <span class="slot98-heat-segment ${index < state.slot98.heat ? "filled" : ""}"></span>
  `).join("");
}

function getSlotWindowElement() {
  return state.windows.get("slot98-game")?.element || null;
}

function setSlot98Status(text) {
  state.slot98.status = text;
  const statusNode = getSlotWindowElement()?.querySelector("[data-slot-status]");
  if (statusNode) statusNode.textContent = text;
}

function updateSlot98CreditsDisplay() {
  const win = getSlotWindowElement();
  if (!win) return;
  win.querySelectorAll("[data-slot-credits]").forEach((node) => {
    node.textContent = String(state.user.credits);
  });
}

function toggleSlot98Ticket(show, symbolUrl = "") {
  state.slot98.ticketVisible = show;
  state.slot98.ticketSymbol = symbolUrl || state.slot98.ticketSymbol;
  const win = getSlotWindowElement();
  if (!win) return;
  const ticket = win.querySelector("[data-slot-ticket]");
  const ticketImage = win.querySelector("[data-slot-ticket-image]");
  if (!ticket || !ticketImage) return;
  if (symbolUrl) ticketImage.src = symbolUrl;
  ticket.classList.toggle("slide-up", show);
}

function syncSlot98Menu() {
  const win = getSlotWindowElement();
  if (!win) return;
  win.querySelector("[data-slot-menu]")?.classList.toggle("show", state.slot98.menuOpen);
}

function initializeSlot98Reels(win) {
  win.querySelectorAll("[data-slot-strip]").forEach((strip, index) => {
    strip.style.transition = "none";
    strip.style.transform = `translateY(${getSlotBaseTransform(state.slot98.currentReels[index])}px)`;
  });
}

function animateSlot98Lever(win) {
  const lever = win?.querySelector("[data-slot-lever]");
  if (!lever) return;
  lever.classList.add("lever-pulled");
  window.setTimeout(() => lever.classList.remove("lever-pulled"), 320);
}

function animateSlot98Ticket(win, symbolUrl) {
  state.slot98.ticketVisible = true;
  state.slot98.ticketSymbol = symbolUrl;
  const ticket = win?.querySelector("[data-slot-ticket]");
  const image = win?.querySelector("[data-slot-ticket-image]");
  if (!ticket || !image) return;
  image.src = symbolUrl;
  ticket.classList.remove("slide-up");
  void ticket.offsetWidth;
  ticket.classList.add("slide-up");
  window.setTimeout(() => {
    state.slot98.ticketVisible = false;
    ticket.classList.remove("slide-up");
    if (state.windows.has("slot98-game")) refreshWindow("slot98-game");
  }, 7000);
}

async function animateSlot98Reels(win, results) {
  const strips = Array.from(win.querySelectorAll("[data-slot-strip]"));
  await Promise.all(strips.map((strip, index) => {
    const duration = SLOT_REEL_DURATIONS[index] || 1800;
    const currentIndex = state.slot98.currentReels[index];
    return new Promise((resolve) => {
      strip.style.transition = "none";
      strip.style.transform = `translateY(${getSlotBaseTransform(currentIndex, 2)}px)`;
      void strip.offsetHeight;
      requestAnimationFrame(() => {
        strip.style.transition = `transform ${duration}ms cubic-bezier(0.08, 0.7, 0.2, 1)`;
        strip.style.transform = `translateY(${getSlotBaseTransform(results[index], 4)}px)`;
      });
      window.setTimeout(() => {
        strip.style.transition = "none";
        strip.style.transform = `translateY(${getSlotBaseTransform(results[index], 2)}px)`;
        resolve();
      }, duration + 50);
    });
  }));
}

async function loadSlot98Stickers() {
  if (!state.supabase || !state.user.loggedIn) return;
  const { data } = await state.supabase
    .from("user_stickers")
    .select("id,sticker_key,quantity")
    .eq("user_id", state.user.id);
  state.slot98.stickers = data || [];
}

function renderSlot98Album() {
  return SLOT_SYMBOLS.map((symbolUrl, index) => {
    const entry = state.slot98.stickers.find((item) => item.sticker_key === symbolUrl);
    if (!entry) {
      return `<div class="slot-album-card empty"><img src="${symbolUrl}" alt=""><span>Sticker ${index + 1}</span><small>0</small></div>`;
    }
    return `<div class="slot-album-card"><img src="${symbolUrl}" alt=""><span>Sticker ${index + 1}</span><small>x${entry.quantity}</small></div>`;
  }).join("");
}

function renderSlot98Inventory() {
  const ownedStickers = state.slot98.stickers.filter((item) => Number(item.quantity || 0) > 0);
  if (!ownedStickers.length) {
    return `<div class="slot98-inventory-empty">Todavia no tenes stickers en inventario.</div>`;
  }
  return ownedStickers.map((item, index) => `
    <div class="slot98-inventory-row">
      <div class="slot98-inventory-meta">
        <img src="${escapeHtml(item.sticker_key)}" alt="Sticker ${index + 1}">
        <div>
          <strong>Sticker ${index + 1}</strong>
          <span>x${escapeHtml(String(item.quantity || 0))}</span>
        </div>
      </div>
      <button class="action-btn slot-mini-btn" data-sell-sticker="${escapeHtml(item.sticker_key)}">Vender +20</button>
    </div>
  `).join("");
}

async function addSlotSticker(symbolUrl) {
  const existing = state.slot98.stickers.find((item) => item.sticker_key === symbolUrl);
  if (existing) {
    await state.supabase.from("user_stickers").update({ quantity: existing.quantity + 1 }).eq("id", existing.id);
  } else {
    await state.supabase.from("user_stickers").insert({ user_id: state.user.id, sticker_key: symbolUrl, quantity: 1 });
  }
  await loadSlot98Stickers();
}

async function sellSlotSticker(symbolUrl) {
  if (!state.supabase || !state.user.loggedIn) return;
  const entry = state.slot98.stickers.find((item) => item.sticker_key === symbolUrl);
  if (!entry) return;

  if (entry.quantity <= 1) {
    await state.supabase.from("user_stickers").delete().eq("id", entry.id);
  } else {
    await state.supabase.from("user_stickers").update({ quantity: entry.quantity - 1 }).eq("id", entry.id);
  }

  const nextCredits = state.user.credits + 20;
  await state.supabase.from("users").update({ credits: nextCredits, last_seen: new Date().toISOString() }).eq("id", state.user.id);
  state.user.credits = nextCredits;
  await loadRankings();
  await loadSlot98Stickers();
  await loadAdminAlbumProgress();
  setSlot98Status("Sticker vendido. +20 credits.");
  updateOnlineIndicator();
  updateSlot98CreditsDisplay();
  refreshWindow("slot98-game");
  refreshWindow("users");
}

async function claimSlotAlbum() {
  if (!state.supabase || !state.user.loggedIn) return;
  const uniqueCount = getSlotUniqueStickerCount();
  if (uniqueCount < SLOT_ALBUM_TARGET) {
    setSlot98Status(`Te faltan ${SLOT_ALBUM_TARGET - uniqueCount} stickers para completar el album.`);
    refreshWindow("slot98-game");
    return;
  }

  const nextCredits = state.user.credits + SLOT_ALBUM_PRIZE;
  await Promise.all([
    state.supabase.from("users").update({ credits: nextCredits, last_seen: new Date().toISOString() }).eq("id", state.user.id),
    state.supabase.from("user_stickers").delete().eq("user_id", state.user.id),
  ]);

  state.user.credits = nextCredits;
  state.slot98.heat = 0;
  state.slot98.combo = 0;
  state.slot98.pity = 0;
  state.slot98.jackpotPool = Math.max(getSlotJackpotFloor(), SLOT_BASE_JACKPOT);
  state.slot98.lastSpinSummary = `Album vaciado y premio de ${SLOT_ALBUM_PRIZE} credits cobrado.`;
  await loadRankings();
  await loadSlot98Stickers();
  await loadAdminAlbumProgress();
  setSlot98Status(`Album completo reclamado. +${SLOT_ALBUM_PRIZE} credits.`);
  updateOnlineIndicator();
  updateSlot98CreditsDisplay();
  refreshWindow("slot98-game");
  refreshWindow("users");
}

async function fetchRecentMessages() {
  if (!state.supabase) return;
  const { data, error } = await state.supabase
    .from("messages")
    .select("id,user_id,username,content,created_at")
    .eq("room", "global")
    .order("created_at", { ascending: true })
    .limit(60);

  if (error) {
    console.error(error);
    if (!state.user.loggedIn && window.location.protocol !== "file:") {
      await fetchRecentMessagesFromPublicApi();
    }
    return;
  }

  state.globalMessages = data || [];
  renderGlobalMessages();
}

async function fetchRecentMessagesFromPublicApi() {
  try {
    const response = await fetch("/api/global-messages", { headers: { Accept: "application/json" } });
    if (!response.ok) return;
    const data = await response.json();
    state.globalMessages = Array.isArray(data.messages) ? data.messages : [];
    renderGlobalMessages();
  } catch (error) {
    console.error(error);
  }
}

function subscribeToChat() {
  if (state.realtimeChannel || !state.supabase) return;
  state.realtimeChannel = state.supabase
    .channel("global-chat-room")
    .on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "messages",
      filter: "room=eq.global",
    }, (payload) => {
      state.globalMessages.push(payload.new);
      renderGlobalMessages();
    })
    .subscribe();
}

function getUnderBotPersona(username) {
  return UNDER_BOT_PERSONAS.find((bot) => bot.username === username) || UNDER_BOT_PERSONAS[0];
}

function createUnderBotMessage(username, text) {
  const bot = getUnderBotPersona(username);
  return {
    id: `under-bot-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    user_id: "",
    username: bot.username,
    content: serializeGlobalMessagePayload({
      text,
      nickColor: bot.nickColor,
      textColor: bot.textColor,
      isBot: true,
      botRole: bot.role,
    }),
    isBot: true,
    botRole: bot.role,
    created_at: new Date().toISOString(),
  };
}

function getFallbackUnderBotMessages(count = 3) {
  const threads = Array.isArray(UNDER_BOT_THREADS_V2) && UNDER_BOT_THREADS_V2.length
    ? UNDER_BOT_THREADS_V2
    : UNDER_BOT_THREADS;
  const thread = threads[state.underBotChat.threadIndex % threads.length] || [];
  const messages = [];
  while (messages.length < count && thread.length) {
    const item = thread[state.underBotChat.messageIndex % thread.length];
    state.underBotChat.messageIndex += 1;
    if (state.underBotChat.messageIndex % thread.length === 0) {
      state.underBotChat.threadIndex += 1;
    }
    messages.push({ username: item.bot, text: item.text });
  }
  return messages;
}

function pushUnderBotMessage(username, text) {
  state.underBotMessages.push(createUnderBotMessage(username, text));
  if (state.underBotMessages.length > 48) {
    state.underBotMessages = state.underBotMessages.slice(-48);
  }
  renderGlobalMessages();
}

function getRecentUnderChatContext() {
  return [...state.globalMessages, ...state.underBotMessages]
    .slice(-12)
    .map((message) => {
      const parsed = parseGlobalMessagePayload(message);
      return {
        username: message.username || "Anon",
        text: parsed.text || "",
      };
    })
    .filter((message) => message.text);
}

async function requestGeminiUnderBotMessages(userMessage = "") {
  if (state.underBotChat.aiLoading) return [];
  if (window.location.protocol === "file:") return [];
  state.underBotChat.aiLoading = true;
  try {
    const response = await fetch("/api/gemini-under-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMessage,
        recentMessages: getRecentUnderChatContext(),
        bots: UNDER_BOT_PERSONAS.map((bot) => bot.username),
      }),
    });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.messages) ? data.messages : [];
  } catch (_error) {
    return [];
  } finally {
    state.underBotChat.aiLoading = false;
  }
}

function queueGeminiUnderBotBatch(userMessage = "") {
  requestGeminiUnderBotMessages(userMessage).then((messages) => {
    const nextMessages = messages.length ? messages : getFallbackUnderBotMessages(userMessage ? 2 : 4);
    if (!nextMessages.length) return;
    state.underBotChat.aiQueue.push(...nextMessages);
    if (state.underBotChat.active && state.underBotChat.aiQueue.length === nextMessages.length) {
      scheduleNextUnderBotMessage(700 + Math.floor(Math.random() * 1800));
    }
  });
}

function getUnderBotDelay() {
  const delays = [900, 1700, 3200, 5400, 8800, 13000, 21000];
  return delays[Math.floor(Math.random() * delays.length)];
}

function startUnderBotChat() {
  if (state.underBotChat.active) return;
  state.underBotChat.active = true;
  queueGeminiUnderBotBatch();
  scheduleNextUnderBotMessage(3500);
}

function scheduleNextUnderBotMessage(delay = getUnderBotDelay()) {
  clearTimeout(state.underBotChat.timer);
  state.underBotChat.timer = setTimeout(playNextUnderBotMessage, delay);
}

function playNextUnderBotMessage() {
  if (!state.underBotChat.active) return;
  const aiMessage = state.underBotChat.aiQueue.shift();
  if (aiMessage) {
    pushUnderBotMessage(aiMessage.username, aiMessage.text);
    if (state.underBotChat.aiQueue.length < 1) {
      queueGeminiUnderBotBatch();
    }
    scheduleNextUnderBotMessage(getUnderBotDelay());
    return;
  }

  queueGeminiUnderBotBatch();
  scheduleNextUnderBotMessage(18000 + Math.floor(Math.random() * 26000));
}

function queueUnderBotUserReaction(content) {
  state.underBotChat.reactionTimers.forEach((timer) => clearTimeout(timer));
  state.underBotChat.reactionTimers = [];

  const normalized = normalizeText(content);
  const fallbackReplies = [];
  if (/hola|buenas|hey|holi|que onda|q onda/.test(normalized)) {
    fallbackReplies.push(
      { username: "emo.culture", text: "holaa" },
      { username: "under.darkk", text: "q ondaaa *.* recien apareces?" },
      { username: "vhs.mood", text: "estabamos medio muertos aca jaja" },
    );
  } else if (/ropa|prenda|campera|remera|pantalon|pantalÃ³n|drop/.test(normalized)) {
    fallbackReplies.push(
      { username: "r0pa.negra", text: "si la silueta mata ya fue... se perdona todo" },
      { username: "feria.ghost", text: "rota pero linda = joya rara" },
    );
  } else if (/feria|popup|pop-up|local|showroom/.test(normalized)) {
    fallbackReplies.push(
      { username: "feria.ghost", text: "feria con espejo y musica, sino nooo" },
      { username: "luz.kiosco", text: "con luz fea queda mejor igual :P" },
    );
  } else if (/musica|mÃºsica|under|artista|trap|rap/.test(normalized)) {
    fallbackReplies.push(
      { username: "playlist.rota", text: "con ese tema me pongo cualquier cosa negra y salgo" },
      { username: "glitch.monte", text: "pasen nombre q toy en blanco" },
    );
  } else {
    fallbackReplies.push(...getFallbackUnderBotMessages(2));
  }

  clearTimeout(state.underBotChat.timer);
  scheduleUnderBotReactionBatch(fallbackReplies);

  requestGeminiUnderBotMessages(content).then((messages) => {
    const extraMessages = messages
      .filter((message) => !fallbackReplies.some((fallback) => fallback.username === message.username && fallback.text === message.text))
      .slice(0, 1);
    if (extraMessages.length) scheduleUnderBotReactionBatch(extraMessages, 3300);
  });
}

function scheduleUnderBotReactionBatch(messages, baseDelay = 450) {
  const batch = messages.slice(0, 3);
  batch.forEach((message, index) => {
    const timer = setTimeout(() => {
      pushUnderBotMessage(message.username, message.text);
      if (index === batch.length - 1) {
        state.underBotChat.reactionTimers = [];
        scheduleNextUnderBotMessage(getUnderBotDelay());
      }
    }, baseDelay + index * (780 + Math.floor(Math.random() * 520)));
    state.underBotChat.reactionTimers.push(timer);
  });
}

async function sendGlobalMessage() {
  const input = document.getElementById("chat-input");
  const imageInput = document.getElementById("global-image-input");
  if (!input) return;
  const content = input.value.trim();
  const imageFile = imageInput?.files?.[0] || null;
  if (!content && !imageFile) return;
  const violatedKeyword = detectProhibitedChatContent(content, imageFile);
  if (violatedKeyword) {
    const strikeCount = addModerationStrike(getUsername());
    state.globalMessages.push({
      username: "Sistema",
      content: serializeGlobalMessagePayload({
        text: `${getUsername()} recibio un strike (${strikeCount}) por intentar publicar contenido prohibido.`,
        nickColor: "#f87171",
        textColor: "#fecaca",
      }),
    });
    input.value = "";
    if (imageInput) imageInput.value = "";
    state.chatSelectedImageName = "";
    renderGlobalMessages();
    alert(`Contenido bloqueado por normas de usuario. Strike ${strikeCount}. Palabra detectada: ${violatedKeyword}`);
    refreshWindow("chat-global");
    return;
  }
  const payload = {
    text: content,
    nickColor: state.user.nick_color || "#7dd3fc",
    textColor: state.user.text_color || "#f3f4f6",
  };

  if (!hasSupabaseConfig) {
    state.globalMessages.push({
      user_id: state.user.id,
      username: getUsername(),
      avatar_url: state.user.avatar_url || "",
      content: serializeGlobalMessagePayload(payload),
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : "",
      blurred: Boolean(imageFile),
      isLocalOnly: Boolean(imageFile),
    });
    input.value = "";
    if (imageInput) imageInput.value = "";
    state.chatSelectedImageName = "";
    renderGlobalMessages();
    queueUnderBotUserReaction(content);
    refreshWindow("chat-global");
    return;
  }

  if (!state.user.loggedIn) {
    if (imageFile) {
      alert("Las fotos por ahora requieren cuenta. Podes mandar texto como invitado.");
      return;
    }
    const guestMessage = {
      room: "global",
      user_id: null,
      username: getUsername(),
      content: serializeGlobalMessagePayload(payload),
    };
    state.globalMessages.push({ ...guestMessage, created_at: new Date().toISOString() });
    input.value = "";
    if (imageInput) imageInput.value = "";
    state.chatSelectedImageName = "";
    renderGlobalMessages();
    queueUnderBotUserReaction(content);
    const { error } = await state.supabase.from("messages").insert(guestMessage);
    if (error) {
      console.error(error);
      alert("No se pudo enviar como invitado. Ejecuta la policy anon insert en Supabase.");
    }
    refreshWindow("chat-global");
    return;
  }

  if (imageFile) {
    state.globalMessages.push({
      user_id: state.user.id,
      username: getUsername(),
      avatar_url: state.user.avatar_url || "",
      content: serializeGlobalMessagePayload(payload),
      imageUrl: URL.createObjectURL(imageFile),
      blurred: true,
      isLocalOnly: true,
    });
    input.value = "";
    imageInput.value = "";
    state.chatSelectedImageName = "";
    renderGlobalMessages();
    queueUnderBotUserReaction(content);
    refreshWindow("chat-global");
    return;
  }

  const { error } = await state.supabase.from("messages").insert({
    room: "global",
    user_id: state.user.id,
    username: getUsername(),
    content: serializeGlobalMessagePayload(payload),
  });

  if (error) {
    console.error(error);
    alert("No se pudo enviar el mensaje.");
    return;
  }

  input.value = "";
  if (imageInput) {
    imageInput.value = "";
  }
  state.chatSelectedImageName = "";
  queueUnderBotUserReaction(content);
}

function insertEmoji(targetId, emoji) {
  const input = document.getElementById(targetId);
  if (!input) return;
  input.value = `${input.value}${emoji}`;
  input.focus();
}

function getSelectedChatImageName() {
  return state.chatSelectedImageName || "";
}

const HIDDEN_GLOBAL_CHAT_USERS = new Set(["tumberjeremy"]);

function isHiddenGlobalChatMessage(message) {
  return HIDDEN_GLOBAL_CHAT_USERS.has(String(message?.username || "").trim().toLowerCase());
}

function renderGlobalMessages() {
  const box = document.getElementById("chat-messages");
  if (!box) return;

  const liveMessages = [...state.globalMessages, ...state.underBotMessages]
    .filter((message) => !isHiddenGlobalChatMessage(message))
    .sort((a, b) => new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime());
  const messages = liveMessages.length
    ? liveMessages
    : [
        { username: "MSN Bot", content: serializeGlobalMessagePayload({ text: "Bienvenido al canal global under.", nickColor: "#facc15" }) },
        { username: "Sistema", content: serializeGlobalMessagePayload({ text: hasSupabaseConfig ? "Podes leer y escribir en el global como invitado." : "Configura Supabase para activar realtime.", nickColor: "#cbd5e1" }) },
      ];

  box.innerHTML = messages
    .map((message) => renderMessageBubble(message))
    .join("");
  bindProfileTriggers(box);
  box.scrollTop = box.scrollHeight;
}

function renderMessageBubble(message) {
  const parsed = parseGlobalMessagePayload(message);
  const isSystem = message.username === "Sistema" || message.username === "MSN Bot";
  const isBot = Boolean(parsed.isBot || message.isBot);
  const isSelf = message.username === getUsername();
  const strikeCount = getUserStrikeCount(message.username);
  const user = getKnownUserData(message.user_id, message.username, message.avatar_url || "");
  const imageMarkup = parsed.imageUrl
    ? `<div class="chat-image-wrap${parsed.blurred ? " blurred" : ""}"><img class="chat-image" src="${escapeHtml(parsed.imageUrl)}" alt="Adjunto"></div>`
    : "";
  const strikeMarkup = !isSystem && strikeCount > 0 ? ` <small class="chat-strike-badge">strike ${escapeHtml(String(strikeCount))}</small>` : "";
  const botPersona = isBot ? getUnderBotPersona(message.username) : null;
  const avatarMarkup = isBot
    ? `<div class="bot-avatar" title="${escapeHtml(botPersona.role)}">${escapeHtml(botPersona.initials)}</div>`
    : !isSystem && message.user_id
    ? renderProfileTrigger(message.user_id, getUserDisplayName(user), user.avatar_url || "", "small", "chat-avatar-button")
    : '<div class="chat-avatar-spacer"></div>';
  const botRoleMarkup = "";
  const authorMarkup = !isSystem && message.user_id
    ? `<button class="chat-author-button" data-open-profile="${escapeHtml(message.user_id)}" data-profile-name="${escapeHtml(getUserDisplayName(user))}" data-profile-avatar="${escapeHtml(user.avatar_url || "")}" type="button"><strong style="color:${escapeHtml(parsed.nickColor)}">${escapeHtml(message.username)}${strikeMarkup}:</strong></button>`
    : `<strong style="color:${escapeHtml(parsed.nickColor)}">${escapeHtml(message.username)}${strikeMarkup}:</strong>`;
  return `<div class="chat-row${isSystem ? " system" : isSelf ? " self" : ""}${isBot ? " bot" : ""}"><div class="chat-row-shell">${avatarMarkup}<div class="chat-message-body">${authorMarkup}${botRoleMarkup} <span style="color:${escapeHtml(parsed.textColor)}">${escapeHtml(parsed.text)}</span>${imageMarkup}${parsed.isLocalOnly ? '<small class="chat-local-flag">foto con blur preventivo Â· solo visible en esta sesion</small>' : ""}</div></div></div>`;
}

function openPrivateConversation(contactId) {
  const contact = getContactById(contactId);
  if (!contact) {
    alert("Ese contacto ya no esta disponible.");
    return;
  }
  const contactName = contact.username;
  const storageKey = contact.id;
  const appId = `pm-${contact.id}`;
  if (!state.localPrivateMessages[storageKey]) {
    state.localPrivateMessages[storageKey] = [
      { user_id: contact.id, username: contactName, avatar_url: contact.avatar_url || "", content: "Solicitud aceptada. Chat abierto sin visto." },
    ];
  }

  desktopApps[appId] = {
    title: `Chat con ${contactName}`,
    width: 430,
    height: 360,
    x: 260 + Math.floor(Math.random() * 80),
    y: 110 + Math.floor(Math.random() * 60),
    render() {
      const rows = state.localPrivateMessages[storageKey]
        .map((message) => renderMessageBubble(message))
        .join("");

      return `
        <div class="window-content msn-window">
          <div class="msn-layout">
            <aside class="msn-sidebar">
              <div>
                <div class="msn-brand">${escapeHtml(contactName)}</div>
                <div class="msn-subbrand">MSN Under privado</div>
              </div>
              <div class="msn-userpill">
                <div><span class="msn-status-dot"></span>${escapeHtml(getUsername())}</div>
                <div class="msn-sidebar-copy">Uno a uno, rapido y retro.</div>
              </div>
              <button class="action-btn msn-action" data-open-global="1">Ir a Global Chat</button>
            </aside>
            <section class="msn-main">
              <div class="msn-topbar">
                <div>
                  <div class="msn-title">Chat con ${escapeHtml(contactName)}</div>
                  <div class="msn-caption">Solicitud aceptada. No mostramos visto.</div>
                </div>
                <button class="action-btn msn-action" data-open-profile="${escapeHtml(contact.id)}" data-profile-name="${escapeHtml(contact.username)}" data-profile-avatar="${escapeHtml(contact.avatar_url || "")}">Ver perfil</button>
              </div>
              <div class="private-messages msn-chatlog">${rows}</div>
              <div class="msn-compose">
                <div class="emoji-row">
                  ${EMOJIS.map((emoji) => `<button class="emoji-btn" data-pm-emoji="${emoji}">${emoji}</button>`).join("")}
                </div>
                <div class="private-form">
                  <input class="win-input" id="pm-input-${contactName}" type="text" placeholder="Escribi un mensaje..." />
                  <button class="message-send msn-action" data-pm-send="${escapeHtml(contactName)}">Enviar</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="window-statusbar"><div class="status-panel">Privado</div></div>
      `;
    },
    bind(win) {
      const input = win.querySelector(`[id="${`pm-input-${contactName}`}"]`);
      const sendBtn = win.querySelector(`[data-pm-send="${contactName}"]`);
      const globalBtn = win.querySelector("[data-open-global]");
      const send = () => {
        const value = input.value.trim();
        if (!value) return;
        state.localPrivateMessages[storageKey].push({ user_id: state.user.id, username: getUsername(), avatar_url: state.user.avatar_url || "", content: value });
        refreshWindow(appId);
      };
      sendBtn.addEventListener("click", send);
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") send();
      });
      win.querySelectorAll("[data-pm-emoji]").forEach((button) => {
        button.addEventListener("click", () => {
          input.value = `${input.value}${button.dataset.pmEmoji}`;
          input.focus();
        });
      });
      globalBtn.addEventListener("click", () => openWindow("chat-global"));
      bindProfileTriggers(win);
    },
  };

  openWindow(appId);
}

function startPresenceHeartbeat() {
  if (state.onlineInterval || !state.supabase || !state.user.loggedIn) return;
  state.onlineInterval = setInterval(async () => {
    await state.supabase.from("users").update({
      status: "online",
      last_seen: new Date().toISOString(),
    }).eq("id", state.user.id);
  }, 30000);
}

window.addEventListener("beforeunload", async () => {
  if (!state.supabase || !state.user.loggedIn) return;
  try {
    await state.supabase.from("users").update({
      status: "offline",
      last_seen: new Date().toISOString(),
    }).eq("id", state.user.id);
  } catch (error) {
    console.error(error);
  }
});

function renderRankingRows(entries, field) {
  if (!entries.length) {
    return `<div class="rank-row empty">Sin datos todavia.</div>`;
  }
  return entries.map((entry, index) => `
    <div class="rank-row">
      <span>#${index + 1}</span>
      <strong>${escapeHtml(entry.username || "Anon")}</strong>
      <span>${escapeHtml(String(entry[field] || 0))}</span>
    </div>
  `).join("");
}

function renderSkinCards() {
  return SKINS.map((skin) => `
    <div class="skin-card ${state.user.chat_skin === skin.id ? "active" : ""}">
      <div class="skin-preview" style="background:${skin.preview};"></div>
      <div class="skin-meta">
        <strong>${escapeHtml(skin.name)}</strong>
        <span>${skin.cost === 0 ? "Gratis" : `${skin.cost} credits`}</span>
      </div>
      <button class="action-btn ${state.user.chat_skin === skin.id ? "disabled-btn" : ""}" data-buy-skin="${skin.id}">
        ${state.user.chat_skin === skin.id ? "Activa" : "Comprar"}
      </button>
    </div>
  `).join("");
}

function labelFromKey(value) {
  return String(value || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getEpisodeBuilderBlockCategory(blockName) {
  const categoryMap = {
    gancho: "ganchos",
    contexto: "curiosidad",
    objetivo: "curiosidad",
    preparacion: "avance",
    conflicto: "tension",
    avance: "avance",
    cierre: "cliffhanger",
  };
  return categoryMap[blockName] || "ganchos";
}

function createEpisodeBuilderBlock(name, index = 0, dayNumber = 1) {
  const globalIndex = ((dayNumber - 1) * EPISODE_DEFAULT_BLOCKS_PER_DAY) + index + 1;
  return {
    id: `bloque-${globalIndex}`,
    numero: globalIndex,
    nombre: name,
    categoria: getEpisodeBuilderBlockCategory(name),
    descripcion: "",
    emocion: EPISODE_DAY_EMOTIONS[dayNumber - 1] || "curiosidad",
    plantilla_numero: "",
    duracion: "",
    dialogo: "",
    voz_en_off: "",
    pregunta_camarografo: "",
    musica: "",
    separador_final: "",
    prioridad: index < 3 ? "alta" : "media",
    estado: "pendiente",
    tomas: "",
    instruccion_editor: "",
  };
}

function normalizeEpisodeNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 1;
  return Math.max(1, Math.min(99, Math.round(number)));
}

function getStoredEpisodeNumber() {
  try {
    return normalizeEpisodeNumber(localStorage.getItem(EPISODE_BUILDER_SELECTED_KEY) || "1");
  } catch (_error) {
    return 1;
  }
}

function getSelectedEpisodeNumber() {
  return normalizeEpisodeNumber(state?.episodeBuilder?.episodeNumber || getStoredEpisodeNumber());
}

function setSelectedEpisodeNumber(episodeNumber) {
  const normalized = normalizeEpisodeNumber(episodeNumber);
  localStorage.setItem(EPISODE_BUILDER_SELECTED_KEY, String(normalized));
  return normalized;
}

function getEpisodeBuilderStorageKey(episodeNumber = getStoredEpisodeNumber()) {
  return `${EPISODE_BUILDER_STORAGE_KEY}_episode_${normalizeEpisodeNumber(episodeNumber)}`;
}

function createEpisodeBuilderDraft(episodeNumber = getStoredEpisodeNumber()) {
  const normalizedEpisode = normalizeEpisodeNumber(episodeNumber);
  return {
    episodeNumber: normalizedEpisode,
    guideVersion: EPISODE_BUILDER_GUIDE_VERSION,
    mode: "edicion",
    activeDay: 1,
    activeBlockId: "bloque-1",
    activeTemplateCategory: "ganchos",
    status: "Borrador local listo.",
    episode: EPISODE_FIELDS.reduce((fields, field) => {
      fields[field] = field === "titulo" ? `Episodio ${normalizedEpisode}` : field === "estado" ? "borrador" : field === "cantidad_bloques" ? String(EPISODE_BUILDER_DAYS * EPISODE_DEFAULT_BLOCKS_PER_DAY) : "";
      return fields;
    }, {}),
    templates: Object.fromEntries(Object.entries(EPISODE_TEMPLATE_LIBRARY).map(([key, list]) => [key, [...list]])),
    usedTemplates: {},
    days: Array.from({ length: EPISODE_BUILDER_DAYS }, (_item, dayIndex) => ({
      dia: dayIndex + 1,
      emocion: EPISODE_DAY_EMOTIONS[dayIndex] || "curiosidad",
      blocks: EPISODE_DAY_BLOCKS.map((name, blockIndex) => createEpisodeBuilderBlock(name, blockIndex, dayIndex + 1)),
    })),
  };
}

function slugToKey(value, fallback = "bloque") {
  return String(value || fallback)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || fallback;
}

function inferEpisodeTemplateCategory(block, index = 0) {
  const haystack = `${block?.categoria || ""} ${block?.funcionNarrativa || ""} ${block?.emocion || ""} ${block?.nombre || ""} ${block?.objetivoNarrativo || ""} ${block?.escena || ""}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (haystack.includes("gancho") || index === 0) return "ganchos";
  if (haystack.includes("final abierto") || haystack.includes("cierre del episodio") || haystack.includes("episodio 2") || haystack.includes("anticipar la caida")) return "final_abierto";
  if (haystack.includes("caida") || haystack.includes("perder todo") || haystack.includes("oscurece")) return "caida";
  if (haystack.includes("cuenta regresiva") || haystack.includes("presion")) return "presion";
  if (haystack.includes("carrera") || haystack.includes("urgencia") || haystack.includes("imprenta")) return "urgencia";
  if (haystack.includes("revelacion") || haystack.includes("gran recompensa") || haystack.includes("plancha completa")) return "revelacion";
  if (haystack.includes("nueva mision") || haystack.includes("vender, reinvertir") || haystack.includes("repetir")) return "mision";
  if (haystack.includes("vulnerabilidad") || haystack.includes("verguenza")) return "humano";
  if (haystack.includes("presentacion") || haystack.includes("presentaci")) return "curiosidad";
  if (haystack.includes("estrategia")) return "avance";
  if (haystack.includes("obstaculo") || haystack.includes("obst")) return "tension";
  if (haystack.includes("recompensa")) return "resolucion";
  if (haystack.includes("montaje") || haystack.includes("subida")) return "avance";
  if (haystack.includes("cuenta regresiva") || haystack.includes("carrera") || haystack.includes("caida")) return "tension";
  if (haystack.includes("respiracion") || haystack.includes("respiraci")) return "humano";
  if (haystack.includes("mision") || haystack.includes("misi")) return "avance";
  if (haystack.includes("tension") || haystack.includes("problema") || haystack.includes("conflicto") || haystack.includes("riesgo")) return "tension";
  if (haystack.includes("humano") || haystack.includes("reaccion") || haystack.includes("sensacion")) return "humano";
  if (haystack.includes("resultado") || haystack.includes("resolucion") || haystack.includes("cierre")) return "resolucion";
  if (haystack.includes("avance") || haystack.includes("progreso") || haystack.includes("intento")) return "avance";
  if (haystack.includes("cliff")) return "cliffhanger";
  return "curiosidad";
}

function getImportedBlockTemplateText(block) {
  const pieces = [
    block?.funcionNarrativa ? `Funcion: ${block.funcionNarrativa}` : "",
    block?.objetivoNarrativo ? `Objetivo: ${block.objetivoNarrativo}` : "",
    block?.sensacionEspectador ? `Sensacion: ${block.sensacionEspectador}` : "",
    block?.escena ? `Visual: ${block.escena}` : "",
    block?.preguntaAbierta ? `Pregunta abierta: ${block.preguntaAbierta}` : "",
  ].filter(Boolean);
  return pieces.join(" | ") || block?.descripcion || block?.emocion || "Plantilla sin descripcion";
}

function getEpisodeMusicGuide(block, category) {
  const emotion = String(block?.emocion || "").toLowerCase();
  const guides = {
    ganchos: "Beat rapido con pulso curioso, golpes cortos sincronizados con sticker/mapa/contador. Subir energia sin tapar la voz.",
    curiosidad: "Base liviana de suspenso suave, textura minima y espacio para explicar. Mantener pregunta abierta.",
    humano: "Pad calido o piano/guitarra muy bajo, casi documental. Priorizar respiracion, verguenza y silencios reales.",
    tension: "Percusion seca, bajo discreto o drone leve. Cortes mas duros en rechazos; bajar cuando habla.",
    caida: "Ambiente grave, menos ritmo y mas silencio. Puede cortar la musica al decidir guardar celular/plata.",
    avance: "Beat de progreso medio, contador y cortes en ritmo. Sensacion de que el plan empieza a funcionar.",
    presion: "Percusion tipo reloj/cuenta regresiva, tempo mas rapido y subidas cortas antes de cada intento.",
    urgencia: "Ritmo de carrera con transiciones rapidas, pasos/ciudad como textura y subida hasta imprenta/encargo.",
    revelacion: "Build ascendente y pausa antes de mostrar la plancha. Despues entrar con acorde/beat de recompensa.",
    mision: "Base motivacional sobria, pulso de plan nuevo. Que suene a sistema, no a cierre final.",
    resolucion: "Musica de balance: calida, simple, con cierre limpio. Dejar aire para numeros y conclusion.",
    cliffhanger: "Tension baja, nota sostenida o golpe final. Cortar antes de resolver.",
    final_abierto: "Arrancar como recompensa y torcer a intriga. Golpe final + silencio corto para conectar con episodio 2.",
  };
  if (emotion.includes("alivio") || emotion.includes("satisfacci")) return "Musica calida de recompensa, sin exagerar. Dejar claro el logro y preparar el siguiente problema.";
  if (emotion.includes("frustr")) return "Base seca y repetitiva, con cortes en rechazos. No hacerla epica: tiene que sentirse trabada.";
  return guides[category] || guides.curiosidad;
}

function getEpisodeSeparatorGuide(block, category) {
  const nextType = category;
  const guides = {
    ganchos: "Separador rapido de entrada: flash de sticker/mapa/contador antes del bloque 2.",
    humano: "Sin separador fuerte; usar respiracion o micro silencio si cambia a tension.",
    tension: "Separador corto con golpe seco si el siguiente bloque destraba o cambia estrategia.",
    caida: "Separador al final: corte a negro breve o sonido seco antes del recuento/transicion.",
    avance: "Separador de contador/placa si hay salto de ventas, plata o km.",
    presion: "Separador tipo reloj o placa de meta antes de urgencia/carrera.",
    urgencia: "Separador de llegada/puerta/recibo para marcar que se completo la accion.",
    revelacion: "Separador despues de mostrar la plancha: pausa visual antes de presentar el problema nuevo.",
    mision: "Separador con mapa/stock/plan para abrir la etapa siguiente.",
    resolucion: "Separador suave si cierra dia; placa de numeros si pasa al dia siguiente.",
    cliffhanger: "Separador final con corte abrupto, sin resolver.",
    final_abierto: "Separador final obligatorio: golpe + silencio + imagen de los 100 stickers o adelanto de la caida.",
  };
  return guides[nextType] || "";
}

function importEpisodeBuilderFromScript(rawScript) {
  const notes = typeof rawScript?.notes === "string" ? (() => {
    try { return JSON.parse(rawScript.notes || "{}"); } catch (_error) { return {}; }
  })() : rawScript?.notes;
  const script = rawScript?.notes && rawScript?.emotions
    ? { titulo: rawScript.title, episodio: notes?.episodio, dias: rawScript.emotions }
    : rawScript;
  const episodeNumber = normalizeEpisodeNumber(script?.episodio || getSelectedEpisodeNumber());
  const rawDays = Array.isArray(script?.dias) ? script.dias : Array.isArray(script?.emotions) ? script.emotions : [];
  if (!rawDays.length) throw new Error("El JSON no tiene dias[].bloques[].");
  const templates = Object.fromEntries(Object.keys(EPISODE_TEMPLATE_LIBRARY).map((category) => [category, []]));
  let globalIndex = 0;
  const days = rawDays.map((day, dayIndex) => {
    const rawBlocks = Array.isArray(day?.bloques) ? day.bloques : [];
    const dayEmotion = day?.emocion || day?.titulo || EPISODE_DAY_EMOTIONS[dayIndex] || `dia_${dayIndex + 1}`;
    return {
      dia: Number(day?.dia || dayIndex + 1),
      titulo: day?.titulo || `Dia ${dayIndex + 1}`,
      emocion: String(dayEmotion),
      blocks: rawBlocks.map((block, blockIndex) => {
        globalIndex += 1;
        const category = inferEpisodeTemplateCategory(block, blockIndex);
        const templateText = getImportedBlockTemplateText(block);
        if (!templates[category].includes(templateText)) templates[category].push(templateText);
        const templateNumber = templates[category].indexOf(templateText) + 1;
        return {
          id: `bloque-${globalIndex}`,
          numero: globalIndex,
          nombre: slugToKey(block?.emocion || block?.nombre || `bloque_${globalIndex}`),
          categoria: category,
          descripcion: templateText,
          emocion: block?.emocion || dayEmotion,
          plantilla_numero: String(templateNumber),
          duracion: block?.tiempo || block?.duracion || "",
          dialogo: block?.dialogo || "",
          voz_en_off: block?.voz_en_off || block?.vozEnOff || "",
          pregunta_camarografo: block?.preguntaAbierta || block?.pregunta_camarografo || "",
          musica: block?.musica || getEpisodeMusicGuide(block, category),
          separador_final: block?.separador_final || getEpisodeSeparatorGuide(block, category),
          prioridad: blockIndex < 3 ? "alta" : "media",
          estado: block?.estado || "pendiente",
          tomas: Array.isArray(block?.tomasBloque)
            ? block.tomasBloque.map((shot) => shot?.nombre || shot?.text || shot).join("\n")
            : Array.isArray(block?.tomas)
              ? block.tomas.map((shot) => shot?.nombre || shot?.text || shot).join("\n")
              : "",
          instruccion_editor: "",
        };
      }),
    };
  });
  Object.keys(EPISODE_TEMPLATE_LIBRARY).forEach((category) => {
    EPISODE_TEMPLATE_LIBRARY[category].forEach((template) => {
      if (!templates[category].includes(template)) templates[category].push(template);
    });
    if (!templates[category].length) templates[category] = [...EPISODE_TEMPLATE_LIBRARY[category]];
  });
  const draft = {
    episodeNumber,
    guideVersion: EPISODE_BUILDER_GUIDE_VERSION,
    importedFromScript: true,
    mode: "edicion",
    activeDay: days[0]?.dia || 1,
    activeBlockId: days[0]?.blocks?.[0]?.id || "bloque-1",
    activeTemplateCategory: "ganchos",
    status: `JSON importado: ${globalIndex} bloques exactos del guion.`,
    episode: EPISODE_FIELDS.reduce((fields, field) => {
      fields[field] = "";
      return fields;
    }, {}),
    templates,
    usedTemplates: {},
    days,
  };
  draft.episode.titulo = script?.titulo || script?.title || `Episodio ${episodeNumber}`;
  draft.episode.cantidad_bloques = String(globalIndex);
  draft.episode.objetivo = script?.objetivo || script?.preguntaPrincipal || "";
  draft.episode.estado = "importado";
  days.flatMap((day) => day.blocks).forEach((block) => {
    block.instruccion_editor = buildEpisodeEditorInstructionForDraft(draft, block);
  });
  return draft;
}

function importEpisodeBuilderJsonText(rawText) {
  let text = String(rawText || "").trim();
  if (!text) throw new Error("Pega el JSON del guion primero.");
  text = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
  let parsed = JSON.parse(text);
  if (typeof parsed === "string") parsed = JSON.parse(parsed);
  if (Array.isArray(parsed)) parsed = parsed[0];
  if (Array.isArray(parsed?.data)) parsed = parsed.data[0];
  if (Array.isArray(parsed?.episodes)) parsed = parsed.episodes[0];
  if (parsed?.payload && typeof parsed.payload === "object") parsed = parsed.payload;
  const draft = importEpisodeBuilderFromScript(parsed);
  setSelectedEpisodeNumber(draft.episodeNumber || getSelectedEpisodeNumber());
  state.episodeBuilder = normalizeEpisodeBuilderDraft(draft);
  persistEpisodeBuilderDraft(state.episodeBuilder.status);
  return state.episodeBuilder;
}

async function loadDefaultEpisodeBuilderScript({ force = false } = {}) {
  const episodeNumber = getSelectedEpisodeNumber();
  if (episodeNumber !== 1) {
    if (force) {
      state.episodeBuilder = normalizeEpisodeBuilderDraft(createEpisodeBuilderDraft(episodeNumber));
      persistEpisodeBuilderDraft(`Episodio ${episodeNumber} listo para editar.`);
      refreshWindow("episode-constructor");
    }
    return;
  }
  if (!force && state.episodeBuilder.importedFromScript) return;
  try {
    const response = await fetch(`${EPISODE_ONE_TEMPLATE_URL}?v=1`, { cache: "no-store" });
    if (!response.ok) return;
    const script = await response.json();
    setSelectedEpisodeNumber(1);
    state.episodeBuilder = normalizeEpisodeBuilderDraft(importEpisodeBuilderFromScript(script));
    state.episodeBuilder.episodeNumber = 1;
    persistEpisodeBuilderDraft("Episodio 1 cargado: De un sticker a cien.");
    refreshWindow("episode-constructor");
  } catch (error) {
    console.error("No pude cargar el episodio 1 base:", error);
  }
}

async function loadPublishedEpisodeTemplate() {
  const episodeNumber = getSelectedEpisodeNumber();
  try {
    const response = await fetch(`./api/episode-template?episode=${episodeNumber}`, { cache: "no-store" });
    if (!response.ok) return false;
    const data = await response.json();
    if (!data.template?.days?.length) return false;
    if (episodeNumber === 1 && Number(data.template.guideVersion || 1) < EPISODE_BUILDER_GUIDE_VERSION) return false;
    state.episodeBuilder = normalizeEpisodeBuilderDraft(data.template);
    state.episodeBuilder.episodeNumber = episodeNumber;
    state.episodeBuilder.status = data.publishedAt ? `Vista publicada ${new Date(data.publishedAt).toLocaleString("es-AR")}.` : "Vista publicada.";
    refreshWindow("episode-constructor");
    return true;
  } catch (error) {
    console.error("No pude cargar la plantilla publicada:", error);
    return false;
  }
}

async function publishEpisodeTemplate() {
  if (!state.supabase || !state.user.loggedIn) {
    alert("Inicia sesion con la cuenta oficial para publicar.");
    return;
  }
  if (!isEpisodeTemplateAdmin()) {
    alert("Solo la cuenta oficial puede publicar esta vista.");
    return;
  }
  const { data } = await state.supabase.auth.getSession();
  const token = data?.session?.access_token || "";
  if (!token) {
    alert("Sesion invalida. Volve a ingresar.");
    return;
  }
  const episodeNumber = getSelectedEpisodeNumber();
  state.episodeBuilder.episodeNumber = episodeNumber;
  const response = await fetch(`./api/episode-template?episode=${episodeNumber}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ template: state.episodeBuilder, episode: episodeNumber }),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    alert(body.error || "No pude publicar la vista.");
    return;
  }
  persistEpisodeBuilderDraft("Vista publicada para lectura.");
  refreshWindow("episode-constructor");
}

function normalizeEpisodeBuilderDraft(rawDraft) {
  const episodeNumber = normalizeEpisodeNumber(rawDraft?.episodeNumber || getStoredEpisodeNumber());
  const fallback = createEpisodeBuilderDraft(episodeNumber);
  if (!rawDraft || typeof rawDraft !== "object") return fallback;
  const episode = { ...fallback.episode };
  EPISODE_FIELDS.forEach((field) => {
    episode[field] = String(rawDraft.episode?.[field] ?? episode[field] ?? "");
  });
  const templates = { ...fallback.templates };
  Object.keys(EPISODE_TEMPLATE_LIBRARY).forEach((category) => {
    const values = Array.isArray(rawDraft.templates?.[category]) ? rawDraft.templates[category] : templates[category];
    templates[category] = values.map((item) => String(item || "").trim()).filter(Boolean);
    if (!templates[category].length) templates[category] = [...EPISODE_TEMPLATE_LIBRARY[category]];
  });
  if (rawDraft.importedFromScript && Array.isArray(rawDraft.days) && rawDraft.days.length) {
    const days = rawDraft.days.map((day, dayIndex) => ({
      dia: Number(day?.dia || dayIndex + 1),
      titulo: day?.titulo || `Dia ${dayIndex + 1}`,
      emocion: String(day?.emocion || EPISODE_DAY_EMOTIONS[dayIndex] || `dia_${dayIndex + 1}`),
      blocks: Array.isArray(day?.blocks) ? day.blocks.map((block, blockIndex) => {
        const numero = Number(block?.numero || blockIndex + 1);
        return {
          ...createEpisodeBuilderBlock(block?.nombre || `bloque_${numero}`, blockIndex, Number(day?.dia || dayIndex + 1)),
          ...EPISODE_BLOCK_FIELDS.reduce((fields, field) => {
            fields[field] = String(block?.[field] ?? "");
            return fields;
          }, {}),
          id: block?.id || `bloque-${numero}`,
          numero,
          nombre: block?.nombre || `bloque_${numero}`,
          categoria: block?.categoria && templates[block.categoria] ? block.categoria : inferEpisodeTemplateCategory(block, blockIndex),
          emocion: block?.emocion || day?.emocion || EPISODE_DAY_EMOTIONS[dayIndex] || "",
          prioridad: block?.prioridad || (blockIndex < 3 ? "alta" : "media"),
          estado: block?.estado || "pendiente",
        };
      }) : [],
    }));
    const totalBlocks = days.reduce((sum, day) => sum + day.blocks.length, 0);
    return refreshEpisodeBuilderInstructionsForDraft({
      ...fallback,
      episodeNumber,
      guideVersion: Number(rawDraft.guideVersion || 1),
      importedFromScript: true,
      mode: ["admin", "rodaje"].includes(rawDraft.mode) ? rawDraft.mode : "edicion",
      activeDay: Number(rawDraft.activeDay || days[0]?.dia || 1),
      activeBlockId: String(rawDraft.activeBlockId || days[0]?.blocks?.[0]?.id || "bloque-1"),
      activeTemplateCategory: templates[rawDraft.activeTemplateCategory] ? rawDraft.activeTemplateCategory : "ganchos",
      status: String(rawDraft.status || `JSON importado: ${totalBlocks} bloques exactos del guion.`),
      episode: { ...episode, cantidad_bloques: String(totalBlocks) },
      templates,
      usedTemplates: rawDraft.usedTemplates && typeof rawDraft.usedTemplates === "object" ? rawDraft.usedTemplates : {},
      days,
    });
  }
  const days = fallback.days.map((day, dayIndex) => {
    const incomingDay = Array.isArray(rawDraft.days) ? rawDraft.days.find((item) => Number(item?.dia) === dayIndex + 1) : null;
    const incomingBlocks = Array.isArray(incomingDay?.blocks) ? incomingDay.blocks : [];
    const normalizedBlocks = EPISODE_DAY_BLOCKS.map((name, blockIndex) => {
      const globalIndex = (dayIndex * EPISODE_DEFAULT_BLOCKS_PER_DAY) + blockIndex + 1;
      const existing = incomingBlocks.find((block) => block?.numero === globalIndex || block?.nombre === name || block?.id === `bloque-${globalIndex}` || block?.id === `${name}-${blockIndex + 1}`);
      return {
        ...createEpisodeBuilderBlock(name, blockIndex, dayIndex + 1),
        ...EPISODE_BLOCK_FIELDS.reduce((fields, field) => {
          fields[field] = String(existing?.[field] ?? "");
          return fields;
        }, {}),
        id: `bloque-${globalIndex}`,
        numero: globalIndex,
        nombre: name,
        categoria: existing?.categoria && templates[existing.categoria] ? existing.categoria : getEpisodeBuilderBlockCategory(name),
        prioridad: existing?.prioridad || (blockIndex < 3 ? "alta" : "media"),
        estado: existing?.estado || "pendiente",
        emocion: existing?.emocion || incomingDay?.emocion || EPISODE_DAY_EMOTIONS[dayIndex] || "curiosidad",
      };
    });
    const order = incomingBlocks.map((block) => block?.nombre).filter((name) => EPISODE_DAY_BLOCKS.includes(name));
    return {
      dia: dayIndex + 1,
      emocion: incomingDay?.emocion || EPISODE_DAY_EMOTIONS[dayIndex] || "curiosidad",
      blocks: [
        ...order.map((name) => normalizedBlocks.find((block) => block.nombre === name)).filter(Boolean),
        ...normalizedBlocks.filter((block) => !order.includes(block.nombre)),
      ],
    };
  });
  return refreshEpisodeBuilderInstructionsForDraft({
    ...fallback,
    episodeNumber,
    guideVersion: Number(rawDraft.guideVersion || 1),
    mode: ["admin", "rodaje"].includes(rawDraft.mode) ? rawDraft.mode : "edicion",
    activeDay: clamp(Number(rawDraft.activeDay) || 1, 1, EPISODE_BUILDER_DAYS),
    activeBlockId: String(rawDraft.activeBlockId || fallback.activeBlockId),
    activeTemplateCategory: templates[rawDraft.activeTemplateCategory] ? rawDraft.activeTemplateCategory : "ganchos",
    status: String(rawDraft.status || fallback.status),
    episode: { ...episode, cantidad_bloques: String(EPISODE_BUILDER_DAYS * EPISODE_DEFAULT_BLOCKS_PER_DAY) },
    templates,
    usedTemplates: rawDraft.usedTemplates && typeof rawDraft.usedTemplates === "object" ? rawDraft.usedTemplates : {},
    days,
  });
}

function loadEpisodeBuilderDraft() {
  try {
    const episodeNumber = getStoredEpisodeNumber();
    const stored = localStorage.getItem(getEpisodeBuilderStorageKey(episodeNumber));
    const legacy = episodeNumber === 1 ? localStorage.getItem(EPISODE_BUILDER_STORAGE_KEY) : null;
    return normalizeEpisodeBuilderDraft(JSON.parse(stored || legacy || "null"));
  } catch (_error) {
    return createEpisodeBuilderDraft(getStoredEpisodeNumber());
  }
}

function persistEpisodeBuilderDraft(message = "Cambios guardados en este navegador.") {
  state.episodeBuilder.episodeNumber = getSelectedEpisodeNumber();
  state.episodeBuilder.guideVersion = EPISODE_BUILDER_GUIDE_VERSION;
  state.episodeBuilder.status = message;
  localStorage.setItem(getEpisodeBuilderStorageKey(state.episodeBuilder.episodeNumber), JSON.stringify(state.episodeBuilder));
}

async function selectEpisodeBuilderEpisode(episodeNumber) {
  const previousMode = isEpisodeTemplateAdmin() && ["admin", "rodaje"].includes(state.episodeBuilder.mode)
    ? state.episodeBuilder.mode
    : "edicion";
  setSelectedEpisodeNumber(episodeNumber);
  state.episodeBuilder = loadEpisodeBuilderDraft();
  state.episodeBuilder.episodeNumber = getSelectedEpisodeNumber();
  const loaded = await loadPublishedEpisodeTemplate();
  if (!loaded && getSelectedEpisodeNumber() === 1) {
    await loadDefaultEpisodeBuilderScript({ force: true });
  } else if (!loaded) {
    state.episodeBuilder = normalizeEpisodeBuilderDraft(createEpisodeBuilderDraft(getSelectedEpisodeNumber()));
    persistEpisodeBuilderDraft(`Episodio ${getSelectedEpisodeNumber()} sin publicar todavia.`);
  }
  if (isEpisodeTemplateAdmin() && previousMode !== "edicion") {
    state.episodeBuilder.mode = previousMode;
    persistEpisodeBuilderDraft(`Episodio ${getSelectedEpisodeNumber()} activo.`);
  }
  refreshWindow("episode-constructor");
}

function getEpisodeBuilderDay(dayNumber = state.episodeBuilder.activeDay) {
  return state.episodeBuilder.days.find((day) => Number(day.dia) === Number(dayNumber)) || state.episodeBuilder.days[0];
}

function getEpisodeBuilderBlock(blockId = state.episodeBuilder.activeBlockId) {
  const activeDay = getEpisodeBuilderDay();
  return activeDay.blocks.find((block) => block.id === blockId) || activeDay.blocks[0];
}

function getNextEpisodeTemplate(category) {
  const templates = state.episodeBuilder.templates[category] || [];
  const used = new Set(state.episodeBuilder.usedTemplates[category] || []);
  const next = templates.find((template) => !used.has(template)) || templates[0] || "";
  if (!next) return { text: "", number: "" };
  state.episodeBuilder.usedTemplates[category] = [...used, next].slice(-templates.length);
  return { text: next, number: String(templates.indexOf(next) + 1) };
}

function applyTemplateToEpisodeBlock(block, templateEntry) {
  const templateText = typeof templateEntry === "string" ? templateEntry : templateEntry?.text || "";
  if (!block || !templateText) return;
  block.descripcion = templateText;
  block.plantilla_numero = typeof templateEntry === "object" ? templateEntry.number || block.plantilla_numero || "1" : block.plantilla_numero || "1";
  if (!block.voz_en_off) block.voz_en_off = templateText;
  if (!block.tomas) block.tomas = `Plano detalle de ${labelFromKey(block.nombre).toLowerCase()}\nPlano recurso del contexto\nReaccion frente a camara`;
  block.instruccion_editor = buildEpisodeEditorInstruction(block);
}

function getAllEpisodeBuilderBlocks() {
  return state.episodeBuilder.days.flatMap((day) => day.blocks.map((block) => ({ ...block, dia: day.dia })));
}

function getAllBlocksFromEpisodeBuilderDraft(draft) {
  return (draft?.days || []).flatMap((day) => (day.blocks || []).map((block) => ({ ...block, dia: day.dia })));
}

function getNextEpisodeBuilderBlock(blockId) {
  const blocks = getAllEpisodeBuilderBlocks();
  const index = blocks.findIndex((block) => block.id === blockId);
  return index >= 0 ? blocks[index + 1] || null : null;
}

function episodeBlockCode(block) {
  return `B${block?.numero || "?"}`;
}

function episodeTemplateCode(block) {
  return `P${block?.plantilla_numero || "?"}`;
}

function episodeComboCode(block) {
  return `${episodeBlockCode(block)} + ${episodeTemplateCode(block)}`;
}

function buildEpisodeEditorInstructionForDraft(draft, block) {
  const blocks = getAllBlocksFromEpisodeBuilderDraft(draft);
  const index = blocks.findIndex((item) => item.id === block.id);
  const next = index >= 0 ? blocks[index + 1] || null : null;
  const current = episodeComboCode(block);
  const music = block.musica ? ` Musica: ${block.musica}` : "";
  const separator = block.separador_final ? ` Separador final: ${block.separador_final}` : "";
  if (!next) return `Cerrar con ${current}. No hay bloque siguiente.${music}${separator}`;
  return `Combinar ${current} con ${episodeComboCode(next)}. ${episodeBlockCode(next)} es ${labelFromKey(next.emocion)} y usa plantilla ${labelFromKey(next.categoria)}.${music}${separator}`;
}

function refreshEpisodeBuilderInstructionsForDraft(draft) {
  (draft?.days || []).forEach((day) => {
    (day.blocks || []).forEach((block) => {
      block.plantilla_numero = String(block.plantilla_numero || "1");
      block.instruccion_editor = buildEpisodeEditorInstructionForDraft(draft, block);
    });
  });
  return draft;
}

function buildEpisodeEditorInstruction(block) {
  const next = getNextEpisodeBuilderBlock(block.id);
  const current = episodeComboCode(block);
  const music = block.musica ? ` Musica: ${block.musica}` : "";
  const separator = block.separador_final ? ` Separador final: ${block.separador_final}` : "";
  if (!next) return `Cerrar con ${current}. No hay bloque siguiente.${music}${separator}`;
  return `Combinar ${current} con ${episodeComboCode(next)}. ${episodeBlockCode(next)} es ${labelFromKey(next.emocion)} y usa plantilla ${labelFromKey(next.categoria)}.${music}${separator}`;
}

function getEpisodeTemplateByNumber(category, templateNumber) {
  const templates = state.episodeBuilder.templates[category] || [];
  const index = Math.max(0, Number(templateNumber || 1) - 1);
  return templates[index] || "";
}

function isEpisodeTemplateAdmin() {
  return isOfficialEmail(state.user.email);
}

function syncEpisodeBlockTemplateText(block) {
  if (!block?.categoria || !block?.plantilla_numero) return;
  const templateText = getEpisodeTemplateByNumber(block.categoria, block.plantilla_numero);
  if (templateText) block.descripcion = templateText;
  block.instruccion_editor = buildEpisodeEditorInstruction(block);
}

function renderEpisodeTemplateNumberOptions(category, selectedNumber) {
  const templates = state.episodeBuilder.templates[category] || [];
  const total = Math.max(templates.length, Number(selectedNumber || 0), 1);
  return Array.from({ length: total }, (_item, index) => {
    const number = String(index + 1);
    return `<option value="${number}" ${String(selectedNumber || "") === number ? "selected" : ""}>P${number}</option>`;
  }).join("");
}

function renderEpisodeNumberedTemplates(category) {
  const templates = state.episodeBuilder.templates[category] || [];
  return templates.map((template, index) => `
    <div class="episode-template-number-row">
      <strong>P${index + 1}</strong>
      <span>${escapeHtml(template)}</span>
      <button class="action-btn episode-template-delete" data-eb-delete-template="${escapeHtml(category)}" data-eb-delete-template-index="${index}" type="button">Borrar</button>
    </div>
  `).join("");
}

function renderEpisodeCreatorTemplatePanel(templateCategory) {
  return `
    <section class="episode-builder-panel episode-creator-panel">
      <div class="episode-panel-head">
        <div>
          <h3>Creador de plantillas P</h3>
          <div class="shop-copy">Cada linea queda numerada como P1, P2, P3. Ese codigo es el que despues ve la editora junto al bloque B.</div>
        </div>
        <select class="win-input" data-eb-template-select>${renderEpisodeBuilderTemplateOptions(templateCategory)}</select>
      </div>
      <div class="episode-creator-add">
        <input class="win-input" data-eb-new-template-text placeholder="Nueva plantilla para ${escapeHtml(labelFromKey(templateCategory))}">
        <button class="action-btn" data-eb-add-template="1" type="button">Agregar</button>
      </div>
      <div class="episode-template-number-list">${renderEpisodeNumberedTemplates(templateCategory)}</div>
      <textarea class="win-input episode-template-editor" data-eb-template-category="${escapeHtml(templateCategory)}" rows="8">${escapeHtml((state.episodeBuilder.templates[templateCategory] || []).join("\n"))}</textarea>
    </section>
  `;
}

function renderEpisodeCombinationMap() {
  return getAllEpisodeBuilderBlocks().map((block) => {
    const next = getNextEpisodeBuilderBlock(block.id);
    return `
      <div class="episode-combo-row">
        <strong>${escapeHtml(episodeBlockCode(block))}</strong>
        <span>${escapeHtml(labelFromKey(block.emocion))}</span>
        <span><b>${escapeHtml(episodeTemplateCode(block))}</b> ${escapeHtml(labelFromKey(block.categoria))}</span>
        <span>${next ? `sigue ${escapeHtml(episodeComboCode(next))}: ${escapeHtml(labelFromKey(next.emocion))}` : "cierre final"}</span>
      </div>
    `;
  }).join("");
}

function renderEpisodeCombinationMatrix() {
  return state.episodeBuilder.days.map((day) => `
    <section class="episode-builder-panel episode-combination-day">
      <div class="episode-panel-head">
        <h3>Dia ${day.dia}: ${escapeHtml(labelFromKey(day.emocion))}</h3>
        <span class="episode-day-count">${day.blocks.length} bloques</span>
      </div>
      <div class="episode-combination-table">
        <div class="episode-combination-head">
          <span>Bloque</span>
          <span>Emocion</span>
          <span>Tipo</span>
          <span>Plantilla P</span>
          <span>Musica</span>
          <span>Separador</span>
          <span>Sigue</span>
        </div>
        ${day.blocks.map((block) => {
          const next = getNextEpisodeBuilderBlock(block.id);
          return `
            <div class="episode-combination-row ${block.id === state.episodeBuilder.activeBlockId ? "active" : ""}">
              <button class="episode-combination-block" data-eb-open-block="${escapeHtml(block.id)}" type="button">${escapeHtml(episodeBlockCode(block))}</button>
              <input class="win-input" data-eb-day="${day.dia}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="emocion" value="${escapeHtml(block.emocion || "")}">
              <select class="win-input" data-eb-day="${day.dia}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="categoria">
                ${renderEpisodeBuilderTemplateOptions(block.categoria)}
              </select>
              <select class="win-input template-number-select" data-eb-day="${day.dia}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="plantilla_numero">
                ${renderEpisodeTemplateNumberOptions(block.categoria, block.plantilla_numero)}
              </select>
              <textarea class="win-input compact-cell" rows="2" data-eb-day="${day.dia}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="musica">${escapeHtml(block.musica || "")}</textarea>
              <textarea class="win-input compact-cell" rows="2" data-eb-day="${day.dia}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="separador_final">${escapeHtml(block.separador_final || "")}</textarea>
              <span class="episode-next-code">${next ? `${escapeHtml(episodeComboCode(next))}<small>${escapeHtml(labelFromKey(next.emocion))} / ${escapeHtml(labelFromKey(next.categoria))}</small>` : "Cierre final"}</span>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function renderEpisodePublicCombinationMatrix() {
  return state.episodeBuilder.days.map((day) => `
    <section class="episode-public-day">
      <div class="episode-public-day-head">
        <h3>Dia ${day.dia}: ${escapeHtml(day.titulo || labelFromKey(day.emocion))}</h3>
        <span>${day.blocks.length} bloques</span>
      </div>
      <div class="episode-public-list">
        ${day.blocks.map((block) => {
          const next = getNextEpisodeBuilderBlock(block.id);
          return `
            <article class="episode-public-row">
              <div class="episode-public-block">${escapeHtml(episodeBlockCode(block))}</div>
              <div>
                <strong>${escapeHtml(block.emocion || labelFromKey(block.nombre))}</strong>
                <span>${escapeHtml(block.descripcion || "")}</span>
              </div>
              <div class="episode-public-template">
                <small>Plantilla</small>
                <b>${escapeHtml(episodeTemplateCode(block))}</b>
                <span>${escapeHtml(labelFromKey(block.categoria))}</span>
              </div>
              <div class="episode-public-music">
                <small>Musica</small>
                <b>${escapeHtml(block.musica || "-")}</b>
              </div>
              <div class="episode-public-separator">
                <small>Separador final</small>
                <b>${escapeHtml(block.separador_final || "Sin separador")}</b>
              </div>
              <div class="episode-public-next">
                <small>Sigue</small>
                <b>${next ? escapeHtml(episodeComboCode(next)) : "Cierre final"}</b>
                ${next ? `<span>${escapeHtml(next.emocion || "")} / ${escapeHtml(labelFromKey(next.categoria))}</span>` : ""}
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function renderEpisodeSelector() {
  const selected = getSelectedEpisodeNumber();
  return `
    <div class="episode-selector" aria-label="Seleccionar episodio">
      ${EPISODE_BUILDER_EPISODES.map((episodeNumber) => `
        <button class="action-btn ${episodeNumber === selected ? "active-tab" : ""}" data-eb-select-episode="${episodeNumber}" type="button">E${episodeNumber}</button>
      `).join("")}
    </div>
  `;
}

function renderEpisodeTemplateViewer() {
  const builder = state.episodeBuilder;
  const totalBlocks = builder.days.flatMap((day) => day.blocks).length;
  return `
    <div class="window-content episode-constructor episode-public-view">
      <div class="episode-public-top">
        <div>
          <div class="app-section-title">Episodio ${getSelectedEpisodeNumber()}: ${escapeHtml(builder.episode.titulo || "Combinacion de plantillas")}</div>
          <div class="shop-copy">Vista de lectura: cada fila muestra que bloque B usa que plantilla P y con cual B/P sigue.</div>
        </div>
        <div class="episode-public-actions">
          ${renderEpisodeSelector()}
          ${isEpisodeTemplateAdmin() ? `<button class="action-btn" data-eb-admin-mode="1">Creador</button>` : ""}
        </div>
      </div>
      <div class="episode-builder-stats">
        <div><span>Dias</span><strong>${builder.days.length}</strong></div>
        <div><span>Bloques</span><strong>${totalBlocks}</strong></div>
        <div><span>Estado</span><strong>${builder.status.includes("public") ? "Publicado" : "Base"}</strong></div>
      </div>
      ${renderEpisodePublicCombinationMatrix()}
    </div>
    <div class="window-statusbar"><div class="status-panel">Solo lectura</div><div class="status-panel">${escapeHtml(builder.episode.titulo || "Episodio")}</div></div>
  `;
}

function updateEpisodeBuilderFromWindow(win) {
  const builder = state.episodeBuilder;
  win.querySelectorAll("[data-eb-episode-field]").forEach((field) => {
    builder.episode[field.dataset.ebEpisodeField] = field.value;
  });
  win.querySelectorAll("[data-eb-template-category]").forEach((field) => {
    const category = field.dataset.ebTemplateCategory;
    builder.templates[category] = field.value.split("\n").map((item) => item.trim()).filter(Boolean);
  });
  win.querySelectorAll("[data-eb-block-field]").forEach((field) => {
    const day = builder.days.find((item) => Number(item.dia) === Number(field.dataset.ebDay));
    const block = day?.blocks.find((item) => item.id === field.dataset.ebBlock);
    if (!block) return;
    block[field.dataset.ebBlockField] = field.value;
    if (field.dataset.ebBlockField === "categoria" && !block.plantilla_numero) block.plantilla_numero = "1";
    if (field.dataset.ebBlockField === "categoria" || field.dataset.ebBlockField === "plantilla_numero") {
      syncEpisodeBlockTemplateText(block);
    }
  });
  getAllEpisodeBuilderBlocks().forEach((block) => {
    const day = builder.days.find((item) => Number(item.dia) === Number(block.dia));
    const sourceBlock = day?.blocks.find((item) => item.id === block.id);
    if (sourceBlock && sourceBlock.categoria && sourceBlock.plantilla_numero) {
      sourceBlock.instruccion_editor = buildEpisodeEditorInstruction(sourceBlock);
    }
  });
}

function moveEpisodeBuilderBlock(blockId, direction) {
  const day = getEpisodeBuilderDay();
  const index = day.blocks.findIndex((block) => block.id === blockId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= day.blocks.length) return;
  const [block] = day.blocks.splice(index, 1);
  day.blocks.splice(nextIndex, 0, block);
  state.episodeBuilder.activeBlockId = block.id;
  persistEpisodeBuilderDraft("Bloque reordenado.");
  refreshWindow("episode-constructor");
}

function renderEpisodeBuilderTemplateOptions(selectedCategory) {
  return Object.keys(EPISODE_TEMPLATE_LIBRARY).map((category) => (
    `<option value="${escapeHtml(category)}" ${category === selectedCategory ? "selected" : ""}>${escapeHtml(labelFromKey(category))}</option>`
  )).join("");
}

function renderEpisodeBuilder() {
  const builder = state.episodeBuilder;
  if (!isEpisodeTemplateAdmin() && ["admin", "rodaje"].includes(builder.mode)) {
    builder.mode = "edicion";
  }
  if (isEpisodeTemplateAdmin() && (builder.mode === "edicion" || builder.mode === "publico")) {
    builder.mode = "admin";
  }
  if (!isEpisodeTemplateAdmin() || (builder.mode !== "admin" && builder.mode !== "rodaje")) {
    return renderEpisodeTemplateViewer();
  }
  const activeDay = getEpisodeBuilderDay();
  const activeBlock = getEpisodeBuilderBlock();
  const doneBlocks = builder.days.flatMap((day) => day.blocks).filter((block) => block.estado === "listo").length;
  const totalBlocks = builder.days.flatMap((day) => day.blocks).length;
  const templateCategory = builder.activeTemplateCategory;
  if (builder.mode === "rodaje") {
    return renderEpisodeBuilderShootingMode(activeDay, activeBlock, doneBlocks, totalBlocks);
  }
  return `
    <div class="window-content episode-constructor episode-admin-view">
      <div class="episode-builder-top">
        <div>
          <div class="app-section-title">Combinador B/P - Episodio ${getSelectedEpisodeNumber()}</div>
          <div class="shop-copy">B es bloque. P es plantilla. A cada bloque B le asignas una plantilla P y la editora ve la combinacion completa.</div>
        </div>
        <div class="session-row">
          ${renderEpisodeSelector()}
          <button class="action-btn" data-eb-mode="rodaje">Vista editor</button>
          <button class="action-btn" data-eb-generate-all="1">Generar combinacion</button>
          <button class="action-btn" data-eb-publish-template="1">Publicar vista</button>
          <button class="action-btn" data-eb-reset-draft="1">Reiniciar plantilla</button>
        </div>
      </div>
      <div class="episode-builder-stats">
        <div><span>Dias</span><strong>${builder.days.length}</strong></div>
        <div><span>Bloques</span><strong>${doneBlocks}/${totalBlocks}</strong></div>
        <div><span>Plantillas</span><strong>${Object.values(builder.templates).reduce((sum, list) => sum + list.length, 0)}</strong></div>
      </div>
      <section class="episode-builder-panel episode-json-importer">
        <div class="episode-panel-head">
          <div>
            <h3>Importar JSON del guion 1</h3>
            <div class="shop-copy">Pega el JSON exportado de Direct By para que la matriz use exactamente sus dias, bloques y emociones.</div>
          </div>
          <div class="session-row">
            <button class="action-btn" data-eb-load-episode-one="1">Cargar episodio 1</button>
            <button class="action-btn" data-eb-import-json="1">Importar JSON</button>
          </div>
        </div>
        <textarea class="win-input episode-json-input" data-eb-json-input rows="5" placeholder='{"episodio":1,"titulo":"...","dias":[{"dia":1,"bloques":[...]}]}'></textarea>
        <div class="shop-copy" data-eb-import-status></div>
      </section>
      <section class="episode-combination-matrix">
        <div class="episode-panel-head">
          <div>
            <h3>Matriz B/P para editora</h3>
            <div class="shop-copy">Aca se decide lo importante: B1 usa P1, B2 usa P3, y asi hasta el cierre.</div>
          </div>
        </div>
        ${renderEpisodeCombinationMatrix()}
      </section>
      <div class="episode-builder-layout">
        <section class="episode-builder-panel">
          <h3>Episodio</h3>
          <div class="episode-field-grid">
            ${EPISODE_FIELDS.map((field) => `
              <label class="episode-field">
                <span>${escapeHtml(labelFromKey(field))}</span>
                <input class="win-input" data-eb-episode-field="${escapeHtml(field)}" value="${escapeHtml(builder.episode[field] || "")}" placeholder="${escapeHtml(labelFromKey(field))}">
              </label>
            `).join("")}
          </div>
        </section>
        ${renderEpisodeCreatorTemplatePanel(templateCategory)}
      </div>
      <div class="session-row">
        <button class="action-btn" data-eb-generate-block="1">Aplicar plantilla al bloque activo</button>
        <button class="action-btn" data-eb-reset-used="1">Liberar repetidas</button>
      </div>
      <div class="episode-day-tabs">
        ${builder.days.map((day) => `<button class="action-btn ${day.dia === builder.activeDay ? "active-tab" : ""}" data-eb-day-tab="${day.dia}">Dia ${day.dia}: ${escapeHtml(labelFromKey(day.emocion))}</button>`).join("")}
      </div>
      <div class="episode-block-board">
        <aside class="episode-block-list">
          ${activeDay.blocks.map((block, index) => `
            <button class="episode-block-tab ${block.id === activeBlock.id ? "active" : ""}" data-eb-open-block="${escapeHtml(block.id)}">
              <strong>B${escapeHtml(String(block.numero || index + 1))}. ${escapeHtml(labelFromKey(block.nombre))}</strong>
              <span>${escapeHtml(episodeTemplateCode(block))} / ${escapeHtml(labelFromKey(block.emocion))} / ${escapeHtml(labelFromKey(block.categoria))}</span>
            </button>
          `).join("")}
        </aside>
        <section class="episode-builder-panel episode-block-editor">
          <div class="episode-panel-head">
            <div>
              <h3>${escapeHtml(episodeBlockCode(activeBlock))}: ${escapeHtml(labelFromKey(activeBlock.nombre))}</h3>
              <div class="shop-copy">Este ${escapeHtml(episodeBlockCode(activeBlock))} usa ${escapeHtml(episodeTemplateCode(activeBlock))}. La emocion ayuda a elegir que P conviene combinar con el siguiente bloque.</div>
            </div>
            <div class="session-row">
              <button class="action-btn" data-eb-move="-1">Subir</button>
              <button class="action-btn" data-eb-move="1">Bajar</button>
            </div>
          </div>
          ${renderEpisodeBuilderBlockFields(activeDay.dia, activeBlock)}
        </section>
      </div>
      <section class="episode-builder-panel episode-combo-map">
        <div class="episode-panel-head">
          <h3>Mapa B/P para edicion</h3>
          <div class="shop-copy">Cada fila muestra el codigo exacto que debe seguir la editora: B actual + P actual + B/P siguiente.</div>
        </div>
        <div class="episode-combo-list">${renderEpisodeCombinationMap()}</div>
      </section>
      <div id="episode-builder-status" class="note-box">${escapeHtml(builder.status)}</div>
    </div>
    <div class="window-statusbar"><div class="status-panel">Constructor</div><div class="status-panel">${escapeHtml(builder.mode)}</div></div>
  `;
}

function renderEpisodeBuilderBlockFields(dayNumber, block) {
  return `
    <div class="episode-block-fields">
      <label class="episode-field">
        <span>Tipo de plantilla P</span>
        <select class="win-input" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="categoria">
          ${renderEpisodeBuilderTemplateOptions(block.categoria)}
        </select>
      </label>
      <label class="episode-field">
        <span>Prioridad</span>
        <select class="win-input" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="prioridad">
          ${["alta", "media", "baja"].map((value) => `<option value="${value}" ${block.prioridad === value ? "selected" : ""}>${labelFromKey(value)}</option>`).join("")}
        </select>
      </label>
      <label class="episode-field">
        <span>Estado</span>
        <select class="win-input" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="estado">
          ${["pendiente", "en_proceso", "listo"].map((value) => `<option value="${value}" ${block.estado === value ? "selected" : ""}>${labelFromKey(value)}</option>`).join("")}
        </select>
      </label>
      <label class="episode-field">
        <span>Codigo P</span>
        <input class="win-input" type="number" min="1" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="plantilla_numero" value="${escapeHtml(block.plantilla_numero || "")}">
      </label>
      ${["emocion", "descripcion", "duracion", "dialogo", "voz_en_off", "pregunta_camarografo", "musica", "separador_final", "tomas", "instruccion_editor"].map((field) => `
        <label class="episode-field ${field === "descripcion" || field === "tomas" || field === "instruccion_editor" ? "wide" : ""}">
          <span>${escapeHtml(labelFromKey(field))}</span>
          ${field === "descripcion" || field === "dialogo" || field === "voz_en_off" || field === "pregunta_camarografo" || field === "musica" || field === "separador_final" || field === "tomas" || field === "instruccion_editor"
            ? `<textarea class="win-input" rows="${field === "tomas" ? "4" : "3"}" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="${field}">${escapeHtml(block[field] || "")}</textarea>`
            : `<input class="win-input" data-eb-day="${dayNumber}" data-eb-block="${escapeHtml(block.id)}" data-eb-block-field="${field}" value="${escapeHtml(block[field] || "")}">`}
        </label>
      `).join("")}
    </div>
  `;
}

function renderEpisodeBuilderShootingMode(activeDay, activeBlock, doneBlocks, totalBlocks) {
  return `
    <div class="window-content episode-constructor shooting">
      <div class="episode-builder-top">
        <div>
          <div class="app-section-title">Vista Editor</div>
          <div class="shop-copy">Dia ${activeDay.dia} / ${escapeHtml(episodeBlockCode(activeBlock))} / ${escapeHtml(episodeTemplateCode(activeBlock))} / ${escapeHtml(labelFromKey(activeBlock.emocion))}</div>
        </div>
        <button class="action-btn" data-eb-mode="admin">Creador</button>
      </div>
      <section class="episode-shooting-card">
        <span>${doneBlocks}/${totalBlocks} bloques listos</span>
        <h3>${escapeHtml(episodeComboCode(activeBlock))}</h3>
        <p>${escapeHtml(activeBlock.instruccion_editor || buildEpisodeEditorInstruction(activeBlock))}</p>
        <div class="episode-shots">
          ${renderEpisodeCombinationMap()}
        </div>
      </section>
      <div class="episode-day-tabs">
        ${state.episodeBuilder.days.map((day) => `<button class="action-btn ${day.dia === activeDay.dia ? "active-tab" : ""}" data-eb-day-tab="${day.dia}">Dia ${day.dia}: ${escapeHtml(labelFromKey(day.emocion))}</button>`).join("")}
      </div>
      <div class="episode-block-list horizontal">
        ${activeDay.blocks.map((block) => `<button class="episode-block-tab ${block.id === activeBlock.id ? "active" : ""}" data-eb-open-block="${escapeHtml(block.id)}"><strong>${escapeHtml(episodeComboCode(block))}</strong><span>${escapeHtml(labelFromKey(block.nombre))} / ${escapeHtml(block.estado)}</span></button>`).join("")}
      </div>
    </div>
    <div class="window-statusbar"><div class="status-panel">Rodaje</div><div class="status-panel">Dia ${activeDay.dia}</div></div>
  `;
}

function bindEpisodeBuilder(win) {
  win.querySelectorAll("[data-eb-select-episode]").forEach((button) => {
    button.addEventListener("click", () => {
      selectEpisodeBuilderEpisode(button.dataset.ebSelectEpisode);
    });
  });
  win.querySelector("[data-eb-admin-mode]")?.addEventListener("click", () => {
    if (!isEpisodeTemplateAdmin()) {
      alert("Solo la cuenta oficial puede editar.");
      return;
    }
    state.episodeBuilder.mode = "admin";
    persistEpisodeBuilderDraft("Modo admin activo.");
    refreshWindow("episode-constructor");
  });
  win.querySelector("[data-eb-publish-template]")?.addEventListener("click", publishEpisodeTemplate);
  win.querySelector("[data-eb-load-episode-one]")?.addEventListener("click", async () => {
    const status = win.querySelector("[data-eb-import-status]");
    if (status) status.textContent = "Cargando episodio 1...";
    setSelectedEpisodeNumber(1);
    state.episodeBuilder.episodeNumber = 1;
    await loadDefaultEpisodeBuilderScript({ force: true });
  });
  win.querySelector("[data-eb-import-json]")?.addEventListener("click", () => {
    const status = win.querySelector("[data-eb-import-status]");
    try {
      const draft = importEpisodeBuilderJsonText(win.querySelector("[data-eb-json-input]")?.value || "");
      if (status) status.textContent = `Importado: ${draft.days.reduce((sum, day) => sum + day.blocks.length, 0)} bloques en ${draft.days.length} dias.`;
      refreshWindow("episode-constructor");
    } catch (error) {
      const message = error.message || "No pude importar ese JSON.";
      if (status) status.textContent = message;
      alert(message);
    }
  });
  win.querySelector("[data-eb-add-template]")?.addEventListener("click", () => {
    updateEpisodeBuilderFromWindow(win);
    const input = win.querySelector("[data-eb-new-template-text]");
    const text = String(input?.value || "").trim();
    if (!text) {
      alert("Escribi la plantilla nueva primero.");
      return;
    }
    const category = state.episodeBuilder.activeTemplateCategory || "ganchos";
    state.episodeBuilder.templates[category] = [...(state.episodeBuilder.templates[category] || []), text];
    state.episodeBuilder.activeTemplateCategory = category;
    persistEpisodeBuilderDraft(`Plantilla P${state.episodeBuilder.templates[category].length} agregada en ${labelFromKey(category)}.`);
    refreshWindow("episode-constructor");
  });
  win.querySelectorAll("[data-eb-delete-template]").forEach((button) => {
    button.addEventListener("click", () => {
      updateEpisodeBuilderFromWindow(win);
      const category = button.dataset.ebDeleteTemplate;
      const index = Number(button.dataset.ebDeleteTemplateIndex);
      const templates = state.episodeBuilder.templates[category] || [];
      if (!templates[index]) return;
      if (!confirm(`Borrar plantilla P${index + 1} de ${labelFromKey(category)}?`)) return;
      templates.splice(index, 1);
      if (!templates.length) templates.push(...EPISODE_TEMPLATE_LIBRARY[category]);
      state.episodeBuilder.templates[category] = templates;
      state.episodeBuilder.days.forEach((day) => {
        day.blocks.forEach((block) => {
          if (block.categoria !== category) return;
          const max = state.episodeBuilder.templates[category].length;
          block.plantilla_numero = String(Math.min(Number(block.plantilla_numero || 1), max));
          syncEpisodeBlockTemplateText(block);
        });
      });
      persistEpisodeBuilderDraft(`Plantilla borrada en ${labelFromKey(category)}.`);
      refreshWindow("episode-constructor");
    });
  });
  win.querySelectorAll("input, textarea, select").forEach((field) => {
    field.addEventListener("input", () => {
      updateEpisodeBuilderFromWindow(win);
      persistEpisodeBuilderDraft();
      const status = win.querySelector("#episode-builder-status");
      if (status) status.textContent = state.episodeBuilder.status;
    });
    field.addEventListener("change", () => {
      updateEpisodeBuilderFromWindow(win);
      if (field.dataset.ebTemplateSelect !== undefined) state.episodeBuilder.activeTemplateCategory = field.value;
      persistEpisodeBuilderDraft();
      refreshWindow("episode-constructor");
    });
  });
  win.querySelectorAll("[data-eb-day-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      updateEpisodeBuilderFromWindow(win);
      state.episodeBuilder.activeDay = Number(button.dataset.ebDayTab) || 1;
      state.episodeBuilder.activeBlockId = getEpisodeBuilderDay().blocks[0]?.id || "";
      persistEpisodeBuilderDraft(`Dia ${state.episodeBuilder.activeDay} activo.`);
      refreshWindow("episode-constructor");
    });
  });
  win.querySelectorAll("[data-eb-open-block]").forEach((button) => {
    button.addEventListener("click", () => {
      updateEpisodeBuilderFromWindow(win);
      state.episodeBuilder.activeBlockId = button.dataset.ebOpenBlock || "";
      const ownerDay = state.episodeBuilder.days.find((day) => day.blocks.some((block) => block.id === state.episodeBuilder.activeBlockId));
      if (ownerDay) state.episodeBuilder.activeDay = Number(ownerDay.dia) || state.episodeBuilder.activeDay;
      persistEpisodeBuilderDraft("Bloque activo actualizado.");
      refreshWindow("episode-constructor");
    });
  });
  win.querySelectorAll("[data-eb-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      updateEpisodeBuilderFromWindow(win);
      state.episodeBuilder.mode = button.dataset.ebMode || "edicion";
      if (isEpisodeTemplateAdmin() && state.episodeBuilder.mode === "publico") state.episodeBuilder.mode = "admin";
      persistEpisodeBuilderDraft(`Modo ${state.episodeBuilder.mode} activo.`);
      refreshWindow("episode-constructor");
    });
  });
  win.querySelector("[data-eb-generate-block]")?.addEventListener("click", () => {
    updateEpisodeBuilderFromWindow(win);
    const block = getEpisodeBuilderBlock();
    applyTemplateToEpisodeBlock(block, getNextEpisodeTemplate(block.categoria));
    persistEpisodeBuilderDraft("Plantilla aplicada al bloque activo.");
    refreshWindow("episode-constructor");
  });
  win.querySelector("[data-eb-generate-all]")?.addEventListener("click", () => {
    updateEpisodeBuilderFromWindow(win);
    state.episodeBuilder.usedTemplates = {};
    state.episodeBuilder.days.forEach((day) => {
      day.blocks.forEach((block) => applyTemplateToEpisodeBlock(block, getNextEpisodeTemplate(block.categoria)));
    });
    persistEpisodeBuilderDraft("Combinacion generada sin repetir plantillas hasta agotar cada categoria.");
    refreshWindow("episode-constructor");
  });
  win.querySelector("[data-eb-reset-used]")?.addEventListener("click", () => {
    state.episodeBuilder.usedTemplates = {};
    persistEpisodeBuilderDraft("Historial de plantillas usadas liberado.");
    refreshWindow("episode-constructor");
  });
  win.querySelector("[data-eb-reset-draft]")?.addEventListener("click", () => {
    if (!confirm("Reiniciar el combinador a 21 bloques y borrar este borrador local?")) return;
    localStorage.removeItem(getEpisodeBuilderStorageKey());
    state.episodeBuilder = createEpisodeBuilderDraft(getSelectedEpisodeNumber());
    persistEpisodeBuilderDraft("Plantilla reiniciada a 21 bloques.");
    refreshWindow("episode-constructor");
  });
  win.querySelectorAll("[data-eb-move]").forEach((button) => {
    button.addEventListener("click", () => {
      updateEpisodeBuilderFromWindow(win);
      moveEpisodeBuilderBlock(state.episodeBuilder.activeBlockId, Number(button.dataset.ebMove));
    });
  });
}

const desktopApps = {
  users: {
    title: "C:\\Users\\User",
    width: 640,
    height: 520,
    x: 110,
    y: 35,
    render() {
      if (!hasSupabaseConfig) {
        return `<div class="window-content"><div class="app-section-title">User Panel</div><div class="note-box">ConfigurÃ¡ SUPABASE_URL y SUPABASE_ANON_KEY para activar perfil, rankings y economia real.</div></div><div class="window-statusbar"><div class="status-panel">Sin Supabase</div></div>`;
      }

      if (window.location.protocol === "file:") {
        return `
          <div class="window-content">
            <div class="app-section-title">User Panel</div>
            <div class="note-box">Abriste Archivo98 como archivo local. Para crear cuenta o ingresar, usalo desde http://localhost:8000/ con el servidor local prendido.</div>
            <br>
            <button class="action-btn" data-open-localhost="1">Abrir localhost</button>
          </div>
          <div class="window-statusbar"><div class="status-panel">Auth</div><div class="status-panel">Modo archivo</div></div>
        `;
      }

      if (state.supabaseLoadError) {
        return `
          <div class="window-content">
            <div class="app-section-title">User Panel</div>
            <div class="note-box">${escapeHtml(state.supabaseLoadError)}</div>
            <br>
            <div class="note-box">La app cargo desde localhost, pero el login necesita que el script de Supabase este disponible antes de ingresar o crear cuenta.</div>
          </div>
          <div class="window-statusbar"><div class="status-panel">Auth</div><div class="status-panel">Supabase no cargo</div></div>
        `;
      }

      if (!state.user.loggedIn) {
        return `
          <div class="window-content">
            <div class="app-section-title">User Panel</div>
            <div class="note-box">
              LeCoins = saldo de giftcard/donador reflejado desde tu sistema seguro.<br>
              Credits = moneda que se gana jugando y se usa para skins y texturas.
            </div>
            <br>
            <div class="chat-form">
              <input id="auth-email" class="win-input" type="email" placeholder="Email" />
              <input id="auth-password" class="win-input" type="password" placeholder="Contrasena" />
            </div>
            <br>
            <div class="session-row">
              <button class="action-btn" data-action="sign-in">Ingresar</button>
              <button class="action-btn" data-action="sign-up">Crear cuenta</button>
            </div>
            <div id="user-action-status" class="shop-copy"></div>
          </div>
          <div class="window-statusbar"><div class="status-panel">Auth</div><div class="status-panel">Esperando login</div></div>
        `;
      }

      return `
        <div class="window-content user-panel">
          <div class="user-hero">
            <div class="user-hero-left">
              ${getAvatarMarkup("large")}
              <div>
                <div class="user-hero-name">${escapeHtml(getUsername())}</div>
                <div class="user-hero-mail">${escapeHtml(getPublicEmail(state.user.email) || "Cuenta oficial")}</div>
                <div class="user-hero-copy">Panel central de perfil, skins, donor balance y rankings.</div>
              </div>
            </div>
            <div class="economy-grid">
              <div class="economy-card">
                <span>LeCoins</span>
                <strong>${escapeHtml(String(state.user.lecoins))}</strong>
                <small>Giftcard / donadores</small>
              </div>
              <div class="economy-card">
                <span>Credits</span>
                <strong>${escapeHtml(String(state.user.credits))}</strong>
                <small>Moneda del juego</small>
              </div>
            </div>
          </div>

          <div class="user-columns">
            <section class="user-card">
              <h3>Perfil</h3>
              <div class="form-stack">
                <input id="username-input" class="win-input" type="text" maxlength="24" value="${escapeHtml(getUsername())}" placeholder="Nombre visible" />
                <input id="avatar-input" class="win-input" type="text" value="${escapeHtml(state.user.avatar_url)}" placeholder="URL de tu foto/avatar" />
                <input id="redeem-code-input" class="win-input" type="text" placeholder="Canjear codigo RX-XXXX..." />
                <input id="new-password-input" class="win-input" type="password" minlength="6" placeholder="Nueva contraseÃ±a" />
                <input id="confirm-password-input" class="win-input" type="password" minlength="6" placeholder="Confirmar nueva contraseÃ±a" />
              </div>
              <div class="session-row">
                <button class="action-btn" data-action="save-profile">Guardar perfil</button>
                <button class="action-btn" data-action="redeem-code">Canjear 10 credits</button>
                <button class="action-btn" data-action="change-password">Cambiar contraseÃ±a</button>
                <button class="action-btn" data-action="sign-out">Salir</button>
              </div>
              <div id="user-action-status" class="shop-copy"></div>
            </section>

            <section class="user-card">
              <h3>Skins de chat</h3>
              <div class="shop-copy">Las skins se compran con credits. LeCoins queda reservado para productos exclusivos/donadores.</div>
              <div class="skin-grid">${renderSkinCards()}</div>
            </section>
          </div>

          <div class="user-columns bottom">
            <section class="user-card">
              <h3>Ranking LeCoins</h3>
              <div class="shop-copy">Top donadores reflejados en la app.</div>
              <div class="rank-list">${renderRankingRows(state.rankings.lecoins, "lecoins")}</div>
            </section>
            <section class="user-card">
              <h3>Ranking Credits</h3>
              <div class="shop-copy">Top jugadores con mas credits.</div>
              <div class="rank-list">${renderRankingRows(state.rankings.credits, "credits")}</div>
            </section>
          </div>
          <div class="user-columns bottom">
            <section class="user-card">
              <h3>Under Music Community</h3>
              <div class="shop-copy">Modo privado: podes guardar una URL externa o subir tu MP3 para escucharlo vos en cualquier dispositivo. Modo comunidad: solo musica original o con permiso.</div>
              <div class="form-stack">
                <input id="music-submit-title" class="win-input" type="text" placeholder="Titulo del track" />
                <input id="music-submit-artist" class="win-input" type="text" placeholder="Artista / alias" />
                <input id="music-submit-url" class="win-input" type="text" placeholder="URL externa directa a MP3 (solo para biblioteca privada o links autorizados)" />
                <input id="music-submit-cover" class="win-input" type="text" placeholder="URL de cover (opcional)" />
                <select id="music-submit-visibility" class="win-input">
                  <option value="private">Privado para mi</option>
                  <option value="public">Publico con revision</option>
                </select>
                <input id="music-submit-file" class="win-input" type="file" accept=".mp3,audio/mpeg" />
              </div>
              <div class="shop-copy">No subas ni enlaces audio sin derechos o permiso. Las canciones publicas pasan por revision.</div>
              <div class="shop-copy" id="music-upload-file">${escapeHtml(state.musicUpload.fileName ? `Archivo listo para tu biblioteca o revision: ${state.musicUpload.fileName}` : "Sin archivo seleccionado. Podes pegar una URL externa o subir un MP3 propio.")}</div>
              <div class="shop-copy" id="music-upload-status">${escapeHtml(state.musicUpload.status)}</div>
              <div class="session-row">
                <button class="action-btn" data-action="submit-community-track">${isEffectiveAdmin() ? "Guardar / publicar track" : "Guardar track"}</button>
              </div>
            </section>
          </div>
          ${isEffectiveAdmin() ? `
            <div class="user-columns bottom">
              <section class="user-card">
                <h3>Admin Codes</h3>
                <div class="shop-copy">Genera codigos RX para ManyChat. Cada uno suma 10 credits.</div>
                <div class="session-row">
                  <button class="action-btn" data-action="generate-codes">Generar 5 codigos</button>
                  <button class="action-btn" data-action="copy-generated-codes">Copiar siguiente RX</button>
                  <button class="action-btn" data-action="reset-credits-ranking">Reset credits/ranking</button>
                </div>
                <textarea id="generated-codes-output" class="win-input generated-codes-output" rows="7" readonly placeholder="Los codigos pendientes van a aparecer aca para copiar.">${escapeHtml(renderGeneratedCodesText())}</textarea>
                <div class="shop-copy">Cuando un codigo se usa, desaparece de esta lista.</div>
              </section>
              <section class="user-card">
                <h3>Admin Control</h3>
                <div class="form-stack">
                  <input id="admin-winrate-input" class="win-input" type="number" min="1" max="100" value="${escapeHtml(String(state.gameConfig.slot_win_rate || 10))}" placeholder="Win rate slot98" />
                </div>
                <div class="session-row">
                  <button class="action-btn" data-action="save-game-config">Guardar slot98</button>
                </div>
              </section>
            </div>` : ""}
          ${isEffectiveAdmin() ? `
            <div class="user-columns bottom">
              <section class="user-card">
                <h3>Progreso Album</h3>
                <div class="shop-copy">Usuarios mas cerca de completar ${SLOT_ALBUM_TARGET}/${SLOT_ALBUM_TARGET} stickers del album.</div>
                <div class="rank-list">${renderAdminAlbumProgress()}</div>
              </section>
              <section class="user-card">
                <h3>Music Queue</h3>
                <div class="shop-copy">Tracks de la comunidad esperando aprobacion.</div>
                <div class="rank-list">${renderPendingMusicRows()}</div>
              </section>
            </div>` : ""}
        </div>
        <div class="window-statusbar"><div class="status-panel">User Panel</div><div class="status-panel">${escapeHtml(state.user.chat_skin)}</div></div>
      `;
    },
    bind(win) {
      win.querySelector('[data-open-localhost]')?.addEventListener("click", () => {
        window.location.href = "http://localhost:8000/";
      });
      win.querySelector('[data-action="sign-in"]')?.addEventListener("click", () => submitAuth("sign-in", win));
      win.querySelector('[data-action="sign-up"]')?.addEventListener("click", () => submitAuth("sign-up", win));
      win.querySelector('[data-action="save-profile"]')?.addEventListener("click", saveProfileData);
      win.querySelector('[data-action="redeem-code"]')?.addEventListener("click", () => redeemPromoCode(win.querySelector("#redeem-code-input")?.value || ""));
      win.querySelector('[data-action="change-password"]')?.addEventListener("click", () => updateUserPassword(win));
      win.querySelector('[data-action="sign-out"]')?.addEventListener("click", signOutUser);
      win.querySelector('[data-action="generate-codes"]')?.addEventListener("click", () => generatePromoCodes(5));
      win.querySelector('[data-action="copy-generated-codes"]')?.addEventListener("click", async () => {
        const output = win.querySelector("#generated-codes-output");
        const nextCode = state.generatedCodes[state.generatedCodeCursor]?.code || "";
        if (!nextCode) {
          alert("No hay codigos pendientes para copiar.");
          return;
        }
        output.focus();
        try {
          await navigator.clipboard.writeText(nextCode);
          alert(`RX copiado: ${nextCode}`);
        } catch (_error) {
          output.select();
          document.execCommand("copy");
          alert(`RX listo para copiar: ${nextCode}`);
        }
        state.generatedCodeCursor = (state.generatedCodeCursor + 1) % state.generatedCodes.length;
        refreshWindow("users");
      });
      win.querySelector('[data-action="reset-credits-ranking"]')?.addEventListener("click", resetCreditsRanking);
      win.querySelector('[data-action="save-game-config"]')?.addEventListener("click", saveGameConfig);
      win.querySelector('[data-action="submit-community-track"]')?.addEventListener("click", () => submitCommunityTrack(win));
      win.querySelector("#music-submit-file")?.addEventListener("click", () => rememberUserPanelScroll(win));
      win.querySelector("#music-submit-file")?.addEventListener("change", (event) => {
        const nextFile = event.target.files?.[0] || null;
        state.musicUpload.file = nextFile;
        state.musicUpload.fileName = nextFile?.name || "";
        const fileLabel = win.querySelector("#music-upload-file");
        if (fileLabel) {
          fileLabel.textContent = state.musicUpload.fileName
            ? `Archivo listo para subir a tu biblioteca: ${state.musicUpload.fileName}`
            : "Sin archivo seleccionado. Subi un MP3 para guardarlo en tu biblioteca personal.";
        }
        restoreUserPanelScroll(win);
      });
      win.querySelectorAll("[data-approve-track]").forEach((button) => {
        button.addEventListener("click", () => moderateMusicTrack(button.dataset.approveTrack, "approved"));
      });
      win.querySelectorAll("[data-reject-track]").forEach((button) => {
        button.addEventListener("click", () => moderateMusicTrack(button.dataset.rejectTrack, "rejected"));
      });
      win.querySelectorAll("[data-buy-skin]").forEach((button) => {
        button.addEventListener("click", () => buySkin(button.dataset.buySkin));
      });
    },
  },
  configuracion: {
    title: "Configuracion",
    width: 520,
    height: 420,
    x: 160,
    y: 70,
    render() {
      return `
        <div class="window-content config-shell">
          <div class="app-section-title">Configuracion</div>
          <div class="config-grid">
            <section class="config-card">
              <h3>Chat global</h3>
              <div class="form-stack">
                <label class="config-field">
                  <span>Color del nombre</span>
                  <input id="config-nick-color" class="discord-color-input" type="color" value="${escapeHtml(state.user.nick_color || "#7dd3fc")}">
                </label>
                <label class="config-field">
                  <span>Color del texto</span>
                  <input id="config-text-color" class="discord-color-input" type="color" value="${escapeHtml(state.user.text_color || "#f3f4f6")}">
                </label>
              </div>
              <div class="shop-copy">El chat global en celular queda mas limpio y estos ajustes viven aca.</div>
            </section>
            <section class="config-card">
              <h3>Skin de chat</h3>
              <div class="skin-grid">${renderSkinCards()}</div>
            </section>
          </div>
        </div>
        <div class="window-statusbar"><div class="status-panel">Config</div><div class="status-panel">${escapeHtml(getSkinName())}</div></div>
      `;
    },
    bind(win) {
      win.querySelector("#config-nick-color")?.addEventListener("input", (event) => {
        state.user.nick_color = event.target.value;
        localStorage.setItem("win98_nick_color", state.user.nick_color);
        if (state.windows.has("chat-global")) refreshWindow("chat-global");
      });
      win.querySelector("#config-text-color")?.addEventListener("input", (event) => {
        state.user.text_color = event.target.value;
        localStorage.setItem("win98_text_color", state.user.text_color);
        if (state.windows.has("chat-global")) refreshWindow("chat-global");
      });
      win.querySelectorAll("[data-buy-skin]").forEach((button) => {
        button.addEventListener("click", () => buySkin(button.dataset.buySkin));
      });
    },
  },
  "chat-global": {
    title: "Global Chat",
    width: 700,
    height: 480,
    x: 180,
    y: 60,
    render() {
      const isMobile = isMobileViewport();
      const readOnlyChatAttrs = "";
      const chatPlaceholder = "Mandar mensaje a #general-under";
      const channelCount = [...state.globalMessages, ...state.underBotMessages].filter((message) => !isHiddenGlobalChatMessage(message)).length || 1;
      const incomingRequestsMarkup = state.incomingContactRequests.length
        ? state.incomingContactRequests.map((contact) => `
            <div class="discord-member-card">
              ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "mini", "member-avatar-button")}
              <div>
                <strong>${escapeHtml(contact.username)}</strong>
                <span>${escapeHtml(getPublicEmail(contact.email) || "Cuenta oficial")}</span>
              </div>
              <div class="discord-request-actions">
                <button class="action-btn discord-send" data-accept-request="${escapeHtml(contact.requestId)}">Aceptar</button>
                <button class="action-btn" data-deny-request="${escapeHtml(contact.requestId)}">Negar</button>
              </div>
            </div>
          `).join("")
        : '<div class="discord-side-note">No tenes solicitudes pendientes.</div>';
      const outgoingRequestsMarkup = state.outgoingContactRequests.length
        ? state.outgoingContactRequests.map((contact) => `
            <div class="discord-member-card">
              ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "mini", "member-avatar-button")}
              <div>
                <strong>${escapeHtml(contact.username)}</strong>
                <span>${escapeHtml(getPublicEmail(contact.email) || "Cuenta oficial")} Â· pendiente</span>
              </div>
            </div>
          `).join("")
        : '<div class="discord-side-note">No hay envios pendientes.</div>';
      const contactPreview = state.privateContacts.slice(0, 6).map((contact) => `
        <div class="discord-member-card">
          ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "mini", "member-avatar-button")}
          <div>
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${contact.online ? "Disponible" : "Ausente"}${getUserStrikeCount(contact.username) ? ` Â· strike ${escapeHtml(String(getUserStrikeCount(contact.username)))}` : ""}</span>
          </div>
          <button class="action-btn discord-send" data-open-contact="${escapeHtml(contact.id)}">Abrir</button>
        </div>
      `).join("");
      if (isMobile) {
        return `
          <div class="window-content discord-shell mobile-global-chat">
            <section class="discord-main">
              <div class="discord-topbar compact">
                <div>
                  <div class="discord-title"># general-under</div>
                  <div class="discord-subtitle">Global simplificado para celular.</div>
                </div>
                <div class="discord-topbar-actions">
                  <button class="action-btn" data-open-private="1">MSN</button>
                  <button class="action-btn" data-open-config="1">Config</button>
                  <button class="action-btn" data-open-music="1">Music</button>
                </div>
              </div>
              <div id="chat-messages" class="discord-messages ${escapeHtml(getSkinClass())}"></div>
              <div class="discord-compose mobile">
                <div class="discord-compose-tools mobile">
                  <label class="discord-upload-label" for="global-image-input">Foto</label>
                  <input id="global-image-input" class="hidden" type="file" accept="image/*"${readOnlyChatAttrs}>
                  <div class="discord-side-note">${channelCount} mensajes Â· toca la foto de alguien para abrir su perfil.</div>
                </div>
                <div class="discord-message-row">
                  <input id="chat-input" class="win-input discord-message-input" type="text" maxlength="280" placeholder="${escapeHtml(chatPlaceholder)}"${readOnlyChatAttrs} />
                  <button class="message-send discord-send" data-action="send-chat-message"${readOnlyChatAttrs}>Enviar</button>
                </div>
              </div>
            </section>
          </div>
          <div class="window-statusbar"><div class="status-panel">Global Chat</div><div class="status-panel">${state.user.loggedIn ? "Realtime" : "Invitado"}</div></div>
        `;
      }
      return `
        <div class="window-content discord-shell">
          <aside class="discord-servers">
            <button class="global-badge active">#</button>
            <button class="global-badge" data-open-private="1">
              <img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/msn_367e7189-7738-45ba-baac-fe60233a0a09.png?v=1775529015" alt="MSN" />
            </button>
          </aside>
          <aside class="discord-channels">
            <div class="discord-side-title">GLOBAL</div>
            <button class="discord-channel active"># general-under</button>
            <button class="discord-channel"># memes</button>
            <button class="discord-channel"># clips</button>
            <button class="discord-channel"># ranked-night</button>
            <div class="discord-side-note">${channelCount} mensajes cargados</div>
          </aside>
          <section class="discord-main">
            <div class="discord-topbar">
              <div>
                <div class="discord-title"># general-under</div>
                <div class="discord-subtitle">Chat global oscuro, estilo stream, con moderacion activa.</div>
              </div>
              <div class="discord-topbar-actions">
                <button class="action-btn" data-open-config="1">Configuracion</button>
                <button class="action-btn" data-open-music="1">Under Music</button>
              </div>
            </div>
            <div id="chat-messages" class="discord-messages ${escapeHtml(getSkinClass())}"></div>
            <div class="discord-compose">
              <div class="discord-compose-tools">
                <button id="chat-image-trigger" class="discord-upload-label" type="button" data-action="pick-chat-image"${readOnlyChatAttrs}>${escapeHtml(getSelectedChatImageName() || "Foto")}</button>
                <input id="global-image-input" class="hidden" type="file" accept="image/*"${readOnlyChatAttrs}>
                <div id="chat-image-status" class="discord-upload-status">${escapeHtml(getSelectedChatImageName() || "")}</div>
              </div>
              <div class="discord-message-row">
                <input id="chat-input" class="win-input discord-message-input" type="text" maxlength="280" placeholder="${escapeHtml(chatPlaceholder)}"${readOnlyChatAttrs} />
                <button class="message-send discord-send" data-action="send-chat-message"${readOnlyChatAttrs}>Enviar</button>
              </div>
            </div>
          </section>
          <aside class="discord-members">
            <div class="discord-side-title">USER PANEL</div>
            <div class="discord-member-card">
              ${renderProfileTrigger(state.user.id, getUsername(), state.user.avatar_url || "", "small", "member-avatar-button")}
              <div>
                <strong>${escapeHtml(getUsername())}</strong>
                <span>${state.user.loggedIn ? "Online" : "Guest"} Â· strikes ${escapeHtml(String(getUserStrikeCount(getUsername())))}</span>
              </div>
            </div>
            <div class="discord-side-note">Skin actual: ${escapeHtml(getSkinName())}</div>
            <div class="discord-side-note">LeCoins: ${escapeHtml(String(state.user.lecoins))}</div>
            <div class="discord-side-note">Credits: ${escapeHtml(String(state.user.credits))}</div>
            <div class="discord-contact-tools">
              <input id="global-contact-input" class="win-input discord-contact-input" type="email" maxlength="120" placeholder="Mail real del contacto">
              <button class="action-btn discord-send" data-action="add-global-contact">Solicitar</button>
            </div>
            <div class="discord-side-note">Las amistades se validan por mail en Supabase.</div>
            <div class="discord-side-title">SOLICITUDES</div>
            <div class="discord-contact-list">${incomingRequestsMarkup}</div>
            <div class="discord-side-title">ENVIADAS</div>
            <div class="discord-contact-list">${outgoingRequestsMarkup}</div>
            <div class="discord-side-title">CONTACTOS</div>
            <div class="discord-contact-list">${contactPreview || '<div class="discord-side-note">Todavia no hay contactos.</div>'}</div>
            ${state.socialFeatureError ? `<div class="discord-side-note">${escapeHtml(state.socialFeatureError)}</div>` : ""}
          </aside>
        </div>
        <div class="window-statusbar"><div class="status-panel">Global Chat</div><div class="status-panel">${state.user.loggedIn ? "Realtime" : "Invitado"}</div></div>
      `;
    },
    bind(win) {
      const imageInput = win.querySelector("#global-image-input");
      const imageTrigger = win.querySelector("#chat-image-trigger");
      const imageStatus = win.querySelector("#chat-image-status");
      win.querySelector('[data-action="send-chat-message"]').addEventListener("click", sendGlobalMessage);
      win.querySelector("#chat-input").addEventListener("keydown", (event) => {
        if (event.key === "Enter") sendGlobalMessage();
      });
      win.querySelector('[data-action="pick-chat-image"]')?.addEventListener("click", () => imageInput?.click());
      imageInput?.addEventListener("change", () => {
        state.chatSelectedImageName = imageInput.files?.[0]?.name || "";
        if (imageTrigger) imageTrigger.textContent = state.chatSelectedImageName || "Foto";
        if (imageStatus) imageStatus.textContent = state.chatSelectedImageName || "";
      });
      win.querySelector("[data-open-private]")?.addEventListener("click", () => openWindow("private-chat"));
      win.querySelector("[data-open-config]")?.addEventListener("click", () => openWindow("configuracion"));
      win.querySelector("[data-open-music]")?.addEventListener("click", () => openWindow("winamp"));
      win.querySelector('[data-action="add-global-contact"]')?.addEventListener("click", async () => {
        const input = win.querySelector("#global-contact-input");
        if (await addPrivateContact(input?.value || "")) {
          input.value = "";
        }
      });
      win.querySelectorAll("[data-open-contact]").forEach((button) => {
        button.addEventListener("click", () => openPrivateConversation(button.dataset.openContact));
      });
      win.querySelectorAll("[data-accept-request]").forEach((button) => {
        button.addEventListener("click", () => respondToContactRequest(button.dataset.acceptRequest, "accepted"));
      });
      win.querySelectorAll("[data-deny-request]").forEach((button) => {
        button.addEventListener("click", () => respondToContactRequest(button.dataset.denyRequest, "denied"));
      });
      startUnderBotChat();
      renderGlobalMessages();
      bindProfileTriggers(win);
      initSupabase();
    },
  },
  "private-chat": {
    title: "MSN Under",
    width: 580,
    height: 440,
    x: 140,
    y: 70,
    render() {
      const incomingRequests = state.incomingContactRequests.map((contact) => `
        <div class="msn-contact">
          ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "small", "member-avatar-button")}
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${escapeHtml(getPublicEmail(contact.email) || "Cuenta oficial")} Â· solicitud</span>
          </div>
          <div class="msn-request-actions">
            <button class="action-btn msn-action msn-contact-action" data-accept-request="${escapeHtml(contact.requestId)}">Aceptar</button>
            <button class="action-btn msn-contact-action" data-deny-request="${escapeHtml(contact.requestId)}">Negar</button>
          </div>
        </div>
      `).join("");
      const outgoingRequests = state.outgoingContactRequests.map((contact) => `
        <div class="msn-contact">
          ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "small", "member-avatar-button")}
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${escapeHtml(getPublicEmail(contact.email) || "Cuenta oficial")} Â· esperando respuesta</span>
          </div>
          <div class="msn-contact-meta">Pendiente</div>
        </div>
      `).join("");
      const contacts = state.privateContacts.map((contact) => `
        <div class="msn-contact">
          ${renderProfileTrigger(contact.id, contact.username, contact.avatar_url || "", "small", "member-avatar-button")}
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span class="contact-status ${contact.online ? "online" : "offline"}">${contact.online ? "Disponible" : "Ausente"} Â· sin visto</span>
          </div>
          <button class="action-btn msn-action msn-contact-action" data-contact="${escapeHtml(contact.id)}">Abrir</button>
        </div>
      `).join("");

      return `
        <div class="window-content msn-window">
          <div class="msn-layout">
            <aside class="msn-sidebar">
              <div>
                <div class="msn-brand">MSN Under</div>
                <div class="msn-subbrand">Privado y clandestino</div>
              </div>
              <div class="msn-userpill">
                <div><span class="msn-status-dot"></span>${escapeHtml(getUsername())}</div>
                <div class="msn-sidebar-copy">Mensajes directos y acceso al global desde el mismo mundo MSN.</div>
              </div>
              <button class="action-btn msn-action" data-open-global="1">
                <img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/global_1.png?v=1775528275" class="inline-global-icon" alt="Global" />
                Global Chat
              </button>
              <button class="action-btn msn-action" data-open-music="1">Under Music</button>
            </aside>
            <section class="msn-main">
              <div class="msn-topbar">
                <div>
                  <div class="msn-title">Contactos</div>
                  <div class="msn-caption">Solicitudes estilo Instagram, sin visto.</div>
                </div>
                <div class="msn-add-contact">
                  <input id="msn-contact-input" class="win-input" type="email" maxlength="120" placeholder="Mail real del contacto">
                  <button class="action-btn msn-action" data-action="add-msn-contact">Solicitar</button>
                </div>
              </div>
              <div class="msn-chatlog">
                <div class="msn-contact-list">
                  <div class="discord-side-title">Solicitudes</div>
                  ${incomingRequests || '<div class="note-box">No tenes solicitudes nuevas.</div>'}
                  <div class="discord-side-title">Enviadas</div>
                  ${outgoingRequests || '<div class="note-box">No hay solicitudes enviadas.</div>'}
                  <div class="discord-side-title">Contactos aceptados</div>
                  ${contacts || '<div class="note-box">Todavia no tenes contactos aceptados.</div>'}
                  ${state.socialFeatureError ? `<div class="note-box">${escapeHtml(state.socialFeatureError)}</div>` : ""}
                </div>
              </div>
              <div class="msn-compose"></div>
            </section>
          </div>
        </div>
        <div class="window-statusbar"><div class="status-panel">MSN Under</div><div class="status-panel">${state.privateContacts.length} contactos</div></div>
      `;
    },
    bind(win) {
      win.querySelectorAll("[data-contact]").forEach((button) => {
        button.addEventListener("click", () => openPrivateConversation(button.dataset.contact));
      });
      win.querySelector("[data-open-global]")?.addEventListener("click", () => openWindow("chat-global"));
      win.querySelector("[data-open-music]")?.addEventListener("click", () => openWindow("winamp"));
      win.querySelector('[data-action="add-msn-contact"]')?.addEventListener("click", async () => {
        const input = win.querySelector("#msn-contact-input");
        if (await addPrivateContact(input?.value || "")) {
          input.value = "";
        }
      });
      win.querySelectorAll("[data-accept-request]").forEach((button) => {
        button.addEventListener("click", () => respondToContactRequest(button.dataset.acceptRequest, "accepted"));
      });
      win.querySelectorAll("[data-deny-request]").forEach((button) => {
        button.addEventListener("click", () => respondToContactRequest(button.dataset.denyRequest, "denied"));
      });
      bindProfileTriggers(win);
    },
  },
  "global-under": {
    title: "C:\\Global_Under",
    width: 360,
    height: 250,
    x: 310,
    y: 130,
    render() {
      return `<div class="window-content"><div class="app-section-title">Global Under</div><div class="note-box">Este acceso ahora vive como Global Chat y tambien aparece dentro de MSN Under.</div></div><div class="window-statusbar"><div class="status-panel">Info</div></div>`;
    },
  },
  proyectos: {
    title: "C:\\Creative_Studio",
    width: 760,
    height: 620,
    x: 240,
    y: 90,
    render() {
      const modeOptions = getCreativeModeOptions();
      const labels = getCreativeQuestionLabels();
      const projectLabels = getCreativeProjectLabels();
      return `
        <div class="window-content creative-studio">
          <div class="creative-hero">
            <div>
              <div class="app-section-title">Creative Studio</div>
              <div class="creative-subtitle">Un espacio para bajarle forma a tu universo visual, musical y de moda dentro de user98.</div>
            </div>
            <button class="action-btn" data-open-music="1">Abrir Under Music</button>
          </div>

          <div class="creative-grid">
            <section class="creative-card">
              <h3>Ruta</h3>
              <div class="creative-pill-row">
                <button class="action-btn creative-pill ${state.creativeStudio.focus === "music" ? "active" : ""}" data-creative-focus="music">Musica</button>
                <button class="action-btn creative-pill ${state.creativeStudio.focus === "fashion" ? "active" : ""}" data-creative-focus="fashion">Moda</button>
                <button class="action-btn creative-pill ${state.creativeStudio.focus === "startup" ? "active" : ""}" data-creative-focus="startup">Startup</button>
              </div>
              <div class="creative-pill-row">
                ${modeOptions.map((option) => `<button class="action-btn creative-pill ${state.creativeStudio.mode === option.value ? "active" : ""}" data-creative-mode="${escapeHtml(option.value)}">${escapeHtml(option.label)}</button>`).join("")}
              </div>
              <div class="shop-copy">Elegis el camino y el estudio te cambia las preguntas y sugerencias.</div>
            </section>

            <section class="creative-card">
              <h3>Preguntas clave</h3>
              <div class="form-stack">
                <input id="creative-problem" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.problem)}" placeholder="${escapeHtml(labels.problem)}" />
                <input id="creative-impact" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.impact)}" placeholder="${escapeHtml(labels.impact)}" />
              </div>
              <div class="session-row">
                <button class="action-btn" data-creative-action="ai">Preguntarle a la AI</button>
              </div>
            </section>
          </div>

          <div class="creative-grid">
            <section class="creative-card">
              <h3>Perfil publico</h3>
              <div class="form-stack">
                <input id="creative-role-label" class="win-input" type="text" value="${escapeHtml(state.user.role_label)}" placeholder="${escapeHtml(getCreativePublicRoleHint())}" />
                <input id="creative-brand-name" class="win-input" type="text" value="${escapeHtml(state.user.brand_name)}" placeholder="Marca, banda o emprendimiento" />
                <input id="creative-instagram" class="win-input" type="text" value="${escapeHtml(state.user.instagram_handle)}" placeholder="Instagram" />
                <input id="creative-tiktok" class="win-input" type="text" value="${escapeHtml(state.user.tiktok_handle)}" placeholder="TikTok" />
                <input id="creative-website" class="win-input" type="text" value="${escapeHtml(state.user.website_url)}" placeholder="Web o link principal" />
                <textarea id="creative-bio" class="win-input creative-textarea compact" rows="4" placeholder="Quien sos, que haces, que estas construyendo.">${escapeHtml(state.user.bio)}</textarea>
              </div>
              <div class="shop-copy">Esto describe tu perfil publico. No forma parte del proyecto en si.</div>
            </section>

            <section class="creative-card">
              <h3>Proyecto</h3>
              <div class="form-stack">
                <input id="creative-project-title" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.projectTitle)}" placeholder="${escapeHtml(projectLabels.title)}" />
                <input id="creative-project-tagline" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.projectTagline)}" placeholder="${escapeHtml(projectLabels.tagline)}" />
              </div>
              <div class="shop-copy">Aca definis solo el proyecto. Despues lo guardas como borrador, lo publicas o lo archivas.</div>
              <div class="session-row">
                <button class="action-btn" data-creative-action="publish">Crear y publicar proyecto</button>
                <button class="action-btn" data-creative-action="draft">Guardar borrador</button>
              </div>
            </section>
          </div>

          <div class="creative-grid">
            <section class="creative-card">
              <h3>Identidad</h3>
              <div class="form-stack">
                <input id="creative-alter-ego" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.alterEgo)}" placeholder="Alias / alter ego" />
                <input id="creative-moodline" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.moodline)}" placeholder="Moodline estetica" />
                <input id="creative-palette" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.palette)}" placeholder="Paleta / materiales / texturas" />
              </div>
              <div class="session-row">
                <button class="action-btn" data-creative-action="alias">Nuevo alias</button>
                <button class="action-btn" data-creative-action="save">Guardar</button>
              </div>
            </section>

            <section class="creative-card">
              <h3>Manifesto</h3>
              <textarea id="creative-manifesto" class="win-input creative-textarea" rows="7" placeholder="Que energia tiene user98, que provoca, como se viste, como se mueve.">${escapeHtml(state.creativeStudio.manifesto)}</textarea>
              <div class="session-row">
                <button class="action-btn" data-creative-action="manifesto">Generar manifesto</button>
              </div>
            </section>
          </div>

          <div class="creative-grid single">
            ${state.creativeStudio.focus === "music" ? `
              <section class="creative-card">
                <h3>${escapeHtml(projectLabels.notesTitle)}</h3>
                <textarea id="creative-music-notes" class="win-input creative-textarea" rows="8" placeholder="${escapeHtml(projectLabels.notesPlaceholder)}">${escapeHtml(state.creativeStudio.musicNotes)}</textarea>
                <div class="session-row">
                  <button class="action-btn" data-creative-action="music">Bajar idea musical</button>
                </div>
              </section>
            ` : ""}

            ${state.creativeStudio.focus === "fashion" ? `
              <section class="creative-card">
                <h3>${escapeHtml(projectLabels.notesTitle)}</h3>
                <textarea id="creative-look-notes" class="win-input creative-textarea" rows="8" placeholder="${escapeHtml(projectLabels.notesPlaceholder)}">${escapeHtml(state.creativeStudio.lookNotes)}</textarea>
                <div class="session-row">
                  <button class="action-btn" data-creative-action="look">Generar look</button>
                </div>
              </section>
            ` : ""}

            ${state.creativeStudio.focus === "startup" ? `
              <section class="creative-card">
                <h3>${escapeHtml(projectLabels.notesTitle)}</h3>
                <textarea id="creative-startup-notes" class="win-input creative-textarea" rows="8" placeholder="${escapeHtml(projectLabels.notesPlaceholder)}">${escapeHtml(state.creativeStudio.lookNotes)}</textarea>
                <div class="session-row">
                  <button class="action-btn" data-creative-action="startup">Bajar idea startup</button>
                </div>
              </section>
            ` : ""}
          </div>

          <div class="creative-grid single">
            <section class="creative-card">
              <h3>Plan de salida</h3>
              <textarea id="creative-release-plan" class="win-input creative-textarea" rows="6" placeholder="Como vas a presentar el personaje, el track, el look y el reel.">${escapeHtml(state.creativeStudio.releasePlan)}</textarea>
              <div class="session-row">
                <button class="action-btn" data-creative-action="release">Generar plan</button>
                <button class="action-btn" data-creative-action="clear">Limpiar todo</button>
              </div>
            </section>
          </div>

          <div class="creative-grid single">
            <section class="creative-card">
              <h3>Respuesta AI</h3>
              <textarea id="creative-ai-reply" class="win-input creative-textarea" rows="7" placeholder="Aca aparece una devolucion estilo estratega creativo.">${escapeHtml(state.creativeStudio.aiReply)}</textarea>
            </section>
          </div>

          <div class="creative-grid single">
            <section class="creative-card">
              <h3>Mis proyectos</h3>
              <div class="creative-project-list">${renderManagedProjectCards()}</div>
            </section>
          </div>

          <div class="creative-grid single">
            <section class="creative-card">
              <h3>Proyectos publicados en tu perfil</h3>
              <div class="creative-project-list">${renderPublicOnlyProjectCards()}</div>
            </section>
          </div>

          <div id="creative-studio-status" class="note-box creative-status">Todo lo que escribas aca queda guardado en este navegador para seguir armando tu mundo creativo.</div>
        </div>
        <div class="window-statusbar"><div class="status-panel">Creative Studio</div><div class="status-panel">${escapeHtml(state.creativeStudio.alterEgo || "user98")}</div></div>
      `;
    },
    bind(win) {
      const statusNode = win.querySelector("#creative-studio-status");
      const syncFieldsToState = () => {
        state.creativeStudio.alterEgo = win.querySelector("#creative-alter-ego")?.value.trim() || "user98";
        state.creativeStudio.moodline = win.querySelector("#creative-moodline")?.value.trim() || "";
        state.creativeStudio.palette = win.querySelector("#creative-palette")?.value.trim() || "";
        state.user.role_label = win.querySelector("#creative-role-label")?.value.trim() || "";
        state.user.brand_name = win.querySelector("#creative-brand-name")?.value.trim() || "";
        state.user.instagram_handle = win.querySelector("#creative-instagram")?.value.trim() || "";
        state.user.tiktok_handle = win.querySelector("#creative-tiktok")?.value.trim() || "";
        state.user.website_url = normalizeCreativeWebsite(win.querySelector("#creative-website")?.value.trim() || "");
        state.user.bio = win.querySelector("#creative-bio")?.value.trim() || "";
        state.creativeStudio.projectTitle = win.querySelector("#creative-project-title")?.value.trim() || "";
        state.creativeStudio.projectTagline = win.querySelector("#creative-project-tagline")?.value.trim() || "";
        state.creativeStudio.problem = win.querySelector("#creative-problem")?.value.trim() || "";
        state.creativeStudio.impact = win.querySelector("#creative-impact")?.value.trim() || "";
        state.creativeStudio.manifesto = win.querySelector("#creative-manifesto")?.value || "";
        state.creativeStudio.lookNotes = win.querySelector("#creative-look-notes")?.value || win.querySelector("#creative-startup-notes")?.value || "";
        state.creativeStudio.musicNotes = win.querySelector("#creative-music-notes")?.value || "";
        state.creativeStudio.releasePlan = win.querySelector("#creative-release-plan")?.value || "";
        state.creativeStudio.aiReply = win.querySelector("#creative-ai-reply")?.value || "";
      };
      const saveAndReport = (message) => {
        syncFieldsToState();
        persistCreativeStudio();
        localStorage.setItem("win98_bio", state.user.bio || "");
        localStorage.setItem("win98_instagram_handle", state.user.instagram_handle || "");
        localStorage.setItem("win98_tiktok_handle", state.user.tiktok_handle || "");
        localStorage.setItem("win98_website_url", state.user.website_url || "");
        localStorage.setItem("win98_role_label", state.user.role_label || "");
        localStorage.setItem("win98_brand_name", state.user.brand_name || "");
        if (statusNode) statusNode.textContent = message;
      };

      win.querySelector("[data-open-music]")?.addEventListener("click", () => openWindow("winamp"));
      win.querySelectorAll("[data-creative-focus]").forEach((button) => {
        button.addEventListener("click", () => {
          syncFieldsToState();
          state.creativeStudio.focus = button.dataset.creativeFocus || "music";
          state.creativeStudio.mode = getCreativeModeOptions()[0]?.value || "artist";
          persistCreativeStudio();
          refreshWindow("proyectos");
        });
      });
      win.querySelectorAll("[data-creative-mode]").forEach((button) => {
        button.addEventListener("click", () => {
          syncFieldsToState();
          state.creativeStudio.mode = button.dataset.creativeMode || "artist";
          persistCreativeStudio();
          refreshWindow("proyectos");
        });
      });
      win.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("input", () => saveAndReport("Cambios guardados en tu estudio creativo local."));
      });
      win.querySelectorAll("[data-creative-action]").forEach((button) => {
        button.addEventListener("click", async () => {
          const action = button.dataset.creativeAction;
          if (action === "alias") {
            win.querySelector("#creative-alter-ego").value = buildCreativeAlias();
          }
          if (action === "manifesto") {
            win.querySelector("#creative-manifesto").value = buildCreativeManifesto();
          }
          if (action === "look") {
            win.querySelector("#creative-look-notes").value = buildCreativeLookNotes();
          }
          if (action === "music") {
            win.querySelector("#creative-music-notes").value = `${pickCreativeSeed(CREATIVE_MUSIC_SEEDS)}.\nHook vocal: frase corta, repetible y con identidad.\nClima general: sensual, nocturno y con actitud propia.`;
          }
          if (action === "startup") {
            const startupNode = win.querySelector("#creative-startup-notes");
            if (startupNode) {
              syncFieldsToState();
              startupNode.value = [
                `Problema central: ${state.creativeStudio.problem || "Definir una necesidad urgente y concreta."}`,
                `Promesa: ${state.creativeStudio.impact || "Explicar por que esto mejora la vida de alguien en una frase."}`,
                "MVP: una demo chica, visible y compartible en una landing o reel.",
                "Go to market: elegir un nicho inicial y una prueba social facil de mostrar.",
              ].join("\n");
            }
          }
          if (action === "ai") {
            syncFieldsToState();
            win.querySelector("#creative-ai-reply").value = buildCreativeAiReply();
          }
          if (action === "release") {
            win.querySelector("#creative-release-plan").value = buildCreativeReleasePlan();
          }
          if (action === "publish") {
            await saveCreativeProject(win);
            saveAndReport("Proyecto publicado y guardado en tu perfil.");
            return;
          }
          if (action === "draft") {
            await saveCreativeProject(win, "draft");
            saveAndReport("Proyecto guardado como borrador.");
            return;
          }
          if (action === "clear") {
            win.querySelector("#creative-manifesto").value = "";
            const lookNode = win.querySelector("#creative-look-notes");
            if (lookNode) lookNode.value = "";
            const musicNode = win.querySelector("#creative-music-notes");
            if (musicNode) musicNode.value = "";
            const startupNode = win.querySelector("#creative-startup-notes");
            if (startupNode) startupNode.value = "";
            win.querySelector("#creative-release-plan").value = "";
            win.querySelector("#creative-ai-reply").value = "";
            win.querySelector("#creative-project-title").value = "";
            win.querySelector("#creative-project-tagline").value = "";
          }
          saveAndReport(action === "clear" ? "Studio limpiado. Ahora podes reconstruir una direccion nueva." : "Nueva idea aplicada y guardada.");
        });
      });
      win.querySelectorAll("[data-project-status]").forEach((button) => {
        button.addEventListener("click", async () => {
          const [projectId, nextStatus] = (button.dataset.projectStatus || "").split(":");
          if (!projectId || !nextStatus) return;
          await updateCreativeProjectStatus(projectId, nextStatus);
          if (statusNode) statusNode.textContent = nextStatus === "published" ? "Proyecto publicado." : nextStatus === "archived" ? "Proyecto archivado." : "Proyecto guardado como borrador.";
        });
      });
      win.querySelectorAll("[data-project-delete]").forEach((button) => {
        button.addEventListener("click", async () => {
          const projectId = button.dataset.projectDelete || "";
          if (!projectId) return;
          await deleteCreativeProject(projectId);
          if (statusNode) statusNode.textContent = "Proyecto borrado.";
        });
      });
    },
  },
  "recording-studio": {
    title: "C:\\World_Loop",
    width: 1280,
    height: 860,
    x: 150,
    y: 60,
    render() {
      return `
        <div class="window-content recording-studio-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">World Loop</div>
              <div class="shop-copy">Seguimiento global de la vuelta al mundo: kilometros reales, progreso compartido y una escena viva para la comunidad.</div>
            </div>
            <button class="action-btn" data-open-studio-standalone="1">Abrir aparte</button>
          </div>
          <iframe
            class="recording-studio-frame"
            src="./recording-studio.html?v=world-loop-15"
            title="World Loop"
            loading="eager"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">World Loop</div><div class="status-panel">Synced Progress</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-studio-standalone]")?.addEventListener("click", () => {
        window.open("./recording-studio.html?v=world-loop-15", "_blank", "noopener,noreferrer");
      });
    },
  },
  "under-maps": {
    title: "C:\\Under_Maps",
    width: 1280,
    height: 860,
    x: 185,
    y: 80,
    render() {
      return `
        <div class="window-content recording-studio-shell under-maps-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">Under Maps</div>
              <div class="shop-copy">Mapa creativo para armar rutas, marcar paradas, dejar notas y animar el recorrido sobre el mundo de Archivo98.</div>
            </div>
            <div class="session-row">
              <button class="action-btn" data-open-world-loop="1">World Loop</button>
              <button class="action-btn" data-open-under-maps-chroma="1">Croma</button>
              <button class="action-btn" data-open-under-maps-standalone="1">Abrir aparte</button>
            </div>
          </div>
          <iframe
            class="recording-studio-frame under-maps-frame"
            src="./under-maps.html?v=under-maps-1"
            title="Under Maps"
            loading="lazy"
            allow="geolocation; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">Under Maps</div><div class="status-panel">Routes + Notes</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-under-maps-standalone]")?.addEventListener("click", () => {
        window.open("./under-maps.html?v=under-maps-1", "_blank", "noopener,noreferrer");
      });
      win.querySelector("[data-open-under-maps-chroma]")?.addEventListener("click", () => {
        const frame = win.querySelector(".under-maps-frame");
        if (frame) frame.src = "./under-maps.html?chroma=1&v=under-maps-1";
      });
      win.querySelector("[data-open-world-loop]")?.addEventListener("click", () => openWindow("recording-studio"));
    },
  },
  "sales-goals": {
    title: "C:\\Caja_Reto",
    width: 1020,
    height: 790,
    x: 230,
    y: 98,
    render() {
      return `
        <div class="window-content recording-studio-shell sales-goals-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">Caja del Reto</div>
              <div class="shop-copy">Ticket de supermercado para mostrar recaudado, meta de plata, km y progreso diario que vive en Under Maps.</div>
            </div>
            <div class="session-row">
              <button class="action-btn" data-open-sales-obs="1">OBS transparente</button>
              <button class="action-btn" data-open-sales-obs-chroma="1">OBS croma</button>
              <button class="action-btn" data-open-sales-goals-standalone="1">Abrir aparte</button>
            </div>
          </div>
          <iframe
            class="recording-studio-frame sales-goals-frame"
            src="./ventas-metas.html?v=sales-goals-16"
            title="Caja del Reto"
            loading="lazy"
            allow="clipboard-write; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">Caja del Reto</div><div class="status-panel">Under Maps</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-sales-goals-standalone]")?.addEventListener("click", () => {
        window.open("./ventas-metas.html?v=sales-goals-16", "_blank", "noopener,noreferrer");
      });
      win.querySelector("[data-open-sales-obs]")?.addEventListener("click", () => {
        window.open(`./obs-layout-kick.html?v=obs-kick-22&mode=clip&transparent=1&bg=transparent&guides=0&streamchat=1&chatmax=16&cashsound=1&_=${Date.now()}`, "_blank", "noopener,noreferrer");
      });
      win.querySelector("[data-open-sales-obs-chroma]")?.addEventListener("click", () => {
        window.open(`./obs-layout-kick.html?v=obs-kick-22&mode=clip&chroma=1&bg=chroma&guides=0&streamchat=1&chatmax=16&cashsound=1&_=${Date.now()}`, "_blank", "noopener,noreferrer");
      });
    },
  },
  "sales-registry": {
    title: "C:\\Tickets_Ventas",
    width: 1040,
    height: 820,
    x: 260,
    y: 110,
    render() {
      return `
        <div class="window-content recording-studio-shell sales-goals-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">Tickets Ventas</div>
              <div class="shop-copy">Historial diario con tiras tipo ticket para comparar ventas, kilometros, semana y mes.</div>
            </div>
            <button class="action-btn" data-open-sales-registry-standalone="1">Abrir aparte</button>
          </div>
          <iframe
            class="recording-studio-frame sales-goals-frame"
            src="./ventas-registro.html?v=sales-registry-2"
            title="Tickets Ventas"
            loading="lazy"
            allow="clipboard-write; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">Tickets Ventas</div><div class="status-panel">Semana + Mes</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-sales-registry-standalone]")?.addEventListener("click", () => {
        window.open("./ventas-registro.html?v=sales-registry-2", "_blank", "noopener,noreferrer");
      });
    },
  },
  "episode-constructor": {
    title: "C:\\Constructor_Episodios",
    width: 1160,
    height: 830,
    x: 190,
    y: 72,
    render: renderEpisodeBuilder,
    bind: bindEpisodeBuilder,
  },
  "creator-pro": {
    title: "C:\\Direct_By",
    width: 1380,
    height: 900,
    x: 170,
    y: 70,
    render() {
      return `
        <div class="window-content recording-studio-shell creator-pro-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">Direct By</div>
              <div class="shop-copy">Organizador de episodios: titulo, dias, emociones obligatorias y escenas realizadas guardadas en tu Supabase personal.</div>
            </div>
            <button class="action-btn" data-open-creator-pro-standalone="1">Abrir aparte</button>
          </div>
          <iframe
            class="recording-studio-frame creator-pro-frame"
            src="./creator-pro.html?v=direct-by-ep6-tomas-1"
            title="Direct By"
            loading="lazy"
            allow="clipboard-write; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">Direct By</div><div class="status-panel">Episodios + emociones</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-creator-pro-standalone]")?.addEventListener("click", () => {
        window.open("./creator-pro.html?v=direct-by-ep6-tomas-1", "_blank", "noopener,noreferrer");
      });
    },
  },
  "alaxd-overlay": {
    title: "C:\\Alaxd",
    width: 1180,
    height: 790,
    x: 205,
    y: 82,
    render() {
      return `
        <div class="window-content recording-studio-shell alaxd-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">Alaxd</div>
              <div class="shop-copy">Portfolio visual para Alaciel: video de fondo, trabajos, proceso y contacto.</div>
            </div>
            <div class="session-row">
              <button class="action-btn" data-open-alaxd-editor="1">Editar contenido</button>
              <button class="action-btn" data-open-alaxd-standalone="1">Abrir aparte</button>
            </div>
          </div>
          <iframe
            class="recording-studio-frame alaxd-frame"
            src="./alaxd.html?v=alaxd-5"
            title="Alaxd Overlay"
            loading="lazy"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">Alaxd</div><div class="status-panel">Portfolio privado</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-alaxd-standalone]")?.addEventListener("click", () => {
        window.open("./alaxd.html?v=alaxd-5", "_blank", "noopener,noreferrer");
      });
      win.querySelector("[data-open-alaxd-editor]")?.addEventListener("click", () => {
        window.open("./alaxd.html?v=alaxd-5&edit=1", "_blank", "noopener,noreferrer");
      });
    },
  },
  "explorer-games": {
    title: "Juegos",
    width: 520,
    height: 390,
    x: 180,
    y: 190,
    render() {
      return `<div class="window-content"><div class="game-list"><div class="game-item game-item-rich"><div class="game-item-main"><img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/7f9e196be4af453012f1d7f40892da81.jpg?v=1775590952" class="game-thumb" alt="Age of Empire"><div><strong>Age of Empire II</strong><small>Clasicazo RTS para abrir en web.</small></div></div><button class="action-btn" data-url="https://dos.zone/age-of-empires2/">Abrir</button></div><div class="game-item game-item-rich"><div class="game-item-main"><img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/cas.png?v=1775590771" class="game-thumb" alt="slot98"><div><strong>slot98</strong><small>Slot retro con credits y stickers reales.</small></div></div><button class="action-btn" data-open-slot="1">Abrir</button></div><div class="game-item game-item-rich"><div class="game-item-main"><div class="game-thumb xp-agar-thumb" aria-hidden="true"><span></span></div><div><strong>XP Agar Strike</strong><small>Agar.io + construccion + combate FPS con skins blocky.</small></div></div><button class="action-btn" data-open-xp-agar="1">Abrir</button></div></div><br><div class="note-box">XP Agar Strike es el prototipo nuevo: come masa, construye cobertura, dispara y prueba skins estilo mobile blocky.</div></div><div class="window-statusbar"><div class="status-panel">3 accesos</div></div>`;
    },
    bind(win) {
      win.querySelectorAll("[data-url]").forEach((button) => {
        button.addEventListener("click", () => window.open(button.dataset.url, "_blank", "noopener,noreferrer"));
      });
      win.querySelector("[data-open-slot]")?.addEventListener("click", () => openWindow("slot98-game"));
      win.querySelector("[data-open-xp-agar]")?.addEventListener("click", () => openWindow("xp-agar-strike"));
    },
  },
  "xp-agar-strike": {
    title: "C:\\XP_AGAR_STRIKE",
    width: 1280,
    height: 860,
    x: 150,
    y: 70,
    render() {
      return `
        <div class="window-content recording-studio-shell xp-agar-shell">
          <div class="studio-window-topbar">
            <div>
              <div class="app-section-title">XP Agar Strike</div>
              <div class="shop-copy">Agar.io + bloques + shooter: movimiento con aceleracion, masa para construir, armas, trampas y skins blocky con peinados y payasitos oscuros.</div>
            </div>
            <button class="action-btn" data-open-xp-agar-standalone="1">Abrir aparte</button>
          </div>
          <iframe
            class="recording-studio-frame xp-agar-frame"
            src="./xp-agar-strike.html?v=xp-agar-strike-1"
            title="XP Agar Strike"
            loading="lazy"
            allow="fullscreen; pointer-lock"
          ></iframe>
        </div>
        <div class="window-statusbar"><div class="status-panel">XP Agar Strike</div><div class="status-panel">Build + Strike</div></div>
      `;
    },
    bind(win) {
      win.querySelector("[data-open-xp-agar-standalone]")?.addEventListener("click", () => {
        window.open("./xp-agar-strike.html?v=xp-agar-strike-1", "_blank", "noopener,noreferrer");
      });
    },
  },
  winamp: {
    title: "UNDER MUSIC",
    width: 560,
    height: 820,
    x: 500,
    y: 80,
    render() {
      const currentTrack = getRetroCurrentTrack();
      const clock = new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
      return `
        <div class="window-content retro-mp3-shell" style="--lcd-text:${escapeHtml(state.player.lcdText)}; --app-bg:${escapeHtml(state.player.appBg)};">
          <div class="player live-mode ${state.player.powerOn ? "power-on" : ""}" id="player-container">
            <button type="button" class="retro-player-close" data-close-player="1">X</button>
            <div class="skin" style="background-image:url('${escapeHtml(state.player.skinUrl)}')"></div>

            <div class="lcd-display" id="lcd" data-id="lcd" style="top:${state.player.lcd.top}%; left:${state.player.lcd.left}%; width:${state.player.lcd.width}%; height:${state.player.lcd.height}%;">
              <div class="retro-lcd-top">
                <div id="status">${state.player.isPlaying ? "PLAYING" : "LISTO"}</div>
                <div id="clock">${escapeHtml(clock)}</div>
              </div>
              <div class="retro-lcd-middle">
                <div id="track-name" class="scrolling">${escapeHtml(currentTrack?.title || "POSICION GUARDADA")}</div>
              </div>
              <div class="visualizer" id="viz">
                ${Array.from({ length: 20 }, (_, index) => `<div class="bar" style="height:${state.player.isPlaying ? 4 + ((index * 5) % 15) : 2}px"></div>`).join("")}
              </div>
              <div class="retro-lcd-bottom">
                <div id="vol-label">VOL: ${Math.round(state.player.volume * 100)}%</div>
                <div id="timer-display">${escapeHtml(formatMusicTime(state.player.currentTime))}</div>
              </div>
            </div>

            <div id="btn-play" class="btn" data-id="play" style="${getRetroControlStyle("play")}">Play</div>
            <div id="btn-vol-up" class="btn" data-id="vol-up" style="${getRetroControlStyle("vol-up")}">V+</div>
            <div id="btn-vol-down" class="btn" data-id="vol-down" style="${getRetroControlStyle("vol-down")}">V-</div>
            <div id="btn-prev" class="btn" data-id="prev" style="${getRetroControlStyle("prev")}">Prv</div>
            <div id="btn-next" class="btn" data-id="next" style="${getRetroControlStyle("next")}">Nxt</div>
            <div id="btn-stop" class="btn" data-id="stop" style="${getRetroControlStyle("stop")}">Stop</div>
            <div id="btn-power" class="btn" data-id="power" style="${getRetroControlStyle("power")}">Pwr</div>
            <div id="btn-setup" class="btn" data-id="setup" title="Abrir playlist" aria-label="Abrir playlist" style="${getRetroControlStyle("setup")}">PLAYLIST</div>
          </div>

          <div id="config-modal" class="${state.player.modalOpen ? "open" : ""}">
            <div class="retro-modal-tabs">
              <button type="button" class="${state.player.activeTab === "playlist" ? "active" : ""}" data-retro-tab="playlist">PLAYLIST</button>
              <button type="button" class="${state.player.activeTab === "now" ? "active" : ""}" data-retro-tab="now">AHORA</button>
            </div>
            <div id="content-playlist" class="${state.player.activeTab === "playlist" ? "" : "hidden"}">
              <div class="retro-library-filters">
                <button type="button" class="retro-filter-btn ${state.player.libraryView === "top" ? "active" : ""}" data-library-view="top">TOP</button>
                <button type="button" class="retro-filter-btn ${state.player.libraryView === "new" ? "active" : ""}" data-library-view="new">NUEVAS</button>
                <button type="button" class="retro-filter-btn ${state.player.libraryView === "plays" ? "active" : ""}" data-library-view="plays">MAS ESCUCHADAS</button>
                <button type="button" class="retro-filter-btn ${state.player.libraryView === "likes" ? "active" : ""}" data-library-view="likes">MAS LIKES</button>
                <button type="button" class="retro-filter-btn ${state.player.libraryView === "mine" ? "active" : ""}" data-library-view="mine">MIS TRACKS</button>
              </div>
              <div class="retro-playlist-copy">Tracks aprobados por la comunidad. Likes y plays arman el top.</div>
              <div id="track-list-container" class="retro-track-list">${renderRetroTrackListV2()}</div>
            </div>
            <div id="content-now" class="${state.player.activeTab === "now" ? "" : "hidden"} retro-design-list">
              ${renderRetroNowPanel()}
            </div>
            <button type="button" class="retro-close-btn" data-close-modal="1">CERRAR</button>
          </div>
        </div>
      `;
    },
    bind(win) {
      win.querySelector("[data-close-player]")?.addEventListener("click", () => closeWindow("winamp"));
      win.querySelectorAll("[data-retro-tab]").forEach((button) => {
        button.addEventListener("click", () => setRetroPlayerTab(button.dataset.retroTab));
      });
      win.querySelectorAll("[data-library-view]").forEach((button) => {
        button.addEventListener("click", () => setMusicLibraryView(button.dataset.libraryView));
      });
      win.querySelector("[data-close-modal]")?.addEventListener("click", () => toggleRetroPlayerModal(false));
      win.querySelectorAll("[data-play-track-id]").forEach((button) => {
        button.addEventListener("click", () => {
          playMusicTrack(button.dataset.playTrackId);
          toggleRetroPlayerModal(false);
        });
      });
      win.querySelectorAll("[data-now-action]").forEach((button) => {
        button.addEventListener("click", () => {
          const action = button.dataset.nowAction;
          if (action === "play") void toggleMusicPlayback();
          if (action === "prev") playAdjacentTrack(-1);
          if (action === "next") playAdjacentTrack(1);
          if (action === "boost-normal") state.player.boost = 1;
          if (action === "boost-mid") state.player.boost = 1.5;
          if (action === "boost-max") state.player.boost = 2;
          syncMusicOutputGain();
          refreshWindow("winamp");
        });
      });
      win.querySelectorAll("[data-like-track-id]").forEach((button) => {
        button.addEventListener("click", () => toggleMusicLike(button.dataset.likeTrackId));
      });
      win.querySelectorAll(".btn").forEach((node) => {
        node.addEventListener("click", () => {
          const id = node.dataset.id;
          if (id === "play") void toggleMusicPlayback();
          if (id === "stop") stopMusicPlayback();
          if (id === "setup") toggleRetroPlayerModal(true);
          if (id === "next") playAdjacentTrack(1);
          if (id === "prev") playAdjacentTrack(-1);
          if (id === "vol-up") {
            state.player.volume = Math.min(1, state.player.volume + 0.05);
            syncMusicOutputGain();
            updateUnderMusicUi();
          }
          if (id === "vol-down") {
            state.player.volume = Math.max(0, state.player.volume - 0.05);
            syncMusicOutputGain();
            updateUnderMusicUi();
          }
          if (id === "power") {
            state.player.powerOn = !state.player.powerOn;
            if (!state.player.powerOn) {
              stopMusicPlayback();
            } else {
              void ensureMusicAnalyser();
              updateUnderMusicUi();
            }
          }
        });
      });
      updateUnderMusicUi();
    },
  },
};

function renderSlot98Window() {
  const uniqueStickers = getSlotUniqueStickerCount();
  const totalStickers = state.slot98.stickers.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const ticketSymbol = state.slot98.ticketSymbol || SLOT_SYMBOLS[state.slot98.currentReels[0]];
  const currentWinRate = getSlotCurrentWinRate();
  return `
    <div class="window-content slot98-window-content">
      <div class="slot98-scene">
        <div class="slot98-starfield">${renderSlotStars()}</div>
        <div class="slot98-frame">
          <div class="slot98-game-window">
            <div class="slot98-inner-titlebar">
              <span>REELOK_CASINO.EXE</span>
              <div class="slot98-mini-controls">
                <button class="slot98-ui-btn" type="button" data-slot-minimize="_">_</button>
                <button class="slot98-ui-btn" type="button" data-slot-close="1">X</button>
              </div>
            </div>

            <div class="slot98-menubar">
              <button class="slot98-menu-item" type="button" data-slot-menu-toggle="1">Opciones</button>
              <button class="slot98-menu-item" type="button" data-slot-help="1">Ayuda</button>
              <div class="slot98-dropdown ${state.slot98.menuOpen ? "show" : ""}" data-slot-menu>
                <label class="slot98-toggle-row">
                  <span>Musica Fondo</span>
                  <input type="checkbox" ${state.slot98.musicEnabled ? "checked" : ""} data-slot-music-toggle="1">
                </label>
                <div class="slot98-dropdown-note">El win rate queda fijo para jugadores. Si sos admin, lo cambias desde User Panel.</div>
              </div>
            </div>

            <div class="slot98-stage">
              <div class="slot98-logo">
                <img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/Sin_titulo-1.png?v=1774974471" alt="Logo ReelOk">
              </div>

              <div class="slot98-cashbar">
                <div class="slot98-cash">CASH: $<span data-slot-credits>${escapeHtml(String(state.user.credits))}</span></div>
                <div class="slot98-bet">BET $${SLOT_BET_COST}</div>
              </div>

              <div class="slot98-machine-body">
                <div class="slot98-progress-board">
                  <div class="slot98-stat-chip">
                    <span class="slot98-stat-label">Pozo</span>
                    <strong>$${escapeHtml(String(state.slot98.jackpotPool))}</strong>
                  </div>
                  <div class="slot98-stat-chip">
                    <span class="slot98-stat-label">Racha</span>
                    <strong>x${escapeHtml(String(Math.max(1, state.slot98.combo + 1)))}</strong>
                  </div>
                  <div class="slot98-stat-chip">
                    <span class="slot98-stat-label">Heat</span>
                    <div class="slot98-heat-meter">${renderSlotHeatMeter()}</div>
                  </div>
                  <div class="slot98-stat-chip">
                    <span class="slot98-stat-label">Win real</span>
                    <strong>${escapeHtml(String(currentWinRate))}%</strong>
                  </div>
                </div>
                <div class="slot98-slot-container">
                  <div class="slot98-reel-shell"><div class="slot98-reel-strip" data-slot-strip="0">${renderSlotStrip()}</div></div>
                  <div class="slot98-reel-shell"><div class="slot98-reel-strip" data-slot-strip="1">${renderSlotStrip()}</div></div>
                  <div class="slot98-reel-shell"><div class="slot98-reel-strip" data-slot-strip="2">${renderSlotStrip()}</div></div>

                  <button class="slot98-lever-container" type="button" data-slot-spin="1" data-slot-lever="1" ${state.slot98.spinning ? "disabled" : ""}>
                    <span class="slot98-lever-base"></span>
                    <span class="slot98-lever-arm">
                      <span class="slot98-lever-knob"></span>
                    </span>
                  </button>
                </div>

                <div class="slot98-floppy-slot">
                  <div class="slot98-ticket ${state.slot98.ticketVisible ? "slide-up" : ""}" data-slot-ticket>
                    <img src="${ticketSymbol}" alt="Sticker ganador" data-slot-ticket-image>
                    <span class="slot98-ticket-label">JACKPOT</span>
                  </div>
                  <div class="slot98-floppy-hole"></div>
                </div>

                <div class="slot98-footerbar">
                  <div class="slot98-status-text" data-slot-status>${escapeHtml(state.slot98.status)}</div>
                  <div class="slot98-footer-actions">
                    <button class="slot98-ui-btn wide" type="button" data-slot-claim="1">RECLAMAR ALBUM</button>
                  </div>
                </div>
                <div class="slot98-result-note">${escapeHtml(state.slot98.lastSpinSummary)}</div>
              </div>

              <div class="slot98-panels">
                <div class="slot98-sidecard">
                  <div class="slot98-side-title">Recargar ${SLOT_BET_COST} credits</div>
                  <div class="slot98-code-row">
                    <input id="slot98-code-input" class="win-input slot98-code-input" type="text" maxlength="40" placeholder="Pega tu codigo RX...">
                    <button class="slot98-ui-btn wide" type="button" data-slot-redeem="1">CARGAR</button>
                  </div>
                </div>
                <div class="slot98-sidecard">
                  <div class="slot98-side-title">Inventario de stickers</div>
                  <div class="slot98-album-meta">${uniqueStickers}/${SLOT_ALBUM_TARGET} unicos Â· ${totalStickers} totales</div>
                  <div class="slot98-inventory-actions">
                    <button class="slot98-ui-btn wide" type="button" data-slot-claim="1">CANJEAR ALBUM</button>
                    <button class="slot98-ui-btn wide slot98-inventory-toggle" type="button" data-slot-inventory-toggle="1">${state.slot98.inventoryOpen ? "OCULTAR INVENTARIO" : "VER INVENTARIO"}</button>
                  </div>
                  <div class="slot98-inventory-actions">
                    <div class="slot98-side-note">Solo inventario visible. El scroll corre en toda la ventana del slot98.</div>
                  </div>
                  <div class="slot98-inventory ${state.slot98.inventoryOpen ? "open" : ""}" data-slot-inventory-panel>${renderSlot98Inventory()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="window-statusbar">
      <div class="status-panel">slot98</div>
      <div class="status-panel"><span data-slot-credits>${escapeHtml(String(state.user.credits))}</span> credits</div>
      <div class="status-panel">${uniqueStickers}/${SLOT_ALBUM_TARGET} stickers</div>
    </div>
  `;
}

function bindSlot98Window(win) {
  initializeSlot98Reels(win);
  syncSlot98Menu();
  win.querySelector("[data-slot-spin]")?.addEventListener("click", spinSlot98);
  win.querySelector("[data-slot-claim]")?.addEventListener("click", claimSlotAlbum);
  win.querySelector("[data-slot-redeem]")?.addEventListener("click", () => redeemPromoCode(win.querySelector("#slot98-code-input")?.value || ""));
  win.querySelector("[data-slot-menu-toggle]")?.addEventListener("click", () => {
    state.slot98.menuOpen = !state.slot98.menuOpen;
    syncSlot98Menu();
  });
  win.querySelector("[data-slot-help]")?.addEventListener("click", () => {
    alert(`Cada giro cuesta ${SLOT_BET_COST} credits. El heat y el pity empujan el win rate, el pozo acumula cada giro y juntas ${SLOT_ALBUM_TARGET} stickers para reclamar el album.`);
  });
  win.querySelector("[data-slot-music-toggle]")?.addEventListener("change", (event) => {
    state.slot98.musicEnabled = Boolean(event.target.checked);
  });
  win.querySelector("[data-slot-inventory-toggle]")?.addEventListener("click", () => {
    state.slot98.inventoryOpen = !state.slot98.inventoryOpen;
    refreshWindow("slot98-game");
  });
  win.querySelector("[data-slot-close]")?.addEventListener("click", () => closeWindow("slot98-game"));
  win.querySelector("[data-slot-minimize]")?.addEventListener("click", () => minimizeWindow("slot98-game"));
  win.querySelectorAll("[data-sell-sticker]").forEach((button) => {
    button.addEventListener("click", () => sellSlotSticker(button.dataset.sellSticker));
  });
}

desktopApps["slot98-game"] = {
  title: "REELOK_CASINO.EXE",
  width: 690,
  height: 760,
  x: 220,
  y: 40,
  render: renderSlot98Window,
  bind: bindSlot98Window,
};

async function spinSlot98() {
  if (!state.supabase || state.slot98.spinning) return;
  if (!state.user.loggedIn) {
    setSlot98Status("Inicia sesion para usar slot98.");
    return;
  }
  const win = getSlotWindowElement();
  if (state.user.credits < SLOT_BET_COST) {
    setSlot98Status("No tenes credits suficientes.");
    return;
  }

  state.slot98.spinning = true;
  state.slot98.menuOpen = false;
  syncSlot98Menu();
  toggleSlot98Ticket(false);
  const boostedSpin = state.slot98.heat >= SLOT_MAX_HEAT || state.slot98.pity >= 5;
  setSlot98Status(boostedSpin ? "Tiro caliente cargado..." : "Girando...");

  const nextCredits = state.user.credits - SLOT_BET_COST;
  const debitResult = await state.supabase
    .from("users")
    .update({ credits: nextCredits, last_seen: new Date().toISOString() })
    .eq("id", state.user.id);
  if (debitResult.error) {
    state.slot98.spinning = false;
    setSlot98Status("No pude descontar los credits del giro.");
    alert(debitResult.error.message);
    return;
  }
  state.user.credits = nextCredits;
  state.slot98.jackpotPool += SLOT_JACKPOT_CONTRIBUTION;
  state.slot98.lastSpinSummary = `Pozo en $${state.slot98.jackpotPool}. Heat ${state.slot98.heat}/${SLOT_MAX_HEAT}.`;
  syncEconomyViews();
  animateSlot98Lever(win);
  await delay(300);

  const rand = Math.random() * 100;
  let results;
  if (rand < getSlotCurrentWinRate()) {
    const winner = pickSlotSymbolIndex();
    results = [winner, winner, winner];
  } else {
    results = [
      pickSlotSymbolIndex(),
      pickSlotSymbolIndex(),
      pickSlotSymbolIndex(),
    ];
    if (results[0] === results[1] && results[1] === results[2]) {
      let replacement = pickSlotSymbolIndex();
      while (replacement === results[2]) {
        replacement = pickSlotSymbolIndex();
      }
      results[2] = replacement;
    }
  }

  if (win) {
    await animateSlot98Reels(win, results);
  } else {
    await delay(2400);
  }

  state.slot98.currentReels = results;

  if (results[0] === results[1] && results[1] === results[2]) {
    state.slot98.combo += 1;
    state.slot98.pity = 0;
    state.slot98.heat = 0;
    await addSlotSticker(SLOT_SYMBOLS[results[0]]);
    await loadAdminAlbumProgress();
    state.slot98.jackpotPool = SLOT_BASE_JACKPOT;
    state.slot98.lastSpinSummary = "Triple match confirmado. Sticker agregado al inventario.";
    setSlot98Status("Premio! Sticker nuevo agregado al album.");
    animateSlot98Ticket(win, SLOT_SYMBOLS[results[0]]);
  } else {
    state.slot98.combo = 0;
    state.slot98.pity += 1;
    if (isSlotNearMiss(results)) {
      state.slot98.heat = Math.min(SLOT_MAX_HEAT, state.slot98.heat + 2);
      state.slot98.lastSpinSummary = `Casi sale. Heat ${state.slot98.heat}/${SLOT_MAX_HEAT} y pozo en $${state.slot98.jackpotPool}.`;
      setSlot98Status("Casi pega. La maquina se esta calentando.");
    } else {
      state.slot98.heat = Math.min(SLOT_MAX_HEAT, state.slot98.heat + 1);
      state.slot98.lastSpinSummary = `Fallo limpio. Pity ${state.slot98.pity} y pozo en $${state.slot98.jackpotPool}.`;
      setSlot98Status(state.slot98.heat >= SLOT_MAX_HEAT ? "Heat al maximo. El proximo tiro viene cargado." : "Otra vez?");
    }
  }

  state.slot98.spinning = false;
  await loadRankings();
  syncEconomyViews({ rerenderSlot: true });
}

function getSkinClass() {
  const skin = SKINS.find((item) => item.id === state.user.chat_skin);
  return skin ? skin.textClass : "skin-classic";
}

function getSkinName() {
  const skin = SKINS.find((item) => item.id === state.user.chat_skin);
  return skin ? skin.name : "Classic Silver";
}

setInterval(() => {
  if (state.windows.has("winamp")) {
    updateUnderMusicUi();
  }
}, 1000);

init();
const backgroundAudioState = {
  activeAudio: null,
  shouldResume: false,
  lastSrc: "",
  lastTime: 0,
};

function getTrackedAudio() {
  if (backgroundAudioState.activeAudio && document.contains(backgroundAudioState.activeAudio)) {
    return backgroundAudioState.activeAudio;
  }

  const candidates = Array.from(document.querySelectorAll("audio"));
  const active = candidates.find((audio) => !audio.paused && !audio.ended) || candidates[0] || null;
  backgroundAudioState.activeAudio = active;
  return active;
}

function syncTrackedAudio(audio) {
  if (!(audio instanceof HTMLAudioElement)) return;
  backgroundAudioState.activeAudio = audio;
  backgroundAudioState.lastSrc = audio.currentSrc || audio.src || "";
  backgroundAudioState.lastTime = Number(audio.currentTime || 0);
}

async function resumeTrackedAudio() {
  const audio = getTrackedAudio();
  if (!audio) return;

  if (backgroundAudioState.lastSrc) {
    const currentSrc = audio.currentSrc || audio.src || "";
    if (!currentSrc && backgroundAudioState.lastSrc) {
      audio.src = backgroundAudioState.lastSrc;
    }
  }

  if (Number.isFinite(backgroundAudioState.lastTime) && backgroundAudioState.lastTime > 0) {
    const drift = Math.abs((audio.currentTime || 0) - backgroundAudioState.lastTime);
    if (drift > 1) {
      try {
        audio.currentTime = backgroundAudioState.lastTime;
      } catch (_error) {
      }
    }
  }

  try {
    await audio.play();
  } catch (_error) {
  }
}

function setupBackgroundAudioGuards() {
  if (window.__backgroundAudioGuardsInstalled) return;
  window.__backgroundAudioGuardsInstalled = true;

  document.addEventListener("play", (event) => {
    if (!(event.target instanceof HTMLAudioElement)) return;
    const audio = event.target;
    audio.playsInline = true;
    audio.setAttribute("playsinline", "true");
    audio.preload = "auto";
    syncTrackedAudio(audio);
    backgroundAudioState.shouldResume = true;
  }, true);

  document.addEventListener("pause", (event) => {
    if (!(event.target instanceof HTMLAudioElement)) return;
    syncTrackedAudio(event.target);
    backgroundAudioState.shouldResume = Boolean(state.player.isPlaying);
  }, true);

  document.addEventListener("timeupdate", (event) => {
    if (!(event.target instanceof HTMLAudioElement)) return;
    syncTrackedAudio(event.target);
  }, true);

  document.addEventListener("visibilitychange", () => {
    const audio = getTrackedAudio();
    if (!audio) return;

    if (document.hidden) {
      backgroundAudioState.shouldResume = !audio.paused && !audio.ended;
      syncTrackedAudio(audio);
      return;
    }

    if (backgroundAudioState.shouldResume) {
      resumeTrackedAudio();
    }
  });

  window.addEventListener("pageshow", () => {
    if (backgroundAudioState.shouldResume) {
      resumeTrackedAudio();
    }
  });

  window.addEventListener("focus", () => {
    if (backgroundAudioState.shouldResume) {
      resumeTrackedAudio();
    }
  });
}

setupBackgroundAudioGuards();



