import { Grid } from './grid/grid';
import GameStore from './store/game-store';
import { drawDefenders } from './entities/defender';
import { GameUI } from './game-ui/game-ui';
import { drawEnemies } from './entities/enemy';
import { drawDefendersShots } from './entities/defender-shot';
import {
  clickEventHandler,
  mouseLeaveHandler,
  mouseMoveHandler,
  resizeWindowHandler,
} from './events/events';

export class Game {
  private readonly canvasRef: HTMLCanvasElement;

  constructor(canvasRef: HTMLCanvasElement) {
    this.canvasRef = canvasRef;
  }

  public start() {
    // init store
    Game.initStore(this.canvasRef);
    // init Game Grid
    Grid.create();
    // init Event Handlers
    Game.initEventHandlers();
    // graw start screen
    GameUI.drawStartScreen();
    // start frames animation
    Game.animation();
  }

  public static animation = () => {
    const {
      ctx, isGameOver, isStarted, isPause,
    } = GameStore;
    if (ctx) {
      if (isStarted && !isPause) {
        // clear canvas
        Grid.clearCanvas();
        // draw game
        Grid.draw();
        GameUI.drawToolBar();
        GameUI.drawSpellBar();
        drawDefenders();
        drawDefendersShots();
        drawEnemies();
        Game.handleGameLevel();
      }
      // handle gameOver
      if (!isGameOver) {
        GameStore.animationListener = requestAnimationFrame(Game.animation);
      } else {
        GameUI.drawGameOver();
      }
    }
  };

  private static handleGameLevel() {
    GameStore.frameCount++;
    if (GameStore.frameCount % 2000 === 0) {
      GameStore.level++;
      if (GameStore.enemyInterval > 30) {
        GameStore.enemyInterval -= 30;
      }
    }
  }

  public destroyGame() {
    const { canvas } = GameStore;
    GameStore.resetState();
    if (GameStore.animationListener) {
      cancelAnimationFrame(GameStore.animationListener);
    }
    if (canvas) {
      canvas.removeEventListener('mousemove', mouseMoveHandler);
      canvas.removeEventListener('mouseleave', mouseLeaveHandler);
      canvas.removeEventListener('click', clickEventHandler);
      window.removeEventListener('resize', resizeWindowHandler);
    }
  }

  private static initEventHandlers(): void {
    const { canvas } = GameStore;
    if (canvas) {
      canvas.addEventListener('mousemove', mouseMoveHandler);
      canvas.addEventListener('mouseleave', mouseLeaveHandler);
      canvas.addEventListener('click', clickEventHandler);
      window.addEventListener('resize', resizeWindowHandler);
    }
  }

  private static initStore(canvasRef: HTMLCanvasElement) {
    GameStore.canvas = canvasRef;
    GameStore.canvasWidth = canvasRef.width;
    GameStore.canvasHeight = canvasRef.height;
    GameStore.ctx = canvasRef.getContext('2d') as CanvasRenderingContext2D;
    GameStore.canvasPosition = canvasRef.getBoundingClientRect();
  }
}
