import GameStore from '../store/game-store';

export class Toolbar {
  public static draw() {
    const {
      ctx,
      canvasHeight,
      canvasWidth,
      energy,
      gridCellSize,
      health,
      score,
    } = GameStore;

    if (ctx) {
      const toolbarBaseLine = (canvasHeight - gridCellSize / 2) + 5;

      // draw background
      ctx.fillStyle = '#34495e';
      ctx.fillRect(0, canvasHeight - gridCellSize, canvasWidth, gridCellSize);
      // draw health
      ctx.fillStyle = 'white';
      ctx.font = '22px Patrick Hand, cursive';
      ctx.fillText('Health:', 20, toolbarBaseLine);
      ctx.fillStyle = 'red';
      ctx.fillText(`${'\u{2764}'.repeat(health)}`, 100, toolbarBaseLine);
      // draw energy
      ctx.fillStyle = 'white';
      ctx.fillText(`Energy \u26A1: ${energy}`, 200, toolbarBaseLine);
      // draw score
      ctx.fillText(`Score \u{1F3C6}: ${score}`, 400, toolbarBaseLine);
      // draw pause/play
      ctx.fillText('Pause: \u{23F8}', 600, toolbarBaseLine);
    }
  }
}
