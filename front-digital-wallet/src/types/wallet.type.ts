export interface IWallet {
	idWallet: number;
	address: string;
	firstTransaction: Date;
	balanceWei: string;
	isFavourite: boolean;
	dateCreated: Date;
}
export interface IWalletsBalance {
	balanceWei: string;
	address: string;
}
export interface IWalletsFavourite {
	isFavourite: boolean;
	address: string;
}

export interface IWalletsParams {
	address: string;
}

