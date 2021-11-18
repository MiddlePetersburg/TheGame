import { Defender } from '../entities/defender';
import { ICursor } from '../models/cursor-position.interface';
import { GridCell } from '../grid/grid-cell';
import { Enemy } from '../entities/enemy';
import { DefenderShot } from '../entities/defender-shot';

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

  // Game

  public isGameOver = false;

  public isPause = false;

  public score = 0;

  // HEALTH
  public health: number = 3;

  // Energy
  public energy: number = 60;

  // Defenders
  public defenders: Defender[] = [];

  public defendersShots: DefenderShot[] = [];

  // Enemies
  public enemies: Enemy[] = [];

  public enemiesLineNumbers: number[] = [];

  public enemyInterval: number = 300;

  // Cursor
  public cursorState: ICursor = { x: undefined, y: undefined };

  // Frame
  public frameCount: number = 0;
}

export default new GameStore();
