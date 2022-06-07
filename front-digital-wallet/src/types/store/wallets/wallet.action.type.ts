import { IWallet, IWalletsBalance, IWalletsFavourite } from '../../wallet.type';

// action strings
export const WALLET_REQUEST = 'WALLET_REQUEST';
export const WALLET_RESPONSE = 'WALLET_RESPONSE';
export const WALLET_UPDATE_BALANCE = 'WALLET_UPDATE_BALANCE';
export const WALLET_UPDATE_FAVOURITE = 'WALLET_UPDATE_FAVOURITE';
export const WALLET_ADD = 'WALLET_ADD';

export interface WalletRequest {
  type: typeof WALLET_REQUEST;
  payload: IWallet[];
}

export interface WalletResponse {
  type: typeof WALLET_RESPONSE;
  payload: IWallet[];
}

export interface WalletUpdateBalance {
  type: typeof WALLET_UPDATE_BALANCE;
  payload: IWalletsBalance;
}
export interface WalletUpdateFavourite {
  type: typeof WALLET_UPDATE_FAVOURITE;
  payload: IWalletsFavourite;
}
export interface WalletAdd {
  type: typeof WALLET_ADD;
  payload: IWallet;
}

export type WalletActionTypes = WalletRequest | WalletResponse | WalletUpdateBalance | WalletUpdateFavourite | WalletAdd;

export type WalletActions = WalletActionTypes;
