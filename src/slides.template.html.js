const slides = (data, dists, { url, name, template, type, meta, content }) => {
  const dist = dists.find(
    (dist) =>
      dist.relDir.endsWith(content.id) &&
      dist.name === "index" &&
      dist.ext === ".html",
  );
  return `
    <!doctype html>
    <html lang="${data.langs[0]}">
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
            <partial name="slide"></partial>
            <partial name="slide">
              <partial name="img" src="me1.jpg"></partial>
              <h2>Jakub Sowiński</h2>
              <p class="center">
                <a href="https://swn.ski" target="_blank">swn.ski</a> | <a href="mailto:j@swn.ski" target="_blank">j[at]swn.ski</a>
              </p>
            </partial>
            <partial name="slide">
              <h2>${content.title}</h2>
            </partial>
            ${dist.content}
            <partial name="slide">
              <h2>Thank you</h2>
              <p class="center">
                <a href="https://swn.ski" target="_blank">swn.ski</a> | <a href="mailto:j@swn.ski" target="_blank">j[at]swn.ski</a>
              </p>
            </partial>
            <partial name="slide"></partial>
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
