import renderCharacter from "../character.js";
import renderTownTeleporter from "../town-teleporter.js";
import launchAllActions from "./actions/index.js";

function renderShopScene(app) {
  //Очищення поточної сцени
  app.stage.removeChildren();

  changeSceneBackground('../../../assets/images/shop-scene.png');

  renderTownTeleporter(app);

  renderCharacter(app, 0.4, 1200, 50);

  launchAllActions(app);
}

function changeSceneBackground(imageUrl) {
  const canvas = document.getElementById("pixi-canvas");
  canvas.style.background = `url(${imageUrl}) no-repeat center center`;
  canvas.style.backgroundSize = "cover";
}

export default renderShopScene;
