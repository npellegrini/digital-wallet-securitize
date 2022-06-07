import { OK } from 'http-status-codes';
import { IUpdateWallets } from '../../services/wallets/update-wallets';
import { IHttpRequest } from '../../helpers/express-callback';

import { IControllerResponse } from '../index';

export const buildPutWallets = ({ updateWallets }: { updateWallets: IUpdateWallets }) => {
	return async (
		request: Partial<IHttpRequest>,
	): Promise<IControllerResponse> => {
		const wallet = await updateWallets(request.body);

		return {
			success: true,
			statusCode: OK,
			body: {
				wallet
			},
		};
	};
};
