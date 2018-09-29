import Point from "./Point";
const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}
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
        const radAngle = toRadians(angle);
        const vectorStart = vector.points[0];

        const x1 = vector.x;
        const y1 = vector.y;
        const x2 = Math.cos(radAngle) * x1 - Math.sin(radAngle) * y1;
        const y2 = Math.sin(radAngle) * x1 + Math.cos(radAngle) * y1;
        
        return new Vector(vectorStart, new Point(vectorStart.x - x2,vectorStart.y - y2));
    }
}