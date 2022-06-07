import config from 'config';
import { logger } from '../helpers/logger';
import { DataSource, DataSourceOptions } from "typeorm"

export type IDataSource = DataSource;

export class DB {
	dbConfig: DataSourceOptions = config.get('typeorm');
	mysqlDataSource: DataSource = new DataSource(this.dbConfig);

	constructor() {
	}

	async stop() {
	}

	async init() {
		const isDev = process.env.NODE_ENV === 'development';

		try {

			await this.mysqlDataSource.initialize()

			if (isDev) {
				logger.log('db is connected');
			}
		} catch (error) {
			if (isDev) {
				logger.log(error);
			}
		}
	}
	getMySqlInstance = () => {
		 return this.mysqlDataSource
	}
}

export const db = new DB();
