import renderCharacter from '../character.js';
import renderHouse from './house.js';
import renderShop from './shop.js';
import renderTrader from './trader.js';
import renderTree from './tree.js';
import renderCollege from './college.js';
import renderFountain from './fountain.js';
import launchAllActions from './actions/index.js';
import renderNpc from './npc.js';

function renderMainScene(app) {
  //Очищення поточної сцени
  app.stage.removeChildren();

  changeSceneBackground('../../../assets/images/landscape.png');

  //Міні-Будинок
  renderHouse(app);

  //Магазини
  renderShop(app);

  //Торговець
  renderTrader(app);

  //Дерево
  renderTree(app);

  //Коледж
  renderCollege(app);

  //Фонтан
  renderFountain(app);

  //NPC
  renderNpc(app);

  //Персонаж
  renderCharacter(app);

  launchAllActions(app);
}

function changeSceneBackground(imageUrl) {
  const canvas = document.getElementById("pixi-canvas");
  canvas.style.background = `url(${imageUrl}) no-repeat center center`;
  canvas.style.backgroundSize = "cover";
}

export default renderMainScene;
