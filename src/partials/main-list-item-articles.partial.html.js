const mainListItemArticles = (
  data,
  dists,
  {
    lang,
    index,
    item: {
      id,
      title,
      image,
      date,
      publications,
      descriptionElement,
      langsNoteElement,
    },
  },
) => {
  const getArticleLink = (link) =>
    `<partial name="link" data="${encodeURI(
      JSON.stringify({ pageId: `article-${lang}-${id}` }),
    )}">${link}</partial>`;

  return `<article>
    <div class="row">
      <div class="col col-2">
        ${getArticleLink(`<h3>${title}</h3>`)}
        <h4>${date}${
          publications && publications.length > 0
            ? ` | ${data.labels[lang].pages.articles.publishedBy} ${publications
                .map(
                  (publication) =>
                    `<a href="${publication.url}" target="_blank">${publication.name}</a>`,
                )
                .join(", ")}`
            : ""
        }</h4>
        ${langsNoteElement}
      </div>
      <div class="col col-1">
        ${getArticleLink(
          `<partial name="img" data="${encodeURI(
            JSON.stringify({
              src: image,
              alt: title,
              lazy: index > 2,
            }),
          )}"></partial>`,
        )}
        </partial>
      </div>
    </div>
    ${descriptionElement}
    ${getArticleLink(`<p>${data.labels[lang].misc.continueReading}</p>`)}
  </article>`;
};

export default mainListItemArticles;
