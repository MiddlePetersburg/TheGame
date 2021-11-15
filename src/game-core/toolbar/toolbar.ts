import GameStore from '../store/game-store';

export class Toolbar {
  public static draw() {
    const {
      ctx,
      canvasHeight,
      canvasWidth,
      energy,
      gridCellSize,
    } = GameStore;

    if (ctx) {
      ctx.fillStyle = 'grey';
      ctx.fillRect(0, canvasHeight - gridCellSize,
        canvasWidth, gridCellSize);
      ctx.fillStyle = 'black';
      ctx.font = '25px Roboto';
      ctx.fillText(
        `Energy: ${energy}`,
        20, canvasHeight - gridCellSize / 2,
      );
    }
  }
}
