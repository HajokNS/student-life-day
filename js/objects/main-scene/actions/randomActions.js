import { showNextMessage } from '../../../util/messageLoader.js';


async function startRandomActions(app) {
  const randomIndex = Math.floor(Math.random() * 8) + 2;
  await showNextMessage(app, 'main-scene', randomIndex);
}
export default startRandomActions;

