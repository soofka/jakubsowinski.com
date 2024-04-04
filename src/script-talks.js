(() => {
  const youTubeScriptUrl = "https://www.youtube.com/iframe_api";
  for (let element of document.querySelectorAll("img.youtube")) {
    element.addEventListener("click", (e) => {
      if (
        !Array.from(document.getElementsByTagName("script")).find(
          (script) => script.getAttribute("src") === youTubeScriptUrl,
        )
      ) {
        const scriptTag = document.createElement("script");
        scriptTag.src = youTubeScriptUrl;
        document.body.append(scriptTag);
        window.onYouTubeIframeAPIReady = () =>
          playYouTube(e.target.id, e.target.dataset.id);
      } else {
        playYouTube(e.target.id, e.target.dataset.id);
      }
    });
  }
  function playYouTube(elementId, videoId) {
    new YT.Player(elementId, { videoId, width: "100%", height: "auto" });
  }
})();
