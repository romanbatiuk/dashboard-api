import { IMiddleware } from './middleware.interface';
import { Request, Response, NextFunction } from 'express';

export class AuthGuard implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}
		res.status(404).send({ error: 'User not found. You are not authorized' });
	}
}
