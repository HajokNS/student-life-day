function showNotification(app, message, duration = 3000) {
  // Стиль для тексту
  const style = new PIXI.TextStyle({
    fontFamily: "Georgia, serif", // Використовуємо стародавній шрифт для елегантності
    fontSize: 32, // Більший шрифт
    fill: "whitesmoke", // Яскравий колір тексту
    align: "center",
    dropShadow: true, // Тінь для кращої видимості
    dropShadowColor: "#000000", // Чорна тінь
    dropShadowBlur: 6, // Розмита тінь
    stroke: "#FF4500", // Контур тексту червоним
    strokeThickness: 5, // Товстий контур
  });

  // Створюємо текстове повідомлення
  const notification = new PIXI.Text(message, style);
  notification.anchor.set(0.5); // Центруємо текст
  notification.x = app.screen.width / 2; // По центру екрану
  notification.y = 150; // Відступ зверху

  // Додаємо повідомлення до сцени
  app.stage.addChild(notification);

  // Анімація появи та зникнення
  let elapsedTime = 0;
  const fadeInDuration = 500; // 0.5 секунди на появу
  const fadeOutStart = duration - fadeInDuration; // Початок зникнення

  const ticker = new PIXI.Ticker();
  ticker.add(() => {
    elapsedTime += ticker.deltaMS;

    // Поява
    if (elapsedTime < fadeInDuration) {
      notification.alpha = elapsedTime / fadeInDuration;
    }
    // Утримання повідомлення
    else if (elapsedTime < fadeOutStart) {
      notification.alpha = 1;
    }
    // Зникнення
    else if (elapsedTime < duration) {
      notification.alpha = 1 - (elapsedTime - fadeOutStart) / fadeInDuration;
    } else {
      // Видаляємо повідомлення після завершення
      app.stage.removeChild(notification);
      ticker.stop(); // Зупиняємо ticker
      ticker.destroy(); // Звільняємо ресурси
    }
  });

  ticker.start(); // Запускаємо ticker
}

export default showNotification;
