import express from 'express';
import { getActionProjectUrl, runBatchAction, runSingleAction, setActionProjectUrl } from '../controller/action-controller';
import { baseUrlFunction, healthStatus } from '@src/server/controller/system-controller';
const router = express.Router();

router.get('/', baseUrlFunction);
router.get('/health', healthStatus);

router.post('/action/run-single', runSingleAction);
router.post('/action/run-batch', runBatchAction);
router.post('/action/set-project-url', setActionProjectUrl);
router.get('/action/get-project-url', getActionProjectUrl);

export default router;
