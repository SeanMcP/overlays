(async () => {
  const overlayEl = document.getElementById("overlay");
  document.querySelectorAll("button.overlay").forEach((node) => {
    node.addEventListener("click", async () => {
      overlayEl.style.backgroundImage = node.style.backgroundImage;
      if (overlayEl.webkitRequestFullscreen) {
        overlayEl.webkitRequestFullscreen();
      } else {
        await overlayEl.requestFullscreen();
      }
    });
  });

  document
    .getElementById("exit-fullscreen-button")
    .addEventListener("click", () => {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

  function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitIsFullScreen) {
      document.body.dataset.fullscreen = "true";
    } else {
      document.body.removeAttribute("data-fullscreen");
    }
  }

  window.addEventListener("fullscreenchange", toggleFullscreen);
  window.addEventListener("webkitfullscreenchange", toggleFullscreen);

  // Safari Mobile?
  window.addEventListener("webkitbeginfullscreen", toggleFullscreen);
  window.addEventListener("webkitendfullscreen", toggleFullscreen);
})();
