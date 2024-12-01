function renderHouse(app) {
  const houseTexture = PIXI.Texture.from("../../assets/images/mini-house.png");
  const houseSprite = new PIXI.Sprite(houseTexture);

  houseSprite.x = 275;
  houseSprite.y = 45;
  houseSprite.name = 'house';
  houseSprite.width = 315;
  houseSprite.height = 250;

  app.stage.addChild(houseSprite);

  return houseSprite;
}

export default renderHouse;
