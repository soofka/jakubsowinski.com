const header = (data, dists, { url, name, lang }) =>
  `<header>
    <div class="wrapper">
      <label for="menu-toggle-state" id="menu-backdrop"> </label>
      <nav>
        <div id="controls">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              id: "logo",
              class: "plain",
              pageId: `index-${lang}`,
            }),
          )}">
            <h4><partial name="logo"></partial></h4>
          </partial>
          <input type="checkbox" id="menu-toggle-state" />
          <label for="menu-toggle-state" id="menu-toggle" class="button" aria-label="Menu"> </label>
        </div>
        <div id="menu">
          <ul class="horizontal-list">
            ${getMenuLink("projects", name, lang, data.labels)}
            ${getMenuLink("courses", name, lang, data.labels)}
            ${getMenuLink("talks", name, lang, data.labels)}
            ${getMenuLink("articles", name, lang, data.labels)}
            ${getMenuLink("blog", name, lang, data.labels)}
            ${data.langs
              .filter((tempLang) => tempLang !== lang)
              .map(
                (otherLang) =>
                  `<li>${
                    url
                      ? `<a href="${url.replace(`/${lang}/`, `/${otherLang}/`)}">`
                      : `<a href="#" class="no-js" onclick="window.location.pathname = window.location.pathname.replace('/${lang}/', '/${otherLang}/')">`
                  }${otherLang}</a></li>`,
              )}
            <li><a href="#" id="theme-toggle" class="no-js">#</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>`;

const getMenuLink = (pageName, currentPageName, lang, labels) =>
  `<li class="${
    currentPageName === pageName ||
    (pageName === "articles" && currentPageName === "article") ||
    (pageName === "blog" && currentPageName === "post")
      ? "active"
      : ""
  }">
    <partial name="link" pageId="${`${pageName}-${lang}`}">
      ${labels[lang].pages[pageName].title}
    </partial>
  </li>`;

export default header;
