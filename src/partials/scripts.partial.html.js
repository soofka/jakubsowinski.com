import { getDistsByPaths } from "../helpers/index.js";

const scripts = (
  data,
  dists,
  { name, template, type, inline = [], defer = true, noScript = false },
) =>
  getDistsByPaths(
    dists,
    "scripts/script.js",
    `scripts/script-${template}.js`,
    `scripts/script-${type}.js`,
    `scripts/script-${name}.js`,
  )
    .sort((a, b) => (a.name === "script" ? -1 : b.name === "script" ? 1 : 0))
    .map(
      (script) =>
        `<script ${defer ? "defer" : ""} src="${script.rel}"> </script>`,
    )
    .concat(
      inline.map(
        (script) => `<script ${defer ? "defer" : ""}>${script}</script>`,
      ),
      noScript
        ? [
            `<noscript><p>${data.labels[data.langs[0]].misc.noJs}</p></noscript>`,
          ]
        : [],
    )
    .join("");

export default scripts;
