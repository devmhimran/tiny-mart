import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type PrimaryLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function PrimaryLogo({
  width = 120,
  height = 80,
  className,
}: PrimaryLogoProps) {
  return (
    <Link href='/'>
      <Image
        src='/assets/png/logo-main.png'
        width={width}
        height={height}
        alt='Logo Main'
        className={cn('w-14 inline', className)}
      />
    </Link>
  );
}
