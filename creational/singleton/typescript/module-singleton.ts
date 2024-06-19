class Database {
	public query(sql: string): void {
		console.log(`Executing query: ${sql}`);
	}
}

export const db = new Database();
