export interface Post {
  name: string;
  title: string;
  about: string;
  createdAt: Date;
  like?: any;
  comments?: string;
  tags?: string;
}
