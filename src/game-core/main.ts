import { Grid, mouseLeaveHandler, mouseMoveHandler } from './grid/grid';
import GameStore from './store/game-store';
import { buildDefender, drawDefenders } from './entities/defender';
import { Toolbar } from './toolbar/toolbar';
import { drawEnemies } from './entities/enemy';
import { drawDefendersShots } from './entities/defender-shot';

export class Game {
  // Listeners
  private animationListener: number | undefined;

  constructor(canvasRef: HTMLCanvasElement) {
    // init Game store
    Game.initStore(canvasRef);
    // init Game Grid
    Grid.create();
    // init Event Handlers
    Game.initCursorHandlers();
  }

  public start() {
    const animation = () => {
      const { ctx, isGameOver } = GameStore;
      if (ctx) {
        // clear canvas
        Grid.clearCanvas();
        // draw game
        Grid.draw();
        Toolbar.draw();
        drawDefenders();
        drawDefendersShots();
        drawEnemies();
        // frames
        // handle gameOver
        if (!isGameOver) {
          this.animationListener = requestAnimationFrame(animation);
        } else {
          Game.gameOver();
        }
        GameStore.frameCount++;
      }
    };
    animation();
  }

  private static gameOver() {
    const { ctx } = GameStore;
    if (ctx) {
      Grid.clearCanvas();
      Toolbar.draw();
      ctx.fillStyle = 'black';
      ctx.font = '100px Patrick Hand, cursive';
      ctx.fillText('GAME OVER', 300, 350);
    }
  }

  public destroyGame() {
    const { canvas } = GameStore;
    if (this.animationListener) {
      cancelAnimationFrame(this.animationListener);
    }
    if (canvas) {
      canvas.removeEventListener('mousemove', mouseMoveHandler);
      canvas.removeEventListener('mouseleave', mouseLeaveHandler);
      canvas.removeEventListener('click', buildDefender);
    }
  }

  private static initCursorHandlers(): void {
    const { canvas } = GameStore;
    if (canvas) {
      canvas.addEventListener('mousemove', mouseMoveHandler);
      canvas.addEventListener('mouseleave', mouseLeaveHandler);
      canvas.addEventListener('click', buildDefender);
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
