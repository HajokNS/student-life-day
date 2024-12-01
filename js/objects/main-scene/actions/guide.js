import { showNextMessage } from '../../../util/messageLoader.js';


async function startGuide(app) {
  await showNextMessage(app, 'main-scene', 1);
}
export default startGuide;

