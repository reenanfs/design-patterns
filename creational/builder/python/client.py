from concrete_builder import MargheritaPizzaBuilder, PepperoniPizzaBuilder
from director import PizzaDirector
from product import Pizza

if __name__ == "__main__":
    # Building method 1
    pizza = (
        MargheritaPizzaBuilder()
        .set_size("Small")
        .add_toppings()
        .set_crust_type()
        .set_cheese()
        .set_sauce()
        .build()
    )
    # Building method 2
    pepperoni_builder = PepperoniPizzaBuilder()

    pizza2 = (
        pepperoni_builder.set_size("Small")
        .add_toppings()
        .set_crust_type()
        .set_cheese()
        .set_sauce()
        .build()
    )

    pizza3 = (
        pepperoni_builder.set_size("Small")
        .add_toppings()
        .set_crust_type()
        .set_cheese()
        .set_sauce()
        .build()
    )
    # Building method 3
    pizza4 = Pizza(size="Extra Large", toppings=["Pepperoni", "Onions"])

    # Building method 4
    director = PizzaDirector(pepperoni_builder)

    pizza5 = director.construct_pizza("small")

    margherita_builder = MargheritaPizzaBuilder()

    director.set_builder(margherita_builder)

    pizza6 = director.construct_pizza("large")

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
