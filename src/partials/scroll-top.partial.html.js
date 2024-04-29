const scrollTop = (data, dists, { ...attributes }) => `
  <a href="#" class="center plain"><h2
    ${Object.keys(attributes)
      .map((attribute) => `${attribute}="${attributes[attribute]}"`)
      .join(" ")}
  >↑</h2></a>
`;
export default scrollTop;
