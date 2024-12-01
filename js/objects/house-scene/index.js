import renderCharacter from "../character.js";
import showNotification from "../notification.js";
import renderTownTeleporter from "../town-teleporter.js";
import launchAllActions from "./actions/index.js";

function renderHouseScene(app) {
  //Очищення поточної сцени
  app.stage.removeChildren();

  changeSceneBackground('../../../assets/images/house-inside.png');

  renderTownTeleporter(app, 950, 120);

  renderCharacter(app, 0.4, 600, 400);

  launchAllActions(app);
}

function changeSceneBackground(imageUrl) {
  const canvas = document.getElementById("pixi-canvas");
  canvas.style.background = `url(${imageUrl}) no-repeat center center`;
  canvas.style.backgroundSize = "cover";
}

export default renderHouseScene;
