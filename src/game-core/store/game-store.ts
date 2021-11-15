import { Defender } from '../entities/defender';
import { ICursor } from '../models/cursor-position.interface';
import { GridCell } from '../grid/grid-cell';

class GameStore {
  // Canvas
  public canvas: HTMLCanvasElement | undefined;

  private canvasWidthPrivate: number = 0;

  public get canvasWidth() {
    return this.canvasWidthPrivate;
  }

  public set canvasWidth(value: number) {
    this.canvasWidthPrivate = value;
  }

  public canvasHeightPrivate: number = 0;

  public get canvasHeight() {
    return this.canvasHeightPrivate;
  }

  public set canvasHeight(value: number) {
    this.canvasHeightPrivate = value;
  }

  public ctx: CanvasRenderingContext2D | undefined;

  public canvasPosition: DOMRect | undefined;

  // Grid
  public readonly gridCellSize = 100;

  public grid: GridCell[] | undefined;

  // Energy
  public energy: number = 60;

  // Defenders
  public defenders: Defender[] = [];

  // Cursor
  public cursorState: ICursor = { x: undefined, y: undefined };
}

export default new GameStore();
