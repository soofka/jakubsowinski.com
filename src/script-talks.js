(() => {
  const youTubeScriptUrl = "https://www.youtube.com/iframe_api";
  for (let element of document.querySelectorAll("a.youtube")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const img = element.querySelector("img");
      const play = () => playYouTube(img.id, img.dataset.id);
      if (
        !Array.from(document.getElementsByTagName("script")).find(
          (script) => script.getAttribute("src") === youTubeScriptUrl,
        )
      ) {
        const scriptTag = document.createElement("script");
        scriptTag.src = youTubeScriptUrl;
        document.body.append(scriptTag);
        window.onYouTubeIframeAPIReady = play;
      } else {
        play();
      }
    });
  }
  function playYouTube(elementId, videoId) {
    new YT.Player(elementId, { videoId, width: "100%", height: "auto" });
  }
})();
