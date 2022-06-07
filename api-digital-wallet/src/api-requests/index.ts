import axios from "axios";

import { buildEtherscanApi } from './wallets';
export const etherScanApi = buildEtherscanApi({ issueHttpRequest: axios  });
