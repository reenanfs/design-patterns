import { DocumentVisitor } from './visitor';

export interface Document {
	accept(visitor: DocumentVisitor): void;
}
