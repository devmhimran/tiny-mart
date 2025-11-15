import { Card } from '../ui/card';

export function ProductCardSkeleton() {
  return (
    <Card className='p-0 gap-2 shadow-none'>
      <div className='w-full h-38 md:h-52 bg-gray-300 animate-pulse rounded-t-lg'></div>
      <div className='p-3'>
        <div className='mt-4 w-4/6 h-5 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='mt-4 w-2/6 h-3 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='mt-4 w-3/6 h-5 bg-gray-300 animate-pulse rounded-lg'></div>
      </div>
    </Card>
  );
}
