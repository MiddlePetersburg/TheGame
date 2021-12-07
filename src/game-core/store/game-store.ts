import { Defender } from '../entities/defender';
import { ICursor } from '../models/cursor-position.interface';
import { GridCell } from '../grid/grid-cell';
import { Enemy } from '../entities/enemy';
import { DefenderShot } from '../entities/defender-shot';
import { Spell } from '../entities/spell';

class GameStore {
  // Canvas
  public canvas: HTMLCanvasElement | undefined;

  public canvasWidth: number = 0;

  public canvasHeight: number = 0;

  public ctx: CanvasRenderingContext2D | undefined;

  public canvasPosition: DOMRect | undefined;

  public animationListener: number | undefined;

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
    this.energy = 30;
    this.defenders = [];
    this.enemyInterval = 300;
    this.enemies = [];
    this.defendersShots = [];
    this.enemiesLineNumbers = [];
    Spell.resetState();
  }
}

export default new GameStore();
