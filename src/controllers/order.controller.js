import HttpStatus from 'http-status-codes';
import * as OrderService from '../services/order.service';

/**
 * Controller to get all orders 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllOrder = async (req, res, next) => {
  try {
    const data = await OrderService.getAllOrder();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All orders fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to get a getSingalOrder
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getSingalOrder = async (req, res, next) => {
//   try {
//     const data = await OrderService.getSingalOrder(req.params._id);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'get Singal Order successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };