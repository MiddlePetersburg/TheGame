export class Enemy {
  private ctx: CanvasRenderingContext2D;

  public health: number = 100;

  public readonly speed: number = 0.3;

  private x1: number;

  private readonly y1: number;

  private readonly x2: number;

  private readonly y2: number;

  constructor(
    canvas: CanvasRenderingContext2D,
    canvasWidth: number,
    x: number, y: number,
    cellSize: number,
    vPosition: number,
  ) {
    this.ctx = canvas;

    const padding = 8;

    this.x1 = canvasWidth;
    this.y1 = vPosition;
    this.x2 = cellSize - padding;
    this.y2 = cellSize - padding;
  }

  draw() {
    this.x1 -= this.speed;
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
    this.ctx.fillStyle = 'black';
    this.ctx.font = '30px';
  }
}
