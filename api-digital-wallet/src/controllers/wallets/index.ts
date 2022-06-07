import { addWallets, listWallets, updateWallets, balanceWallets } from '../../services/wallets';

import { buildGetWallets } from './get-wallets';
import { buildGetWalletsBalance } from './get-wallets-balance';
import { buildPostWallets } from './post-wallets';
import { buildPutWallets } from './update-wallets';

export const getWallets = buildGetWallets({ listWallets });
export const getWalletsBalance = buildGetWalletsBalance({ balanceWallets });
export const postWallets = buildPostWallets({ addWallets });
export const putWallets = buildPutWallets({ updateWallets });
