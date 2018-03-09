import AbstractScene from '../AbstractScene'
import ExplodingPoint from './explodingPoint'

export class Scene extends AbstractScene {
  constructor(opts) {
    super(opts);
    // TODO: make points "children" and have automatic maps of update and render on children
    this.children = new Array(1).fill(0).map(_ => new ExplodingPoint());
  }

  update(dt) {
    super.update(dt)
  }

  render(canvas, ctx) {
    super.render(canvas, ctx)
  }

  isComplete() {
    return this.children[0].x > 1
  }
}