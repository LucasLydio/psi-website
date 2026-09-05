export function setupMusicPlayer(root) {
  const button = root.querySelector("[data-play-button]");
  const icon = root.querySelector("[data-play-icon]");
  const audio = root.querySelector("[data-audio]");

  if (!button || !icon || !audio) return;

  function setPlayingState(isPlaying) {
    root.classList.toggle("is-playing", isPlaying);
    icon.textContent = isPlaying ? "Pause" : "Play";
    button.setAttribute("aria-pressed", String(isPlaying));
    button.setAttribute(
      "aria-label",
      isPlaying ? "Pausar trilha Peaceful ambient" : "Tocar trilha Peaceful ambient",
    );
  }

  function playTrack() {
    return audio.play().catch(() => {
      setPlayingState(false);
    });
  }

  button.addEventListener("click", () => {
    if (audio.paused) {
      playTrack();
      return;
    }

    audio.pause();
  });

  audio.addEventListener("play", () => {
    setPlayingState(true);
  });

  audio.addEventListener("pause", () => {
    setPlayingState(false);
  });

  playTrack();
}
