const mainListItemBlog = (
  data,
  dists,
  { lang, index, item: { id, title, description, image, date, langs } },
) => {
  const getPostLink = (link) =>
    `<partial name="link" data="${encodeURI(
      JSON.stringify({ pageId: `post-${lang}-${id}` }),
    )}">${link}</partial>`;

  return `<article>
    <div class="row">
      <div class="col col-2">
        ${getPostLink(`<h3>${title}</h3>`)}
        <partial name="item-meta" data="${encodeURI(
          JSON.stringify({
            lang,
            date,
            langs,
          }),
        )}"></partial>
      </div>
      <div class="col col-1">
        ${getPostLink(
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
    <p>${description}</p>
    ${getPostLink(`<p>${data.labels[lang].misc.continueReading}</p>`)}
  </article>`;
};

export default mainListItemBlog;
