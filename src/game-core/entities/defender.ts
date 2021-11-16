import GameStore from '../store/game-store';

export class Defender {
  private canvas: CanvasRenderingContext2D;

  public readonly x1: number;

  public readonly y1: number;

  private readonly x2: number;

  private readonly y2: number;

  public static price: number = 20;

  constructor(x: number, y: number) {
    const { ctx, gridCellSize } = GameStore;
    const padding = 8;
    this.canvas = ctx as CanvasRenderingContext2D;
    this.x1 = x + padding / 2;
    this.y1 = y + padding / 2;
    this.x2 = gridCellSize - padding;
    this.y2 = gridCellSize - padding;
  }

  public draw() {
    this.canvas.fillStyle = 'black';
    this.canvas.fillRect(this.x1, this.y1, this.x2, this.y2);
  }
}

export const drawDefenders = () => {
  const { defenders } = GameStore;
  defenders.forEach((defender) => defender.draw());
};

export const buildDefender = () => {
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
    if (gridPositionY < 0 || gridPositionY >= canvasHeight - gridCellSize) {
      return;
    }
    // if defender on this cell already exists
    for (let i = 0; i < defenders.length; i++) {
      if (defenders[i].x1 === gridPositionX && defenders[i].y1 === gridPositionY) {
        return;
      }
    }

    if (energy >= Defender.price) {
      const defender = new Defender(gridPositionX, gridPositionY);
      defenders.push(defender);
      GameStore.energy -= Defender.price;
    }
  }
};
