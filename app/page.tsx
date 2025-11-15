'use client';

import { Hero, HomeProduct } from '@/components/home';
import HomeBlog from '@/components/home/home-blog';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProduct />
      <HomeBlog />
    </>
  );
}
