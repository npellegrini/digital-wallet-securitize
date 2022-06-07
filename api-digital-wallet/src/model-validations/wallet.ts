import Joi from '@hapi/joi';
import { ClientError } from '../errors/clientError';
import { handleValidationError } from '../helpers/handleValidationError';
import { IWalletModelAttributes } from '../models/wallet';

export const validateWallet = (data: IWalletModelAttributes) => {
	const schema = Joi.object()
		.keys({
			address: Joi.string()
				.required()
				.min(1)
				.max(42)
				.label('Address'),
			firstTransaction: Joi.date()
				.label('First Transaction date'),
			isFavourite: Joi.boolean()
				.required()
				.label('Favorite'),
		})
		.error(handleValidationError);

	const { error } = Joi.validate(data, schema);

	if (error) {
		throw new ClientError(error.message, 400);
	}

	return {
		getAddress: () => data.address,
		getFirstTransaction: () => data.firstTransaction,
		getIsFavourite: () => data.isFavourite,
		getDateCreated: () => data.dateCreated,
	};
};
