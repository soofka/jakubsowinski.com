import { parseDists } from "./parseDists.js";

export function getDistsByPath(dists, path) {
  return parseDists(dists, path);
}

export default getDistsByPath;
