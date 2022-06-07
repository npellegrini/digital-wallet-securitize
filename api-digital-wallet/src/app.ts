import bodyParser from 'body-parser';
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerOptions =  require("../config/swagger.json");
import config from 'config';
import express from 'express';
import { db } from './db';
import { logger } from './helpers/logger';
import apiV1 from './routes/v1';

class Server {
	app = express();
	port =  config.get('port') || 3000;

	applyMiddlewares() {
		this.app.use(bodyParser.json());
		this.app.use( cors());
		this.app.use('/v1', apiV1);
		this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerOptions));
		
	}

	start() {
		this.applyMiddlewares();

		this.app.listen(this.port, async () => {
			logger.log(`listening to port:${this.port}`);
			await db.init();
		});
	}
}

export const server = new Server();
