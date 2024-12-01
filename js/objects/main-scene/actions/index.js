import startGuide from "./guide.js";
import startIntro from "./intro.js";
import startRandomActions from "./randomActions.js";

async function launchAllActions(app) {
  const shouldStartIntro = localStorage.getItem('shouldStartIntro') === 'true';
  if (shouldStartIntro) {
    await startIntro(app);
    await startGuide(app);
  } else {
    await startRandomActions(app);
  }
}

export default launchAllActions;
