const mainItem = (data, dists, { id, name, lang, content }) => {
  const dist = dists.find(
    (dist) =>
      dist.relDir.endsWith(content.id) &&
      dist.name === "index" &&
      dist.ext === ".html",
  );
  return `
    <main>
      <section>
        <div class="wrapper">
          <h2>${content.title}</h2>
          <p class="right">${content.date}</p>
          <article>
            <partial name="img" data="${encodeURI(
              JSON.stringify({
                src: content.image,
                alt: content.title,
                lazy: false,
              }),
            )}"></partial>
            <h3 style="margin-top: var(--gap-rel)">${content.description}</h3>
            ${dist.content}
          </article>
        </div>
      </section>
    </main>
  `;
};

export default mainItem;
