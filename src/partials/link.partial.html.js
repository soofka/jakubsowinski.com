const link = (data, dists, { pageId, ...attributes }, content) => {
  const page = data.pages.find((page) => page.id === pageId);
  return `<a ${Object.keys(attributes)
    .map((attribute) => `${attribute}="${attributes[attribute]}"`)
    .join(" ")}
    href="${data.pages.find((page) => page.id === pageId).url}">
    ${content}
  </a>`;
};

export default link;
