
import express from 'express';
const router = express.Router();
import userRoute from './user.route';
import orderRoute from './order.route';
import cityRoute from './city.route';


/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.use('/users', userRoute);

  router.use('/orders', orderRoute);
  
  router.use('/cities', cityRoute);

  return router;
};

export default routes;
