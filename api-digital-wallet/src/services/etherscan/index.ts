import { etherScanApi } from "../../api-requests/index";

import { buildGetInfoWallets } from './info-wallets';

export const getInfoWallets = buildGetInfoWallets({ etherScanApi });
