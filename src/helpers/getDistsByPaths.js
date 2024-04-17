import { parseDists } from "./parseDists.js";

export function getDistsByPaths(dists, ...paths) {
  return [].concat(...paths.map((path) => parseDists(dists, path)));
}

export default getDistsByPaths;
