const main = (data, dists, { name, lang, type, content }) => `
  <main>
    <partial name="main-${type}" data="${encodeURI(
      JSON.stringify({
        name,
        lang,
        content,
      }),
    )}"></partial>
    ${
      type === "home"
        ? ""
        : `<section id="scroll-top">
            <div class="wrapper">
              <partial name="scroll-top" class="${
                name === "articles" || name === "article"
                  ? "architect-fg"
                  : name === "blog" || name === "post" || name === "projects"
                    ? "developer-fg"
                    : name === "talks"
                      ? "leader-fg"
                      : name === "courses"
                        ? "teacher-fg"
                        : ""
              }"></partial>
            </div>
          </section>`
    }
  </main>
`;

export default main;
