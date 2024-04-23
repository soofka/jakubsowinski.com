import { getDistByPath } from "../helpers/index.js";

const mainListItemTalks = (
  data,
  dists,
  {
    lang,
    item: {
      title,
      date,
      event,
      place,
      recording,
      slides,
      descriptionElement,
      langsNoteElement,
    },
  },
) => {
  let sideElement = `<partial name="img" data="${encodeURI(
    JSON.stringify({
      src: "images/no_recording.jpg",
      alt: data.labels[lang].pages.talks.noRecording,
    }),
  )}"></partial>`;

  const metaSecondRowItems = [];
  if (recording) {
    const recordingsArray = [];
    if (recording.youtube) {
      sideElement = `<partial name="youtube" data="${encodeURI(
        JSON.stringify({
          id: recording.youtube,
          title,
          width: 320,
          height: 190,
        }),
      )}"></partial>`;
      recordingsArray.push(
        `<a href="https://youtube.com/watch?v=${recording.youtube}" target="_blank">youtube</a>`,
      );
    }
    if (recordingsArray.length > 0) {
      metaSecondRowItems.push(
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
      metaSecondRowItems.push(
        `${data.labels[lang].pages.talks.slides}: ${slidesArray.join(", ")}`,
      );
    }
  }
  return `<article>
    <div class="col col-2">
      <h3>${title}</h3>
      <h4>${date} | ${event}, ${place[lang]}</h4>
      ${metaSecondRowItems.length === 0 ? "" : `<h4>${metaSecondRowItems.join(" | ")}</h4>`}
      ${langsNoteElement}
    </div>
    <div class="col">
      ${sideElement}
    </div>
    ${descriptionElement}
  </article>`;
};

export default mainListItemTalks;
