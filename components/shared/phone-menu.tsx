'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import PrimaryLogo from './primary-logo';

type PhoneMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function PhoneMenu({ isOpen, setIsOpen }: PhoneMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side='top' className='py-3'>
        <SheetHeader>
          <SheetTitle onClick={() => setIsOpen(false)}>
            <PrimaryLogo />
          </SheetTitle>
        </SheetHeader>

        <nav>
          <ul className=''>
            <li>
              <SheetClose asChild>
                <Link
                  href='/'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Home
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href='/products'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Our Products
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href='/blogs'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Blogs
                </Link>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
