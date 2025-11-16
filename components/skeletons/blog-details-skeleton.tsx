import { Card, CardContent, CardHeader } from '../ui/card';

export function BlogDetailsSkeleton() {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='p-6 md:p-8 pb-4 border-b'>
        <div className='w-9/12 h-5 md:h-7 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='flex gap-4'>
          <div className='w-1/6 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
          <div className='w-1/6 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
        </div>
      </CardHeader>

      <CardContent className='p-6 md:p-8 space-y-3'>
        <div className='w-9/12 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-7/12 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
      </CardContent>
    </Card>
  );
}
