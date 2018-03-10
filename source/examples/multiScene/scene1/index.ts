import {Renderable} from '../../../models/Renderable'
import ExplodingPoint from './explodingPoint'

export class Scene extends Renderable {
  constructor(opts) {
    opts.ctx.clearRect(0, 0, opts.ctx.canvas.width, opts.ctx.canvas.height);
    super(opts);
    // TODO: make points "children" and have automatic maps of update and render on children
    this.children = new Array(10).fill(0).map(_ => new ExplodingPoint(opts));
  }
}
