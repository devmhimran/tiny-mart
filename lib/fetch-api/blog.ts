import { CreateBlogType } from '@/types';
import { instance } from '../axios';

const blogsApi = {
  getAllBlogs: (params?: string) => {
    const url = '/blogs' + params;
    return instance.get(url);
  },
  getBlogById: (id: string) => {
    const url = `/blogs/${id}`;
    return instance.get(url);
  },
  createBlog: (data: CreateBlogType) => {
    const url = '/blogs';
    return instance.post(url, data);
  },
  deleteBlog: (id: string) => {
    const url = `/blogs/${id}`;
    return instance.delete(url);
  },
  updateBlog: (id: string, data: CreateBlogType) => {
    const url = `/blogs/${id}`;
    return instance.put(url, data);
  },
};

export default blogsApi;
