import { PostType } from './../enums/PostType';
export interface Post{
  id?:number;
  title:string,
  author:string,
  creationDate:string,
  updateDate:string,
  fromGameID:number,
  postText:string,
  postType:PostType,
  imagePath:string
}
