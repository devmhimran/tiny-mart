'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function error() {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='text-center space-y-6'>
        <h1 className='text-8xl font-bold'>Error!</h1>
        <div className=' space-y-2'>
          <h2 className='text-4xl font-semibold text-custom-tertiary'>
            Something Went Wrong!
          </h2>
          <h3 className='text-3xl font-semibold text-custom-secondary'></h3>
          <p></p>
        </div>
        <div className='mt-4 flex justify-center'>
          <Link href='/'>
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
