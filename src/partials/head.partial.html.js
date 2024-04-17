import {
  getDistByPath,
  getDistsByPath,
  getDistsByPaths,
  getLargestImage,
} from "../helpers/index.js";

const head = (data, dists, { url, name, lang, template, type, meta }) => {
  let title = data.labels[lang].meta.title;
  let description = data.labels[lang].meta.description;
  let imagePath = "images/me1-960x960.jpg";

  if (meta) {
    const metaSeparator = " | ";
    if (Object.hasOwn(meta, "title")) {
      title = `${meta.title}${metaSeparator}${title}`;
    }
    if (Object.hasOwn(meta, "description")) {
      description = `${meta.description}${metaSeparator}${description}`;
    }
    if (Object.hasOwn(meta, "image")) {
      imagePath = meta.image;
    }
  }

  return `
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="author" content="${data.author} <${data.email}> (${data.url})">
      <meta name="description" content="${description}">
      <meta property="og:title" content="${title}">
      <meta property="og:type" content="${data.type}">
      <meta property="og:url" content="${data.url}${url || ""}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${getLargestImage(getDistsByPath(dists, `${imagePath}*`)).rel}">
      <meta property="og:image:alt" content="${getDistByPath(dists, "images/icon-512x512.png").rel}">

      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 ${template === "slides" ? ", maximum-scale=1.0, user-scalable=no" : ""}">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="color-scheme" content="${data.themes.map((theme) => theme.name).join(" ")}">

      ${
        url
          ? `<link rel="canonical" href="${data.url}${url}" />
            ${
              template === "slides"
                ? ""
                : data.langs
                    .map(
                      (lang) =>
                        `<link rel="alternate" href="${`${data.url}${url.replace(new RegExp(data.langs.join("|")), lang)}`}" hreflang="${lang}" />`,
                    )
                    .join("")
            }`
          : ""
      }

      ${getDistsByPaths(
        dists,
        "styles/reset.css",
        "styles/style.css",
        `styles/style-${template}.css`,
        `styles/style-${type}.css`,
        `styles/style-${name}.css`,
      )
        .sort((a, b) => {
          if (a.name === "reset") {
            return -1;
          } else if (b.name === "reset") {
            return 1;
          } else if (a.name === "style") {
            return -1;
          } else if (b.name === "style") {
            return 1;
          }
          return 0;
        })
        .map((style) => `<link rel="stylesheet" href="${style.rel}">`)
        .join("")}

      ${data.themes
        .map(
          (theme, index) => `
            <meta name="apple-mobile-web-app-status-bar-style" content="${theme.color}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            <meta class="theme-item ${theme.name}-theme-item" name="theme-color" content="${theme.color}" media="(prefers-color-scheme: ${theme.name})"></meta>
            <link class="theme-item ${theme.name}-theme-item" rel="manifest" href="${getDistByPath(dists, `manifest-${lang}-${theme.name}.webmanifest`).rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            <link class="theme-item ${theme.name}-theme-item" rel="stylesheet" href="${getDistByPath(dists, `style-${theme.name}.css`).rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            <link class="theme-item ${theme.name}-theme-item" rel="stylesheet" href="${getDistByPath(dists, `style-code-${theme.name}.css`).rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">
            ${
              template === "slides"
                ? `<link class="theme-item ${theme.name}-theme-item" rel="stylesheet" href="${getDistByPath(dists, `style-slides-${theme.name}.css`).rel}" media="${index == 0 ? "" : `(prefers-color-scheme: ${theme.name})`}">`
                : ""
            }
          `,
        )
        .join("")}
      
      ${getDistsByPath(dists, "icon-*")
        .map((dist) =>
          dist.name === "icon-16x16" || dist.name === "icon-32x32"
            ? `<link rel="icon" type="image/png" sizes="${dist.name.split("-")[1]}" href="${dist.rel}">`
            : `<link rel="apple-touch-icon" sizes="${dist.name.split("-")[1]}" href="${dist.rel}">`,
        )
        .join("")}
  </head>
  `;
};

export default head;
