import { walletsDB } from '../../data-access';
import { getInfoWallets } from '../etherscan/index';

import { buildAddWallets } from './add-wallets';
import { buildListWallets } from './list-wallets';
import { buildUpdateWallets } from './update-wallets';
import { buildBalanceWallets } from './get-wallets-balance';

export const listWallets = buildListWallets({ walletsDB });
export const balanceWallets = buildBalanceWallets({ getInfoWallets });
export const addWallets = buildAddWallets({ walletsDB, getInfoWallets });
export const updateWallets = buildUpdateWallets({ walletsDB });
