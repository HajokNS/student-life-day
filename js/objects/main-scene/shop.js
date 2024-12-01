function renderShop(app) {
  const shopTexture = PIXI.Texture.from("../../assets/images/store-houses.png");
  const shopSprite = new PIXI.Sprite(shopTexture);

  shopSprite.x = 800;
  shopSprite.y = 30;
  shopSprite.name = 'shop';
  shopSprite.width = 532;
  shopSprite.height = 299;


  app.stage.addChild(shopSprite);

  return shopSprite;
}

export default renderShop;
