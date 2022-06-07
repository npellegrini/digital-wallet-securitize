import { Router } from 'express';

import walletsApi from './wallets';

const router = Router();

router.use('/wallets', walletsApi);

export default router;
