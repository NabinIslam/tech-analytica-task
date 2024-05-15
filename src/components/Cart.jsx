import {
  currentCart,
  removeFromCart,
  totalPrice,
} from '@/lib/features/cart/cartSlice';
import { Checkbox, Label } from 'flowbite-react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(currentCart);
  const total = useSelector(totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="border border-black p-2 my-[155px] rounded-md space-y-2">
      <div className="bg-black text-white text-center py-2 rounded-md">
        SELECTED PRODUCTS
      </div>

      {cart.map(item => (
        <div
          className="flex gap-2 bg-[#F7F8F8] border rounded-lg h-[150px]"
          key={item.id}
        >
          <div className="p-4 basis-[30%]">
            <Image
              className="w-full h-full"
              src={item.image}
              height={163}
              width={163}
            />
          </div>
          <div className="p-2 basis-[70%] flex flex-col justify-center">
            <h5 className="font-semibold text-lg line-clamp-2">{item.title}</h5>
            <div className="flex items-center gap-1 text-[#F6AA24]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h6>({item.rating?.count} Review)</h6>
            <div className="flex items-center justify-between">
              <h6 className="text-pink-600 font-bold text-xl">${item.price}</h6>
              <FaRegTrashAlt
                className="text-xl text-red-700 cursor-pointer"
                onClick={() => dispatch(removeFromCart(item.id))}
              />
            </div>
          </div>
        </div>
      ))}

      <h6 className="text-right text-sm font-semibold">TOTAL: ${total}</h6>
      <div className="flex items-center gap-2">
        <Checkbox className="outline-none focus:outline-none" id="accept" />
        <Label htmlFor="accept" className="flex">
          I've read and agree to the terms and conditions refund policy &
          privacy policy
        </Label>
      </div>
      <div className="flex justify-end">
        <button className="bg-black text-white text-sm font-semibold px-2 py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
