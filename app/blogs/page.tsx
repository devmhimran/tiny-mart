'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useRouter, useSearchParams } from 'next/navigation';

import { BlogsGrid } from '@/components/blogs';
import { PaginationMain } from '@/components/shared';
import { SearchField } from '@/components/shared/search-field';
import { Button } from '@/components/ui/button';
import { useGetAllBlogs } from '@/hooks/blog/use-blog';
import { generateQueryString } from '@/lib/utils';

export default function BlogsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [params, setParams] = useState({
    search: searchParams.get('search') || '',
    page: searchParams.get('page') || '1',
    highlight: searchParams.get('highlight') || '',
  });

  const debounced = useDebouncedCallback((value) => {
    setParams((prevParams) => ({
      ...prevParams,
      search: value,
      page: '1',
    }));
  }, 500);

  const queryString = generateQueryString(params);
  const cleanQueryStringForApi = queryString.replace(
    /(&)?highlight=[^&]*/g,
    ''
  );

  const { getAllBlogsMutation, getAllBlogs } = useGetAllBlogs(
    cleanQueryStringForApi + '&limit=15'
  );

  useEffect(() => {
    router.push(queryString);
  }, [queryString, router]);

  useEffect(() => {
    const highlightId = searchParams.get('highlight');
    if (!highlightId) return;

    const timer = setTimeout(() => {
      const updated = new URLSearchParams(searchParams.toString());
      updated.delete('highlight');
      router.replace(`?${updated.toString()}`);

      setParams((prev) => ({
        ...prev,
        highlight: '',
      }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchParams, router]);

  return (
    <div className='max-w-screen-2xl flex flex-col gap-4 md:gap-6 mx-auto py-8 px-2'>
      <div className='flex justify-between'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Blogs & News</h2>
        <Link href='/blogs/create-blog'>
          <Button className='bg-[#FF4C01] hover:bg-[#e04300] text-white'>
            <Plus /> Create New Blog
          </Button>
        </Link>
      </div>

      <SearchField search={debounced} params={params} setParams={setParams} />
      <BlogsGrid data={getAllBlogs} loading={getAllBlogsMutation.isLoading} />

      <PaginationMain
        meta={getAllBlogsMutation.data?.meta}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}
