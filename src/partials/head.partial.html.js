import {
  getDistByPath,
  getDistsByPath,
  getDistsByPaths,
  getLargestImage,
  sanitizeHtml,
} from "../helpers/index.js";

const head = (
  data,
  dists,
  { url, name, lang, template, type, title, description, image },
) => {
  const separator = " | ";
  const titleText = `${title ? `${title}${separator}` : ""}${data.name}`;
  const descriptionText = `${description ? `${sanitizeHtml(description)}${separator}` : ""}${data.labels[lang].meta.description}`;
  const imagePath = image
    ? image.lastIndexOf(".") === -1
      ? `${image}-*`
      : `${image.substring(0, image.lastIndexOf("."))}-*${image.substring(image.lastIndexOf("."))}`
    : "images/me1-960x960.jpg";

  let canonicalUrl = "";
  let alternateUrls = [];
  if (url) {
    if (template === "slides") {
      canonicalUrl = url || "";
    } else {
      if (url.endsWith("/index")) {
        if (url === `/${data.langs[0]}/index`) {
          alternateUrls = data.langs
            .filter((l) => l !== lang)
            .map((l) => ({ lang: l, url: `/${l}` }));
        } else {
          canonicalUrl = `/${lang}`;
          alternateUrls = data.langs
            .filter((l) => l !== lang)
            .map((l) => ({ lang: l, url: l === data.langs[0] ? "" : `/${l}` }));
        }
      } else {
        canonicalUrl = url || "";
        alternateUrls = data.langs
          .filter((l) => l !== lang)
          .map((l) => ({
            lang: l,
            url: url.replace(
              new RegExp(`/(${data.langs.join("|")})/`),
              `/${l}/`,
            ),
          }));
      }
    }
  }

  return `
    <head>
      <meta charset="utf-8">
      <title>${titleText}</title>
      <meta name="author" content="${data.author} <${data.email}> (${data.url})">
      <meta name="description" content="${descriptionText}">
      <meta property="og:title" content="${titleText}">
      <meta property="og:type" content="${data.type}">
      <meta property="og:url" content="${canonicalUrl}">
      <meta property="og:description" content="${descriptionText}">
      <meta property="og:image" content="${getLargestImage(getDistsByPath(dists, imagePath)).rel}">
      <meta property="og:image:alt" content="${getDistByPath(dists, "images/icon-512x512.png").rel}">

      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 ${template === "slides" ? ", maximum-scale=1.0, user-scalable=no" : ""}">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="color-scheme" content="${data.themes.map((theme) => theme.name).join(" ")}">

      ${canonicalUrl ? `<link rel="canonical" href="${data.url}${canonicalUrl}" />` : ""}
      ${alternateUrls
        .map(
          (alt) =>
            `<link rel="alternate" href="${data.url}${alt.url}" hreflang="${alt.lang}" />`,
        )
        .join("")}

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

      ${type === "cv" ? `<link rel="stylesheet" media="print" href="${getDistByPath(dists, "styles/print.css").rel}">` : ""}
      
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
      
      <link rel="icon" href="favicon.ico" type="image/x-icon">
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
