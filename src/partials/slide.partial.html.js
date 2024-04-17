import { getDistsByPath, getLargestImage } from "../helpers/index.js";

const slide = (data, dists, attributes, content) =>
  `<section ${Object.keys(attributes)
    .map(
      (attribute) =>
        `${attribute}="${
          attribute === "data-background" ||
          attribute === "data-background-image"
            ? `..${getLargestImage(getDistsByPath(dists, `${attributes[attribute]}*`)).rel.replaceAll("\\", "/")}`
            : attributes[attribute]
        }"`,
    )
    .join(" ")}>
    ${content}
  </section>`;

export default slide;
