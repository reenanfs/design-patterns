import { Circle } from "./concrete-flyweight";

export class ShapeFactory {
    private static circleMap: Map<string, Circle> = new Map();

    public static getCircle(color: string): Circle {
        let circle: Circle | undefined = ShapeFactory.circleMap.get(color);

        if (!circle) {
            circle = new Circle(color);
            ShapeFactory.circleMap.set(color, circle);
            console.log(`Creating circle of color : ${color}`);
        }
        return circle;
    }
}