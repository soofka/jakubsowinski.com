import { sep } from "path";

export function parseDists(dists, path) {
  const pathArray = path.split("/");
  let relDir = pathArray.slice(0, pathArray.length - 1).join(sep);
  relDir = escapeString(
    `${relDir.charAt(0) === sep ? "" : `${sep}*`}${relDir}`,
  );

  let name = pathArray[pathArray.length - 1];
  let ext = "";
  const extIndex = name.lastIndexOf(".");
  if (extIndex >= 0) {
    ext = name.substring(extIndex);
    name = name.substring(0, extIndex);
  }

  const relDirRegExp = getRegExp(relDir);
  const nameRegExp = getRegExp(name);
  const extRegExp = getRegExp(ext);

  return dists.filter((dist) => {
    const res1 = relDirRegExp.test(escapeString(dist.relDir));
    const res2 = nameRegExp.test(dist.name);
    const res3 = ext ? extRegExp.test(dist.ext) : true;
    return res1 && res2 && res3;
  });
}

function escapeString(string, separator = "__") {
  return string.replaceAll(sep, separator).replaceAll("\\", separator);
}

function getRegExp(regExpString) {
  return new RegExp(
    `^${regExpString.replaceAll(".", "\\.").replaceAll("*", ".*")}$`,
  );
}

export default parseDists;
