from builder import Pizza, PizzaBuilder
from director import PizzaDirector

if __name__ == "__main__":
    # Building method 1
    pizza = (
        PizzaBuilder()
        .set_size("Small")
        .add_toppings(["Pepperoni", "Onions"])
        .set_crust_type("Thin")
        .set_cheese("Mozzarella")
        .set_sauce("Tomato")
        .build()
    )
    # Building method 2
    builder = PizzaBuilder()

    pizza2 = (
        builder.set_size("Small")
        .add_toppings(["Pepperoni", "Onions"])
        .set_crust_type("Thin")
        .set_cheese("Mozzarella")
        .set_sauce("Tomato")
        .build()
    )

    pizza3 = (
        builder.set_size("Small")
        .add_toppings(["Pepperoni", "Onions"])
        .set_crust_type("Thin")
        .set_cheese("Pepperoni")
        .set_sauce("Tomato")
        .build()
    )
    # Building method 3
    pizza4 = Pizza(size="Extra Large", toppings=["Pepperoni", "Onions"])

    # Building method 4
    director = PizzaDirector(builder)

    pizza5 = director.create_margherita_pizza("small")
    pizza6 = director.create_pepperoni_pizza("large")

    # Printing pizzas

    print("======= 1 =======")
    print(pizza)
    print("======= 2 =======")
    print(pizza2)
    print(pizza3)
    print("======= 3 =======")
    print(pizza4)
    print(pizza5)
    print("======= 4 =======")
    print(pizza6)
