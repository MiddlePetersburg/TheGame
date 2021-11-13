import { ICursor } from './models/cursor-position.interface';
import { GridCell } from './game-grid-cell';

export class Grid {
  // create Grid using GridCells
  public static create(
    canvasRef: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    cellSize: number,
  ): GridCell[] {
    const gameGrid: GridCell[] = [];

    for (let y = 0; y < canvasHeight; y += cellSize) {
      for (let x = 0; x < canvasWidth; x += cellSize) {
        gameGrid.push(new GridCell(x, y, cellSize, cellSize, canvasRef));
      }
    }

    return gameGrid;
  }

  // draw created Grid
  public static draw(gameGrid: GridCell[], cursorState: ICursor) {
    for (let i = 0; i < gameGrid.length; i++) {
      gameGrid[i].draw(cursorState);
    }
  }

  // clear Grid
  public static clear(canvasRef: CanvasRenderingContext2D, canvasW: number, canvasH: number) {
    canvasRef.clearRect(0, 0, canvasW, canvasH);
  }
}
