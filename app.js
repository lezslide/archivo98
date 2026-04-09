const SUPABASE_URL = "https://simmltkpoqfrbkianyza.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_PnA09ddT1Jz_hWAS0TRCbw_lG_Jd3pE";

const hasSupabaseConfig =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes("PONER_TU_SUPABASE_URL") &&
  !SUPABASE_ANON_KEY.includes("PONER_TU_SUPABASE_ANON_KEY");

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

const EMOJIS = ["😀", "😈", "🔥", "💀", "🖤", "⚡", "🎮", "💸"];

const MOBILE_BREAKPOINT = 768;
const EMOJI_GROUPS = {
  under: ["🖤","⛓️","🕷️","🌑","🔮","🪦","🩸","🦇","🗡️","🔪","⚰️","🕯️","🌫️","👁️","🧿","🥀","🫀","🐍","🦂","🪬","🩶","🧨","🌧️","🧊","🪩","🕶️","🎱","🪐","🌘","💿"],
  gamer: ["🎮","🕹️","👾","🏆","💥","⚡","🔥","🎯","🚀","🛡️","🗺️","🎲","⌨️","🖥️","🔫","🪓","⚔️","🏹","🧠","💣","🔋","🧪","🧬","🤖","🚨","🏁","⏳","📡","🪙","💾"],
  meme: ["😂","🤣","💀","🤡","🗿","😎","🤯","😭","🙃","🫠","🥴","🤨","😏","😳","🤝","🫡","🐸","🍷","🧃","🍌","🫵","🤌","😶‍🌫️","😬","😹","🙈","👀","🤓","😴","🧠"],
  classic: ["😀","😁","😄","😅","😊","😉","😍","😘","😜","🤔","😴","😡","😱","😇","😎","😈","👻","💖","💔","👍","👎","👏","🙏","💪","🎉","🎵","🌈","☀️","⭐","💸"],
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
  "asesinato", "asesinar", "matar", "muerto", "cadaver", "cadáver", "gore", "sangre",
  "decapitado", "decapitado", "descuartizado", "violacion", "violación", "porno", "porn",
  "pornografia", "pornografía", "xxx", "nudes", "nude", "desnuda", "desnudo", "sexual",
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
const FORCED_ADMIN_EMAILS = ["jeremiastumber1@gmail.com"];

const state = {
  zIndex: 20,
  windows: new Map(),
  windowScrollPositions: new Map(),
  activeWindowId: null,
  startMenuOpen: false,
  isAdmin: false,
  supabase: null,
  realtimeChannel: null,
  onlineInterval: null,
  globalMessages: [],
  generatedCodes: [],
  generatedCodeCursor: 0,
  musicTracks: [],
  privateMusicTracks: [],
  musicPending: [],
  publishedProjects: [],
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
      .select("id,email,username,status")
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
    .select("id,email,username,status")
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
  });
}

function parseGlobalMessagePayload(message) {
  const fallback = {
    username: message.username || "Anon",
    text: message.content || "",
    nickColor: "#7dd3fc",
    textColor: "#f3f4f6",
    imageUrl: "",
    blurred: false,
    isLocalOnly: false,
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
  bindDesktop();
  bindStartMenu();
  updateClock();
  setInterval(updateClock, 1000);
  initSupabaseClient();
  applyUserSkin();
  window.addEventListener("orientationchange", adjustWindowsForViewport);
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
    updateOnlineIndicator();
    return;
  }

  state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  state.supabase.auth.getSession().then(({ data }) => {
    handleSessionChange(data.session);
  });
  state.supabase.auth.onAuthStateChange((_event, session) => {
    handleSessionChange(session);
  });
}

async function handleSessionChange(session) {
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
    updateOnlineIndicator();
    rerenderCoreApps();
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
  applyUserSkin();
  rerenderCoreApps();
  const usersWindow = state.windows.get("users")?.element || document;
  setUserActionStatus(usersWindow, "");
}

function rerenderCoreApps() {
  ["users", "chat-global", "private-chat", "slot98-game"].forEach(refreshWindow);
}

