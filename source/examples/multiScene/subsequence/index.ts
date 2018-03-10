// Example subsequence!

import Sequence from '../../../models/Sequence'
import {Scene as s1} from '../scene1';
import {Scene as s2} from '../scene2';

export class Scene extends Sequence {
  constructor(opts) {
    var o = Object.assign({color: "red"}, opts);
    super(o, [s1, s1]);
  }
}
