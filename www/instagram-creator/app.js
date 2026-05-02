const button = document.getElementById("test-button");
const output = document.getElementById("output");

async function runConfigTest() {
  output.textContent = "Probando conexión con Instagram...";
  button.disabled = true;

  try {
    const response = await fetch("/api/instagram-config-test", { cache: "no-store" });
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = JSON.stringify(
      {
        ok: false,
        error: "No se pudo conectar con el endpoint",
        detail: String(error.message || error),
      },
      null,
      2,
    );
  } finally {
    button.disabled = false;
  }
}

button?.addEventListener("click", runConfigTest);
