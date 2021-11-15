export class Defender {
  private canvas: CanvasRenderingContext2D;

  public readonly x1: number;

  public readonly y1: number;

  private readonly x2: number;

  private readonly y2: number;

  public static price: number = 20;

  constructor(canvas: CanvasRenderingContext2D, x: number, y: number, cellSize: number) {
    const padding = 8;
    this.canvas = canvas;
    this.x1 = x + padding / 2;
    this.y1 = y + padding / 2;
    this.x2 = cellSize - padding;
    this.y2 = cellSize - padding;
  }

  public draw() {
    this.canvas.fillStyle = 'green';
    this.canvas.fillRect(this.x1, this.y1, this.x2, this.y2);
  }
}
