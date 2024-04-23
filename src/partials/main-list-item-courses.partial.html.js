const mainListItemCourses = (
  data,
  dists,
  {
    lang,
    index,
    item: {
      title,
      date,
      clients = [],
      content = [],
      descriptionElement,
      langsNoteElement,
    },
  },
) => {
  const clientsArray =
    typeof clients === "object" && Object.hasOwn(clients, lang)
      ? clients[lang]
      : clients;

  return `<article>
    <div class="row">
      <div class="col col-2">
        <h3>${title}</h3>
        <h4>${date}${
          clientsArray.length > 0
            ? ` | ${data.labels[lang].pages.courses.taughtFor} ${clientsArray.join(", ")}`
            : ""
        }</h4>
        ${descriptionElement}
        ${langsNoteElement}
        <div class="buttons desktop-only">
          <partial name="link-email" subject="${title}" class="button ${index % 2 === 0 ? "leader" : "teacher"}-bg">
            ${data.labels[lang].pages.courses.buy}
          </partial>
        </div>
      </div>
      <div class="col col-1 highlight-bg">
        <h4>${data.labels[lang].pages.courses.courseContent}</h4>
        <ul>${content[lang].map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="buttons mobile-only">
        <partial name="link-email" subject="${title}" class="button ${index % 2 === 0 ? "leader" : "teacher"}-bg">
          ${data.labels[lang].pages.courses.buy}
        </partial>
      </div>
    </div>
  </article>`;
};

export default mainListItemCourses;
