const img = (
  data,
  dists,
  { src, alt = "", lazy = true, withCaption = false, ...attributes },
) => {
  const imgName = src.split(".")[0];
  const imgDists = dists.filter(
    (element) =>
      element.name === imgName ||
      element.name.substring(0, imgName.length + 1) === `${imgName}-`,
  );

  let imgDist;
  const sourceDists = {};
  for (let dist of imgDists) {
    const [imgDistName, imgDistSize] = dist.name.split("-");
    if (imgDistSize) {
      const imgDistType = dist.ext.substring(1);
      if (!Object.hasOwn(sourceDists, imgDistType)) {
        sourceDists[imgDistType] = [];
      }
      const [imgDistWidth, imgDistHeight] = imgDistSize.split("x");
      const distObj = {
        width: parseInt(imgDistWidth),
        height: parseInt(imgDistHeight),
        type: imgDistType,
        url: dist.rel,
      };
      if (imgDist === undefined) {
        imgDist = { ...distObj };
      } else if (imgDist.width <= distObj.width) {
        sourceDists[imgDist.type].push({ ...imgDist });
        imgDist = { ...distObj };
      } else {
        sourceDists[imgDistType].push({ ...distObj });
      }
    }
  }

  if (!imgDist) {
    console.log("NO IMGDIST", src);
  }

  const picture = `<picture>
      ${Object.keys(sourceDists)
        .map(
          (type) =>
            `<source
              srcset="${sourceDists[type]
                .map(({ width, url }) => `${url} ${width}w`)
                .join(",")}"
              sizes="${sourceDists[type]
                .map(
                  ({ width }, index) =>
                    `${index === sourceDists[type].length - 1 ? "" : `(max-width: ${width}px) `}${width}px`,
                )
                .join(",")}"
              type="image/${type}"
            >`,
        )
        .join("")}
      <img ${Object.keys(attributes)
        .map((attribute) => `${attribute}="${attributes[attribute]}"`)
        .join(" ")}
        src="${imgDist.url}"
        alt="${alt}"
        width="${imgDist.width}"
        height="${imgDist.height}"
        ${lazy ? 'loading="lazy"' : ""}
      >
    </picture>`;

  return withCaption
    ? `<figure>${picture}<figcaption>${alt}</figcaption></figure>`
    : picture;
};

export default img;
