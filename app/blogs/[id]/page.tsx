'use client';

import { Calendar, User, ArrowLeft } from 'lucide-react';

import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useBlogById } from '@/hooks/blog/use-blog';
import { useParams, useRouter } from 'next/navigation';
import { BlogDetailsSkeleton } from '@/components/skeletons';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const { getBlogById, getBlogByIdMutation } = useBlogById(id as string);
  const { isLoading } = getBlogByIdMutation;

  const { blogTitle, description, writerName, createdAt } = getBlogById || {};

  return (
    <div className='max-w-4xl flex flex-col gap-6 mx-auto py-8 px-4 md:px-6'>
      <Button
        variant='outline'
        onClick={() => router.push('/blogs')}
        className='w-fit cursor-pointer'
      >
        <ArrowLeft className='w-4 h-4 mr-2' />
        Back to Blogs
      </Button>

      {!isLoading ? (
        <Card className='overflow-hidden'>
          <CardHeader className='p-6 md:p-8 pb-4 border-b'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {blogTitle}
            </h1>

            <div className='flex items-center gap-6 text-sm text-gray-600'>
              <div className='flex items-center gap-2'>
                <User className='w-5 h-5' />
                <span className='font-medium'>{writerName}</span>
              </div>
              {formatDate(createdAt) && (
                <div className='flex items-center gap-2'>
                  <Calendar className='w-5 h-5' />
                  <span>{formatDate(createdAt)}</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className='p-6 md:p-8'>
            <div
              className='prose prose-lg max-w-none text-gray-700 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: description ?? '' }}
            />
          </CardContent>
        </Card>
      ) : (
        <BlogDetailsSkeleton />
      )}
    </div>
  );
}
