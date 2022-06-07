import { IWalletState } from '../../types/store/wallets/wallet.reducer.type';
import { WalletActions, WALLET_ADD, WALLET_REQUEST, WALLET_RESPONSE, WALLET_UPDATE_BALANCE, WALLET_UPDATE_FAVOURITE } from '../../types/store/wallets/wallet.action.type';

const defaultState: IWalletState = {
  wallets: [],
};

export default (state = defaultState, action: WalletActions): IWalletState => {
  switch (action.type) {
    case WALLET_REQUEST: {
      return { wallets: [
          ...action.payload
        ]};
    }
    case WALLET_RESPONSE: {
      return { wallets: [
        ...action.payload
      ]};
    }
    case WALLET_UPDATE_BALANCE: {

        const newWalletState = state.wallets.map(wallet => {
            if (wallet.address === action.payload.address) 
                return {...wallet, balanceWei: action.payload.balanceWei}
            return wallet
        })
      return { wallets: newWalletState};
    }
    case WALLET_UPDATE_FAVOURITE: {

        const newWalletState = state.wallets.map(wallet => {
            if (wallet.address === action.payload.address) 
                return {...wallet, isFavourite: action.payload.isFavourite}
            return wallet
        })
      return { wallets: newWalletState};
    }
    case WALLET_ADD: {

      const newWalletState = [...state.wallets, action.payload]
      return { wallets: newWalletState};
    }
    default:
      return state;
  }
};
