import { combineReducers } from 'redux';
import wallet from "./wallets/wallet.reducer";
import rate from "./rates/rate.reducer";

const appReducer = combineReducers({
    wallet,
    rate
  });

  const rootReducer = (state:any, action:any) => {
    return appReducer(state, action);
  };
  export type RootState = ReturnType<typeof rootReducer>;

  export default rootReducer