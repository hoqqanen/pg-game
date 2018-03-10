import {Renderable, RenderableConstructor} from './Renderable'

export default class Sequence extends Renderable {
  scenes: Array<RenderableConstructor> = []; //TODO add type signature that it's an array of scenes
  currentScene: Renderable = null;
  sceneIndex: number = 0;
  isOutOfScenes = false;

  constructor(opts, scenes: Array<RenderableConstructor>) {
    super(opts);
    this.scenes = scenes;
    this.currentScene = new this.scenes[0](opts);
  }

  update(dt) {
    if (this.currentScene.isComplete()) {
      this.next();
    } else {
      this.currentScene.update(dt);
    }
  }

  render() {
    super.render();
    this.currentScene.render();
  }

  isComplete() {
    return this.isOutOfScenes;
  }

  /*
  Default behavior of a sequence is to simply progress through an array of scenes, swapping when the current one is complete. This will be called automatically given completion of the renderable that is currently in flight.
  */
  protected next() {
    if (this.debug) {
      console.log("next scene called");
    }
    this.sceneIndex += 1;
    if (this.sceneIndex === this.scenes.length) {
      this.isOutOfScenes = true;
    } else {
      this.currentScene = new this.scenes[this.sceneIndex](this.opts);
    }
  }
}