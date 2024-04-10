const header = (data, dists, { url, name, lang }) =>
  `<header>
    <div class="wrapper">
      <nav>
        <div id="controls">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              id: "logo",
              pageId: `index-${lang}`,
            }),
          )}">
            <h4><span class="architect-fg">s</span><span class="developer-fg">w</span><span class="leader-fg">n</span><span class="teacher-fg">.</span>ski</h4>
          </partial>
          <button id="menu-toggle" aria-label="Menu"></button>
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
                  `<li><a href="${url.replace(`/${lang}/`, `/${otherLang}/`)}">${otherLang}</a></li>`,
              )}
            <li><a href="#" id="theme-toggle" class="no-js">#</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>`;

const getMenuLink = (pageName, currentPageName, lang, labels) =>
  `<li class="${currentPageName === pageName ? "active" : ""}">
    <partial name="link" data="${encodeURI(
      JSON.stringify({ pageId: `${pageName}-${lang}` }),
    )}">${labels[lang].nav[pageName]}</partial>
  </li>`;

export default header;
