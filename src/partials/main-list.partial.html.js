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
                  description:
                    typeof item.description === "object" &&
                    Object.hasOwn(item.description, lang)
                      ? item.description[lang]
                      : item.description,
                },
              }),
            )}"></partial>`,
        )
        .join("")}
    </div>
  </section>
`;

export default mainList;
