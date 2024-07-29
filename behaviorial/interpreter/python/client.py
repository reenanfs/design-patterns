from terminal_expression import Number
from nonterminal_expression import Add, Multiply
from context import Context


context = Context()

expression = Multiply(
    Add(Number(5), Number(3)),
    Number(2)
)

result = expression.interpret(context)
print(f"Result: {result}")
