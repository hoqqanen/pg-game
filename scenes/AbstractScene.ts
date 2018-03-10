export default class AbstractScene {
  children = [];
  
  constructor(opts) {
    this.children = [];
  }
  update(dt) {
    this.children.forEach(c => c.update(dt));
  }
  render(canvas, ctx) {
    this.children.forEach(c => c.render(canvas, ctx));
  }
  isComplete() {
    console.log("isComplete is not implemented, calling on AbstractLevel");
    console.trace();
    return false;
  }
}