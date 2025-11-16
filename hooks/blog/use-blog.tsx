import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

import blogsApi from '@/lib/fetch-api/blog';
import { getQueryClient } from '@/lib/react-query';
import { BlogType, CreateBlogType, Meta, Response } from '@/types';

const queryClient = getQueryClient();

export function useBlog() {
  const createBlogMutation = useMutation({
    mutationFn: async (data: CreateBlogType) =>
      await blogsApi.createBlog(data).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  const updateBlogMutation = useMutation({
    mutationFn: async (data: { id: string; data: CreateBlogType }) =>
      await blogsApi.updateBlog(data.id, data.data).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id: string) =>
      await blogsApi.deleteBlog(id).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  return {
    createBlogMutation,
    createBlogMutateAsync: createBlogMutation.mutateAsync,
    createBlogAsync: createBlogMutation.mutate,
    updateBlogMutation,
    updateBlogMutateAsync: updateBlogMutation.mutateAsync,
    updateBlogAsync: updateBlogMutation.mutate,
    deleteBlogMutation,
    deleteBlogMutateAsync: deleteBlogMutation.mutateAsync,
    deleteBlogAsync: deleteBlogMutation.mutate,
  };
}

export const useGetAllBlogs = (options?: string) => {
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
};

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
