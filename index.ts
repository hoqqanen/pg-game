import {scenes} from './scenes';
function initCanvas() {
  var canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return canvas;
}

var STEPS_PER_TICK = 20;
var WORLD_STATE = {};


(<any>window).pg = function() {
    var c = initCanvas();
    var ctx = c.getContext("2d");
    var currentScene = 0;
    var scene = new scenes[currentScene];
    var prevTime = new Date().getTime()/1000;
    function worldLoop() {
      var t = new Date().getTime()/1000;
      var dt = t - prevTime;
      prevTime = t;
      // Could calculate framerate and throttle, shrug.
  
      if (scene.isComplete()) {
        currentScene += 1;
        scene = new scenes[currentScene];
      }
  
      for (var i = 0; i < STEPS_PER_TICK; i++) {
        scene.update(dt);
        scene.render(c, ctx);  
      }
      window.requestAnimationFrame(worldLoop);
    }
  
    worldLoop();
    
  }