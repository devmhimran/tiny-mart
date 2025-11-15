'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useProduct } from '@/hooks/product/use-product';
import { generateQueryString } from '@/lib/utils';
import { ProductGrid } from '@/components/products';
import { PaginationMain } from '@/components/shared';
import { SearchField } from '@/components/shared/search-field';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [params, setParams] = useState({
    search: searchParams.get('search') || '',
    page: searchParams.get('page') || '1',
  });

  const debounced = useDebouncedCallback((value) => {
    setParams((prevParams) => ({
      ...prevParams,
      search: value,
      page: '1',
    }));
  }, 500);

  const queryString = generateQueryString(params);

  const { getAllProductsMutation, getAllProducts } = useProduct(
    queryString + '&limit=15'
  );

  useEffect(() => {
    router.push(queryString);
  }, [queryString, router]);

  return (
    <div className='max-w-screen-2xl flex flex-col gap-4 md:gap-6 mx-auto py-8 px-2'>
      <h2 className='text-2xl md:text-3xl font-semibold'>Our Products</h2>
      <SearchField search={debounced} params={params} setParams={setParams} />
      <ProductGrid
        data={getAllProducts || []}
        loading={getAllProductsMutation.isLoading}
      />
      <PaginationMain
        meta={getAllProductsMutation.data?.meta}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}
