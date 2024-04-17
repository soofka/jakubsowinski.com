import { getDistsByPath } from "./helpers/index.js";

const manifest = (data, dists, lang, theme) =>
  JSON.stringify({
    background_color:
      theme.name === "dark"
        ? data.colors.accents.developer.dark
        : data.colors.accents.developer.light,
    description: data.labels[lang].meta.description,
    display: "standalone",
    icons: []
      .concat(getDistsByPath(dists, "images/icon-192x192.png"))
      .concat(getDistsByPath(dists, "images/icon-512x512.png"))
      .map((dist) => ({
        src: dist.rel,
        type: "image/png",
        sizes: dist.name.split("-")[1],
      })),
    name: data.labels[lang].meta.title,
    scope: "/",
    screenshots: [],
    short_name: data.labels[lang].meta.title,
    start_url: data.url,
    theme_color: theme.color,
  });

export default {
  generate: (data) => {
    const dists = [];
    for (let lang of data.langs) {
      for (let theme of data.themes) {
        dists.push({
          name: `manifest-${lang}-${theme.name}`,
          content: (data, dists) => manifest(data, dists, lang, theme),
        });
      }
    }
    return dists;
  },
};
