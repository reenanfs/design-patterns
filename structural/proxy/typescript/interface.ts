export interface IUserService {
	getUser(id: number): Promise<string>;
}
