export type BlogType = {
  id: number;
  blogTitle: string;
  description: string;
  writerName: string;
  status: number;
};

export type CreateBlogType = {
  blogTitle: string;
  description: string;
  writerName: string;
};
