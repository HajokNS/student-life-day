import renderCollegeScene from "./college-scene/index.js";
import renderHouseScene from "./house-scene/index.js";
import renderMainScene from "./main-scene/index.js";
import showNotification from "./notification.js";
import renderShopScene from "./shop-scene/index.js";

const objectsData = [];

let currentApp = null;

function renderCharacter(app, scale = 0.2, x = 300, y = 500) {
  const characterTexture = PIXI.Texture.from("../assets/images/character.png");
  const character = new PIXI.Sprite(characterTexture);
  character.scale.set(scale);

  character.x = x;
  character.y = y;

  currentApp = app;

  app.stage.addChild(character);

  const keys = {};

  // Слухачі подій клавіатури
  window.addEventListener("keydown", (e) => {
    keys[e.code] = true;
  });

  window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  // Збираємо дані про всі об'єкти
  getObjectsData(app.stage.children, character);

  // Анімація руху персонажа
  app.ticker.add(() => {
    if (keys["KeyW"]) character.y -= 5;
    if (keys["KeyS"]) character.y += 5;
    if (keys["KeyA"]) character.x -= 5;
    if (keys["KeyD"]) character.x += 5;

    if (keys["KeyQ"]) {
      localStorage.setItem("shouldStartIntro", "true");
      location.reload();
    }

    const nearObject = checkIfNearObject(character);
    if (nearObject) {
      changeLocation(nearObject);
    }
  });
}

function getObjectsData(collection, character) {
  objectsData.length = 0;

  for (const child of collection) {
    if (child !== character && child.getBounds) {
      const bounds = child.getBounds();
      objectsData.push({
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        name: child.name,
      });
    }
  }
}

function checkIfNearObject(character) {
  const characterBounds = character.getBounds();

  for (const object of objectsData) {
    const objectLeft = object.x;
    const objectRight = object.x + object.width;
    const objectTop = object.y;
    const objectBottom = object.y + object.height;

    if (
      characterBounds.x + characterBounds.width > objectLeft &&
      characterBounds.x < objectRight &&
      characterBounds.y + characterBounds.height > objectTop &&
      characterBounds.y < objectBottom
    ) {
      return object;
    }
  }
  return null;
}

function changeLocation(object) {
  if (object.name === "shop") {
    renderShopScene(currentApp);
  } else if (object.name === "townTeleporter") {
    localStorage.setItem('shouldStartIntro', 'false')
    location.reload();
  } else if (object.name === "house") {
    renderHouseScene(currentApp);
  } else if (object.name === "college") {
    renderCollegeScene(currentApp);
  }
}

export default renderCharacter;
