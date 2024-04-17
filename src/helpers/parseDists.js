import { sep } from "path";

export function parseDists(dists, path) {
  let rel = path;
  let ext;
  const extIndex = path.lastIndexOf(".");
  if (extIndex >= 0) {
    rel = path.substring(0, extIndex);
    ext = path.substring(extIndex);
  }
  if (rel.charAt(0) !== "/") {
    rel = `*${rel}`;
  }
  if (rel.charAt(rel.length - 1) !== "/") {
    rel = `${rel}*`;
  }
  const relRegExp = new RegExp(
    `^${`${sep}${rel}${ext || ""}`
      .replaceAll("/", sep)
      .replaceAll("\\", "\\\\")
      .replaceAll(".", "\\.")
      .replaceAll("*", ".*")}$`,
    "g",
  );
  return dists.filter((dist) => relRegExp.test(dist.rel));
}

export default parseDists;
