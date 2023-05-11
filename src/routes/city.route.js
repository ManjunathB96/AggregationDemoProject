import express from 'express';
import * as cityController from '../controllers/city.controller';
import { userAuth } from '../middlewares/auth.middleware';
const router = express.Router();

//route to get all oredrs
router.post('', userAuth, cityController.cityDetails);

router.get('/match', userAuth, cityController.cityMatch);

router.get('/sort', userAuth, cityController.citySort);

router.get('/group', userAuth, cityController.cityGroup);

router.get('/project', userAuth, cityController.cityProject);

router.get('/allStages', userAuth, cityController.cityAllStages);

export default router;
