import showNotification from "../objects/notification.js";

async function loadMessages(scene) {
  const response = await fetch(`./assets/dialoges/${scene}/messages.json`);
  const data = await response.json();
  return data.messages;
}

async function showNextMessage(app, scene, index, duration = 3500) {
  const messages = await loadMessages(scene);
  const message = messages[index];
  showNotification(app, message, duration);
}

async function getNextMessage(scene, index) {
  const messages = await loadMessages(scene);
  const message = messages[index];
  return message;
}

export { showNextMessage, getNextMessage };
