from interface import Iterator


class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class DFSIterator(Iterator):
    def __init__(self, root: TreeNode):
        self.stack = []
        if root:
            self.stack.append(root)

    def has_next(self) -> bool:
        return len(self.stack) > 0

    def next(self):
        if not self.has_next():
            return None
        node = self.stack.pop()
        if node.right:
            self.stack.append(node.right)
        if node.left:
            self.stack.append(node.left)
        return node.value
