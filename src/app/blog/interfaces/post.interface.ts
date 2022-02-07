export interface Post {
  _id: string; 
  author: { fullName: string, _id: string };
  title: string;
  about: string;
  createdAt: Date;
  like?: any;
  comments?: string;
  tags?: string;
}
