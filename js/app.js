import renderMainScene from './objects/main-scene/index.js';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundAlpha: 0,
  resolution: window.devicePixelRatio || 1,
  view: document.getElementById('pixi-canvas')
});

//Головна сцена
renderMainScene(app);
