import { CreateBlogType } from '@/types';
import { instance } from '../axios';

const blogsApi = {
  getAllBlogs: (params?: string) => {
    const url = '/blogs' + params;
    return instance.get(url);
  },
  getBlogById: (id: string) => {
    const url = `/blog/${id}`;
    return instance.get(url);
  },
  addBlog: (data: CreateBlogType) => {
    const url = '/blog/add';
    return instance.post(url, data);
  },
  deleteBlog: (id: number) => {
    const url = `/blog/delete/${id}`;
    return instance.delete(url);
  },
};

export default blogsApi;
