import { GridCell } from './grid-cell';
import GameStore from '../store/game-store';

export class Grid {
  // create Grid using GridCells
  public static create(): void {
    const gameGrid: GridCell[] = [];

    const {
      canvasWidth,
      canvasHeight,
      gridCellSize,
    } = GameStore;

    for (let y = gridCellSize; y < canvasHeight - gridCellSize; y += gridCellSize) {
      for (let x = 0; x < canvasWidth; x += gridCellSize) {
        gameGrid.push(new GridCell(x, y));
      }
    }

    GameStore.grid = gameGrid;
  }

  // draw created Grid
  public static draw() {
    const { grid } = GameStore;
    if (grid) {
      for (let i = 0; i < grid.length; i++) {
        grid[i].draw();
      }
    }
  }

  // clear Grid
  public static clearCanvas() {
    const { ctx, canvasWidth, canvasHeight } = GameStore;
    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }
}
