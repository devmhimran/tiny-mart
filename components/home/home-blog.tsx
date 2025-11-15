'use client';

import { useBlog } from '@/hooks/blog/use-blog';
import { BlogsGrid } from '../blogs/blogs-grid';

export default function HomeBlog() {
  const { getAllBlogsMutation, getAllBlogs } = useBlog('?page=1' + '&limit=5');
  return (
    <div className='max-w-screen-2xl flex flex-col gap-8 md:gap-12 mx-auto py-14 md:py-20 px-2'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Blogs & News
      </h2>
      <BlogsGrid data={getAllBlogs} loading={getAllBlogsMutation.isLoading} />
    </div>
  );
}
