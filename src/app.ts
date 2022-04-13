import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	constructor(logger: LoggerService) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useRoutes(): void {}

	public async init(): Promise<void> {
		this.useRoutes();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server start on http://localhost:${this.port}`);
	}
}
