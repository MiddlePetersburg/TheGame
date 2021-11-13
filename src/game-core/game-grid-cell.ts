import { ICursor } from './models/cursor-position.interface';

export class GridCell {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    private canvas: CanvasRenderingContext2D,
  ) { }

  public draw(cursorState: ICursor): void {
    if (!cursorState.x || !cursorState.y) {
      return;
    }

    // -0.5 need to avoid selection 2 cells at a time
    // like cursor size
    const isCursorOverThisCell = !(
      this.x > cursorState.x - 0.5
      || this.x + this.width < cursorState.x
      || this.y > cursorState.y - 0.5
      || this.y + this.height < cursorState.y
    );

    if (!isCursorOverThisCell) {
      return;
    }

    this.canvas.strokeStyle = 'black';
    this.canvas.strokeRect(this.x, this.y, this.width, this.height);
  }
}
