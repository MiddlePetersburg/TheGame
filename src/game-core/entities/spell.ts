import GameStore from '../store/game-store';

const fireball = new Image();
fireball.src = './assets/game/fireball.png';

const iceball = new Image();
iceball.src = './assets/game/iceBall.png';

const windball = new Image();
windball.src = './assets/game/windBall.png';

export class Spell {
  public static cooldown = 0;

  private static frame = 0;

  private static minSprite = 0;

  private static maxSpite = 5;

  private static currentSprite = 0;

  private static spriteSize = 512;

  private static isSpellMoving = false;

  private static interval: NodeJS.Timer | undefined;

  private static activeSpellImage = fireball;

  public static castWind() {
    if (Spell.isPossibleCast()) {
      Spell.activeSpellImage = windball;
      const { enemies, canvasWidth } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentPosition = enemies[i].x;
        let newPosition: number = canvasWidth;
        if (!(currentPosition + 500 > canvasWidth)) {
          newPosition = currentPosition + 500;
        }
        enemies[i].x = newPosition;
      }
    }
  }

  public static castFireBall() {
    if (Spell.isPossibleCast()) {
      Spell.activeSpellImage = fireball;
      const { enemies, level } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentHeath = enemies[i].health;
        enemies[i].health = currentHeath - level * 30;
      }
    }
  }

  public static castIceBall() {
    if (Spell.isPossibleCast()) {
      Spell.activeSpellImage = iceball;
      const { enemies } = GameStore;
      for (let i = 0; i < enemies.length; i++) {
        const currentSpeed = enemies[i].speed;
        const enemy = enemies[i];
        enemies[i].speed = 0.2;
        setTimeout(() => {
          if (enemy) {
            enemy.speed = currentSpeed;
          }
        }, 4000);
      }
    }
  }

  public static handleSpells() {
    if (this.isSpellMoving) {
      Spell.frame++;
      const { ctx } = GameStore;
      if (this.frame % 5 === 0) {
        if (this.currentSprite < this.maxSpite) {
          this.currentSprite++;
        } else {
          this.currentSprite = this.minSprite;
        }
      }
      ctx?.drawImage(
        Spell.activeSpellImage,
        this.currentSprite * Spell.spriteSize,
        25,
        Spell.spriteSize,
        Spell.spriteSize,
        10 * Spell.frame - Spell.spriteSize / 2,
        100,
        Spell.spriteSize,
        Spell.spriteSize,
      );

      if (Spell.frame > 100) {
        Spell.isSpellMoving = false;
        Spell.frame = 0;
      }
    }
  }

  private static isPossibleCast() {
    if (Spell.cooldown <= 0) {
      Spell.isSpellMoving = true;
      this.startCooldown();
      return true;
    }
    return false;
  }

  private static startCooldown() {
    Spell.resetState();
    Spell.cooldown = 15;
    this.interval = setInterval(() => {
      if (Spell.cooldown <= 0) {
        Spell.resetState();
      } else {
        Spell.cooldown -= 1;
      }
    }, 1000);
  }

  public static resetState() {
    Spell.cooldown = 0;
    if (Spell.interval) {
      clearInterval(Spell.interval);
    }
  }
}
