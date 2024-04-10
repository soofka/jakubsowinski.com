const slides = (data, dists, { url, name, template, type, meta, content }) => {
  const dist = dists.find(
    (dist) =>
      dist.relDir.endsWith(content.id) &&
      dist.name === "index" &&
      dist.ext === ".html",
  );
  return `
    <!doctype html>
    <html lang="en">
      <partial name="head" data="${encodeURI(
        JSON.stringify({
          url,
          name,
          lang: "en",
          template,
          type,
          meta,
        }),
      )}"></partial>
      <body class="${type}">
        <main class="reveal" style="height: 100%">
          <div class="slides">
            ${dist.content}
          </div>
        </main>
        <partial name="scripts" data="${encodeURI(
          JSON.stringify({
            name,
            template,
            type,
            inline: ["Reveal.initialize({ hash: true })"],
            defer: false,
          }),
        )}"></partial>
      </body>
    </html>
  `;
};

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
