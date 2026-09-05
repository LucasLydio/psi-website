import { setupMusicPlayer } from "../../components/music-player.js";
import { setupSplashScreen } from "../../components/splash-screen.js";

const app = document.querySelector("[data-app]");
const splash = document.querySelector("[data-splash]");
const musicPlayer = document.querySelector("[data-music-player]");

function init() {
  setupSplashScreen({ splash, app });
  setupMusicPlayer(musicPlayer);
}

init();
