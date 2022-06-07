import { IEtherscanApi } from '~/api-requests/wallets';

export type IFisrtTransaction = ({ address } : {address: string}) => Promise<any>;

export interface IInfoWallet {
	getFirstTransactionWallet: ({ address } : {address: string}) => Promise<any>;
	getBalanceWallet: ( address : string) => Promise<any>;
}
export const buildGetInfoWallets = ({
	etherScanApi,
}: {
	etherScanApi: IEtherscanApi;
}): IInfoWallet  => {

	const getFirstTransactionWallet =  async ({ address } : {address: string}) => {
		return etherScanApi.getFirstTrasaction({address});
	};
	const getBalanceWallet =  async ( address :string) => {
		return etherScanApi.getBalance(address);
	};

	return {
		getFirstTransactionWallet,
		getBalanceWallet,

	};
};
