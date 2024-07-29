import { DocumentVisitor } from './visitor';
import { Document } from './element';

export class Report implements Document {
	accept(visitor: DocumentVisitor): void {
		visitor.visitReport(this);
	}

	generateReport(): void {
		console.log('Generating report...');
	}
}

export class Invoice implements Document {
	accept(visitor: DocumentVisitor): void {
		visitor.visitInvoice(this);
	}

	createInvoice(): void {
		console.log('Creating invoice...');
	}
}

export class Resume implements Document {
	accept(visitor: DocumentVisitor): void {
		visitor.visitResume(this);
	}

	prepareResume(): void {
		console.log('Preparing resume...');
	}
}
