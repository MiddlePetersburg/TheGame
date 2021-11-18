import GameStore from '../store/game-store';

export class Enemy {
  public health: number = 100;

  public readonly speed: number = 0.5;

  public x1: number;

  public readonly y1: number;

  public readonly x2: number;

  public readonly y2: number;

  private readonly padding: number = 8;

  public enemyLineNumber: number;

  private readonly enemyImage: HTMLImageElement;

  private frameCount = 0;

  private frameX = 0;

  private minFrame = 0;

  private maxFrame = 8;

  private spriteSideSize = 902;

  public isImageUploaded = false;

  constructor(vPosition: number) {
    const { gridCellSize, canvasWidth } = GameStore;
    this.enemyLineNumber = vPosition / gridCellSize;
    this.x1 = canvasWidth;
    this.y1 = vPosition + this.padding / 2;
    this.x2 = gridCellSize - this.padding;
    this.y2 = gridCellSize - this.padding;
    this.enemyImage = new Image();
    this.enemyImage.src = './assets/game/enemy1.png';
    this.enemyImage.onload = () => {
      this.isImageUploaded = true;
    };
  }

  draw() {
    const { ctx } = GameStore;
    if (ctx) {
      this.x1 -= this.speed;
      ctx.fillStyle = 'red';
      ctx.font = '30px Patrick Hand';
      ctx.fillText(
        this.health.toString(),
        this.x1 + 30,
        this.y1,
      );
      if (this.frameCount % 5 === 0) {
        if (this.frameX < this.maxFrame) {
          this.frameX++;
        } else {
          this.frameX = this.minFrame;
        }
      }
      if (this.isImageUploaded) {
        ctx.drawImage(
          this.enemyImage,
          this.frameX * this.spriteSideSize,
          0,
          this.spriteSideSize,
          this.spriteSideSize,
          this.x1 - 20,
          this.y1 - 20,
          this.x2 + 35,
          this.y2 + 35,
        );
      }
      if (this.frameCount > 500) {
        this.frameCount = 0;
      } else {
        this.frameCount++;
      }
    }
  }
}

export const drawEnemies = () => {
  const {
    enemies,
    frameCount,
    gridCellSize,
    enemyInterval,
  } = GameStore;

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();

    if (enemies[i].health <= 0) { // if enemy died
      const { enemyLineNumber } = enemies[i];
      const LineNumberInArray = GameStore.enemiesLineNumbers.indexOf(enemyLineNumber);
      if (LineNumberInArray !== -1) {
        GameStore.enemiesLineNumbers.splice(i, 1);
      }

      GameStore.energy += 20;
      GameStore.score += 5;
      GameStore.enemies.splice(i, 1);
      i--;
    } else if (enemies[i].x1 <= 0) { // if enemy hit you
      GameStore.health -= 1;
      GameStore.enemies.splice(i, 1);
    }
    if (GameStore.health === 0) {
      GameStore.isGameOver = true;
    }
  }

  if (frameCount % enemyInterval === 0) {
    const vPosition = Math.floor(Math.random() * 5 + 1) * gridCellSize;
    GameStore.enemiesLineNumbers.push(vPosition / gridCellSize);
    GameStore.enemies.push(new Enemy(vPosition));
    GameStore.frameCount = 0;
  }
};
