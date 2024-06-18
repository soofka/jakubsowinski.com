import { getDistByPath } from "./helpers/index.js";

const slides = (data, dists, { url, name, template, type, title, content }) => `
  <!doctype html>
  <html lang="${data.langs[0]}">
    <partial name="head" data="${encodeURI(
      JSON.stringify({
        url,
        name,
        lang: "en",
        template,
        type,
        title,
      }),
    )}"></partial>
    <body class="${type}">
      <main class="reveal">
        <div class="slides">
          <partial name="slide">
            <p class="center">
              <small>Press → to see first slide</small>
              <small>Press ESC to see all slides</small>
            </p>
          </partial>
          <partial name="slide">
            <partial name="img" src="me1.jpg"></partial>
            <h2>Jakub Sowiński</h2>
            <p class="center">
              <a href="https://jakubsowinski.com" target="_blank">jakubsowinski.com</a> | <partial name="link-email"></partial>
            </p>
          </partial>
          <partial name="slide">
            <h2>${content.title}</h2>
          </partial>
          ${getDistByPath(dists, `${content.id}/index.html`).content}
          <partial name="slide">
            <h2>Thank you</h2>
            <p class="center">
              <a href="jakubsowinski.com" target="_blank">jakubsowinski.com</a> | <partial name="link-email"></partial>
            </p>
          </partial>
          <partial name="slide">
            <p class="center">
              <small>Press ← to see last slide</small>
              <small>Press ESC to see all slides</small>
            </p>
          </partial>
        </div>
      </main>
      <partial name="scripts" data="${encodeURI(
        JSON.stringify({
          name,
          template,
          type,
          inline: ["Reveal.initialize({ hash: true })"],
          defer: false,
          noScript: true,
        }),
      )}"></partial>
    </body>
  </html>
`;

export default {
  generate: (data) =>
    data.pages
      .filter((pageData) => pageData.template === "slides")
      .map((pageData) => ({
        name: pageData.id,
        content: (data, dists) => slides(data, dists, pageData),
        resetContentHash: true,
        contentHashSalt: `${pageData.id}${JSON.stringify(pageData.content)}`,
      })),
};
