import endpoints from '../constants/endpoints';
import { IWalletsFavourite, IWalletsParams } from '../types/wallet.type';

import request from './index';
import {
  AddWalletResponse,
  GetWalletsResponse,
} from './interfaces';
import { WALLET_BALANCE } from '../constants/routes';

export const getWalletsRequest = (): Promise<GetWalletsResponse> => request({
  url: endpoints.WALLETS,
  method: 'GET',
});
export const getWalletsBalanceRequest = (params: IWalletsParams): Promise<GetWalletsResponse> => request({
  url: endpoints.WALLETS+WALLET_BALANCE,
  method: 'GET',
  params,
});

export const updateWalletFavouriteRequest = (data: IWalletsFavourite): Promise<GetWalletsResponse> => request({
  url: endpoints.WALLETS,
  method: 'PUT',
  data
});

export const addWalletRequest = (
  data: IWalletsFavourite,
): Promise<AddWalletResponse> => request({
  url: endpoints.WALLETS,
  method: 'POST',
  data,
});



