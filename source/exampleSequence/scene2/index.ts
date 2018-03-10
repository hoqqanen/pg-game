import {Renderable} from '../../models/Renderable'

export class Scene extends Renderable {
  render() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  isComplete() {
    return false;
  }
}
