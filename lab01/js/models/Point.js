class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get coords() {
        return [this.x, this.y];
    }

    static move(point, vector) {
        return new Point(point.x + vector.x, point.y + vector.y);
    }
}

export default Point;