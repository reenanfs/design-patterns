from builder import PizzaBuilder


class PizzaDirector:
    def __init__(self, builder: PizzaBuilder):
        self._builder = builder

    def create_pepperoni_pizza(self, size):
        self._builder.set_size(size)
        self._builder.add_toppings(["pepperoni"])
        self._builder.set_crust_type("thin")
        self._builder.set_sauce("tomato")
        self._builder.set_cheese("mozzarella")
        return self._builder.build()

    def create_margherita_pizza(self, size):
        self._builder.set_size(size)
        self._builder.add_toppings(["tomatoes", "basil"])
        self._builder.set_crust_type("thin")
        self._builder.set_sauce("tomato")
        self._builder.set_cheese("mozzarella")
        return self._builder.build()
