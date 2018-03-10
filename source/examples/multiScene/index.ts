import Sequence from '../../models/Sequence';
import {RenderableConstructor} from '../../models/Renderable';
import {Scene as s1} from './scene1';
import {Scene as subseq} from './subsequence';
import {Scene as s2} from './scene2';

// Since the ctx is not known until runtime, we do not build the sequence here. The alternative is to be able to set a context and have it propagated down, but that feels really messy. A context must be present at construction.



// If you want the default sequence behavior of stepping through an array of scenes, or you have already wrapped everything in a singleton and just want to expose something like [MySpecialSequence], use the following:
export const sequence: Array<RenderableConstructor> = [
  s1,
  subseq,
  s2
];


// Otherwise you can make your own sequence inline. Notice how this sequence just keeps picking new scenes.
/*
class Scene extends Sequence {
  constructor(opts) {
    // Note the insertion of the scenes here
    super(opts, [
      s1,
      subseq
    ]);
  }
  protected next() {
    this.currentScene = new this.scenes[Math.floor(Math.random() * this.scenes.length)](this.opts);
  }
}
export const sequence: Array<RenderableConstructor> = [Scene];
*/
