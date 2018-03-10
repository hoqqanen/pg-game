import {Renderable} from '../../../models/Renderable';
import {Constant, Duration, Sum, DerivedValue} from '../../../models/Reactive';
import {Grid, GridAlignment, Point} from '../../../models/Data';

export class Scene extends Renderable {
  grid: Grid;

  constructor(opts) {
    super(opts);
    // consider throwing the clock on Opts?
    var t = new Date().getTime();
    var rows = 10;
    var maxR = Math.min(this.ctx.canvas.width, this.ctx.canvas.height)/(4*rows);
    this.grid = new Grid(10, 10, GridAlignment.Center);
    // Packing more data into point objects
    this.grid.forEach(p => {
      var fastTime = DerivedValue.scale(new Duration(t), 5);
      p.r = new DerivedValue(fastTime, v => (1+Math.sin((1+p.x)*(v + p.y * 2 * Math.PI)))*maxR);
    });
  }

  render() {
    var t = new Date().getTime()/1000;
    var W = this.ctx.canvas.width; var H = this.ctx.canvas.height;
    this.ctx.clearRect(0,0,W,H)
    this.ctx.fillStyle = "black";
    this.grid.forEach(p => {
      this.ctx.beginPath();
      // I don't like having to call .val(t) on a TVV. I wish there was a way of just wrapping it...
      // The ways to do that seem too magical, opaque, or brittle though.
      // Maybe do the FRP thing and register all rvals with the world and have it compute them? :/
      this.ctx.arc(p.x*W, p.y*H, p.r.val(t), 0, 2*Math.PI);
      this.ctx.fill();
    });
  }

  isComplete() {
    return false;
  }
}
