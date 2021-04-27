import { PostType } from '../enums/PostType';
export interface User{
  id:number;
  info:string,
  password:string,
  imagePath:string,
  roles:string[],
  myGames:number[]
}