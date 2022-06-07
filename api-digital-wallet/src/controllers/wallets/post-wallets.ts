import { OK } from 'http-status-codes';
import { IHttpRequest } from '../../helpers/express-callback';
import { IAddWallets } from '../../services/wallets/add-wallets';

import { IControllerResponse } from '../index';

export const buildPostWallets = ({ addWallets }: { addWallets: IAddWallets }) => {
	return async (
		request: Partial<IHttpRequest>,
	): Promise<IControllerResponse> => {

		const wallet = await addWallets(request.body);

		return {
			success: true,
			statusCode: OK,
			body: {
				wallet
			},
		};
	};
};
