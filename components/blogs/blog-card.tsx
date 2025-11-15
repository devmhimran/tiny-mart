import { BlogType } from '@/types';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';

type BlogCardProps = {
  data: BlogType;
  loading?: boolean;
};

export default function BlogCard({ data }: BlogCardProps) {
  // Format date
  const formattedDate = data.createdAt
    ? new Date(data.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const plainDescription = stripHtml(data.description);
  const truncatedDescription =
    plainDescription.length > 50
      ? plainDescription.substring(0, 50) + '...'
      : plainDescription;

  return (
    <Link href={`/blogs/${data.id}`}>
      <Card className='overflow-hidden shadow-none hover:shadow-md transition-shadow duration-300 h-full flex flex-col gap-2 md:gap-4 py-4 md:py-6'>
        <CardHeader className='px-3 md:px-4'>
          <h3 className='text-lg md:text-xl font-bold text-gray-900 line-clamp-2'>
            {data.blogTitle}
          </h3>
        </CardHeader>

        <CardContent className='p-2 md:p-4 pt-0 flex-1'>
          <p className='text-gray-700 leading-relaxed line-clamp-3'>
            {truncatedDescription}
          </p>
        </CardContent>

        <div className='px-2 md:px-4 mt-auto border-t pt-4'>
          <div className='flex md:flex-row flex-col items-start md:items-center justify-between md:gap-0 gap-2 text-sm text-gray-600'>
            <div className='flex items-center gap-1.5'>
              <User className='w-4 h-4' />
              <span>{data.writerName}</span>
            </div>
            {formattedDate && (
              <div className='flex items-center gap-1.5'>
                <Calendar className='w-4 h-4' />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
