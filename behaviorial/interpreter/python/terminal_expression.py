from context import Context
from abstract_expression import Expression


class Number(Expression):
    def __init__(self, number):
        self.number = number

    def interpret(self, context: Context):
        return self.number
