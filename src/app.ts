import express, { Express } from 'express';
import { Server } from 'http';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/user.controller';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	userController: UserController;
	exceptionFilter: ExceptionFilter;

	constructor(
		logger: LoggerService,
		userController: UserController,
		exceptionFilter: ExceptionFilter,
	) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.userController = userController;
		this.exceptionFilter = exceptionFilter;
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router);
	}

	useExceptionFilters(): void {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.useExceptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server start on http://localhost:${this.port}`);
	}
}
