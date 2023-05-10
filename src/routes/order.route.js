import express from 'express';
import * as orderController from '../controllers/order.controller';
import { userAuth } from '../middlewares/auth.middleware';
const router = express.Router();

//route to get all oredrs
router.get('',userAuth, orderController.getAllOrder);


export default router;
