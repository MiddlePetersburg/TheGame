import GameStore from '../store/game-store';

export class Enemy {
  public health: number = 50;

  public speed: number = 0;

  public x: number;

  public readonly y: number;

  public readonly width: number;

  public readonly height: number;

  private readonly padding: number = 8;

  public enemyLineNumber: number;

  private readonly enemyImage: HTMLImageElement;

  private frame = 0;

  private frameX = 0;

  private minFrame = 0;

  private maxFrame = 8;

  private spriteSideSize = 902;

  public isImageUploaded = false;

  constructor(vPosition: number, level: number) {
    const { gridCellSize, canvasWidth } = GameStore;
    this.enemyLineNumber = vPosition / gridCellSize;
    this.x = canvasWidth;
    this.y = vPosition + this.padding / 2;
    this.width = gridCellSize - this.padding;
    this.height = gridCellSize - this.padding;
    this.enemyImage = new Image();
    this.enemyImage.src = './assets/game/enemy1.png';
    this.enemyImage.onload = () => {
      this.isImageUploaded = true;
    };
    this.speed = 0.5 * level;
    this.health += level * 30;
  }

  public draw() {
    this.frame++;
    this.moveEnemy();
    this.drawHealth();
    this.handleSprites();
    this.drawImage();
  }

  private moveEnemy() {
    this.x -= this.speed;
  }

  private drawHealth() {
    if (GameStore.ctx) {
      GameStore.ctx.fillStyle = 'red';
      GameStore.ctx.font = '30px Patrick Hand';
      GameStore.ctx.fillText(this.health.toString(), this.x + 30, this.y);
    }
  }

  private handleSprites() {
    if (this.frame % 5 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }
    }
  }

  private drawImage() {
    if (this.isImageUploaded) {
      GameStore.ctx?.drawImage(
        this.enemyImage,
        this.frameX * this.spriteSideSize,
        0,
        this.spriteSideSize,
        this.spriteSideSize,
        this.x - 20,
        this.y - 20,
        this.width + 35,
        this.height + 35,
      );
    }
  }
}

export const drawEnemies = () => {
  const {
    enemies,
    frameCount,
    gridCellSize,
    enemyInterval,
    level,
  } = GameStore;

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();

    if (enemies[i].health <= 0) { // if enemy died
      const { enemyLineNumber } = enemies[i];
      const LineNumberInArray = GameStore.enemiesLineNumbers.indexOf(enemyLineNumber);
      if (LineNumberInArray !== -1) {
        GameStore.enemiesLineNumbers.splice(i, 1);
      }

      GameStore.energy += 10 + level;
      GameStore.score += 5;
      GameStore.enemies.splice(i, 1);
      i--;
    } else if (enemies[i].x <= 0) { // if enemy hit you
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
    GameStore.enemies.push(new Enemy(vPosition, level));
  }
};
