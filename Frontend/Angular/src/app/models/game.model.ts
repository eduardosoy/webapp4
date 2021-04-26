import { Chat } from '../models/chat.model';

export interface Game {
    gameTitle: String; 
    id: number;
    averageScore: number;
    imagePath: String;
    description: String;
    Chat: Chat;
    MapScores: Map<number, number>;
}