import { Dispatch } from "@reduxjs/toolkit";
import { WalletActions, WALLET_REQUEST, WALLET_RESPONSE, WALLET_UPDATE_BALANCE, WALLET_UPDATE_FAVOURITE, WALLET_ADD } from "../../types/store/wallets/wallet.action.type";
import { IWallet, IWalletsBalance, IWalletsFavourite } from "../../types/wallet.type";
import { getWalletsRequest, getWalletsBalanceRequest, updateWalletFavouriteRequest, addWalletRequest} from '../../api/wallets';

export const walletRequest = (walletState: IWallet): WalletActions => {
  return {
    type: WALLET_REQUEST,
    payload: [walletState],
  };
};
export const walletResponse = (walletState: IWallet[]): WalletActions => {
  return {
    type: WALLET_RESPONSE,
    payload: walletState,
  };
};
export const walletBalance = (walletState: IWalletsBalance): WalletActions => {
  return {
    type: WALLET_UPDATE_BALANCE,
    payload: walletState,
  };
};
export const walletUpdateFavourite = (walletState: IWalletsFavourite): WalletActions => {
  return {
    type: WALLET_UPDATE_FAVOURITE,
    payload: walletState,
  };
};
export const walletAdd = (walletState: IWallet): WalletActions => {
  return {
    type: WALLET_ADD,
    payload: walletState,
  };
};

export const getAllWallets = () => {
  return async (dispatch: Dispatch<any>) => {

    const resp: any = await getWalletsRequest();

    dispatch(
      walletResponse(resp.data)
    );
  };
};

export const getWalletBalance = (address: string) => {
  return async (dispatch: Dispatch<any>) => {

    const balance: any = await getWalletsBalanceRequest({ address });

    dispatch(
      walletBalance({...balance.data, address})
    );
  };
};

export const updateWalletBalance = (address: string, isFavourite: boolean) => {
  return async (dispatch: Dispatch<any>) => {

    const wallet: any = await updateWalletFavouriteRequest({ address, isFavourite });

    dispatch(
      walletUpdateFavourite(wallet.data.wallet)
    );
  };
};
export const addWallet = (address: string) => {
  return async (dispatch: Dispatch<any>) => {

    // isFavourite is was hardcode just only to show different scenarios.
    const wallet: any = await addWalletRequest({ address, isFavourite: false });

    dispatch(
      walletAdd(wallet.data.wallet)
    );
  };
};