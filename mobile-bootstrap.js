(function () {
  const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if ("serviceWorker" in navigator && (window.location.protocol === "https:" || isLocalhost)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./service-worker.js").catch(function (error) {
        console.warn("No pude registrar el service worker:", error);
      });
    });
  }

  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;
    window.dispatchEvent(new CustomEvent("archivo98-install-ready"));
  });

  window.archivo98InstallApp = async function archivo98InstallApp() {
    if (!deferredPrompt) {
      return false;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    return true;
  };

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
  });
})();
