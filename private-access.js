(function () {
  const SUPABASE_URL = "https://qttxcfbgyfmvyglzwxct.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_8zeUhO0eNbsQddb7koQZ1w_VwuK8FjO";
  const PRIVATE_ACCESS_CODES = [
    [116, 117, 109, 98, 101, 114, 106, 101, 114, 101, 109, 121, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109],
  ];
  const allowed = PRIVATE_ACCESS_CODES.map((codes) => String.fromCharCode(...codes));
  const style = document.createElement("style");
  style.textContent = "html.private-access-pending body{visibility:hidden!important}";
  document.documentElement.classList.add("private-access-pending");
  document.head.appendChild(style);

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function unlock() {
    document.documentElement.classList.remove("private-access-pending");
  }

  function deny() {
    window.location.replace("./desktop/?app=users");
  }

  function loadSupabase() {
    if (window.supabase?.createClient) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function checkAccess() {
    try {
      await loadSupabase();
      const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const { data } = await client.auth.getSession();
      const current = normalize(data?.session?.user?.email);
      if (current && allowed.includes(current)) {
        unlock();
        return;
      }
    } catch (_error) {
      // Closed by default.
    }
    deny();
  }

  checkAccess();
})();
