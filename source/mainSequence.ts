// Swap this out with whatever your main sequence is and the build will pick it up.
// You have to export an array of 
import {sequence} from './examples/derivedValues';
import {RenderableConstructor} from './models/Renderable'

export const mainSequence: RenderableConstructor[] = sequence;