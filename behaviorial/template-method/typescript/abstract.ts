export abstract class ReportGenerator {
	// Template method
	public generateReport(): void {
		this.collectData();
		this.processData();
		this.formatData();
		this.printReport();
	}

	// Abstract methods to be implemented by subclasses
	protected abstract collectData(): void;
	protected abstract processData(): void;
	protected abstract formatData(): void;

	// Final method that cannot be overridden
	private printReport(): void {
		console.log('Printing report...');
	}
}
