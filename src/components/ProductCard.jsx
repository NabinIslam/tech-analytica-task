'use client';
import { addToCart } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;
  const { rate, count } = rating;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price, rating }));
  };

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <FaStar className="icon" />
        ) : rate >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon text-lg" />
        )}
      </span>
    );
  });

  return (
    <div className="bg-[#F7F8F8] rounded-xl shadow border ">
      <div className="p-4 h-[350px]">
        <Image
          className="w-full h-full"
          width={300}
          height={300}
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 space-y-2">
        <h5 className="font-semibold text-xl line-clamp-2" title={title}>
          {title}
        </h5>

        <div className="flex items-center gap-1 text-[#F6AA24]">
          {ratingStar}
        </div>
        <h6>({count} Review)</h6>
        <div className="flex items-center justify-between">
          <h6 className="text-pink-600 font-bold text-xl">${price}</h6>
          <button
            className="bg-black text-white px-3 py-1 rounded-lg"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
