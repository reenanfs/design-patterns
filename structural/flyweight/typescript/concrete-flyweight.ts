import { Shape } from "./interface";

export class Circle implements Shape {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw(x: number, y: number, radius: number): void {
        console.log(`Circle: Draw() [Color : ${this.color}, x : ${x}, y : ${y}, radius : ${radius}]`);
    }
}