function renderCollege(app) {
  const collegeTexture = PIXI.Texture.from("../../assets/images/college.png");
  const collegeSprite = new PIXI.Sprite(collegeTexture);

  collegeSprite.x = 920;
  collegeSprite.y = 155;
  collegeSprite.name = 'college';
  collegeSprite.width = 436;
  collegeSprite.height = 469;

  app.stage.addChild(collegeSprite);

  return collegeSprite;
}

export default renderCollege;
