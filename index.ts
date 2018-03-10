import Sequence from './source/models/Sequence';
import {mainSequence} from './source/mainSequence';

function initCanvas() {
  var canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return canvas;
}

var STEPS_PER_TICK = 20;
var WORLD_STATE = {};
var DEBUG = true;


(<any>window).pg = function() {
    var c = initCanvas();
    var ctx = c.getContext("2d");
    var currentScene = 0;

    // This is probably where we'll add things like the interaction manager.
    var opts = {ctx: ctx};

    var scene = new Sequence({
      ctx: ctx,
      debug: DEBUG
    }, mainSequence);

    var prevTime = new Date().getTime()/1000;
    function worldLoop() {
      var t = new Date().getTime()/1000;
      var dt = t - prevTime;
      prevTime = t;
      // Could calculate framerate and throttle, shrug.
  
      for (var i = 0; i < STEPS_PER_TICK; i++) {
        scene.update(dt);
        scene.render();  
      }
      window.requestAnimationFrame(worldLoop);
    }
  
    worldLoop();
    
  }