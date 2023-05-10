import Order from '../models/order.model';

//get All Order
export const getAllOrder = async () => {
  const data = await Order.aggregate([
    {
      $match: { size: 'medium' }
    },
    {
      $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } }
    }
  ]);
  return data;
};


