import { inject, injectable } from 'inversify';
import { ConfigService } from '../config/config.service';
import { TYPES } from '../types';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: ConfigService) {}

	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		console.log(salt);

		await newUser.setPassword(password, Number(salt));
		return newUser;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
