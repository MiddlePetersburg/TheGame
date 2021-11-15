import { Grid, mouseLeaveHandler, mouseMoveHandler } from './grid/grid';
import GameStore from './store/game-store';
import { buildDefender } from './entities/defender';
import { Toolbar } from './toolbar/toolbar';

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
      const { ctx } = GameStore;
      if (ctx) {
        // clear canvas
        Grid.clearCanvas();
        // draw game
        Grid.draw();
        Toolbar.draw();
        Game.drawDefenders();
        this.animationListener = requestAnimationFrame(animation);
      }
    };
    animation();
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

  private static drawDefenders() {
    const { defenders } = GameStore;
    defenders.forEach((defender) => defender.draw());
  }

  private static initStore(canvasRef: HTMLCanvasElement) {
    GameStore.canvas = canvasRef;
    GameStore.canvasWidth = canvasRef.width;
    GameStore.canvasHeight = canvasRef.height;
    GameStore.ctx = canvasRef.getContext('2d') as CanvasRenderingContext2D;
    GameStore.canvasPosition = canvasRef.getBoundingClientRect();
  }
}
