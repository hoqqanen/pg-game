import {Renderable} from '../../../models/Renderable'

export default class ExplodingPoint extends Renderable {
  x: number = 0; y: number = 0;
  color = "black";

  constructor(opts) {
    super(opts)
    console.log("COLOR!", opts.color)
    this.x = Math.random();
    this.y = Math.random();
    if (opts.color) {
      this.color = opts.color;
    }
  }

  update(dt) {
    this.x += .001*(Math.random());
    this.y += .001*(Math.random()-.5);
  }

  render() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * this.ctx.canvas.width, this.y * this.ctx.canvas.height, 1, 1);
  }

  isComplete() {
    return this.x > 1;
  }
}