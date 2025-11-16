'use client';

import { useProductId } from '@/hooks/product/use-product';
import { useParams, useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/shared';
import {
  ArrowLeft,
  Star,
  Package,
  Tag,
  ShoppingCart,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [selectedAttribute, setSelectedAttribute] = useState(0);

  const { getProductById, getProductByIdMutation } = useProductId(id as string);
  const { isLoading } = getProductByIdMutation;

  const {
    productName,
    description,
    isFeatured,
    productCode,
    productDiscount = 0,
    rating,
    attributes,
  } = getProductById || {};

  const currentAttribute = attributes?.[selectedAttribute];
  const price = currentAttribute?.price ?? 0;
  const discountedPrice = price - (price * productDiscount) / 100;

  return (
    <div className='max-w-screen-2xl mx-auto py-8 px-4'>
      <Button
        variant='outline'
        onClick={() => router.push('/products')}
        className='mb-6'
      >
        <ArrowLeft className='w-4 h-4 mr-2' />
        Back to Products
      </Button>

      {!isLoading ? (
        <div className='flex md:flex-row flex-col justify-between gap-8'>
          <Card className='overflow-hidden h-fit w-full p-0'>
            <div className='relative'>
              {isFeatured === 'Yes' && (
                <div className='absolute top-4 left-4 bg-[#FF4C01] text-white text-sm px-3 py-1.5 rounded-md font-semibold z-10'>
                  Featured
                </div>
              )}

              {productDiscount > 0 && (
                <div className='absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1.5 rounded-md font-semibold z-10'>
                  -{productDiscount}%
                </div>
              )}

              <Image
                src='/assets/img/placeholder-image.jpg'
                alt={productName || 'Product Image'}
                width={600}
                height={600}
                className='w-full h-90 md:h-135 object-cover'
                priority
              />
            </div>
          </Card>

          <div className='w-full flex flex-col gap-6'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
                {productName}
              </h1>

              <div className='flex items-center gap-2 mb-4'>
                <div className='flex items-center gap-1'>
                  <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  <span className='text-lg font-semibold'>
                    {rating?.toFixed(1) || 0}
                  </span>
                </div>
                <span className='text-gray-500'>({rating} reviews)</span>
              </div>

              <div className='flex items-center gap-2 text-gray-600 mb-2'>
                <Package className='w-4 h-4' />
                <span className='text-sm'>
                  Product Code:{' '}
                  <span className='font-medium'>{productCode}</span>
                </span>
              </div>

              {currentAttribute && (
                <div className='flex items-center gap-2 text-gray-600'>
                  <Tag className='w-4 h-4' />
                  <span className='text-sm'>
                    SKU:{' '}
                    <span className='font-medium'>{currentAttribute.sku}</span>
                  </span>
                </div>
              )}
            </div>

            <Card className='p-6 bg-gray-50'>
              <div className='flex items-baseline gap-3'>
                {productDiscount > 0 ? (
                  <>
                    <span className='text-4xl font-bold text-[#FF4C01]'>
                      ৳{discountedPrice.toFixed(2)}
                    </span>
                    <span className='text-2xl text-gray-400 line-through'>
                      ৳{price.toFixed(2)}
                    </span>
                    <span className='text-lg text-green-600 font-semibold'>
                      Save {productDiscount}%
                    </span>
                  </>
                ) : (
                  <span className='text-4xl font-bold text-gray-900'>
                    ৳{price.toFixed(2)}
                  </span>
                )}
              </div>
            </Card>

            {attributes && attributes.length > 0 && (
              <div>
                <h3 className='text-lg font-semibold mb-3'>Select Size</h3>
                <div className='flex flex-wrap gap-3'>
                  {attributes.map((attr, index) => (
                    <Button
                      key={attr.sku}
                      variant={
                        selectedAttribute === index ? 'default' : 'outline'
                      }
                      onClick={() => setSelectedAttribute(index)}
                      className='min-w-20'
                    >
                      {attr.size}
                    </Button>
                  ))}
                </div>
                {currentAttribute?.stock && (
                  <div className='mt-3'>
                    {currentAttribute?.stock > 0 ? (
                      <span className='text-sm text-green-600 font-medium'>
                        In Stock ({currentAttribute.stock} available)
                      </span>
                    ) : (
                      <span className='text-sm text-red-600 font-medium'>
                        Out of Stock
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className='flex gap-3'>
              <Button
                size='lg'
                className='flex-1 bg-[#FF4C01] hover:bg-[#e04300] text-white'
                disabled={!currentAttribute || currentAttribute.stock === 0}
              >
                <ShoppingCart className='w-5 h-5 mr-2' />
                Add to Cart
              </Button>
              <Button size='lg' variant='outline'>
                <Heart className='w-5 h-5' />
              </Button>
            </div>

            <Card className='p-6'>
              <h3 className='text-xl font-semibold mb-3'>
                Product Description
              </h3>
              <div
                className='prose prose-sm max-w-none text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: description ?? '' }}
              />
            </Card>

            {attributes && attributes.length > 0 && (
              <Card className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Specifications</h3>
                <div className='space-y-3'>
                  {attributes.map((attr) => (
                    <div
                      key={attr.sku}
                      className='flex justify-between items-center pb-3 border-b last:border-b-0'
                    >
                      <div>
                        <span className='font-medium text-gray-700'>
                          Size: {attr.size}
                        </span>
                        <span className='text-sm text-gray-500 ml-2'>
                          ({attr.sku})
                        </span>
                      </div>
                      <div className='text-right'>
                        <div className='font-bold text-lg'>৳{attr.price}</div>
                        <div className='text-sm text-gray-500'>
                          Stock: {attr.stock}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
