import { IWalletsDB } from '../../data-access/wallets';

type IQueryParam =  { order:string }
export type IListWallets = ({order}: IQueryParam) => Promise<any>;

export const buildListWallets = ({
	walletsDB,
}: {
	walletsDB: IWalletsDB;
}): IListWallets => {
	return async ({order}: IQueryParam) => {
		return walletsDB.findAll(order);
	};
};
