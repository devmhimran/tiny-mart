import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='text-center space-y-6'>
        <h1 className='text-8xl font-bold'>404</h1>
        <div className=' space-y-2'>
          <h2 className='text-4xl font-semibold text-custom-tertiary'>
            Oops, This Page Is Not Found
          </h2>
          <h3 className='text-3xl font-semibold text-custom-secondary'>
            The link might be corrupted
          </h3>
          <p>or the page may have been removed</p>
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
