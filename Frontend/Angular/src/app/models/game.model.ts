import { Genre } from '../enums/Genre';
import { Chat } from '../models/chat.model';

export interface Game {
    gameTitle: String; 
    id?: number;
    genre:Genre;
    averageScore: number;
    imagePath: String;
    description: String;
    Chat: Chat;
    mapScores: Map<number, number>;
}