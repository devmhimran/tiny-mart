'use client ';

import { useProduct } from '@/hooks/product/use-product';
import { ProductGrid } from '../products';

export function HomeProduct() {
  const { getAllProductsMutation, getAllProducts } = useProduct(
    '?page=1' + '&limit=10'
  );

  return (
    <div className='max-w-screen-2xl flex flex-col gap-8 md:gap-12 mx-auto py-8 px-2'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Our Products
      </h2>
      <ProductGrid
        data={getAllProducts || []}
        loading={getAllProductsMutation.isLoading}
      />
    </div>
  );
}
