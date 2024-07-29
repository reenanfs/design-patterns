from concrete_flyweight import Circle


class CircleContext:
    def __init__(self, circle: Circle, x: int, y: int, radius: int) -> None:
        self.circle = circle
        self.x = x
        self.y = y
        self.radius = radius

    def draw(self) -> None:
        self.circle.draw(self.x, self.y, self.radius)
