const emailLink = (
  data,
  dists,
  { subject, ...attributes },
  content,
) => `<a ${Object.keys(attributes)
  .map((attribute) => `${attribute}="${attributes[attribute]}"`)
  .join(" ")}
  href="mailto:${data.email}${subject ? `?subject=${subject}` : ""}"
  target="_blank">${(content.trim() || "__EMAIL__").replace("__EMAIL__", data.email.replace("@", "[at]"))}</a>`;

export default emailLink;
