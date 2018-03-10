
export class Point {
  x: number; y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Square root is slow and usually we don't need it, but "squareNorm" is long.
  norm(): number {
    return this.x * this.x + this.y * this.y;
  }

  // Prefer pure methods to destructive ones. Add destructive methods as performance requires.
  static scale(p: Point, s: number): Point {
    return new Point(p.x * s, p.y * s);
  }
  static add(p: Point, q: Point): Point {
    return new Point(p.x + q.x, p.y + q.y);
  }
  static sub(p: Point, q: Point): Point {
    return new Point(p.x - q.x, p.y - q.y);
  }
}

abstract class PointList {
  points: Point[];

  forEach(f: (Point) => void): void {
    this.points.forEach(p => f(p));
  }
  map(f: (Point) => Point): Point[] {
    return this.points.map(p => f(p));
  }
}

export enum GridAlignment {
  Edge,
  Center
}

export class Grid extends PointList {
  points: Point[];

  constructor(rows: number, cols: number, alignment: GridAlignment) {
    super();
    this.points = [];
    for(var i = 0; i < rows; i++) {
      for(var j = 0; j < cols; j++) {
        var x = 0, y = 0;
        if (alignment === GridAlignment.Center) {
          x = (i + 0.5) / rows;
          y = (j + 0.5) / cols;
        } else if (alignment === GridAlignment.Edge) {
          x = i / Math.max(rows - 1, 1);
          y = j / Math.max(cols - 1, 1);
        }
        this.points.push(new Point(x, y));
      }
    }
  }
}
