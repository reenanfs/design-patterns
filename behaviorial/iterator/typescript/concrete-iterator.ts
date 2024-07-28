import { TreeNode } from './concrete-collection';
import { Iterator } from './interface';

export class DFSIterator<T> implements Iterator<T> {
	private stack: (TreeNode<T> | null)[] = [];

	constructor(root: TreeNode<T> | null) {
		if (root) {
			this.stack.push(root);
		}
	}

	hasNext(): boolean {
		return this.stack.length > 0;
	}

	next(): T | null {
		if (!this.hasNext()) {
			return null;
		}
		const node = this.stack.pop();
		if (node?.right) {
			this.stack.push(node.right);
		}
		if (node?.left) {
			this.stack.push(node.left);
		}
		return node?.value ?? null;
	}
}
