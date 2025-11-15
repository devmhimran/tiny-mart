import { ProductType } from '@/types';
import { ProductCard } from './product-card';
import { ProductGridSkeleton } from '../skeletons';

type ProductGridProps = {
  data: ProductType[];
  loading?: boolean;
};

export function ProductGrid({ data, loading }: ProductGridProps) {
  return !loading ? (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-5 lg:gap-6 xl:gap-8'>
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  ) : (
    <ProductGridSkeleton numberOfItems={10} />
  );
}
