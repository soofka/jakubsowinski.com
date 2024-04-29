const mainList = (data, dists, { name, lang, content = [], title }) => `
  <section>
    <div class="wrapper">
      <h2>${title || data.labels[lang].pages[name].title}</h2>
      ${content
        .map(
          (item, index) =>
            `<partial name="main-list-item-${name}" data="${encodeURI(
              JSON.stringify({
                name,
                lang,
                index,
                item: {
                  ...item,
                  title:
                    typeof item.title === "object" &&
                    Object.hasOwn(item.title, lang)
                      ? item.title[lang]
                      : item.title,
                  descriptionElement: ((description) =>
                    description.charAt(0) === "<"
                      ? description
                      : `<p>${description}</p>`)(
                    typeof item.description === "object" &&
                      Object.hasOwn(item.description, lang)
                      ? item.description[lang]
                      : item.description,
                  ),
                  langsNoteElement:
                    item.langs && Array.isArray(item.langs)
                      ? `<p><small>${
                          item.langs.length === 1
                            ? data.labels[lang].misc.oneAvailableLang
                            : data.labels[lang].misc.multipleAvailableLangs
                        } ${item.langs
                          .map(
                            (itemLang) =>
                              data.labels[lang].misc[
                                `availableLangs_${itemLang}`
                              ],
                          )
                          .join(
                            item.langs.length === 2
                              ? ` ${data.labels[lang].misc.and} `
                              : ", ",
                          )}</small></p>`
                      : "",
                },
              }),
            )}"></partial>`,
        )
        .join("")}
    </div>
  </section>
`;

export default mainList;
