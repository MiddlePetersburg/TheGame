import GameStore from '../store/game-store';

export class Enemy {
  public health: number = 100;

  public readonly speed: number = 10;

  public x1: number;

  private readonly y1: number;

  private readonly x2: number;

  private readonly y2: number;

  private readonly padding: number = 8;

  constructor(vPosition: number) {
    const { gridCellSize, canvasWidth } = GameStore;

    this.x1 = canvasWidth;
    this.y1 = vPosition + this.padding / 2;
    this.x2 = gridCellSize - this.padding;
    this.y2 = gridCellSize - this.padding;
  }

  draw() {
    const { ctx } = GameStore;
    if (ctx) {
      this.x1 -= this.speed;
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
      ctx.fillStyle = 'black';
      ctx.font = '30px';
    }
  }
}

export const drawEnemies = () => {
  const {
    enemies,
    gridCellSize,
    frameCount,
    enemyInterval,
  } = GameStore;

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();

    // if enemy died
    if (enemies[i].health <= 0) {
      GameStore.energy += 20;
      enemies.splice(i, 1);
      i--;
    }

    // if enemy hit you
    if (enemies[i].x1 <= 0) {
      GameStore.health -= 1;
      GameStore.enemies.splice(i, 1);
    }

    if (GameStore.health === 0) {
      GameStore.isGameOver = true;
    }
  }

  if (frameCount % enemyInterval === 0) {
    const lineNumber = Math.floor(Math.random() * 5) * gridCellSize;
    GameStore.enemies.push(new Enemy(lineNumber));
    GameStore.frameCount = 0;
  }
};
