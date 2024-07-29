import { Invoice, Resume, Report } from './concrete-element';
import { DocumentVisitor } from './visitor';

export class PrintVisitor implements DocumentVisitor {
	visitReport(report: Report): void {
		report.generateReport();
		console.log('Printing report.');
	}

	visitInvoice(invoice: Invoice): void {
		invoice.createInvoice();
		console.log('Printing invoice.');
	}

	visitResume(resume: Resume): void {
		resume.prepareResume();
		console.log('Printing resume.');
	}
}

export class SaveToDatabaseVisitor implements DocumentVisitor {
	visitReport(report: Report): void {
		report.generateReport();
		console.log('Saving report to database.');
	}

	visitInvoice(invoice: Invoice): void {
		invoice.createInvoice();
		console.log('Saving invoice to database.');
	}

	visitResume(resume: Resume): void {
		resume.prepareResume();
		console.log('Saving resume to database.');
	}
}
