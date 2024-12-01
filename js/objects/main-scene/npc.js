import { getNextMessage } from "../../util/messageLoader.js";

async function renderNpc(app) {
  const npcTexture = PIXI.Texture.from("../../assets/images/main-scene-npc.png");
  const npcSprite = new PIXI.Sprite(npcTexture);

  npcSprite.x = 750;
  npcSprite.y = 500;
  npcSprite.name = 'npc';
  npcSprite.width = 65;
  npcSprite.height = 95;

  app.stage.addChild(npcSprite);

  const randomIndex = Math.floor(Math.random() * 3) + 1;
  const message = await getNextMessage('college-scene', randomIndex);
  const npcMessage = new PIXI.Text(message, {
    fontFamily: "Arial",
    fontSize: 18,
    fill: 0xffffff,
    align: "center",
  });

  npcMessage.x = npcSprite.x + npcSprite.width / 2 - npcMessage.width / 2;
  npcMessage.y = npcSprite.y - npcMessage.height - 10;

  npcMessage.alpha = 0;
  app.stage.addChild(npcMessage);

  const fadeInMessage = () => {
    if (npcMessage.alpha < 1) {
      npcMessage.alpha += 0.003;
      requestAnimationFrame(fadeInMessage);
    }
  };

  fadeInMessage();

  return { npcSprite, npcMessage };
}

export default renderNpc;
