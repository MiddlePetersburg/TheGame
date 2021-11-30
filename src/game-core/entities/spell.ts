import GameStore from '../store/game-store';

export class Spell {
  public static cooldown = 0;

  private static interval: NodeJS.Timer | undefined;

  public static castWind() {
    if (Spell.isPossibleCast()) {
      const { enemies, canvasWidth } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentPosition = enemies[i].x;
        let newPosition: number = canvasWidth;
        if (!(currentPosition + 250 > canvasWidth)) {
          newPosition = currentPosition + 250;
        }
        enemies[i].x = newPosition;
      }
      Spell.startCooldown();
    }
  }

  public static castFireBall() {
    if (Spell.isPossibleCast()) {
      const { enemies, level } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentHeath = enemies[i].health;
        enemies[i].health = currentHeath - level * 30;
      }
      Spell.startCooldown();
    }
  }

  public static castIceBall() {
    if (Spell.isPossibleCast()) {
      const { enemies } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentSpeed = enemies[i].speed;
        const enemy = enemies[i];
        enemies[i].speed = 0.2;
        setTimeout(() => {
          if (enemy) {
            enemy.speed = currentSpeed;
          }
        }, 3500);
      }
      this.startCooldown();
    }
  }

  private static isPossibleCast() {
    return Spell.cooldown <= 0;
  }

  private static startCooldown() {
    if (Spell.interval) {
      clearInterval(Spell.interval);
    }
    Spell.cooldown = 10;
    this.interval = setInterval(() => {
      if (Spell.cooldown <= 0) {
        clearInterval(Spell.interval as NodeJS.Timer);
      } else {
        Spell.cooldown -= 1;
      }
    }, 1000);
  }
}
