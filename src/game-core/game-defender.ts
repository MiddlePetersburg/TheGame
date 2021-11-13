export class Defender {
  private canvas: CanvasRenderingContext2D;

  public readonly x: number;

  public readonly y: number;

  private readonly width: number;

  private readonly height: number;

  private readonly padding: number = 8;

  public static price: number = 20;

  constructor(canvas: CanvasRenderingContext2D, x: number, y: number, cellSize: number) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
  }

  public draw() {
    this.canvas.fillStyle = 'green';
    this.canvas.fillRect(
      this.x + this.padding / 2,
      this.y + this.padding / 2,
      this.width - this.padding,
      this.height - this.padding,
    );
  }
}
