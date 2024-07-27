import { IUserService } from './interface';

export class UserService implements IUserService {
	async getUser(id: number): Promise<string> {
		console.log(`Fetching user with id ${id} from the API...`);
		return new Promise(resolve => {
			setTimeout(() => resolve(`User ${id}`), 1000);
		});
	}
}
