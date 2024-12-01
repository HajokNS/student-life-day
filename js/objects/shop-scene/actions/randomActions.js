import { showNextMessage } from '../../../util/messageLoader.js';


async function startRandomActions(app) {
  const randomIndex = Math.floor(Math.random() * 10);
  await showNextMessage(app, 'shop-scene', randomIndex);
}
export default startRandomActions;

