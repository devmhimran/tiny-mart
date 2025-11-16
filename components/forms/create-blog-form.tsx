'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useBlog } from '@/hooks/blog/use-blog';

const formSchema = z.object({
  blogTitle: z.string().min(2, {
    message: 'Blog title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  writerName: z.string().min(2, {
    message: 'Writer name must be at least 2 characters.',
  }),
});

export function CreateBlogForm() {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const { createBlogMutateAsync } = useBlog();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogTitle: '',
      description: '',
      writerName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const response = createBlogMutateAsync(values);

    setPending(true);
    toast.promise(response, {
      loading: 'Creating Blog...',
      success: (response) => {
        form.reset();
        setPending(false);
        router.push(`/blogs?page=1&highlight=${response.data?.id}`);
        return response.data?.message || 'Successfully created Blog';
      },

      error: (error) => {
        setPending(false);
        return (
          error?.response?.data?.error ||
          error.message ||
          'Failed to create blog'
        );
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='blogTitle'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Title</FormLabel>
              <FormControl>
                <Input placeholder='Enter your blog title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Enter your blog description'
                  className='resize-none h-40'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='writerName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your write name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={pending}
          className='bg-[#FF4C01] hover:bg-[#e04300] text-white flex justify-start'
        >
          {pending && <Loader2Icon className='animate-spin' />}
          Create
        </Button>
      </form>
    </Form>
  );
}
