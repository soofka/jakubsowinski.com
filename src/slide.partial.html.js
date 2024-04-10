const slide = (data, dists, attributes, content) =>
  `<section ${Object.keys(attributes)
    .map(
      (attribute) =>
        `${attribute}="${
          attribute === "data-background" ||
          attribute === "data-background-image"
            ? `..${
                dists
                  .filter(
                    (dist) =>
                      (dist.name === attributes[attribute].split(".")[0] ||
                        dist.name.substring(
                          0,
                          attributes[attribute].split(".")[0].length + 1,
                        ) === `${attributes[attribute].split(".")[0]}-`) &&
                      dist.name.indexOf("-") !== -1 &&
                      dist.name.indexOf("x") !== -1,
                  )
                  .reduce((a, b) =>
                    parseInt(a.name.split("-")[1].split("x")[0]) >
                    parseInt(b.name.split("-")[1].split("x")[0])
                      ? a
                      : b,
                  ).rel
              }`
            : attributes[attribute]
        }"`,
    )
    .join(" ")}>
    ${content}
  </section>`;

export default slide;
