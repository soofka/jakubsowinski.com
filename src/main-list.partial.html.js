const mainList = (data, dists, { id, name, lang, content = [] }) => `
  <main>
    <section>
      <div class="wrapper">
        <h2>${data.labels[lang].pages[name].meta.title}</h2>
        ${content.map((item, index) => getItem(index, item, name, lang, data.labels[lang], dists)).join("")}
      </div>
    </section>
  </main>
`;

const getItem = (index, item, pageName, lang, labels, dists) => {
  const titleText =
    typeof item.title === "object" && Object.hasOwn(item.title, lang)
      ? item.title[lang]
      : item.title;
  let title = `<h3>${titleText}</h3>`;
  let content = `<p>${
    typeof item.description === "object" &&
    Object.hasOwn(item.description, lang)
      ? item.description[lang]
      : item.description
  }</p>`;
  let meta = item.date;
  let alt;
  let altHighlight = false;
  let footnote = "";
  let pageId;

  switch (pageName) {
    case "articles":
      pageId = `article-${lang}-${item.id}`;
      title = `<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}">${title}</partial>`;
      content = `${content}<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}"><p>${labels.misc.continueReading}</p></partial>`;
      if (item.publications && item.publications.length > 0) {
        meta = `${meta} | ${labels.pages.articles.publishedBy} ${item.publications.map((publication) => `<a href="${publication.url}" target="_blank">${publication.name}</a>`).join(", ")}`;
      }
      alt = `<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}">
        <partial name="img" data="${encodeURI(
          JSON.stringify({
            src: item.image,
            alt: item.title,
            lazy: index > 1,
          }),
        )}"></partial>
      </partial>`;
      break;

    case "blog":
      pageId = `post-${lang}-${item.id}`;
      title = `<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}">${title}</partial>`;
      content = `${content}<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}"><p>${labels.misc.continueReading}</p></partial>`;
      alt = `<partial name="link" data="${encodeURI(
        JSON.stringify({ pageId }),
      )}">
        <partial name="img" data="${encodeURI(
          JSON.stringify({
            src: item.image,
            alt: item.title,
            lazy: index > 1,
          }),
        )}"></partial>
      </partial>`;
      break;

    case "courses":
      const clients =
        typeof item.clients === "object" && Object.hasOwn(item.clients, lang)
          ? item.clients[lang]
          : item.clients;
      if (clients && clients.length > 0) {
        meta = `${meta} | ${labels.pages.courses.taughtFor} ${clients.join(", ")}`;
      }
      alt = `<h4>${labels.pages.courses.courseContent}</h4><ul>${item.content[lang].map((item) => `<li>${item}</li>`).join("")}</ul>`;
      altHighlight = true;
      footnote = `<p class="button-container">
        <a class="button ${index % 2 === 0 ? "leader" : "teacher"}-bg" href="mailto:j@swn.ski?subject=${titleText}">
          ${labels.pages.courses.buy}
        </a>
      </p>`;
      break;

    case "projects":
      const metaItems = [meta];
      if (item.demo) {
        metaItems.push(`<a href="${item.demo}" target="_blank">demo</a>`);
      }
      if (item.github) {
        metaItems.push(
          `<a href="https://github.com/soofka/${item.github}" target="_blank">github</a> (${item.stars} ${labels.pages.projects.stars}, ${item.forks} ${labels.pages.projects.forks})`,
        );
      }
      if (item.npm) {
        metaItems.push(
          `<a href="https://npmjs.com/package/${item.npm}" target="_blank">npm</a> (${item.installs} ${labels.pages.projects.installs})`,
        );
      }
      meta = metaItems.join(" | ");
      break;

    case "talks":
      meta = `${meta} | ${item.conference}, ${item.place[lang]} | <a href="https://youtube.com/watch?v=${item.youtube}" target="_blank">youtube</a>`;
      // if (item.slides) {
      //   const slidesDot = item.slides.lastIndexOf(".");
      //   if (slidesDot > 0) {
      //     meta = `${meta} | <a href="${dists.find((dist) => dist.name === item.slides.substring(0, slidesDot) && dist.ext === item.slides.substring(slidesDot)).rel}" target="_blank">
      //       ${labels.pages.talks.slides}
      //     </a>`;
      //   }
      // }
      alt = `<partial name="youtube" data="${encodeURI(
        JSON.stringify({
          id: item.youtube,
          title: titleText,
          width: 320,
          height: 190,
        }),
      )}"></partial>`;
      break;

    default:
      break;
  }

  meta = `<h4>${meta}</h4>`;

  if (item.langs && Array.isArray(item.langs)) {
    content = `${content}<p><small>${
      item.langs.length === 1
        ? labels.misc.oneAvailableLang
        : labels.misc.multipleAvailableLangs
    } ${item.langs
      .map((itemLang) => labels.misc[`availableLangs_${itemLang}`])
      .join(
        item.langs.length === 2 ? ` ${labels.misc.and} ` : ", ",
      )}</small></p>`;
  }

  return alt
    ? getDoubleColumnItem(title, meta, content, footnote, alt, altHighlight)
    : getSingleColumnItem(title, meta, content, footnote);
};

const getSingleColumnItem = (title, meta, content, footnote) => `
  <article>
    ${title}
    ${meta}
    ${content}
    ${footnote}
  </article>
`;

const getDoubleColumnItem = (
  title,
  meta,
  content,
  footnote,
  alt,
  altHighlight,
) => `
  <article>
    <div class="col ${altHighlight ? "highlight-bg" : ""}">
      ${alt}
    </div>
    <div class="col col-2">
      ${title}
      ${meta}
      ${content}
    </div>
    ${footnote}
  </article>`;

export default mainList;
