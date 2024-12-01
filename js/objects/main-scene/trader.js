import { getNextMessage } from "../../util/messageLoader.js";

async function renderTrader(app) {
  const traderTexture = PIXI.Texture.from("../assets/images/trader.png");
  const traderSprite = new PIXI.Sprite(traderTexture);

  traderSprite.x = 490;
  traderSprite.y = 120;
  traderSprite.name = 'trader';
  traderSprite.width = 399;
  traderSprite.height = 225;

  app.stage.addChild(traderSprite);

  const traderMessage = new PIXI.Text("Найкраща зброя тільки тут!", {
    fontFamily: "Arial",
    fontSize: 18,
    fill: 0xffffff,
    align: "center",
  });

  // Встановлюємо розташування повідомлення над трейдером
  traderMessage.x = traderSprite.x + traderSprite.width / 2 - traderMessage.width / 2;
  traderMessage.y = traderSprite.y - traderMessage.height - 10;

  // Початкове значення alpha = 0 (повідомлення буде невидимим)
  traderMessage.alpha = 0;
  app.stage.addChild(traderMessage);

  // Анімація поступового з'явлення повідомлення
  const fadeInMessage = () => {
    if (traderMessage.alpha < 1) {
      traderMessage.alpha += 0.01; // Збільшуємо прозорість
      requestAnimationFrame(fadeInMessage);
    }
  };

  fadeInMessage();

  return traderSprite;
}

export default renderTrader;
