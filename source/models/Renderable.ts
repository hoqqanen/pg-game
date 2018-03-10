export class Renderable {
  ctx = null; // The context we're rendering to
  children: Array<Renderable> = [];
  debug = false;
  opts = {};
  
  constructor(opts = {ctx: null, 
                      debug: false}) {
    // We might consider throwing things like a name and unique id on the object for logging
    this.opts = opts;
    this.ctx = opts.ctx;
    this.children = [];
    if (opts && opts.debug) {
      this.debug = opts.debug;
    }
  }

  update(dt: number) {
    // TODO: Filter out completed children and trash them
    // Update the children left
    this.children.forEach(c => c.update(dt));
  }

  render() {
    if (!this.ctx) {
      console.log("Trying to render without a context");
    }
    this.children.forEach(c => c.render());
  }

  isComplete() {
    return this.children.every(c => c.isComplete());
  }
}

// An uninitialized renderable
export interface RenderableConstructor {
  new (...args: any[]): Renderable;
}