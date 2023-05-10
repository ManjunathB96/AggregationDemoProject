import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    name: {
      type: String
    },
    size: {
      type: String
    },
    price: {
      type: Number
    },
    quantity: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

export default model('Order', orderSchema);

/*

_id
0
name
"Pepperoni"
size
"small"
price
19
quantity
10
date
2021-03-13T08:14:30.000+00:00
**/
