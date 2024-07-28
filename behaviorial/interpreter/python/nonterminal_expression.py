from contextvars import Context
from abstract_expression import Expression


class Add(Expression):
    def __init__(self, left, right):
        self.left = left
        self.right = right

    def interpret(self, context: Context):
        return self.left.interpret(context) + self.right.interpret(context)


class Multiply(Expression):
    def __init__(self, left, right):
        self.left = left
        self.right = right

    def interpret(self, context: Context):
        return self.left.interpret(context) * self.right.interpret(context)
