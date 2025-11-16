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
import { useBlog } from '@/hooks/blog/use-blog';
import { generateQueryString } from '@/lib/utils';

export default function BlogsPage() {
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

  const { getAllBlogsMutation, getAllBlogs } = useBlog(
    queryString + '&limit=15'
  );

  useEffect(() => {
    router.push(queryString);
  }, [queryString, router]);

  return (
    <div className='max-w-screen-2xl flex flex-col gap-4 md:gap-6 mx-auto py-8 px-2'>
      <div className='flex justify-between'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Blogs & News</h2>
        <Link href='/blogs/create-blog'>
          <Button className='bg-[#FF4C01] hover:bg-[#e04300] text-white cursor-pointer'>
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
