class Pizza:
    def __init__(
        self,
        size: str = None,
        toppings: list[str] = None,
        crust_type: str = None,
        sauce: str = None,
        cheese: str = None,
    ):
        self.size: str | None = size
        self.toppings: list[str] | None = toppings
        self.crust_type: str | None = crust_type
        self.sauce: str | None = sauce
        self.cheese: str | None = cheese

    def __str__(self):
        description = [
            f"This is a {self.size} pizza.",
            *[
                f"{name.capitalize()}:"
                f" {', '.join(value) if isinstance(value, list) else value}"
                for name, value in self.__dict__.items()
                if value is not None and name != "_size"
            ],
        ]
        return "\n".join(description)


class PizzaBuilder:
    REQUIRED_PROPERTIES = {
        "size": "The size of the pizza",
    }

    def __init__(self):
        self._pizza = Pizza()

    def set_size(self, size: str):
        self._pizza.size = size
        return self

    def add_toppings(self, toppings: list[str]):
        self._pizza.toppings = toppings
        return self

    def set_crust_type(self, crust_type: str):
        self._pizza.crust_type = crust_type
        return self

    def set_sauce(self, sauce: str):
        self._pizza.sauce = sauce
        return self

    def set_cheese(self, cheese: str):
        self._pizza.cheese = cheese
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
