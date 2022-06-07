import { Router } from 'express';
import { postWallets, getWallets, putWallets, getWalletsBalance } from '../../controllers/wallets';
import { buildExpressCallback } from '../../helpers/express-callback';

const router = Router();

router.get('/', buildExpressCallback(getWallets));
router.get('/balance', buildExpressCallback(getWalletsBalance));
router.post('/', buildExpressCallback(postWallets));
router.put('/', buildExpressCallback(putWallets));

export default router;
