import { ClientError } from '../../errors/clientError';
import { IWalletsDB } from '../../data-access/wallets';
import { validateWallet } from '../../model-validations/wallet';
import { IWalletModelAttributes } from '../../models/wallet';
import { IInfoWallet } from '../etherscan/info-wallets';


export type IAddWallets = (body: IWalletModelAttributes) => Promise<any>;

export const buildAddWallets = ({
	walletsDB,
	getInfoWallets
}: {
	walletsDB: IWalletsDB;
	getInfoWallets: IInfoWallet
}): IAddWallets => {
	return async body => {
		const walletData = validateWallet(body);
		const { address } = body
		
		 let wallet = await walletsDB.findByAddress({ address })

		if (wallet.length > 0) 
			throw new ClientError("The wallet already exist wallet collection", 404);
			
		let { data } = await getInfoWallets.getFirstTransactionWallet({address: walletData.getAddress()})

		 if (data.status === '0') 
			 throw new ClientError("The wallet doens't exist", 404);

		let	firstTransactionDate = data.result[0].timeStamp * 1000;
		 
		return walletsDB.create({
			address: walletData.getAddress(),
			firstTransaction: new Date(firstTransactionDate),
			isFavourite: walletData.getIsFavourite(),
		});
	};
};
