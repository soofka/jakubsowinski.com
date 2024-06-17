const link = (data, dists, { pageId, ...attributes }, content) => `
  <a ${Object.keys(attributes)
    .map((attribute) => `${attribute}="${attributes[attribute]}"`)
    .join(" ")}
    href="${data.pages.find((page) => page.id === pageId).url}">${content.trim()}</a>
`;

export default link;
