import { FindOptionsOrderValue } from 'typeorm';
import { IDataSource } from '../db';
import { IWalletModelAttributes, Wallets } from '../models/wallet';
import { ORDER_BY } from "./constant";

export interface IWalletsDB {
	findAll: (order?:string) => Promise<IWalletModelAttributes[]>;
	create: (data: IWalletModelAttributes) => Promise<IWalletModelAttributes>;
	findByAddress: ({ address }: { address: string}) => Promise<IWalletModelAttributes[]>;
	update: (data: IWalletModelAttributes) => Promise<IWalletModelAttributes>;
}

export const buildWalletsDB = ({
	db,
}: {
	db: IDataSource;
}): IWalletsDB => {
	const findAll = async (order:string = "DESC") => {
		let orderProccessed: string = order.toUpperCase();
		let orderBy: FindOptionsOrderValue = ORDER_BY[orderProccessed];
		return db.getRepository(Wallets).find({order: { isFavourite: orderBy}});
	};
	const findByAddress = async ({ address }: { address: string}) => {
		return db.getRepository(Wallets).find({where: {address: address}});
	};

	const create = async (data: IWalletModelAttributes) => {
		return db.getRepository(Wallets).save(data);
	};
	const update = async (data: IWalletModelAttributes) => {
		return db.getRepository(Wallets).save(data);
	};

	return {
		findAll,
		create,
		findByAddress,
		update
	};
};
