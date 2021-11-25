import GameStore from '../store/game-store';
import { collision } from '../utils/collision';

export class DefenderShot {
  public x: number;

  public y: number;

  public width: number = 6;

  public height: number = 6;

  public power: number = 0;

  public speed: number = 5;

  public scaleForPower = 20;

  constructor(x: number, y: number, level: number) {
    this.x = x;
    this.y = y;
    this.power += level * this.scaleForPower;
  }

  public draw() {
    const { ctx } = GameStore;
    if (ctx) {
      this.x += this.speed;
      ctx.fillStyle = '#6DD5ED';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export const drawDefendersShots = () => {
  const {
    defendersShots,
    enemies,
    canvasWidth,
  } = GameStore;

  for (let i = 0; i < defendersShots.length; i++) {
    defendersShots[i].draw();

    for (let j = 0; j < enemies.length; j++) {
      if (enemies[j] && defendersShots[i]) {
        const isShotInsideEnemy = collision(defendersShots[i], enemies[j]);

        if (isShotInsideEnemy) {
          enemies[j].health -= defendersShots[i].power;
          defendersShots.splice(i, 1);
          i--;
        }
      }
    }

    if (defendersShots[i] && defendersShots[i].x > canvasWidth) {
      GameStore.defendersShots.splice(i, 1);
      i--;
    }
  }
};
