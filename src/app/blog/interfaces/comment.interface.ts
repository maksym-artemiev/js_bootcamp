export interface Comment {
  _id: string;
  postId: string;
  author: { fullName: string; _id: string };
  textMessage: string;
  createdAt: Date;
}
