import { getDistByPath } from "../helpers/index.js";

const mainItem = (data, dists, { name, lang, content: { item, allItems } }) => `
  <section>
    <div class="wrapper">
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
        <partial name="scroll-top" class="${name === "article" ? "architect-fg" : name === "post" ? "developer-fg" : ""}"></partial>
      </article>
    </div>
  </section>
  <partial name="main-list" data="${encodeURI(
    JSON.stringify({
      name: name === "article" ? "articles" : name === "post" ? "blog" : "",
      lang,
      content: allItems
        .filter((i) => i.id !== item.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 5),
      title: data.labels[lang].pages[name].others,
    }),
  )}"></partial>
`;

export default mainItem;
