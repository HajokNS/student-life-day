function renderTownTeleporter(app, x = 50, y = 25) {
  const townTeleporterTexture = PIXI.Texture.from("../../assets/images/teleporter-to-town.png");
  const townTeleporterSprite = new PIXI.Sprite(townTeleporterTexture);

  townTeleporterSprite.x = x;
  townTeleporterSprite.y = y;
  townTeleporterSprite.name = 'townTeleporter';
  townTeleporterSprite.width = 300;
  townTeleporterSprite.height = 240;

  app.stage.addChild(townTeleporterSprite);

  return townTeleporterSprite;
}

export default renderTownTeleporter;
