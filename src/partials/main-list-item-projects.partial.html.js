const mainListItemProjects = (
  data,
  dists,
  {
    lang,
    item: {
      title,
      description,
      date,
      langs,
      demo,
      github,
      stars,
      forks,
      npm,
      installs,
    },
  },
) => {
  const metaItems = [];
  if (demo) {
    metaItems.push(`<a href="${demo}" target="_blank">demo</a>`);
  }
  if (github) {
    let githubMetaItem = `<a href="https://github.com/soofka/${github}" target="_blank">github</a>`;
    const githubMetaItemDetails = [];
    if (stars) {
      githubMetaItemDetails.push(
        `${stars} ${data.labels[lang].pages.projects.stars}`,
      );
    }
    if (forks) {
      githubMetaItemDetails.push(
        `${forks} ${data.labels[lang].pages.projects.forks}`,
      );
    }
    if (githubMetaItemDetails.length > 0) {
      githubMetaItem = `${githubMetaItem} (${githubMetaItemDetails.join(", ")})`;
    }
    metaItems.push(githubMetaItem);
  }
  if (npm) {
    let npmMetaItem = `<a href="https://npmjs.com/package/${npm}" target="_blank">npm</a>`;
    const npmMetaItemDetails = [];
    if (installs) {
      npmMetaItemDetails.push(
        `${installs} ${data.labels[lang].pages.projects.installs}`,
      );
    }
    if (npmMetaItemDetails.length > 0) {
      npmMetaItem = `${npmMetaItem} (${npmMetaItemDetails.join(", ")})`;
    }
    metaItems.push(npmMetaItem);
  }
  return `
    <article>
      <h3>${title}</h3>
      <partial name="item-meta" data="${encodeURI(
        JSON.stringify({
          lang,
          date,
          items: [metaItems],
          langs,
        }),
      )}"></partial>
      ${description}
    </article>
  `;
};

export default mainListItemProjects;
