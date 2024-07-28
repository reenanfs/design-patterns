import { ReportGenerator } from './abstract';

export class PDFReportGenerator extends ReportGenerator {
	protected collectData(): void {
		console.log('Collecting data for PDF report...');
	}

	protected processData(): void {
		console.log('Processing data for PDF report...');
	}

	protected formatData(): void {
		console.log('Formatting data for PDF report as PDF...');
	}
}

export class ExcelReportGenerator extends ReportGenerator {
	protected collectData(): void {
		console.log('Collecting data for Excel report...');
	}

	protected processData(): void {
		console.log('Processing data for Excel report...');
	}

	protected formatData(): void {
		console.log('Formatting data for Excel report as Excel...');
	}
}
