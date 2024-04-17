const page = (
  data,
  dists,
  { id, url, name, lang, template, type, meta, content },
) =>
  `<!doctype html>
  <html lang="${lang}">
    <partial name="head" data="${encodeURI(
      JSON.stringify({
        url,
        name,
        lang,
        template,
        type,
        meta,
      }),
    )}"></partial>
    <body class="${type}">
      <partial name="header" data="${encodeURI(
        JSON.stringify({
          url,
          name,
          lang,
        }),
      )}"></partial>
      <partial name="main-${type}" data="${encodeURI(
        JSON.stringify({
          name,
          lang,
          content,
        }),
      )}"></partial>
      <partial name="footer" data="${encodeURI(
        JSON.stringify({
          lang,
          type,
        }),
      )}"></partial>
      <partial name="scripts" data="${encodeURI(
        JSON.stringify({
          name,
          template,
          type,
        }),
      )}"></partial>
    </body>
  </html>`;

export default {
  generate: (data) =>
    data.pages
      .filter((pageData) => pageData.template === "page")
      .map((pageData) => ({
        name: pageData.id,
        content: (data, dists) => page(data, dists, pageData),
        resetContentHash: true,
        contentHashSalt: `${pageData.id}${JSON.stringify(pageData.content)}`,
      })),
};
