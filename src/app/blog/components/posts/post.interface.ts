export interface Post {
  _id: string; 
  author: { fullName: string, _id: object };
  title: string;
  about: string;
  createdAt: Date;
  like?: any;
  comments?: string;
  tags?: string;
}
