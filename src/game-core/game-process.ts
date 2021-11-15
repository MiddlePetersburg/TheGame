import { Grid } from './game-grid';
import { ICursor } from './models/cursor-position.interface';
import { GridCell } from './game-grid-cell';
import { Defender } from './game-defender';

export class Game {
  // canvas
  private readonly canvas: HTMLCanvasElement;

  private readonly canvasWidth: number;

  private readonly canvasHeight: number;

  private readonly ctx: CanvasRenderingContext2D;

  private readonly canvasPosition: DOMRect;

  // Grid
  private readonly gridCellSize: number;

  private readonly grid: GridCell[];

  // Cursor
  private readonly cursorState: ICursor;

  // Energy
  private availableEnergy: number = 60;

  // Defenders
  private defenders: Defender[] = [];

  // Listeners
  private animationListener: number | undefined;

  constructor(canvasRef: HTMLCanvasElement) {
    // init canvas
    this.canvas = canvasRef;
    this.canvasWidth = canvasRef.width;
    this.canvasHeight = canvasRef.height;
    this.ctx = canvasRef.getContext('2d') as CanvasRenderingContext2D;
    this.canvasPosition = canvasRef.getBoundingClientRect();
    // init grid
    this.gridCellSize = 100;
    this.grid = Grid.create(this.ctx, this.canvasWidth, this.canvasHeight, this.gridCellSize);
    // init cursor handlers
    this.cursorState = { x: undefined, y: undefined };
    this.initCursorHandlers();
  }

  public start() {
    const animation = () => {
      if (this.ctx) {
        Grid.clear(this.ctx, this.canvasWidth, this.canvasHeight);
        Grid.draw(this.grid, this.cursorState);
        this.drawToolbar();
        this.drawDefenders();
        this.animationListener = requestAnimationFrame(animation);
      }
    };
    animation();
  }

  private initCursorHandlers(): void {
    this.canvas.addEventListener('mousemove',
      ($event: MouseEvent) => this.mouseMoveHandler($event));
    this.canvas.addEventListener('mouseleave',
      () => this.mouseLeaveHandler);
    this.canvas.addEventListener('click',
      () => this.buildDefenderHandler());
  }

  private drawDefenders() {
    this.defenders.forEach((defender) => defender.draw());
  }

  private drawToolbar() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, this.canvasHeight - this.gridCellSize,
      this.canvasWidth, this.gridCellSize);
    this.ctx.fillStyle = 'black';
    this.ctx.font = '25px Roboto';
    this.ctx.fillText(
      `Energy: ${this.availableEnergy}`,
      20, this.canvasHeight - this.gridCellSize / 2,
    );
  }

  private buildDefenderHandler() {
    if (typeof this.cursorState?.x === 'number' && typeof this.cursorState?.y === 'number') {
      const gridPositionX = this.cursorState.x - (this.cursorState.x % this.gridCellSize);
      const gridPositionY = this.cursorState.y - (this.cursorState.y % this.gridCellSize);

      // if outside the grid
      if (gridPositionY < 0 || gridPositionY >= this.canvasHeight - this.gridCellSize) {
        return;
      }
      // if defender on this cell already exists
      for (let i = 0; i < this.defenders.length; i++) {
        if (this.defenders[i].x1 === gridPositionX && this.defenders[i].y1 === gridPositionY) {
          return;
        }
      }

      if (this.availableEnergy >= Defender.price) {
        const defender = new Defender(this.ctx, gridPositionX, gridPositionY, this.gridCellSize);
        this.defenders.push(defender);
        this.availableEnergy -= Defender.price;
      }
    }
  }

  private mouseMoveHandler($event: MouseEvent) {
    this.cursorState.x = $event.x - this.canvasPosition.left;
    this.cursorState.y = $event.y - this.canvasPosition.top;
  }

  private mouseLeaveHandler() {
    this.cursorState.x = undefined;
    this.cursorState.y = undefined;
  }

  public destroyGame() {
    if (this.animationListener) {
      cancelAnimationFrame(this.animationListener);
    }
    this.canvas.removeEventListener('mousemove', this.mouseMoveHandler);
    this.canvas.removeEventListener('mouseleave', this.mouseLeaveHandler);
    this.canvas.removeEventListener('click', this.buildDefenderHandler);
  }
}
