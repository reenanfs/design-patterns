import { Database } from './singleton';

const db = Database.instance;
const db2 = Database.instance;

if (db === db2) {
	console.log('Singleton works!');
}

db.query('SELECT * FROM table');
