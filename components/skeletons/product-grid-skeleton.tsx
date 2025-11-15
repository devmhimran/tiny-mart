import { ProductCardSkeleton } from './product-card-skeleton';

export function ProductGridSkeleton({
  numberOfItems = 10,
}: {
  numberOfItems?: number;
}) {
  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-5 lg:gap-6 xl:gap-8'>
      {Array.from({ length: numberOfItems }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
