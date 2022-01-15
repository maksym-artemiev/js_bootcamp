export interface Post {
  author: { fullName: string, _id: object };
  title: string;
  about: string;
  createdAt: Date;
  like?: any;
  comments?: string;
  tags?: string;
}
