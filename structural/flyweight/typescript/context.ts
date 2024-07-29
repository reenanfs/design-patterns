import { Circle } from "./concrete-flyweight";

export class CircleContext {
    private circle: Circle;
    private x: number;
    private y: number;
    private radius: number;

    constructor(circle: Circle, x: number, y: number, radius: number) {
        this.circle = circle;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.circle.draw(this.x, this.y, this.radius);
    }
}