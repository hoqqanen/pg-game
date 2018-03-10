interface TimeVaryingValue {
  val(t: number): number;
}

export class DerivedValue implements TimeVaryingValue {
  v: TimeVaryingValue;
  f: (number) => number

  constructor(v: TimeVaryingValue, f: (number) => number) {
    this.v = v; this.f = f;
  }
  val(t: number) {
    return this.f(this.v.val(t));
  }

  static scale(v: TimeVaryingValue, s: number) {
    return new DerivedValue(v, (x) => x * s);
  }
  static sum(v: TimeVaryingValue, s: number) {
    return new DerivedValue(v, (x) => x + s);
  }
}

export class Constant implements TimeVaryingValue{
  v: number;

  constructor(v: number) {
    this.v = v;
  }
  val(_) {
    return this.v;
  }
}

export class Duration implements TimeVaryingValue{
  start: number;

  constructor(t: number) {
    this.start = t;
  }
  val(t: number): number {
    return t - this.start;
  }
}

export class Sum implements TimeVaryingValue{
  u: TimeVaryingValue;
  v: TimeVaryingValue

  constructor(u: TimeVaryingValue, v: TimeVaryingValue) {
    this.u = u;
    this.v = v;
  }
  val(t: number): number {
    return this.u.val(t) + this.v.val(t);
  }
}
