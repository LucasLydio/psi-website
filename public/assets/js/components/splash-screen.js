const SPLASH_DURATION_MS = 1350;
const SPLASH_FADE_MS = 520;

export function setupSplashScreen({ splash, app }) {
  if (!splash || !app) return;

  window.setTimeout(() => {
    splash.classList.add("is-leaving");
    app.hidden = false;
  }, SPLASH_DURATION_MS);

  window.setTimeout(() => {
    splash.remove();
  }, SPLASH_DURATION_MS + SPLASH_FADE_MS);
}
