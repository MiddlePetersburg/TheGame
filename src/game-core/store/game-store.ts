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
  public isStarted = false;

  public isGameOver = false;

  public isPause = false;

  public score = 0;

  public level = 1;

  // HEALTH
  public health: number = 3;

  // Energy
  public energy: number = 30;

  // Defenders
  public defenders: Defender[] = [];

  public defendersShots: DefenderShot[] = [];

  // Enemies
  public enemies: Enemy[] = [];

  public enemiesLineNumbers: number[] = [];

  public enemyInterval: number = 300;

  // Cursor
  public cursorState: ICursor = {
    x: 0,
    y: 0,
    width: 0.5,
    height: 0.5,
  };

  // Frame
  public frameCount: number = 0;

  public resetState() {
    this.restart();
    this.isStarted = false;
  }

  public restart() {
    this.isStarted = true;
    this.isGameOver = false;
    this.isPause = false;
    this.score = 0;
    this.health = 3;
    this.level = 1;
    this.energy = 60;
    this.defenders = [];
    this.enemies = [];
    this.defendersShots = [];
    this.enemiesLineNumbers = [];
  }
}

export default new GameStore();
