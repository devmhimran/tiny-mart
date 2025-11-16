'use client';

import { Ellipsis } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import ConfirmModal from '../shared/confirm-modal';
import { useBlog } from '@/hooks/blog/use-blog';

type BlogActionsProps = {
  id: string;
};

export function BlogActions({ id }: BlogActionsProps) {
  const [confirmModal, setConfirmModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const { deleteBlogMutateAsync } = useBlog();

  const handleDeleUser = () => {
    setIsPending(true);

    toast.promise(deleteBlogMutateAsync(id), {
      loading: 'Deleting blog...',
      success: () => {
        setConfirmModal(false);
        setIsPending(false);
        router.push('/blogs');
        return 'Successfully Blog Deleted';
      },
      error: (error) => {
        setIsPending(false);
        return (
          error?.response?.data?.error ||
          error.message ||
          'Failed to create blog'
        );
      },
    });
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='cursor-pointer'>
          <Ellipsis className='w-6 h-6' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setConfirmModal(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmModal
        isOpen={confirmModal}
        setIsOpen={setConfirmModal}
        loading={isPending}
        title='This action cannot be undone. This will permanently delete your blog.'
        onClick={handleDeleUser}
      />
    </div>
  );
}
