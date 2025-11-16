'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CreateBlogForm } from '@/components/forms';

export default function CreateBlog() {
  return (
    <div className='max-w-screen-2xl flex flex-col gap-4 md:gap-6 mx-auto py-8 px-2'>
      <Link href='/blogs' className='self-start'>
        <Button variant='outline' className='w-fit cursor-pointer'>
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Blogs
        </Button>
      </Link>
      <Card className='p-5'>
        <CreateBlogForm />
      </Card>
    </div>
  );
}
