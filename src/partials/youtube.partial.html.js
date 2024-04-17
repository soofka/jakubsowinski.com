const youtube = (data, dists, { id, title, width, height }) => `
  <a class="youtube" href="https://www.youtube.com/watch?v=${id}" target="_blank">
    <img
      id="yt-${id}"
      data-id="${id}"
      src="https://img.youtube.com/vi/${id}/0.jpg"
      alt="${title}"
      width="${width}"
      height="${height}"
    >
  </a>
`;

export default youtube;
