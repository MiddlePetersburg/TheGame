import { IElementPosition } from '../models/element-position.interface';

export const collision = (first: IElementPosition, second: IElementPosition): boolean => !(
  first.x > second.x + second.width
  || first.x + first.width < second.x
  || first.y > second.y + second.height
  || first.y + first.height < second.y
);
