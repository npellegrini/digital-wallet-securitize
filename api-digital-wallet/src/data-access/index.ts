import { db } from '../db';

import { buildWalletsDB } from './wallets';
export const walletsDB = buildWalletsDB({ db: db.mysqlDataSource });
