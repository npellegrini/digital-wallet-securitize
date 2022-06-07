import { OK } from 'http-status-codes';
import { IHttpRequest } from '~/helpers/express-callback';
import { IWalletBalance } from '../../services/wallets/get-wallets-balance';

import { IControllerResponse } from '..';

export const buildGetWalletsBalance = ({ balanceWallets }: { balanceWallets: IWalletBalance }) => {
	return async (
		request: Partial<IHttpRequest>,
	): Promise<IControllerResponse> => {
		
		const wallets = await balanceWallets(request.query);

		return {
			success: true,
			statusCode: OK,
			body: wallets,
		};
	};
};
