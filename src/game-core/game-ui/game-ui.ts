import GameStore from '../store/game-store';
import ElementsPositions from '../store/elements-positions';
import { Grid } from '../grid/grid';

// create White Panel Instance
const whitePanelImg = new Image();
whitePanelImg.src = './assets/game/panelW.png';

// create White Button Instance
const buttonImg = new Image();
buttonImg.src = './assets/game/buttonW.png';

// create White Button Instance
const brownButton = new Image();
brownButton.src = './assets/game/buttonB.png';

// create Game Image Instance
const gameImg = new Image();
gameImg.src = './assets/game/game-icon.png';

export class GameUI {
  public static drawToolBar() {
    const {
      ctx,
      canvasHeight,
      canvasWidth,
      energy,
      gridCellSize,
      health,
      score,
      level,
    } = GameStore;

    if (ctx) {
      const toolbarBaseLine = (canvasHeight - gridCellSize / 2) + 5;
      // draw background
      ctx.fillStyle = '#34495e';
      ctx.fillRect(0, canvasHeight - gridCellSize, canvasWidth, gridCellSize);
      // draw Panels
      ctx.drawImage(whitePanelImg, 15, toolbarBaseLine - 30);
      ctx.drawImage(whitePanelImg, 215, toolbarBaseLine - 30);
      ctx.drawImage(whitePanelImg, 415, toolbarBaseLine - 30);
      ctx.drawImage(whitePanelImg, 615, toolbarBaseLine - 30);
      // draw health
      ctx.fillStyle = 'black';
      ctx.font = '22px Patrick Hand, cursive';
      ctx.fillText('Health:', 35, toolbarBaseLine);
      ctx.fillStyle = 'red';
      ctx.fillText(`${'\u{2764}'.repeat(health)}`, 125, toolbarBaseLine);
      // draw energy
      ctx.fillStyle = 'black';
      ctx.fillText(`Energy:  \u26A1 ${energy}`, 245, toolbarBaseLine);
      // draw score
      ctx.fillText(`Score:   \u{1F3C6} ${score}`, 450, toolbarBaseLine);
      // draw level
      ctx.fillText(`Level:   \u{1F31F} ${level}`, 660, toolbarBaseLine);
      // draw Buttons
      // play button
      ctx.font = '30px Patrick Hand, cursive';
      ctx.drawImage(buttonImg, canvasWidth - 180, toolbarBaseLine - 30);
      ElementsPositions.playButton = {
        x: canvasWidth - 180,
        y: toolbarBaseLine - 30,
        width: 45,
        height: 49,
      };
      ctx.fillText('\u{1F782}', canvasWidth - 165, toolbarBaseLine + 3);
      // pause button
      ctx.drawImage(buttonImg, canvasWidth - 120, toolbarBaseLine - 30);
      ElementsPositions.pauseButton = {
        x: canvasWidth - 120,
        y: toolbarBaseLine - 30,
        width: 45,
        height: 49,
      };
      ctx.fillText('\u{2759}\u{2759}', canvasWidth - 107, toolbarBaseLine + 3);
      // restart button
      ctx.drawImage(buttonImg, canvasWidth - 60, toolbarBaseLine - 30);
      ElementsPositions.restartButton = {
        x: canvasWidth - 60,
        y: toolbarBaseLine - 30,
        width: 45,
        height: 49,
      };
      ctx.fillText('\u{2B6F}', canvasWidth - 51, toolbarBaseLine + 3);
    }
  }

  public static drawGameOver() {
    const { ctx } = GameStore;
    if (ctx) {
      Grid.clearCanvas();
      GameUI.drawToolBar();
      ctx.fillStyle = 'black';
      ctx.font = '100px Patrick Hand, cursive';
      ctx.fillText('GAME OVER', 300, 350);
    }
  }

  public static drawStartScreen() {
    const { ctx, canvasWidth, canvasHeight } = GameStore;
    // draw background
    if (ctx) {
      const buttonWidth = 250;
      const buttonHeight = 45;
      const buttonXPosition = canvasWidth / 2 - buttonWidth / 2;
      const buttonYPosition = canvasHeight / 2 + 50;

      ctx.fillStyle = '#414345';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      // start game
      ctx.drawImage(
        brownButton, buttonXPosition, buttonYPosition, buttonWidth, buttonHeight,
      );
      ElementsPositions.startButton = {
        x: buttonXPosition,
        y: buttonYPosition,
        width: buttonWidth,
        height: buttonHeight,
      };
      ctx.drawImage(
        brownButton, buttonXPosition, buttonYPosition + 60, buttonWidth, buttonHeight,
      );
      ElementsPositions.fullScreenButton = {
        x: buttonXPosition,
        y: buttonYPosition + 60,
        width: buttonWidth,
        height: buttonHeight,
      };
      ctx.drawImage(
        brownButton, buttonXPosition, buttonYPosition + 120, buttonWidth, buttonHeight,
      );
      ElementsPositions.exitButton = {
        x: buttonXPosition,
        y: buttonYPosition + 120,
        width: buttonWidth,
        height: buttonHeight,
      };
      ctx.drawImage(gameImg, canvasWidth / 2 - gameImg.width / 2, 100);
      ctx.font = '25px Georgia, serif';
      ctx.fillStyle = '#2a2a2d';
      ctx.fillText('Start Game', buttonXPosition + 62, buttonYPosition + 29);
      ctx.fillText('Fullscreen', buttonXPosition + 70, buttonYPosition + 89);
      ctx.fillStyle = '#870000';
      ctx.font = '23px Georgia, serif';
      ctx.fillText('Back to Home', buttonXPosition + 55, buttonYPosition + 149);
    }
  }
}
