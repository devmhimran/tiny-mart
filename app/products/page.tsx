'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Search, X } from 'lucide-react';

import { useProduct } from '@/hooks/product/use-product';
import { generateQueryString } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
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

  const { getAllProductsMutation, getAllProducts } = useProduct(queryString);

  useEffect(() => {
    router.push(queryString);
  }, [queryString, router]);

  if (getAllProductsMutation.isLoading) {
    return <div>Loading...</div>;
  }
  console.log({ getAllProducts, queryString });
  return (
    <div className='max-w-screen-2xl flex flex-col gap-6 mx-auto py-8 px-2 md:px-0'>
      <div>
        <h2 className='text-3xl font-semibold'>Our Products</h2>
      </div>

      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-xl'>
            Search
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='space-y-6'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                placeholder='Search products by title'
                value={searchQuery}
                onChange={(e) => {
                  debounced(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                className='pl-10 h-11'
              />
            </div>
          </div>

          <div className='flex flex-wrap gap-2'>
            {params.search && (
              <div className='pl-3 pr-2 py-1 border flex gap-2 items-center rounded-full text-sm'>
                {params.search}
                <span
                  onClick={() => {
                    setParams((prev) => ({
                      ...prev,
                      search: '',
                    }));
                    setSearchQuery('');
                  }}
                >
                  <X className='w-4 h-4 cursor-pointer' />
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div></div>
    </div>
  );
}
