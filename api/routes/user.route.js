import express from 'express';
import {test} from '../../api/controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router= express.Router();
router.get('/test',test);
export default router;