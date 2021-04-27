import { Message } from '../models/message.model';

export interface Chat {
    listMessages: Array<Message>;
    id?: number;
}