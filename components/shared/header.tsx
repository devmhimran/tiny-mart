import Link from 'next/link';
import Image from 'next/image';

import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <div className='max-w-screen-2xl flex justify-between items-center mx-auto px-6 py-2'>
      <div>
        <Link href='/'>
          <Image
            width={120}
            height={80}
            src='/assets/png/logo-main.png'
            alt='Logo Main'
            className='w-14'
          />
        </Link>
      </div>
      <div className='flex items-center justify-center gap-10 text-sm'>
        <Link href='/'>Home</Link>
        <Link href='/products'>Our Products</Link>
        <Link href='/blogs'>Blogs</Link>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  );
}
