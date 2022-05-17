import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsString({ message: 'Name cannot be empty' })
	name: string;

	@IsEmail({}, { message: 'Email is incorrect' })
	email: string;

	@IsString({ message: 'Password cannot be empty' })
	password: string;
}
