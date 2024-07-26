import { Circle } from "./concrete-flyweight";
import { CircleContext } from "./context";
import { ShapeFactory } from "./factory";

const colors: string[] = ["Red", "Green", "Blue", "White", "Black"];

const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const getRandomX = (): number => {
    return Math.floor(Math.random() * 100);
}

const getRandomY = (): number => {
    return Math.floor(Math.random() * 100);
}

const circles: CircleContext[] = [];
for (let i = 0; i < 20; ++i) {
    const circle: Circle = ShapeFactory.getCircle(getRandomColor());

    const x = getRandomX();
    const y = getRandomY();
    const radius = 100;
    circles.push(new CircleContext(circle, x, y, radius));
}

for (const context of circles) {
    context.draw();
}




    
