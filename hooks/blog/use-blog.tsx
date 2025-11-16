import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

import blogsApi from '@/lib/fetch-api/blog';
import { getQueryClient } from '@/lib/react-query';
import { BlogType, CreateBlogType, Meta, Response } from '@/types';

const queryClient = getQueryClient();

export function useBlog(options?: string) {
  const getAllBlogsMutation = useQuery<Response<BlogType[], Meta>>({
    queryKey: ['blogs', options],
    queryFn: async () => {
      const res = await blogsApi.getAllBlogs(options).then(({ data }) => data);
      return res;
    },
    placeholderData: keepPreviousData,
  });

  const createBlogMutation = useMutation({
    mutationFn: async (data: CreateBlogType) =>
      await blogsApi.createBlog(data).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  return {
    getAllBlogsMutation,
    getAllBlogs: getAllBlogsMutation.data?.data || [],
    createBlogMutation,
    createBlogMutateAsync: createBlogMutation.mutateAsync,
    createBlogAsync: createBlogMutation.mutate,
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
