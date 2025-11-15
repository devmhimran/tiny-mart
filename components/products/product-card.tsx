import { ProductType } from '@/types';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

type ProductCardProps = {
  data: ProductType;
};

export function ProductCard({ data }: ProductCardProps) {
  const firstAttribute = data.attributes?.[0];
  const price = firstAttribute?.price ?? 0;
  const discountedPrice = price - (price * data.productDiscount) / 100;

  return (
    <Card className='relative overflow-hidden p-0 gap-2 shadow-none'>
      {data.isFeatured === 'Yes' && (
        <div className='absolute top-2 left-2 bg-[#FF4C01] text-white text-xs px-2 py-1 rounded-md font-semibold z-10'>
          Featured
        </div>
      )}

      {data.productDiscount > 0 && (
        <div className='absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-md font-semibold z-10'>
          -{data.productDiscount}%
        </div>
      )}
      <div>
        <Image
          src={'/assets/img/placeholder-image.jpg'}
          alt={data.productName}
          width={300}
          height={300}
          className='w-full h-38 md:h-52 object-cover'
        />
      </div>
      <CardContent className='p-4'>
        <div className='text-base font-semibold mb-2'>{data.productName}</div>

        <div className='flex items-center gap-1 mb-3'>
          <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
          <span className='text-sm font-medium'>{data.rating.toFixed(1)}</span>
          <span className='text-xs text-slate-400 ml-1'>({data.rating})</span>
        </div>

        <div className='flex items-center gap-2'>
          {data.productDiscount > 0 ? (
            <>
              <span className='text-lg font-bold text-[#FF4C01]'>
                ৳{discountedPrice.toFixed(2)}
              </span>
              <span className='text-sm text-slate-400 line-through'>
                ৳{price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className='text-lg font-bold'>৳{price.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
