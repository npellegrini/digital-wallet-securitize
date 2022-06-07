import { ClientError } from '../../errors/clientError';
import { IWalletsDB } from '../../data-access/wallets';
import { validateWallet } from '../../model-validations/wallet';
import { IWalletModelAttributes } from '../../models/wallet';


export type IUpdateWallets = (body: IWalletModelAttributes) => Promise<any>;

export const buildUpdateWallets = ({
	walletsDB,
}: {
	walletsDB: IWalletsDB;
}): IUpdateWallets => {
	return async ({address, ...rest}) => {
		if (!address) {
			throw new Error('You must supply an address.')
		  }
		
		let wallets = await walletsDB.findByAddress({address})

		if (wallets.length === 0) 
			throw new ClientError("The wallet doesn't exist.", 200);
			
		const walletData = validateWallet({address, ...rest});

		const wallet = wallets[0];
		wallet.isFavourite = walletData.getIsFavourite()

		return walletsDB.update(wallet);

	};
};
