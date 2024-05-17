'use client';

import Cart from '@/components/Cart';
import ListProductCard from '@/components/ListProductCard';
import ProductCard from '@/components/ProductCard';
import SearchProduct from '@/components/SearchProduct';
import GridProductsSkeletons from '@/components/skeletons/GridProductsSkeletons';
import ListProductsSkeletons from '@/components/skeletons/ListProductsSkeleton';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';

const Home = () => {
  const [displayGrid, setDisplayGrid] = useState(true);
  const [gridSelected, setGridSelected] = useState(false);
  const [listSelected, setListSelected] = useState(false);

  const {
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products`).then(res => res.json()),
  });

  return (
    <main>
      <div className="container">
        <div className="flex min-h-screen gap-8 py-14">
          <div className="basis-full lg:basis-[70%]">
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold">Our All Products</h1>
              <span className="flex items-center gap-4 text-2xl">
                <BsFillGrid3X3GapFill
                  className={`cursor-pointer ${
                    gridSelected ? 'text-[#525CEB]' : null
                  }`}
                  onClick={() => {
                    setDisplayGrid(true);
                    setGridSelected(!gridSelected);
                    setListSelected(false);
                  }}
                />
                <FaList
                  className={`cursor-pointer ${
                    listSelected ? 'text-[#525CEB]' : 'text-black'
                  }`}
                  onClick={() => {
                    setDisplayGrid(false);
                    setListSelected(!listSelected);
                    setGridSelected(false);
                  }}
                />
              </span>
            </div>
            <SearchProduct />

            {displayGrid ? (
              isLoading ? (
                <GridProductsSkeletons />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )
            ) : isLoading ? (
              <ListProductsSkeletons />
            ) : (
              <div className="space-y-5">
                {products.map(product => (
                  <ListProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

          <div className="lg:basis-[30%] hidden lg:block">
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
