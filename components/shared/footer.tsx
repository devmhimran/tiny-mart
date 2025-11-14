import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
      <div className='text-sm px-6 py-4 text-muted-foreground'>
        © {currentYear} / Tiny Mart
      </div>
      <div className='flex gap-5 text-sm text-muted-foreground'>
        <Link href='/terms-and-conditions' className='hover:underline'>
          Terms and Conditions
        </Link>
        <Link href='/privacy-policy' className='hover:underline'>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
