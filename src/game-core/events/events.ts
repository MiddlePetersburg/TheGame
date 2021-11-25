import GameStore from '../store/game-store';
import ElementsPositions from '../store/elements-positions';
import { collision } from '../utils/collision';
import { handleDefenderClick } from '../entities/defender';
import { Game } from '../main';
import { toggleFullScreen } from '../utils/fullscreen';

export const mouseMoveHandler = ($event: MouseEvent) => {
  const { cursorState, canvasPosition } = GameStore;
  if (canvasPosition) {
    cursorState.x = $event.x - canvasPosition.left;
    cursorState.y = $event.y - canvasPosition.top;
  }
};

export const mouseLeaveHandler = () => {
  const { cursorState } = GameStore;
  cursorState.x = 0;
  cursorState.y = 0;
};

export const resizeWindowHandler = () => {
  const { canvas } = GameStore;
  if (canvas) {
    GameStore.canvasPosition = canvas.getBoundingClientRect();
  }
};

export const clickEventHandler = () => {
  const { isStarted, cursorState, animationListener } = GameStore;

  if (cursorState.x && cursorState.y) {
    if (!isStarted) { // start screen
      const isStartGame = collision(ElementsPositions.startButton, cursorState);
      const isFullScreenToggle = collision(ElementsPositions.fullScreenButton, cursorState);
      if (isStartGame) {
        GameStore.isStarted = true;
      }
      if (isFullScreenToggle) {
        toggleFullScreen();
      }
    } else { // game already in progress
      const isRestartButton = collision(ElementsPositions.restartButton, cursorState);
      const isPlayButton = collision(ElementsPositions.playButton, cursorState);
      const isPauseButton = collision(ElementsPositions.pauseButton, cursorState);
      if (isRestartButton) {
        if (animationListener) {
          cancelAnimationFrame(animationListener);
        }
        GameStore.restart();
        Game.animation();
      } else if (isPlayButton) {
        GameStore.isPause = false;
      } else if (isPauseButton) {
        GameStore.isPause = true;
      } else {
        handleDefenderClick();
      }
    }
  }
};
