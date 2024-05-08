const itemMeta = (data, dists, { lang, date, items = [[]], langs = [] }) => `
  <h4>${date ? `${date} | ` : ""}${items[0].join(" | ")}</h4>
  ${items
    .slice(1)
    .map((row) => `<h4>${row.join(" | ")}</h4>`)
    .join("")}
  ${
    langs.length > 0
      ? `<p><small>${
          langs.length === 1
            ? data.labels[lang].misc.oneAvailableLang
            : data.labels[lang].misc.multipleAvailableLangs
        } ${langs
          .map(
            (itemLang) => data.labels[lang].misc[`availableLangs_${itemLang}`],
          )
          .join(
            langs.length === 2 ? ` ${data.labels[lang].misc.and} ` : ", ",
          )}</small></p>`
      : ""
  }
`;

export default itemMeta;
