import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className='relative overflow-hidden h-[calc(100vh-20vh)] flex items-center'>
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-1/2 w-96 h-96 -z-10 rounded-full border border-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2'
      />
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-1/2 w-[484px] h-[484px] -z-10 rounded-full border border-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2'
      />
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-1/2 w-[584px] h-[584px] -z-10 rounded-full border border-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2'
      />

      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight'>
            Beautiful products, thoughtfully designed
          </h1>

          <p className='mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto'>
            Discover handcrafted items and tools to help you work smarter and
            look great while doing it. Curated collections, fast shipping, and
            friendly support.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-3'>
            <Link href='/products' className='w-full sm:w-auto'>
              <Button
                size='lg'
                className='w-full sm:w-auto bg-[#FF4C01] hover:bg-[#ec4700] text-white hover:brightness-95'
              >
                Shop Products
              </Button>
            </Link>

            <Link href='/blogs' className='w-full sm:w-auto'>
              <Button
                size='lg'
                variant='outline'
                className='w-full sm:w-auto text-gray-800'
              >
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
