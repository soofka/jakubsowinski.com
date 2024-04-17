import { getDistByPath } from "../helpers/index.js";

const mainItem = (data, dists, { content }) => `
  <main>
    <section>
      <div class="wrapper">
        <h2>${content.title}</h2>
        <p class="right">${content.date}</p>
        <article>
          <partial name="img" data="${encodeURI(
            JSON.stringify({
              src: content.image,
              alt: content.title,
              lazy: false,
            }),
          )}"></partial>
          <h3 style="margin-top: var(--gap-rel)">${content.description}</h3>
          ${getDistByPath(dists, `${content.id}/index.html`).content}
        </article>
      </div>
    </section>
  </main>
`;

export default mainItem;
