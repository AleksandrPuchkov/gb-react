import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from "./actions"

export type ChatsActions = ReturnType<AddChat> | ReturnType<DeleteChat> | ReturnType<AddMessage>

// export interface Chat {
//     id: string;
//     name: string;
// }

export type AddChat = (chatName: string) => {
    type: typeof ADD_CHAT,
    chatName: string
}

export type DeleteChat = (chatId: string) => {
    type: typeof DELETE_CHAT,
    chatId: string
}

export type AddMessage = (chatId: string, messages: string) => {
    type: typeof ADD_MESSAGE,
    chatId: string,
    message: string
}