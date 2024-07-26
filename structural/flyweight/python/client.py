import random

from context import CircleContext
from factory import ShapeFactory


colors = ["Red", "Green", "Blue", "White", "Black"]


def get_random_color() -> str:
    return colors[random.randint(0, len(colors) - 1)]


def get_random_x() -> int:
    return random.randint(0, 100)


def get_random_y() -> int:
    return random.randint(0, 100)


circles: list[CircleContext] = []
for _ in range(20):
    circle = ShapeFactory.get_circle(get_random_color())
    x = get_random_x()
    y = get_random_y()
    radius = 100
    circles.append(CircleContext(circle, x, y, radius))

for context in circles:
    context.draw()
