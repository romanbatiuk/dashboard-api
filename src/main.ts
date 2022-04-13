import { App } from './app';
import { LoggerService } from './logger/logger.service';

export interface IBootstrapReturn {
	app: App;
}

function bootstrap(): IBootstrapReturn {
	const app = new App(new LoggerService());
	app.init();
	return { app };
}

export const { app } = bootstrap();
