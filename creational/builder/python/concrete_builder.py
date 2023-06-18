from product import Pizza
from builder import PizzaBuilder


class MargheritaPizzaBuilder(PizzaBuilder):
    REQUIRED_PROPERTIES = {
        "size": "The size of the pizza",
    }

    def __init__(self):
        self._pizza = Pizza()

    def set_size(self, size: str):
        self._pizza.size = size
        return self

    def add_toppings(self):
        self._pizza.toppings = ["tomatoes", "basil"]
        return self

    def set_crust_type(self):
        self._pizza.crust_type = "thin"
        return self

    def set_sauce(self):
        self._pizza.sauce = "tomato"
        return self

    def set_cheese(self):
        self._pizza.cheese = "mozzarella"
        return self

    def build(self):
        missing_properties = [
            prop_name
            for prop_name, _ in self.REQUIRED_PROPERTIES.items()
            if getattr(self._pizza, prop_name) is None
        ]

        if missing_properties:
            raise ValueError(
                "Required properties are missing:"
                f" {', '.join(missing_properties)}"
            )

        pizza = self._pizza
        self.__init__()
        return pizza


class PepperoniPizzaBuilder(PizzaBuilder):
    REQUIRED_PROPERTIES = {
        "size": "The size of the pizza",
    }

    def __init__(self):
        self._pizza = Pizza()

    def set_size(self, size: str):
        self._pizza.size = size
        return self

    def add_toppings(self):
        self._pizza.toppings = ["pepperoni"]
        return self

    def set_crust_type(self):
        self._pizza.crust_type = "thin"
        return self

    def set_sauce(self):
        self._pizza.sauce = "tomato"
        return self

    def set_cheese(self):
        self._pizza.cheese = "cheddar"
        return self

    def build(self):
        missing_properties = [
            prop_name
            for prop_name, _ in self.REQUIRED_PROPERTIES.items()
            if getattr(self._pizza, prop_name) is None
        ]

        if missing_properties:
            raise ValueError(
                "Required properties are missing:"
                f" {', '.join(missing_properties)}"
            )

        pizza = self._pizza
        self.__init__()
        return pizza
