from builder import PizzaBuilder


class PizzaDirector:
    def __init__(self, builder: PizzaBuilder):
        self._builder = builder

    def set_builder(self, builder: PizzaBuilder):
        self._builder = builder

    def construct_pizza(self, size):
        self._builder.set_size(size)
        self._builder.add_toppings()
        self._builder.set_crust_type()
        self._builder.set_sauce()
        self._builder.set_cheese()
        return self._builder.build()
