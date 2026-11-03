"use strict";
document.querySelectorAll('[data-direction]').forEach(button => {
  button.addEventListener('click', () => {
    if (game.status.isPlaying() && game.canSetDirection(button.dataset.direction)) {
      snake.setDirection(button.dataset.direction);
    }
  });
});
