import AbstractScene from '../AbstractScene';

export class Scene extends AbstractScene {
  constructor(opts) {
    super(opts);
  }

  update(dt) {
  }

  render(canvas, ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  isComplete() {
    return false;
  }
}