import { App } from './app';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/user.controller';

export interface IBootstrapReturn {
	app: App;
}

function bootstrap(): IBootstrapReturn {
	const logger = new LoggerService();
	const app = new App(logger, new UserController(logger));
	app.init();
	return { app };
}

export const { app } = bootstrap();
