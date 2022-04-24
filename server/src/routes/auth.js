import _ from 'lodash';
import { Router } from 'express';
import auth from '../middleware/generalAuth.js';
const router = Router();

router.get('/',auth ,async (req, res) => {
    res.send("access allowed");
});

export default router;