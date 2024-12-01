import { showNextMessage } from '../../../util/messageLoader.js';


async function startRandomActions(app) {
  const randomIndex = Math.floor(Math.random() * 7);
  await showNextMessage(app, 'house-scene', randomIndex);
}
export default startRandomActions;

