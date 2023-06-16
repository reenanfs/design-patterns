class Pizza:
    def __init__(self, size):
        self._size: str = size
        self._toppings: list[str] = None
        self._crust_type: str = None
        self._sauce: str = None
        self._cheese: str = None

    @property
    def toppings(self):
        return self._toppings

    @toppings.setter
    def toppings(self, toppings):
        self._toppings = toppings

    @property
    def crust_type(self):
        return self._crust_type

    @crust_type.setter
    def crust_type(self, crust_type):
        self._crust_type = crust_type

    @property
    def size(self):
        return self.size

    @property
    def sauce(self):
        return self._sauce

    @sauce.setter
    def sauce(self, sauce):
        self._sauce = sauce

    @property
    def cheese(self):
        return self._cheese

    @cheese.setter
    def cheese(self, cheese):
        self._cheese = cheese

    def __str__(self):
        description = f"This is a {self._size} pizza\n"
        for prop, value in self.__dict__.items():
            if prop.startswith("_") and value and "_size" not in prop:
                prop_name = prop[1:]  # Remove the leading underscore
                description += (
                    f"{prop_name.capitalize()}: {', '.join(value)}\n"
                    if isinstance(value, list)
                    else f"{prop_name.capitalize()}: {value}\n"
                )
        return description


class PizzaBuilder:
    def __init__(self, size: str):
        self._pizza = Pizza(size)

    def add_toppings(self, toppings: list[str]):
        self._pizza.toppings = toppings
        return self

    def set_crust_type(self, crust_type: str):
        self._pizza.crust_type = crust_type
        return self

    def set_sauce(self, sauce):
        self._pizza.sauce = sauce
        return self

    def set_cheese(self, cheese):
        self._pizza.cheese = cheese
        return self

    def build(self):
        return self._pizza


pizza = (
    PizzaBuilder(size="Small")
    .add_toppings(["Pepperoni", "Onions"])
    .set_crust_type("Thin")
    .set_cheese("Mozzarella")
    .set_sauce("Tomato")
    .build()
)

print(pizza)
