import { getDistByPath } from "../helpers/index.js";

const mainItem = (data, dists, { name, lang, content: { item, allItems } }) => {
  let parentPageName;
  let itemClassName;
  if (name === "article") {
    parentPageName = "articles";
    itemClassName = "architect";
  } else if (name === "post") {
    parentPageName = "blog";
    itemClassName = "developer";
  }
  return `
    <section>
      <div class="wrapper">
        <p><small>
          <partial name="link" pageId="${parentPageName}-${lang}">
            ${data.labels[lang].pages[parentPageName].title}
          </partial> » <partial name="link" pageId="${`${name}-${lang}-${item.id}`}">
            ${item.title}
          </partial>
        </small></p>
        <h2>${item.title}</h2>
        <p class="right">${item.date}</p>
        <article>
          <partial name="img" data="${encodeURI(
            JSON.stringify({
              src: item.image,
              alt: item.title,
            }),
          )}"></partial>
          <h4>${item.description}</h4>
          ${getDistByPath(dists, `${item.id}/index.html`).content}
          <partial name="scroll-top" class="${itemClassName}"></partial>
        </article>
      </div>
    </section>
    <partial name="main-list" data="${encodeURI(
      JSON.stringify({
        name: parentPageName,
        lang,
        content: allItems
          .filter((i) => i.id !== item.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 5),
        title: data.labels[lang].pages[name].others,
      }),
    )}"></partial>
  `;
};

export default mainItem;
