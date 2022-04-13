import { App } from './app';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/user.controller';

export interface IBootstrapReturn {
	app: App;
}

function bootstrap(): IBootstrapReturn {
	const logger = new LoggerService();
	const app = new App(logger, new UserController(logger), new ExceptionFilter(logger));
	app.init();
	return { app };
}

export const { app } = bootstrap();
