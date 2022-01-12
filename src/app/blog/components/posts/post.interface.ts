export interface Post {
  author: string;
  title: string;
  about: string;
  createdAt: Date;
  like?: any;
  comments?: string;
  tags?: string;
}
