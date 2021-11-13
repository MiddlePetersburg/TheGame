import { Grid } from './game-grid';
import { ICursor } from './models/cursor-position.interface';
import { GridCell } from './game-grid-cell';

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
    this.canvas.removeEventListener('mousemove',
      ($event: MouseEvent) => this.mouseMoveHandler($event));
    this.canvas.removeEventListener('mouseleave',
      () => this.mouseLeaveHandler);
  }
}
