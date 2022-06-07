import { AxiosError as AxiosErrorLib, AxiosRequestConfig as AxiosRequestConfigLib } from 'axios';

import { IWallet } from '../types/wallet.type';

export interface AxiosRequestConfig extends AxiosRequestConfigLib {
  retry?: boolean;
}

export interface AxiosError extends AxiosErrorLib {
  config: AxiosRequestConfig;
}

export interface GetWalletsResponse {
  data: IWallet[];
}
export interface AddWalletResponse {
  data: IWallet;
}

