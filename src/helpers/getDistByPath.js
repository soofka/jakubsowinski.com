import { parseDists } from "./parseDists.js";

export function getDistByPath(dists, path) {
  return parseDists(dists, path)[0];
}

export default getDistByPath;
