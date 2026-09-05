export function setupMusicPlayer(root) {
  const button = root.querySelector("[data-play-button]");
  const icon = root.querySelector("[data-play-icon]");
  const audio = root.querySelector("[data-audio]");

  if (!button || !icon || !audio) return;

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {
        root.classList.remove("is-playing");
        icon.textContent = "Play";
      });
      return;
    }

    audio.pause();
  });

  audio.addEventListener("play", () => {
    root.classList.add("is-playing");
    icon.textContent = "Pause";
    button.setAttribute("aria-pressed", "true");
    button.setAttribute("aria-label", "Pausar trilha Peaceful ambient");
  });

  audio.addEventListener("pause", () => {
    root.classList.remove("is-playing");
    icon.textContent = "Play";
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "Tocar trilha Peaceful ambient");
  });
}
