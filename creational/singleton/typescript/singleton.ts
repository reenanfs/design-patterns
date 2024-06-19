export class Database {
	private static _instance: Database | null = null;

	private constructor() {}

	public static get instance(): Database {
		if (!this._instance) {
			this._instance = new Database();
		}
		return this._instance;
	}

	public query(sql: string): void {
		console.log(`Executing query: ${sql}`);
	}
}
