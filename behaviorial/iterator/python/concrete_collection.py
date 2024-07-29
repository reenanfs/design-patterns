from concrete_iterator import DFSIterator, TreeNode
from collection import Collection
from interface import Iterator


class BinaryTree(Collection):
    def __init__(self, root: TreeNode):
        self.root = root

    def create_iterator(self) -> Iterator:
        return DFSIterator(self.root)
