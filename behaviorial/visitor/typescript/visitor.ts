import { Invoice, Resume, Report } from './concrete-element';

export interface DocumentVisitor {
	visitReport(report: Report): void;
	visitInvoice(invoice: Invoice): void;
	visitResume(resume: Resume): void;
}
