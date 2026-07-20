const COMPANY_WHATSAPP = "5491123010751";
const BASE_MESSAGE = "Hola FILO, vi la web y quiero consultar por una obra.";

function buildWhatsAppUrl(message = BASE_MESSAGE) {
  return `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLinks(message) {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = buildWhatsAppUrl(message);
  });
}

function formToMessage(form) {
  const data = new FormData(form);
  const value = (name) => String(data.get(name) || "").trim();
  return [
    "Hola FILO, quiero pedir presupuesto para una obra.",
    "",
    `Nombre: ${value("name")}`,
    `Telefono: ${value("phone")}`,
    `Ubicacion: ${value("location")}`,
    `Tipo de proyecto: ${value("projectType")}`,
    `Superficie aprox.: ${value("surface") || "No informada"}`,
    `Plazo ideal: ${value("timeline") || "No informado"}`,
    "",
    `Descripcion: ${value("message")}`,
  ].join("\n");
}

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  if (!button || !nav) return;
  button.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) nav.classList.remove("is-open");
  });
}

function setupLeadForm() {
  const form = document.querySelector("[data-lead-form]");
  const note = document.querySelector("[data-form-note]");
  if (!form) return;

  const savedLead = localStorage.getItem("filo_last_lead");
  if (savedLead) {
    try {
      const lead = JSON.parse(savedLead);
      Object.entries(lead).forEach(([name, value]) => {
        const field = form.elements.namedItem(name);
        if (field) field.value = value;
      });
    } catch {
      localStorage.removeItem("filo_last_lead");
    }
  }

  form.addEventListener("input", () => {
    const lead = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem("filo_last_lead", JSON.stringify(lead));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lead = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem("filo_last_lead", JSON.stringify(lead));
    const message = formToMessage(form);
    setWhatsAppLinks(message);
    if (note) note.textContent = "Consulta preparada. Se abre WhatsApp con todos los datos cargados.";
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });
}

setWhatsAppLinks();
setupMenu();
setupLeadForm();
