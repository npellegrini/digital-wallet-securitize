
import { RateActions, RATE_UPDATE_BALANCE } from "../../types/store/rates/rate.action.type";
import { IRate } from "../../types/rate.type";

export const rateUpdate = (rateState: IRate): RateActions => {
  return {
    type: RATE_UPDATE_BALANCE,
    payload: rateState,
  };
};


export const updateRate = (rate : IRate) =>  rateUpdate(rate) 