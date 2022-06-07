import { ValidationErrorItem } from '@hapi/joi';
import { ClientError } from '../errors/clientError';

export const handleValidationError = ([
	validationError,
]: ValidationErrorItem[]) => {

	switch (validationError.type) {
		case 'object.allowUnknown': {
			throw new ClientError('Contains fields that are not allowed.');
		}

		case 'object.child': {
			// just show first validation error only
			const { type, context } = validationError.context!.reason[0];

			switch (type) {
				case 'any.empty':
					throw new ClientError(`${context.label} is empty.`);

				case 'any.required':
					throw new ClientError(`${context.label}  is required.`);

				case 'string.min':
					throw new ClientError(
						`${context.label} Must be more than one character. ${context.limit} .`,
					);

				case 'string.max':
					throw new ClientError(
						`${context.label} must have lees than ${context.limit} characters.`,
					);
				case 'date.base':
					throw new ClientError(
						`${context.label} invalid format.`,
					);
				case 'string.length':
					throw new ClientError(
						`${context.label} must have ${context.limit}.`,
					);

				/**
				 * All possible error messages:
				 * https://github.com/hapijs/joi/blob/v15.0.1/lib/language.js
				 */
				default:
					throw new Error('Validation error unhandled.');
			}
		}

		default:
			throw new Error('Validation error unhandled.');
	}
};
