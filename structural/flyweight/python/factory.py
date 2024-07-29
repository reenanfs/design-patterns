from typing import Dict

from concrete_flyweight import Circle


class ShapeFactory:
    _circle_map: Dict[str, Circle] = {}

    @staticmethod
    def get_circle(color: str) -> Circle:
        circle = ShapeFactory._circle_map.get(color)

        if not circle:
            circle = Circle(color)
            ShapeFactory._circle_map[color] = circle
            print(f"Creating circle of color : {color}")
        return circle
