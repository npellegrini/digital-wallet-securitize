import Joi from '@hapi/joi';
import { ClientError } from '../../errors/clientError';
import { handleValidationError } from '../../helpers/handleValidationError';

export const validateWalletAddress = (address: string) => {
	const schema = Joi.object()
		.keys({
			address: Joi.string()
				.required()
				.length(42)
				.regex(/^(0x)?[0-9a-f]{40}$/i)
				.label('Address'),
		})
		.error(handleValidationError);

	const { error } = Joi.validate({address}, schema);

	if (error) {
		throw new ClientError(error.message, 400);
	}

	return {
		getAddress: () => address,
	};
};
