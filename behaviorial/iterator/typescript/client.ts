import { BinaryTree, TreeNode } from './concrete-collection';

const root = new TreeNode<number>(1);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(3);
root.left.left = new TreeNode<number>(4);
root.left.right = new TreeNode<number>(5);

const tree = new BinaryTree<number>(root);
const iterator = tree.createIterator();

while (iterator.hasNext()) {
	console.log(iterator.next());
}
