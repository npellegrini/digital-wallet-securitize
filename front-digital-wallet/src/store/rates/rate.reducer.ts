import { IRateState } from '../../types/store/rates/rate.reducer.type';
import { RateActions, RATE_UPDATE_BALANCE } from '../../types/store/rates/rate.action.type';

const defaultState: IRateState = {
  rates: {
    USD: "1876",
    EUR: "1719",
    GBP: "1901",
  }
};

export default (state = defaultState, action: RateActions): IRateState => {
  switch (action.type) {

    case RATE_UPDATE_BALANCE: {

      const newRateState = {...state.rates}
      newRateState[action.payload.key] =action.payload.key

      return { rates: newRateState };
    }
    default:
      return state;
  }
};
