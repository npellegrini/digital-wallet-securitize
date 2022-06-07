import { IRate } from '../../rate.type';

// action strings
export const RATE_UPDATE_BALANCE = 'WALLET_UPDATE_BALANCE';


export interface RateUpdateBalance {
  type: typeof RATE_UPDATE_BALANCE;
  payload: IRate;
}

export type RateActionTypes = RateUpdateBalance;

export type RateActions = RateActionTypes;
