function renderTree(app) {
  const treeTexture = PIXI.Texture.from("../assets/images/tree.png");
  const treeSprite = new PIXI.Sprite(treeTexture);

  treeSprite.x = 200;
  treeSprite.y = 130;
  treeSprite.name = 'tree';
  treeSprite.width = 138;
  treeSprite.height = 158;

  app.stage.addChild(treeSprite);

  return treeSprite;
}

export default renderTree;
