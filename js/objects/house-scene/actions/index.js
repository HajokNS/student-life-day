import startRandomActions from "./randomActions.js";

async function launchAllActions(app) {
  await startRandomActions(app);
}

export default launchAllActions;
