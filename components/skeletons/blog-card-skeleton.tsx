import { Card, CardContent, CardHeader } from '../ui/card';

export function BlogCardSkeleton() {
  return (
    <Card className='overflow-hidden shadow-none hover:shadow-sm transition-shadow duration-300 h-full flex flex-col gap-2 md:gap-4 py-4 md:py-6'>
      <CardHeader className='spacey-y-4  px-4'>
        <div className='w-full h-5 md:h-7 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-4/6 h-5 md:h-7 bg-gray-300 animate-pulse rounded-lg'></div>
      </CardHeader>

      <CardContent className='mt-4 md:mt-0 p-4 pt-0 flex-1 gap-2 md:gap-3 flex flex-col'>
        <div className='w-full h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-4/6 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
      </CardContent>

      <div className='px-2 md:px-4 mt-auto border-t pt-4 flex md:flex-row flex-col gap-3 items-start md:items-center justify-between'>
        <div className='w-1/6 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-2/6 h-3 md:h-4 bg-gray-300 animate-pulse rounded-lg'></div>
      </div>
    </Card>
  );
}
