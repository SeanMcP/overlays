(async () => {
  // NOTE: Test this on Chrome, Safari, & Firefox
  const overlayEl = document.getElementById("overlay");
  document.querySelectorAll("[data-overlay]").forEach((node) => {
    node.addEventListener("click", async () => {
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
