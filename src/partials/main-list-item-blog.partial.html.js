const mainListItemBlog = (
  data,
  dists,
  {
    lang,
    index,
    item: { id, title, image, date, descriptionElement, langsNoteElement },
  },
) => {
  const getPostLink = (link) =>
    `<partial name="link" data="${encodeURI(
      JSON.stringify({ pageId: `post-${lang}-${id}` }),
    )}">${link}</partial>`;

  return `<article>
    <div class="row">
      <div class="col col-2">
        ${getPostLink(`<h3>${title}</h3>`)}
        <h4>${date}</h4>
        ${langsNoteElement}
      </div>
      <div class="col col-1">
        ${getPostLink(
          `<partial name="img" data="${encodeURI(
            JSON.stringify({
              src: image,
              alt: title,
              lazy: index > 1,
            }),
          )}"></partial>`,
        )}
        </partial>
      </div>
    </div>
    ${descriptionElement}
    ${getPostLink(`<p>${data.labels[lang].misc.continueReading}</p>`)}
  </article>`;
};

export default mainListItemBlog;
