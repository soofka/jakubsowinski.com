export function getLargestImage(imgDists) {
  return imgDists.reduce((a, b) =>
    parseInt(a.name.split("-")[1].split("x")[0]) >
    parseInt(b.name.split("-")[1].split("x")[0])
      ? a
      : b,
  );
}

export default getLargestImage;
