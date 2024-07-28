import { Collection } from './collection';
import { DFSIterator } from './concrete-iterator';
import { Iterator } from './interface';

export class TreeNode<T> {
	value: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(
		value: T,
		left: TreeNode<T> | null = null,
		right: TreeNode<T> | null = null
	) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

export class BinaryTree<T> implements Collection<T> {
	root: TreeNode<T>;

	constructor(root: TreeNode<T>) {
		this.root = root;
	}

	createIterator(): Iterator<T> {
		return new DFSIterator(this.root);
	}
}
