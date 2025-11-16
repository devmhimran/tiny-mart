'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import UpdateBlogForm from '@/components/forms/update-blog-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function UpdateBlogEdit() {
  return (
    <div className='max-w-screen-2xl flex flex-col gap-4 md:gap-6 mx-auto py-8 px-2'>
      <Link href='/blogs' className='self-start'>
        <Button variant='outline' className='w-fit'>
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Blogs
        </Button>
      </Link>
      <Card className='p-5'>
        <UpdateBlogForm />
      </Card>
    </div>
  );
}
