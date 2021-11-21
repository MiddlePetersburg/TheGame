import GameStore from '../store/game-store';

export class DefenderShot {
  public x: number;

  public y: number;

  public width: number = 6;

  public height: number = 6;

  public power: number = 0;

  public speed: number = 5;

  constructor(x: number, y: number, level: number) {
    this.x = x;
    this.y = y;
    this.power += level * 15;
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
        const isShotInsideEnemy = !(
          defendersShots[i].x > enemies[j].x1 + enemies[j].x2
          || defendersShots[i].x + defendersShots[i].width < enemies[j].x1
          || defendersShots[i].y > enemies[j].y1 + enemies[j].y2
          || defendersShots[i].y + defendersShots[i].height < enemies[j].y1
        );

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
