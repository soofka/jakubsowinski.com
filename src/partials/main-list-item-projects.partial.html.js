const mainListItemProjects = (
  data,
  dists,
  {
    lang,
    item: {
      title,
      date,
      demo,
      github,
      stars,
      forks,
      npm,
      installs,
      descriptionElement,
      langsNoteElement,
    },
  },
) => `<article>
  <h3>${title}</h3>
  <h4>${date}
    ${demo ? ` | <a href="${demo}" target="_blank">demo</a>` : ""}
    ${
      github
        ? ` | <a href="https://github.com/soofka/${github}" target="_blank">github</a> (${stars} ${data.labels[lang].pages.projects.stars}, ${forks} ${data.labels[lang].pages.projects.forks})`
        : ""
    }
    ${
      npm
        ? ` | <a href="https://npmjs.com/package/${npm}" target="_blank">npm</a> (${installs} ${data.labels[lang].pages.projects.installs})`
        : ""
    }
  </h4>
  ${descriptionElement}
  ${langsNoteElement}
</article>`;

export default mainListItemProjects;
