from concrete_collection import BinaryTree, TreeNode


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

tree = BinaryTree(root)

iterator = tree.create_iterator()

while iterator.has_next():
    print(iterator.next())
