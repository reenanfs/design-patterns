from interface import Shape


class Circle(Shape):
    def __init__(self, color: str) -> None:
        self.color = color

    def draw(self, x: int, y: int, radius: int) -> None:
        print(f"Circle: Draw() [Color : {self.color}, x : {x}, y : {y}, radius : {radius}]")