function bindDesktop() {
  document.querySelectorAll(".shortcut").forEach((shortcut) => {
    shortcut.addEventListener("dblclick", () => openWindow(shortcut.dataset.app));
    shortcut.addEventListener("click", () => {
      document.querySelectorAll(".shortcut").forEach((item) => item.classList.remove("selected"));
      shortcut.classList.add("selected");
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

function bindStartMenu() {
  document.getElementById("start-btn").addEventListener("click", () => {
    state.startMenuOpen ? closeStartMenu() : openStartMenu();
  });

  document.querySelectorAll(".start-item[data-app]").forEach((item) => {
    item.addEventListener("click", () => {
      openWindow(item.dataset.app);
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

function openWindow(appId) {
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

function getUsername() {
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

function renderPublishedProjectCards() {
  if (!state.publishedProjects.length) {
    return `<div class="note-box">Todavia no publicaste proyectos desde este estudio.</div>`;
  }
  return state.publishedProjects.map((project) => `
    <div class="creative-project-card">
      <div class="creative-project-top">
        <strong>${escapeHtml(project.title || "Proyecto sin titulo")}</strong>
        <span>${escapeHtml(project.focus || "music")} · ${escapeHtml(project.mode || "artist")}</span>
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
      <div class="creative-project-meta">${escapeHtml(project.role_label || state.user.role_label || "")}${project.brand_name ? ` · ${escapeHtml(project.brand_name)}` : ""}</div>
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

function normalizeCreativeWebsite(url) {
  const trimmed = (url || "").trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

async function loadPublishedProjects() {
  if (!state.supabase || !state.user.loggedIn) {
    state.publishedProjects = [];
    return;
  }
  const { data, error } = await state.supabase
    .from("user_projects")
    .select("id,title,tagline,focus,mode,problem,impact,role_label,brand_name,instagram_handle,tiktok_handle,website_url,is_published,created_at")
    .eq("user_id", state.user.id)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    state.publishedProjects = [];
    return;
  }
  state.publishedProjects = data || [];
}

async function saveCreativeProject(win) {
  if (!state.supabase || !state.user.loggedIn) {
    alert("Necesitas iniciar sesion para publicar un proyecto.");
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
    alert("Poné un nombre para el proyecto antes de publicarlo.");
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
    is_published: true,
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
  await loadPublishedProjects();
  refreshWindow("proyectos");
  alert("Proyecto publicado en tu perfil.");
}

function isEffectiveAdmin() {
  return state.isAdmin || FORCED_ADMIN_EMAILS.includes((state.user.email || "").toLowerCase());
}

async function initSupabase() {
  if (!state.supabase || !state.user.loggedIn) return;
  await fetchRecentMessages();
  await loadSocialGraph();
  await loadPublishedProjects();
  subscribeToChat();
  startPresenceHeartbeat();
}

function updateOnlineIndicator() {
  const indicator = document.getElementById("online-indicator");
  if (!indicator) return;
  if (!state.supabase) {
    indicator.textContent = "Sin Supabase";
    return;
  }
  if (!state.user.loggedIn) {
    indicator.textContent = "Offline";
    return;
  }
  indicator.textContent = `Online · ${state.user.credits} cr`;
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

  const result = mode === "sign-up"
    ? await state.supabase.auth.signUp({ email, password })
    : await state.supabase.auth.signInWithPassword({ email, password });

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
    alert("Elegí un nombre visible.");
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
    alert("Completá la nueva contraseña y su confirmación.");
    return;
  }

  if (nextPassword.length < 6) {
    setUserActionStatus(win, "");
    alert("La nueva contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (nextPassword !== confirmPassword) {
    setUserActionStatus(win, "");
    alert("Las contraseñas no coinciden.");
    return;
  }

  setUserActionStatus(win, "Actualizando contraseña...");
  const { error } = await state.supabase.auth.updateUser({ password: nextPassword });

  if (error) {
    setUserActionStatus(win, "");
    alert(error.message);
    return;
  }

  win.querySelector("#new-password-input").value = "";
  win.querySelector("#confirm-password-input").value = "";
  setUserActionStatus(win, "Contraseña actualizada.");
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
        <span>${escapeHtml(track.artist || "UNDER COMMUNITY")} · ${escapeHtml(String(track.play_count || 0))} plays · ${escapeHtml(String(track.like_count || 0))} likes</span>
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
      ? "Solo para vos · URL o upload privado"
      : `${escapeHtml(track.artist || "UNDER COMMUNITY")} · ${escapeHtml(String(track.play_count || 0))} plays · ${escapeHtml(String(track.like_count || 0))} likes`;
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
    alert("Código invalido.");
    return;
  }
  if (data.claimed_at || data.claimed_by) {
    alert("Ese código ya fue usado.");
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
    alert("Poné al menos titulo y URL.");
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
    alert("Poné titulo y un MP3 por URL o archivo.");
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
  if (!state.supabase || !state.user.loggedIn) return;
  const { data, error } = await state.supabase
    .from("messages")
    .select("id,username,content,created_at")
    .eq("room", "global")
    .order("created_at", { ascending: true })
    .limit(60);

  if (error) {
    console.error(error);
    return;
  }

  state.globalMessages = data || [];
  renderGlobalMessages();
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
      username: getUsername(),
      content: serializeGlobalMessagePayload(payload),
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : "",
      blurred: Boolean(imageFile),
      isLocalOnly: Boolean(imageFile),
    });
    input.value = "";
    if (imageInput) imageInput.value = "";
    renderGlobalMessages();
    refreshWindow("chat-global");
    return;
  }

  if (!state.user.loggedIn) {
    alert("Primero iniciá sesion desde User.");
    return;
  }

  if (imageFile) {
    state.globalMessages.push({
      username: getUsername(),
      content: serializeGlobalMessagePayload(payload),
      imageUrl: URL.createObjectURL(imageFile),
      blurred: true,
      isLocalOnly: true,
    });
    input.value = "";
    imageInput.value = "";
    renderGlobalMessages();
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
}

function insertEmoji(targetId, emoji) {
  const input = document.getElementById(targetId);
  if (!input) return;
  input.value = `${input.value}${emoji}`;
  input.focus();
}

function renderGlobalMessages() {
  const box = document.getElementById("chat-messages");
  if (!box) return;

  const messages = state.globalMessages.length
    ? state.globalMessages
    : [
        { username: "MSN Bot", content: serializeGlobalMessagePayload({ text: "Bienvenido al canal global under.", nickColor: "#facc15" }) },
        { username: "Sistema", content: serializeGlobalMessagePayload({ text: hasSupabaseConfig ? "Inicia sesion para usar el chat real." : "Configura Supabase para activar realtime.", nickColor: "#cbd5e1" }) },
      ];

  box.innerHTML = messages
    .map((message) => renderMessageBubble(message))
    .join("");
  box.scrollTop = box.scrollHeight;
}

function renderMessageBubble(message) {
  const parsed = parseGlobalMessagePayload(message);
  const isSystem = message.username === "Sistema" || message.username === "MSN Bot";
  const isSelf = message.username === getUsername();
  const strikeCount = getUserStrikeCount(message.username);
  const imageMarkup = parsed.imageUrl
    ? `<div class="chat-image-wrap${parsed.blurred ? " blurred" : ""}"><img class="chat-image" src="${escapeHtml(parsed.imageUrl)}" alt="Adjunto"></div>`
    : "";
  const strikeMarkup = !isSystem && strikeCount > 0 ? ` <small class="chat-strike-badge">strike ${escapeHtml(String(strikeCount))}</small>` : "";
  return `<div class="chat-row${isSystem ? " system" : isSelf ? " self" : ""}"><strong style="color:${escapeHtml(parsed.nickColor)}">${escapeHtml(message.username)}${strikeMarkup}:</strong> <span style="color:${escapeHtml(parsed.textColor)}">${escapeHtml(parsed.text)}</span>${imageMarkup}${parsed.isLocalOnly ? '<small class="chat-local-flag">foto con blur preventivo · solo visible en esta sesion</small>' : ""}</div>`;
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
      { username: contactName, content: "Solicitud aceptada. Chat abierto sin visto." },
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
        state.localPrivateMessages[storageKey].push({ username: getUsername(), content: value });
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

const desktopApps = {
  users: {
    title: "C:\\Users\\User",
    width: 640,
    height: 520,
    x: 110,
    y: 35,
    render() {
      if (!hasSupabaseConfig) {
        return `<div class="window-content"><div class="app-section-title">User Panel</div><div class="note-box">Configurá SUPABASE_URL y SUPABASE_ANON_KEY para activar perfil, rankings y economia real.</div></div><div class="window-statusbar"><div class="status-panel">Sin Supabase</div></div>`;
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
                <div class="user-hero-mail">${escapeHtml(state.user.email)}</div>
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
                <input id="new-password-input" class="win-input" type="password" minlength="6" placeholder="Nueva contraseña" />
                <input id="confirm-password-input" class="win-input" type="password" minlength="6" placeholder="Confirmar nueva contraseña" />
              </div>
              <div class="session-row">
                <button class="action-btn" data-action="save-profile">Guardar perfil</button>
                <button class="action-btn" data-action="redeem-code">Canjear 10 credits</button>
                <button class="action-btn" data-action="change-password">Cambiar contraseña</button>
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
  "chat-global": {
    title: "Global Chat",
    width: 700,
    height: 480,
    x: 180,
    y: 60,
    render() {
      const channelCount = state.globalMessages.length || 1;
      const incomingRequestsMarkup = state.incomingContactRequests.length
        ? state.incomingContactRequests.map((contact) => `
            <div class="discord-member-card">
              <div class="msn-avatar mini">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
              <div>
                <strong>${escapeHtml(contact.username)}</strong>
                <span>${escapeHtml(contact.email)}</span>
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
              <div class="msn-avatar mini">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
              <div>
                <strong>${escapeHtml(contact.username)}</strong>
                <span>${escapeHtml(contact.email)} · pendiente</span>
              </div>
            </div>
          `).join("")
        : '<div class="discord-side-note">No hay envios pendientes.</div>';
      const contactPreview = state.privateContacts.slice(0, 6).map((contact) => `
        <div class="discord-member-card">
          <div class="msn-avatar mini">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
          <div>
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${contact.online ? "Disponible" : "Ausente"}${getUserStrikeCount(contact.username) ? ` · strike ${escapeHtml(String(getUserStrikeCount(contact.username)))}` : ""}</span>
          </div>
          <button class="action-btn discord-send" data-open-contact="${escapeHtml(contact.id)}">Abrir</button>
        </div>
      `).join("");
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
              <button class="action-btn" data-open-music="1">Under Music</button>
            </div>
            <div id="chat-messages" class="discord-messages ${escapeHtml(getSkinClass())}"></div>
            <div class="discord-compose">
              <div class="discord-compose-tools">
                <input id="global-nick-color" class="discord-color-input" type="color" value="${escapeHtml(state.user.nick_color || "#7dd3fc")}">
                <input id="global-text-color" class="discord-color-input" type="color" value="${escapeHtml(state.user.text_color || "#f3f4f6")}">
                <label class="discord-upload-label" for="global-image-input">Foto</label>
                <input id="global-image-input" class="hidden" type="file" accept="image/*">
              </div>
              <div class="discord-side-note">Las fotos subidas quedan con blur preventivo. Gore, sangre y porno suman strike.</div>
              <div class="discord-message-row">
                <input id="chat-input" class="win-input discord-message-input" type="text" maxlength="280" placeholder="Mandar mensaje a #general-under" />
                <button class="message-send discord-send" data-action="send-chat-message">Enviar</button>
              </div>
            </div>
          </section>
          <aside class="discord-members">
            <div class="discord-side-title">USER PANEL</div>
            <div class="discord-member-card">
              ${getAvatarMarkup()}
              <div>
                <strong>${escapeHtml(getUsername())}</strong>
                <span>${state.user.loggedIn ? "Online" : "Guest"} · strikes ${escapeHtml(String(getUserStrikeCount(getUsername())))}</span>
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
        <div class="window-statusbar"><div class="status-panel">Global Chat</div><div class="status-panel">${state.user.loggedIn ? "Realtime" : "Demo / Login pendiente"}</div></div>
      `;
    },
    bind(win) {
      win.querySelector('[data-action="send-chat-message"]').addEventListener("click", sendGlobalMessage);
      win.querySelector("#chat-input").addEventListener("keydown", (event) => {
        if (event.key === "Enter") sendGlobalMessage();
      });
      win.querySelector("#global-nick-color")?.addEventListener("input", (event) => {
        state.user.nick_color = event.target.value;
        localStorage.setItem("win98_nick_color", state.user.nick_color);
      });
      win.querySelector("#global-text-color")?.addEventListener("input", (event) => {
        state.user.text_color = event.target.value;
        localStorage.setItem("win98_text_color", state.user.text_color);
      });
      win.querySelector("[data-open-private]")?.addEventListener("click", () => openWindow("private-chat"));
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
      renderGlobalMessages();
      if (state.user.loggedIn) initSupabase();
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
          <div class="msn-avatar">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${escapeHtml(contact.email)} · solicitud</span>
          </div>
          <div class="msn-request-actions">
            <button class="action-btn msn-action msn-contact-action" data-accept-request="${escapeHtml(contact.requestId)}">Aceptar</button>
            <button class="action-btn msn-contact-action" data-deny-request="${escapeHtml(contact.requestId)}">Negar</button>
          </div>
        </div>
      `).join("");
      const outgoingRequests = state.outgoingContactRequests.map((contact) => `
        <div class="msn-contact">
          <div class="msn-avatar">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span>${escapeHtml(contact.email)} · esperando respuesta</span>
          </div>
          <div class="msn-contact-meta">Pendiente</div>
        </div>
      `).join("");
      const contacts = state.privateContacts.map((contact) => `
        <div class="msn-contact">
          <div class="msn-avatar">${escapeHtml(contact.username.slice(0, 2).toUpperCase())}</div>
          <div class="msn-contact-meta">
            <strong>${escapeHtml(contact.username)}</strong>
            <span class="contact-status ${contact.online ? "online" : "offline"}">${contact.online ? "Disponible" : "Ausente"} · sin visto</span>
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
              <div class="msn-compose">
                <div class="note-box">Solo usuarios reales validados por mail. Nada de bots ni agregado automatico.</div>
              </div>
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
            </section>

            <section class="creative-card">
              <h3>Proyecto</h3>
              <div class="form-stack">
                <input id="creative-project-title" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.projectTitle)}" placeholder="${escapeHtml(projectLabels.title)}" />
                <input id="creative-project-tagline" class="win-input" type="text" value="${escapeHtml(state.creativeStudio.projectTagline)}" placeholder="${escapeHtml(projectLabels.tagline)}" />
              </div>
              <div class="shop-copy">Publica una version visible del proyecto con tu perfil y links para mostrar tu universo dentro de user98.</div>
              <div class="session-row">
                <button class="action-btn" data-creative-action="publish">Crear y publicar proyecto</button>
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
              <h3>Proyectos publicados</h3>
              <div class="creative-project-list">${renderPublishedProjectCards()}</div>
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
    },
  },
  "explorer-games": {
    title: "Juegos",
    width: 420,
    height: 300,
    x: 180,
    y: 190,
    render() {
      return `<div class="window-content"><div class="game-list"><div class="game-item game-item-rich"><div class="game-item-main"><img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/7f9e196be4af453012f1d7f40892da81.jpg?v=1775590952" class="game-thumb" alt="Age of Empire"><div><strong>Age of Empire II</strong><small>Clasicazo RTS para abrir en web.</small></div></div><button class="action-btn" data-url="https://dos.zone/age-of-empires2/">Abrir</button></div><div class="game-item game-item-rich"><div class="game-item-main"><img src="https://cdn.shopify.com/s/files/1/0995/6432/3185/files/cas.png?v=1775590771" class="game-thumb" alt="slot98"><div><strong>slot98</strong><small>Slot retro con credits y stickers reales.</small></div></div><button class="action-btn" data-open-slot="1">Abrir</button></div></div><br><div class="note-box">slot98 ahora vive dentro del desktop y usa tus credits reales para jugar.</div></div><div class="window-statusbar"><div class="status-panel">2 accesos</div></div>`;
    },
    bind(win) {
      win.querySelectorAll("[data-url]").forEach((button) => {
        button.addEventListener("click", () => window.open(button.dataset.url, "_blank", "noopener,noreferrer"));
      });
      win.querySelector("[data-open-slot]")?.addEventListener("click", () => openWindow("slot98-game"));
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
                  <div class="slot98-album-meta">${uniqueStickers}/${SLOT_ALBUM_TARGET} unicos · ${totalStickers} totales</div>
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
