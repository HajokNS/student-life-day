import { showNextMessage } from '../../../util/messageLoader.js';


async function startIntro(app) {
  const blackScreen = new PIXI.Graphics();
  blackScreen.beginFill(0x000000);
  blackScreen.drawRect(0, 0, app.screen.width, app.screen.height);
  blackScreen.endFill();
  blackScreen.alpha = 1;

  app.stage.addChild(blackScreen);

  const showMessagesDuringFade = async () => {
    await showNextMessage(app, 'main-scene', 0);

    return new Promise(resolve => {
      const fadeOut = () => {
        if (blackScreen.alpha > 0) {
          blackScreen.alpha -= 0.004;
          requestAnimationFrame(fadeOut);
        } else {
          resolve();
        }
      };
      fadeOut();
    });
  };
  await showMessagesDuringFade();
}

export default startIntro;

