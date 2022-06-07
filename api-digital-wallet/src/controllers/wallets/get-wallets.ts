import { OK } from 'http-status-codes';
import { IHttpRequest } from '~/helpers/express-callback';
import { IListWallets } from '../../services/wallets/list-wallets';

import { IControllerResponse } from '..';

export const buildGetWallets = ({ listWallets }: { listWallets: IListWallets }) => {
	return async (
		request: Partial<IHttpRequest>,
	): Promise<IControllerResponse> => {

		const wallets = await listWallets(request.query);

		return {
			success: true,
			statusCode: OK,
			body: wallets,
		};
	};
};
