import { getDistByPath } from "../helpers/index.js";

const mainListItemTalks = (
  data,
  dists,
  {
    lang,
    index,
    item: { title, description, date, langs, event, place, recording, slides },
  },
) => {
  let sideElement = `<partial name="img" data="${encodeURI(
    JSON.stringify({
      src: "images/no_recording.jpg",
      alt: data.labels[lang].pages.talks.noRecording,
      lazy: index > 2,
    }),
  )}"></partial>`;

  const metaItems = [[event, place[lang]], []];
  if (recording) {
    const recordingsArray = [];
    if (recording.youtube) {
      sideElement = `<partial name="youtube" data="${encodeURI(
        JSON.stringify({
          id: recording.youtube,
          title,
          width: 480,
          height: 360,
        }),
      )}"></partial>`;
      recordingsArray.push(
        `<a href="https://youtube.com/watch?v=${recording.youtube}" target="_blank">youtube</a>`,
      );
    }
    if (recordingsArray.length > 0) {
      metaItems[1].push(
        `${data.labels[lang].pages.talks.recording}: ${recordingsArray.join(", ")}`,
      );
    }
  }
  if (slides) {
    const slidesArray = [];
    if (slides.html) {
      slidesArray.push(
        `<partial name="link" pageId="slides-${slides.id}" target="_blank">html</partial>`,
      );
    }
    if (slides.pdf) {
      slidesArray.push(
        `<a href="${getDistByPath(dists, `${slides.id}/index.pdf`).rel}" target="_blank">pdf</a>`,
      );
    }
    if (slidesArray.length > 0) {
      metaItems[1].push(
        `${data.labels[lang].pages.talks.slides}: ${slidesArray.join(", ")}`,
      );
    }
  }
  return `<article>
    <div class="row">
      <div class="col col-2">
        <h3>${title}</h3>
        <partial name="item-meta" data="${encodeURI(
          JSON.stringify({
            lang,
            date,
            items: metaItems,
            langs,
          }),
        )}"></partial>
      </div>
      <div class="col col-1">
        ${sideElement}
      </div>
    </div>
    <p>${description}</p>
  </article>`;
};

export default mainListItemTalks;
