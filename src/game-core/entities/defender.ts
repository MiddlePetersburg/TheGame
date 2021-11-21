import GameStore from '../store/game-store';
import { DefenderShot } from './defender-shot';

export class Defender {
  private canvas: CanvasRenderingContext2D;

  public defenderLevel: number = 1;

  public readonly x1: number;

  public readonly y1: number;

  private readonly x2: number;

  private readonly y2: number;

  public padding = 8;

  public static price: number = 15;

  private shotInterval: number = 50;

  private frame: number = 0;

  private readonly defenderImage: HTMLImageElement;

  private isImageUploaded: boolean = false;

  private spriteY = 0;

  private spriteMinFrame = 0;

  private spriteMaxFrame = 0;

  private spriteSideSize = 252;

  constructor(x: number, y: number) {
    const { ctx, gridCellSize } = GameStore;
    this.canvas = ctx as CanvasRenderingContext2D;
    this.x1 = x + this.padding / 2;
    this.y1 = y + this.padding / 2;
    this.x2 = gridCellSize - this.padding;
    this.y2 = gridCellSize - this.padding;
    this.defenderImage = new Image();
    this.defenderImage.src = './assets/game/defender1.png';
    this.defenderImage.onload = () => {
      this.isImageUploaded = true;
    };
  }

  public draw() {
    const { gridCellSize, enemiesLineNumbers, ctx } = GameStore;
    this.frame++;
    // FIREBALL
    if (this.frame % this.shotInterval === 0) {
      const isEnemyExistOnThisLine = enemiesLineNumbers
        .indexOf(Math.floor(this.y1 / gridCellSize)) > -1;
      if (isEnemyExistOnThisLine) {
        this.spriteMaxFrame = 7;
        GameStore.defendersShots.push(
          new DefenderShot(this.x1 + 70, this.y1 + 50, this.defenderLevel),
        );
      } else {
        this.spriteMaxFrame = 0;
      }
    }
    // Choose Defender Animation
    if (this.frame % 5 === 0) {
      if (this.spriteY < this.spriteMaxFrame) {
        this.spriteY++;
      } else {
        this.spriteY = this.spriteMinFrame;
      }
    }
    // Draw Defender Sprite
    if (this.isImageUploaded) {
      ctx?.drawImage(
        this.defenderImage,
        0,
        this.spriteY * this.spriteSideSize,
        this.spriteSideSize + 50,
        this.spriteSideSize + 10,
        this.x1 - 90,
        this.y1 - 30,
        this.x2 + 80,
        this.y2 + 60,
      );
    }
    // Draw level:
    this.canvas.fillStyle = 'yellow';
    this.canvas.font = '20px Patrick Hand';
    this.canvas.fillText(`Level: ${this.defenderLevel}`, this.x1 + 20, this.y1 + 10);
  }
}

export const drawDefenders = () => {
  const { defenders } = GameStore;
  defenders.forEach((defender) => defender.draw());
};

export const handleDefenderClick = () => {
  const {
    canvasHeight,
    defenders,
    energy,
    gridCellSize,
    cursorState,
  } = GameStore;

  if (typeof cursorState?.x === 'number' && typeof cursorState?.y === 'number') {
    const gridPositionX = cursorState.x - (cursorState.x % gridCellSize);
    const gridPositionY = cursorState.y - (cursorState.y % gridCellSize);

    // if outside the grid
    if (gridPositionY < gridCellSize || gridPositionY >= canvasHeight - gridCellSize) {
      return;
    }

    let defenderExist = false;
    // if defender on this cell already exists
    for (let i = 0; i < defenders.length; i++) {
      const defenderPadding = defenders[i].padding;
      const isDefenderExist = defenders[i].x1 - defenderPadding / 2 === gridPositionX
        && defenders[i].y1 - defenderPadding / 2 === gridPositionY;
      if (isDefenderExist) { // => upgrade defender
        defenderExist = true;
        if (Defender.price * defenders[i].defenderLevel <= energy) {
          GameStore.energy -= Defender.price * defenders[i].defenderLevel;
          GameStore.defenders[i].defenderLevel++;
        }
      }
    }
    // build defender
    if ((energy >= Defender.price) && !defenderExist) {
      const defender = new Defender(gridPositionX, gridPositionY);
      defenders.push(defender);
      GameStore.energy -= Defender.price;
    }
  }
};
