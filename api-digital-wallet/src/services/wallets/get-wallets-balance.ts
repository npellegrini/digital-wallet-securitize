import { IInfoWallet } from '../etherscan/info-wallets';
import { validateWalletAddress } from '../../parameter-validation/wallets/wallet-address';

type IQueryParam =  { address:string }
export type IWalletBalance = ({address}: IQueryParam) => Promise<any>;

export const buildBalanceWallets = ({
	 getInfoWallets,
}: {
	getInfoWallets: IInfoWallet;
}): IWalletBalance => {

	return async ({address}: IQueryParam) => {
		const addressData = validateWalletAddress(address)
		const walletBalance = await getInfoWallets.getBalanceWallet(addressData.getAddress());
		const { data: { result }} = walletBalance
		
		return {balanceWei: result};
	};
};
