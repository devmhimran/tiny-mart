import blogsApi from '@/lib/fetch-api/blog';
import { BlogType, Meta, Response } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useBlog(options?: string) {
  const getAllBlogsMutation = useQuery<Response<BlogType[], Meta>>({
    queryKey: ['blogs', options],
    queryFn: async () => {
      const res = await blogsApi.getAllBlogs(options).then(({ data }) => data);
      return res;
    },
    placeholderData: keepPreviousData,
  });

  return {
    getAllBlogsMutation,
    getAllBlogs: getAllBlogsMutation.data?.data || [],
  };
}

export function useBlogById(id: string) {
  const getBlogByIdMutation = useQuery<{ data: BlogType }>({
    queryKey: ['blogs', id],
    queryFn: async () => {
      const res = await blogsApi.getBlogById(id).then(({ data }) => data);
      return res;
    },
  });
  return {
    getBlogByIdMutation,
    getBlogById: getBlogByIdMutation.data?.data || null,
  };
}
