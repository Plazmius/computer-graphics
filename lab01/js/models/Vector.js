import Point from "./Point";

export class Vector {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get points() {
        return [this.start, this.end];
    }
    get x() {
        return this.start.x - this.end.x;
    }

    get y() {
        return this.start.y - this.end.y;
    }

    static turn(vector, angle) {
        const x1 = vector.start.x;
        const y1 = vector.start.y;
        x2 = Math.cos(angle) * x1 - Math.sin(angle) * y1; 
        y2 = Math.sin(angle) * x1 + Math.cos(angle) * y1;

        return new Vector(new Point(x1,y1), new Point(x2,y2));
    }
}