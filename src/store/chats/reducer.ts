import { nanoid } from "nanoid"
import { Reducer } from "redux"
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions"
import { ChatsActions, Message, MessageState } from "./types"

export interface ChatsState {
    [key: string]: MessageState[]
}

const initialState: ChatsState = {
    gb: [
        {
            id: '1',
            username: 'Username',
            text: 'Hello geekbrains'
        }
    ]
}

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.chatName]: []
            }
        }
        case DELETE_CHAT: {
            const chats = { ...state }
            delete chats[action.chatId]
            return chats
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatId]: [
                    ...state[action.chatId],
                    {
                        id: nanoid(),
                        username: action.message.username,
                        text: action.message.text
                    }
                ]
            }

        }
        default:
            return state;
    }
}