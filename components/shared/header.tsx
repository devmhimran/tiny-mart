'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

import { Button } from '../ui/button';
import PhoneMenu from './phone-menu';
import PrimaryLogo from './primary-logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='max-w-screen-2xl flex justify-between items-center mx-auto py-2'>
      <PrimaryLogo />

      <div className='hidden md:block'>
        <div className='flex items-center justify-center gap-10 text-sm font-medium'>
          <Link href='/'>Home</Link>
          <Link href='/products'>Our Products</Link>
          <Link href='/blogs'>Blogs</Link>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span>
          <ShoppingCart />
        </span>
        <span className='md:hidden block'>
          <Button variant='outline' size='icon' onClick={() => setIsOpen(true)}>
            <Menu />
          </Button>
        </span>
      </div>
      <PhoneMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
