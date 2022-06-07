import cookies from 'js-cookie';

import { ACCESS_TOKEN } from '../../constants/auth';
import { AxiosError } from '../../api/interfaces';

export const statusProcessor = (error?: AxiosError): void => {

  // const { response: { status, data: { error: err } } } = error;
  const status = 401 | 409 | 500 | 504;
  switch (status) {
    case 401:
      // cookies.remove(ACCESS_TOKEN);
      break;
    case 409:
      // Do something
      break;
    case 500:
      // Do something
      break;
    case 504:
      // Do something
      break;
    case undefined:
      // Do something

      break;
    default:
      break;
  }
};


