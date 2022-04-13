import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	public login(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'login');
	}

	public register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
