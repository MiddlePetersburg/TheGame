import GameStore from '../store/game-store';

export class GridCell {
  constructor(
    private x: number,
    private y: number,
  ) { }

  public draw(): void {
    const { cursorState, ctx, gridCellSize } = GameStore;

    if (!ctx) {
      return;
    }

    if (!cursorState.x || !cursorState.y) {
      return;
    }

    // -0.5 need to avoid selection 2 cells at a time
    // like cursor size
    const isCursorOverThisCell = !(
      this.x > cursorState.x - 0.5
      || this.x + gridCellSize < cursorState.x
      || this.y > cursorState.y - 0.5
      || this.y + gridCellSize < cursorState.y
    );

    if (!isCursorOverThisCell) {
      return;
    }

    ctx.strokeStyle = 'black';
    ctx.strokeRect(this.x, this.y, gridCellSize, gridCellSize);
  }
}
