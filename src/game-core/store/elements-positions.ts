import { IElementPosition } from '../models/element-position.interface';

const basePosition = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

class ElementsPositions {
  public startButton: IElementPosition = basePosition;

  public restartButton: IElementPosition = basePosition;

  public pauseButton: IElementPosition = basePosition;

  public playButton: IElementPosition = basePosition;

  public fullScreenButton: IElementPosition = basePosition;

  public exitButton: IElementPosition = basePosition;
}

export default new ElementsPositions();
