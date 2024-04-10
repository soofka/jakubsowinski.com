const scripts = (
  data,
  dists,
  { name, template, type, inline = [], defer = true },
) =>
  dists
    .filter(
      (dist) =>
        (dist.name === "script" ||
          dist.name === `script-${name}` ||
          dist.name === `script-${template}` ||
          dist.name === `script-${type}`) &&
        dist.ext === ".js",
    )
    .sort((script) => (script.name === "script" ? -1 : 0))
    .map(
      (script) =>
        `<script ${defer ? "defer" : ""} src="${script.rel}"> </script>`,
    )
    .concat(
      inline.map(
        (script) => `<script ${defer ? "defer" : ""}>${script}</script>`,
      ),
    )
    .join("");

export default scripts;
