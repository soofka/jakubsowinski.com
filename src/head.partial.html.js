const head = (data, dists, { url, name, lang, template, type, meta }) => {
  let title = data.labels[lang].meta.title;
  let description = data.labels[lang].meta.description;
  let imageName = "me1-960x960";
  let imageExt = ".jpg";

  if (meta) {
    const metaSeparator = " | ";
    if (Object.hasOwn(meta, "title")) {
      title = `${meta.title}${metaSeparator}${title}`;
    }
    if (Object.hasOwn(meta, "description")) {
      description = `${meta.description}${metaSeparator}${description}`;
    }
    if (Object.hasOwn(meta, "image")) {
      const imageDot = meta.image.lastIndexOf(".");
      imageName = meta.image.substring(0, imageDot);
      imageExt = meta.image.substring(imageDot);
    }
  }

  return `
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="author" content="${data.author}">
      <meta name="description" content="${description}">
      <meta property="og:title" content="${title}">
      <meta property="og:type" content="${data.type}">
      <meta property="og:url" content="${data.url}${url}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${
        dists
          .filter(
            (dist) =>
              (dist.name === imageName ||
                dist.name.substring(0, imageName.length + 1) ===
                  `${imageName}-`) &&
              dist.ext === imageExt &&
              dist.name.indexOf("-") !== -1 &&
              dist.name.indexOf("x") !== -1,
          )
          .reduce((a, b) =>
            parseInt(a.name.split("-")[1].split("x")[0]) >
            parseInt(b.name.split("-")[1].split("x")[0])
              ? a
              : b,
          ).rel
      }">
      <meta property="og:image:alt" content="${dists.find((dist) => dist.name === "icon-512x512").rel}">

      <meta name="robots" content="index,follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="color-scheme" content="${data.themes.map((theme) => theme.name).join(" ")}">

      <link rel="canonical" href="${data.url}${url}" />
      ${data.langs
        .map(
          (lang) =>
            `<link rel="alternate" href="${`${data.url}${url.replace(new RegExp(data.langs.join("|")), lang)}`}" hreflang="${lang}" />`,
        )
        .join("")}

      ${data.themes
        .map(
          (theme, index) => `
            <meta class="theme-item ${theme.name}-theme-item" name="theme-color" content="${theme.color}" media="(prefers-color-scheme: ${theme.name})"></meta>
            <link class="theme-item ${theme.name}-theme-item" rel="manifest" href="${dists.find((dist) => dist.name === `manifest-${lang}-${theme.name}` && dist.ext === ".webmanifest").rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            <link class="theme-item ${theme.name}-theme-item" rel="stylesheet" href="${dists.find((dist) => dist.name === `style-${theme.name}` && dist.ext === ".css").rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            <meta name="apple-mobile-web-app-status-bar-style" content="${theme.color}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
          `,
        )
        .join("")}
      
      ${dists
        .filter((dist) => dist.name.startsWith("icon-"))
        .map((dist) =>
          dist.name === "icon-16x16" || dist.name === "icon-32x32"
            ? `<link rel="icon" type="image/png" sizes="${dist.name.split("-")[1]}" href="${dist.rel}">`
            : `<link rel="apple-touch-icon" sizes="${dist.name.split("-")[1]}" href="${dist.rel}">`,
        )
        .join("")}

      ${dists
        .filter(
          (dist) =>
            (dist.name === "style" ||
              dist.name === `style-${template}` ||
              dist.name === `style-${type}` ||
              dist.name === `style-${name}`) &&
            dist.ext === ".css",
        )
        .sort((style) => (style.name === "style" ? -1 : 0))
        .map((style) => `<link rel="stylesheet" href="${style.rel}">`)
        .join("")}
  </head>
  `;
};

export default head;
