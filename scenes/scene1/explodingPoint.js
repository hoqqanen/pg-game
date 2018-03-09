// Example of a child object within a scene
export default class ExplodingPoint {
  constructor() {
    this.x = Math.random()
    this.y = Math.random()
  }
  update(dt) {
    this.x += .001*(Math.random())
    this.y += .001*(Math.random()-.5)
  }
  render(canvas, ctx) {
    ctx.fillStyle = "black"
    ctx.fillRect(this.x * canvas.width, this.y * canvas.height, 1, 1)
  }
}