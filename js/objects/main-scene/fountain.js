function renderFountain(app) {
  const fountainTexture = PIXI.Texture.from("../../assets/images/fountain.gif");
  const fountainSprite = new PIXI.Sprite(fountainTexture);
  
  fountainSprite.x = 675;
  fountainSprite.y = 275;
  fountainSprite.name = 'fountain';
  fountainSprite.width = 115;
  fountainSprite.height = 153;

  app.stage.addChild(fountainSprite);

  return fountainSprite;
}

export default renderFountain;
