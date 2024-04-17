(() => {
  for (let element of document.querySelectorAll(".no-js")) {
    element.classList.remove("no-js");
  }

  let theme =
    window.localStorage.getItem("theme") ||
    (window.matchMedia &&
    window.matchMedia("(prefers-colors-scheme: dark)").matches
      ? "dark"
      : "light");
  const themeInQs = new URLSearchParams(window.location.search).get("t");
  if (themeInQs) {
    theme = themeInQs === "l" ? "light" : themeInQs === "d" ? "dark" : theme;
  }

  const toggle = document.querySelector("#theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      applyTheme(theme === "light" ? "dark" : "light", e.target);
    });
  }
  applyTheme(theme, toggle, true);

  function applyTheme(newTheme, toggle, force = false) {
    if (
      (newTheme === "light" || newTheme === "dark") &&
      (newTheme !== theme || force)
    ) {
      theme = newTheme;

      for (let element of document.querySelectorAll(
        `.theme-item:not(.${theme}-theme-item)`,
      )) {
        element.disabled = true;
      }
      for (let element of document.querySelectorAll(
        `.theme-item.${theme}-theme-item`,
      )) {
        element.removeAttribute("media");
        element.removeAttribute("disabled");
      }

      const qs = new URLSearchParams(window.location.search);
      const currentUrl = `${window.location.origin}${window.location.pathname}${window.location.search ? `?${qs.toString()}` : ""}`;
      qs.set("t", theme === "dark" ? "d" : "l");
      const newUrl = `${window.location.origin}${window.location.pathname}?${qs.toString()}`;
      window.history.replaceState(currentUrl, "", newUrl);
      window.localStorage.setItem("theme", theme);
      if (toggle) {
        toggle.textContent = theme === "dark" ? "light" : "dark";
      }
    }
  }
})();
