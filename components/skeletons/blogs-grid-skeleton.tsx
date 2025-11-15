import { BlogCardSkeleton } from './blog-card-skeleton';

export function BlogsGridSkeleton({
  numberOfItems = 10,
}: {
  numberOfItems?: number;
}) {
  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-5 lg:gap-6 xl:gap-8'>
      {Array.from({ length: numberOfItems }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}
