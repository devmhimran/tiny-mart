import { BlogType } from '@/types';
import { BlogsGridSkeleton } from '../skeletons';
import { BlogCard } from './blog-card';

type BlogsGridProps = {
  data: BlogType[];
  loading?: boolean;
};

export function BlogsGrid({ data, loading }: BlogsGridProps) {
  return !loading ? (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-5 lg:gap-6 xl:gap-8'>
      {data.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  ) : (
    <BlogsGridSkeleton numberOfItems={10} />
  );
}
