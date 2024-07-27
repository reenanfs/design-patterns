import { IUserService } from './interface';
import { UserServiceProxy } from './proxy';
import { UserService } from './service';

async function clientCode(userService: IUserService) {
	console.log(await userService.getUser(1));
	console.log(await userService.getUser(2));
	console.log(await userService.getUser(1));
}

(async () => {
	console.log('Client: Executing the client code with a real user service:');
	const userService = new UserService();
	await clientCode(userService);

	console.log('');

	console.log('Client: Executing the same client code with a proxy:');
	const userServiceProxy = new UserServiceProxy(userService);
	await clientCode(userServiceProxy);
})();
