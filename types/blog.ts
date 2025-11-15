export type BlogType = {
  id: number;
  blogTitle: string;
  description: string;
  writerName: string;
  status: number;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateBlogType = {
  blogTitle: string;
  description: string;
  writerName: string;
};
