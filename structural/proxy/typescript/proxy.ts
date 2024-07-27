import { IUserService } from './interface';
import { UserService } from './service';

export class UserServiceProxy implements IUserService {
	private realUserService: UserService;
	private cache: Map<number, string>;

	constructor(realUserService: UserService) {
		this.realUserService = realUserService;
		this.cache = new Map<number, string>();
	}

	async getUser(id: number): Promise<string> {
		if (this.cache.has(id)) {
			console.log(`Returning cached user with id ${id}...`);
			return Promise.resolve(this.cache.get(id) as string);
		}

		const user = await this.realUserService.getUser(id);
		this.cache.set(id, user);
		return user;
	}
}
