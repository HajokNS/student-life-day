import renderCharacter from "../character.js";
import showNotification from "../notification.js";
import renderTownTeleporter from "../town-teleporter.js";
import launchAllActions from "./actions/index.js";

function renderCollegeScene(app) {
  //Очищення поточної сцени
  app.stage.removeChildren();

  changeSceneBackground('../../../assets/images/college-scene.png');

  renderTownTeleporter(app, 620, 10);

  renderCharacter(app, 0.3, 600, 600);

  launchAllActions(app);
}

function changeSceneBackground(imageUrl) {
  const canvas = document.getElementById("pixi-canvas");
  canvas.style.background = `url(${imageUrl}) no-repeat center center`;
  canvas.style.backgroundSize = "cover";
}

export default renderCollegeScene;
