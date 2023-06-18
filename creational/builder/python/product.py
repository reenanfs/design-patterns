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
