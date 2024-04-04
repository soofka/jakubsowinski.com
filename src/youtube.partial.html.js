const youtube = (data, dists, { id, title, width, height }) => `
  <img
    id="yt-${id}"
    data-id="${id}"
    class="youtube"
    src="https://img.youtube.com/vi/${id}/0.jpg"
    alt="${title}"
    width="${width}"
    height="${height}"
    style="cursor:pointer"
  >`;

export default youtube;
